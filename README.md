# Работа с версткой

### npm i
### gulp build
### gulp watch



# quantor-layout

Сейчас будет проще клонировать заново этот проект и перенести правки в новую копию. Не рассчитывал, что мне придется принять такое обширное участие в этом проекте.

Тем не менее, перечислю важные замечания по стилю кода.

Надеюсь, переименование папки изображений из `/img` в `/images` не критично. Вам все равно, а мне не нужно при интеграции переименовывать папку и править css. Хотя, если критично, переименую я — мне не сложно.

### JavaScript в `app.js`

В код проекта `app.js` из вашей верстки встраивается так ([app.js](https://github.com/QUANTOR-CO/demo/blob/master/assets/js/app.js), строки 18 и 199 в текущей редакции):

```javascript
import attachLayoutHandlers from "./layout_handlers"

// ...

$(document).ready(e => {
  attachLayoutHandlers()
};
```

В связи с этим я структурировал ваш `app.js` таким образом ([app.js этого проекта](https://github.com/vassiliy/quantor-layout/blob/master/js/app.js)):

```javascript
"use strict"

var attach_layout_handlers = function() {

    // Handler methods
    // [code omitted]

    // Handlers
    // [code omitted]

    // Handlers attachment
    $(document).on('click', '.close_modal', close_modal)
    $(document).on('click', '.popup_layout, .popup_wrapper', close_popup)
    $(document).on('click', '.get_modal', get_modal)
    $(document).on('click', '.btn_go_to', go_to)
    $(document).on('click', ".my_tabs > *", switch_tabs)
};

$(document).ready(function(){
    attach_layout_handlers();
});
```

Таким образом, для того, чтобы затянуть ваш JS, мне нужно будет только поменять
```javascript
var attach_layout_handlers = function() {} //omitted
```

на

```javascript
module.exports = function() {} //omitted
```

Отнеситесь с пониманием.

Посмотрите, пожалуйста, изменения по стилю кода. В целом все неплохо, немного не хватает четкости и уверенности, не стесняйтесь, будьте смелее.

Идея этого фрагмента:
```javascript
function switch_tabs(e){
  e.preventDefault();
  if ($(this).hasClass("active")) return
  var from_tab = $(this).data("to_tab");
  var from_tab_id = $(this).data("tab_id");
  $(".my_tabs > *").removeClass("active");
  $(this).addClass("active");
  $('*[data-from_tab='+from_tab+']').removeClass("active");
  $('*[data-from_tab='+from_tab+'][data-tab_id='+from_tab_id+']').addClass("active");
}
```

в целом неплоха, но преимущества unobtrusive JS используются здесь крайне ограниченно и неудобно.

Обратите внимание на мое решение, которое в результате фактически используется на альфе:

```javascript
let toggle_tab = e => {
  let link = $(e.target)
  if (link.hasClass("active")) return
  if (link.hasClass("disabled")) return
  let tab = link.data("tab")
  let group = link.parents("[data-toggle]").data("toggle")
  $(`[data-toggle="${group}"] a`).removeClass("active")
  $(`div[data-toggle-target="${group}"]>div[data-tab]`).removeClass("active")
  link.addClass("active")
  $(`div[data-toggle-target="${group}"]>div[data-tab="${tab}"]`).addClass("active")
}
```

К нему `css` ([common.css](https://github.com/QUANTOR-CO/demo/blob/master/assets/static/css/common.css)):

```css
div[data-toggle-target] div[data-tab] {
  display: none;
}

div[data-toggle-target] div[data-tab].active {
  display: block;
}
```

И реализация всплывающего окна регистрации на альфе ([product-footer.html.eex](https://github.com/QUANTOR-CO/demo/blob/master/lib/quantor_platform_web/templates/layout/product_footer.html.eex)):

```eex
<div class="login_header" data-toggle="login" >
    <a href="javascript:void(0)" class="active" data-tab="quant">I’m a Quant</a>
    <a href="javascript:void(0)" data-tab="investor">I’m an Investor</a>
</div>
<div data-toggle-target="login">
  <div data-tab="quant" class="active">
    <%= form_for @conn, session_path(@conn, :create), [name: :session, class: "login_form active"], fn f -> %>
      <%= text_input f, :email, value: "quant@quantor.co" %>
      <%= password_input f, :password, value: "quant" %>
      <input type="submit" value='<%= gettext "Login" %>'>
      <p><a href=""><%= gettext "Forgot Your Password?" %></a></p>
    <% end %>
  </div>
  <div data-tab="investor">
    <%= form_for @conn, session_path(@conn, :create), [name: :session, class: "login_form active"], fn f -> %>
      <%= text_input f, :email, value: "investor@quantor.co" %>
      <%= password_input f, :password, value: "investor" %>
      <input type="submit" value='<%= gettext "Login" %>'>
      <p><a href=""><%= gettext "Forgot Your Password?" %></a></p>
    <% end %>
  </div>
</div>
```

Там дальше `signup` по такому же принципу.

Да. Отдельно обратите внимание на использование guard clause, ради этого еще раз приведу этот фрагмент:

```javascript
let toggle_tab = e => {
  let link = $(e.target)
  if (link.hasClass("active")) return
  if (link.hasClass("disabled")) return
  let tab = link.data("tab")
  let group = link.parents("[data-toggle]").data("toggle")
  $(`[data-toggle="${group}"] a`).removeClass("active")
  $(`div[data-toggle-target="${group}"]>div[data-tab]`).removeClass("active")
  link.addClass("active")
  $(`div[data-toggle-target="${group}"]>div[data-tab="${tab}"]`).addClass("active")
}
```

JavaScript позволяет этот прекрасный подход к контролю цикломатической сложности, его нужно использовать обязательно.

Надеюсь, на этом мое деятельное участие в коде этого проекта хотя бы сильно сократится.
