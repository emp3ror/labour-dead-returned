Highcharts.chart('charts', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['065/66',
            '066/67',
            '067/68',
            '068/69',
            '069/70',
            '070/71',
            '071/72',
            '072/73',
            '073/74',
            '074/75']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            // stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        type: 'column',
        name: 'emigrants',
        data: [219965,
            294094,
            354716,
            384665,
            453543,
            527814,
            527814,
            418713,
            363073,
            312749]
    }, {
        type: 'column',
        name: 'Disabled',
        data: [8,
            10,
            31,
            57,
            90,
            116,
            184,
            117,
            204,
            361]
    }, {
        type: 'column',
        name: 'death',
        data: [77,
            419,
            566,
            648,
            722,
            877,
            1006,
            816,
            756,
            821,]
    },]
});