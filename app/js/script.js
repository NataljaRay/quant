(function($){
    $(window).on("load",function(){
        $(".scroll").mCustomScrollbar({
            axis:"yx",
            theme: "quantor"

        });
        $(".scroll-v").mCustomScrollbar({
            // axis:"yx",
            theme: "dark"

        });
    });
})(jQuery);

$( document ).ready(function() {
    // $('.select-block').on('click', function () {
    //     $(this).addClass('focused');
    // });

    // $('.select-block').click(function () {
    //     $(this).toggleClass('focused');
    // });


  //проверка подключения
  // console.log( "hallo!" );

  $('.highcharts-point').attr('y', '14')
  $('.highcharts-legend').attr('transform', 'translate(10,185)')

    $('.message-close').on('click', function () {
        $('.message-block').hide();
    })

    $('select').styler();



});

