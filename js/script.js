(function ($) {
  $(window).on("load", function () {
    $(".scroll").mCustomScrollbar({
      axis: "yx",
      theme: "quantor"

    });
    $(".scroll-v").mCustomScrollbar({
      // axis:"yx",
      theme: "quantor"

    });
  });
})(jQuery);

$(document).ready(function () {

  //проверка подключения
  // console.log( "hallo!" );

  $('.sertifacates-item-menu').on('click', function () {
    $(this).children('.sertifacates-item-menu__dropdown').toggleClass('is-open');
  });


  $('.highcharts-point').attr('y', '14')
  $('.highcharts-legend').attr('transform', 'translate(10,185)')

  $('.message-close').on('click', function () {
    $('.message-block').hide();
  })

  $('select').styler();


});

