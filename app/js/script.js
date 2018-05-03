$( document ).ready(function() {
  //проверка подключения
  console.log( "hallo!" );


    // слайдер

    $('.slider').slick({
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000
  });


  //прокрутка

  $("a.anchor").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
  $("a.item").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });


  // меню в модалке
  $(window).resize();
  menu();
  lang();

  function menu() {
    var winWidth = screen.width;
    if (winWidth < 414) {
      $(".nav").hide();
      $(".nav").click(function () {
        $(this).fadeOut();
      });
      $(".nav a").click(function () {
        $(".nav").fadeOut();
      });
      $(".menu").click(function () {
        $(".nav").fadeIn();
      });
      console.log(winWidth);
    }
    else {
      $(".nav").fadeIn();
      $(".menu").fadeOut();
      console.log(winWidth+'big');
    }
  };

  $( window ).resize(function() {
    menu();
  });


  // выбор языка
    function lang() {
        $(".lang-dropdown").hide();
        $(".lang-current").click(function () {
            $(".lang-dropdown").slideToggle();
        });
        $(".lang-dropdown").click(function () {
            $(".lang-dropdown").slideUp();
        });

    };


  langmobile();
  function langmobile() {
    var language = $('.lang-mob .lang-current a.lang_change');
    $('.lang-mob .lang-dropdown .lang__ru').on('click', function () {
      language.removeClass('lang__en');
      language.addClass('lang__ru');
      console.log('ru');
    })
    $('.lang-mob .lang-dropdown .lang__en').on('click', function () {
      language.removeClass('lang__ru');
      language.addClass('lang__en');
      console.log('en');
    })

  };



  // смена языка
  defaultlang();

  // с etton.net

  // язык по умолчанию
  function defaultlang() {
    var rus='true';
    var eng='false';

    if(rus === 'true'){
      $.getJSON({
        url: 'lang/ru.json'
      }).then(function(data){
        translateMe(data);
      });

      $('.button.en').attr('style', 'display: none');
      $('.button.ru').attr('style', 'display: inline-block');
    }
    else{
      if(eng === 'true'){
        $.getJSON({
          url: 'lang/en.json'
        }).then(function(data){
          translateMe(data);
        });

        $('.button.en').attr('style', 'display: inline-block');
        $('.button.ru').attr('style', 'display: none');
      }
    }

  }


  // переводим
  function translateMe(data) {
    $('.translate_me').html(function () {
      $(this).html(data[$(this).attr('data-lang')]);
    });
  }

  $(".lang__ru").click(function(){

    $.getJSON({
      url: 'lang/ru.json'
    }).then(function(data){
      translateMe(data);
    });

    $('.button.en').attr('style', 'display: none');
    $('.button.ru').attr('style', 'display: inline-block');

  });


  $(".lang__en").click(function(){
    $.getJSON({
      url: 'lang/en.json'
    }).then(function(data){
      translateMe(data);
    });

    $('.button.en').attr('style', 'display: inline-block');
    $('.button.ru').attr('style', 'display: none');

  });


    // модалка

  $(function(){
    function showModal(id){
      $(document.body).addClass('is-open-modal');
      $(id).addClass('is-open');
      console.log(id);
    }
    function hideModals(){
      $(document.body).removeClass('is-open-modal');
      $('.modal').removeClass('is-open');
    }

    $(".modal-open").on('click', function(e){
      console.log(e);
      // showModal('#modal');
      $('#modal').show();
    });
    $(".close").on('click', function(e){
      console.log(e);
      // hideModals('#modal');
      $('#modal').hide();
    });

    $(document).on('click', function(e){
      if (!(
          ($(e.target).parents('.dialog').length)
          ||	($(e.target).hasClass('dialog'))
          ||	($(e.target).hasClass('modal-open')))
      ) {
        hideModals();
      }
    });

  });


  // форма
  $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    $.ajax({
      type: "POST", //Метод отправки
      url: "../send.php", //путь до php фаила отправителя
      data: form_data,
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        alert("Ваше сообщение отпрвлено!");
        console.log("Ваше сообщение отпрвлено!");

      }
      });
  });



  // с toster

  // $('.rus').on('click', function() {
  //   var r = $('.localization').each(function() {
  //     var el = $(this);
  //     var key = (el.attr('caption'));
  //     el.text(rus[key]);
  //   });
  // });
  //
  //
  // $('.eng').on('click', function() {
  //   var r = $('.localization').each(function() {
  //     var el = $(this);
  //     var key = (el.attr('caption'));
  //     el.text(eng[key]);
  //   });
  // });
  //
  //
  //
  // var rus = {
  //   test: 'тест',
  //   name: 'имя'
  // };
  // var eng = {
  //   test: 'test',
  //   name: 'name'
  // };


  // мой код
  // var rus='true';
  // var eng='false';
  // translate();
  //
  //
  // $('.lang__ru').on('click', function () {
  //   eng='false';
  //   rus='true';
  //   translate();
  // })
  // $('.lang__en').on('click', function () {
  //   eng='true';
  //   rus='false';
  //   translate();
  // })
  //
  // function translate() {
  //   if(eng === 'true'){
  //     $('.rus').attr('style', 'display: none');
  //     $('.eng').attr('style', 'display: block');
  //   }
  //   else{
  //     $('.eng').attr('style', 'display: none');
  //     $('.rus').attr('style', 'display: block');
  //   }
  // }




});