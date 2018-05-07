(function($){
    $(window).on("load",function(){
        $(".scroll").mCustomScrollbar({
            axis:"yx",
            theme: "quantor"

        });
    });
})(jQuery);

$( document ).ready(function() {
  //проверка подключения
  // console.log( "hallo!" );

  $('.highcharts-point').attr('y', '14')
  $('.highcharts-legend').attr('transform', 'translate(10,185)')



});