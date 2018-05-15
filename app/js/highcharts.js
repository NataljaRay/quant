Highcharts.theme = {
  colors: ['#7cb5ec', '#424348', '#31bfbb']
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);


// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 270,
        width: 250
    },
    title: {
        // text: 'title8'
    },
    tooltip: {
        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        pointFormat: ' '
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Algorithms',
        colorByPoint: true,
        data: [{
            name: '52% — Algorithm 1',
            y: 52

        }, {
            name: '38% — Algorithm 2',
            y: 38,
            sliced: true,
            selected: true
        }, {
            name: '10% — Algorithm 3',
            y: 10
        }]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 100
            },
            chartOptions: {
                legend: {
                    enabled: false
                }
            }
        }]
    },
    legend: {
        align: 'left',
        verticalAlign: 'bottom',
        padding: 0,
        itemMarginTop: 8,
        itemMarginBottom: 7
    }

});