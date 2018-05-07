"use strict";

var attach_layout_handlers = function() {

    // Handler methods
    function calculate_scroll_width() {
        var hide_block, css_text, width_scroll;
        hide_block = document.createElement('div');
        css_text = "width:100%!important; height:100px; position:fixed; left:100%; top:100%; overflow:scroll;";
        hide_block.id = "hide_block";
        hide_block.setAttribute('style', css_text);
        document.body.appendChild(hide_block);
        width_scroll = parseFloat((hide_block.offsetWidth) - (hide_block.clientWidth), 10);
        hide_block.parentElement.removeChild(hide_block);
        return width_scroll;
    }

    function center_modal(selector) {
        var obj, modal_win_top, width_scroll;
        obj = $(selector);
        if (obj.length == 0) return 0;
        modal_win_top = $(window).scrollTop();
        width_scroll = is_scroll() ? calculate_scroll_width() : 0;
        $('html').css('padding-right', width_scroll + 'px');
        $('body').css('overflow', 'hidden');
        obj.css('top', modal_win_top + 'px').fadeIn(200);
    }

    function is_ios (){
        return is_user_agent(/iphone|ipad|ipod/i);
    }

    function is_mobile (){
        return is_user_agent(/iphone|ipad|ipod|android|mobile|phone/i);
    }

    function is_scroll() {
        return ($(document).height() > $(window).height())
    }

    function is_user_agent(regex){
        return (navigator.userAgent).toLowerCase().match(regex);
    }

    function to_close_modal() {
        $('.popup_layout, .popup_wrapper').fadeOut(200);
        $('body, html').removeAttr('style');
    }

    // Handlers

    function close_modal(e){
        e.preventDefault();
        e.stopPropagation();
        to_close_modal();
    }

    function close_popup(e){
        if($(e.target).closest('.popup_inner').length !== 0) return;
        to_close_modal();
    }

    function get_modal(e){
        var data_id, obj;
        e.preventDefault();
        data_id = $(this).attr('href');
        obj = $(data_id);
        if(!obj.length) return;
        $('.popup_wrapper').fadeOut(0);
        $('.popup_layout').fadeIn(200);
        center_modal(data_id);
    }

    function go_to(e){
        e.preventDefault();
        var data_href, obj;
        data_href = $(this).attr('href') ? $(this).attr('href') : $(this).attr('data-href');
        obj = $(data_href).eq(0);
        if(!obj.length) return;
        $('html, body').dequeue().stop().animate({scrollTop: obj.offset().top-60}, 1000);
    }

    function switch_tabs(e){
        e.preventDefault();
        if ($(this).hasClass("active")) return;
        var from_tab = $(this).data("to_tab");
        var from_tab_id = $(this).data("tab_id");
        $(".my_tabs > *").removeClass("active");
        $(this).addClass("active");
        $('*[data-from_tab='+from_tab+']').removeClass("active");
        $('*[data-from_tab='+from_tab+'][data-tab_id='+from_tab_id+']').addClass("active");
    }

    // Handlers attachment
    // Handlers attachment

    $(document).on('click', '.close_modal', close_modal);
    $(document).on('click', '.popup_layout, .popup_wrapper', close_popup);
    $(document).on('click', '.get_modal', get_modal);
    $(document).on('click', '.btn_go_to', go_to);
    $(document).on('click', ".my_tabs > *", switch_tabs);
    $(function(){
        $(".my_select").selectmenu();
    });
};

$(document).ready(function(){
    attach_layout_handlers();
});