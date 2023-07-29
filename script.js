var dailyCon = new Array();

function search() {
  let input = document.getElementById("inputSearch").value;
 

  fetch(`https://api.covid19api.com/summary`)
    .then((response) => response.json())
    .then((summary) => {
      let sum = 0;
      for (let i = 0; i < summary.length; i++) {
        let con = summary[i].Confirmed;
       
      }

      Highcharts.chart("container1", {
        title: {
          text: "Newly Regestered Covid Cases of a Country",
        },

        xAxis: {
          tickInterval: 1,
          type: "logarithmic",
          accessibility: {
            rangeDescription: "Range: 1 to 10",
          },
        },

        yAxis: {
          type: "logarithmic",
          minorTickInterval: 0.1,
          accessibility: {
            rangeDescription: "Range: 0.1 to 1000",
          },
        },

        tooltip: {
          headerFormat: "<b>{series.name}</b><br />",
          pointFormat: "x = {point.x}, y = {point.y}",
        },

        series: [
          {
            data: [summary],
            pointStart: 1,
          },
        ],
      });
      function updateChart() {
        let chart = Highcharts.charts[0];
        chart.series[0].setData(dailyCon);
      }
    
      updateChart();
      console.log(Highcharts.charts);
    });
}




fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
  Highcharts.chart('worldChart', {
    chart: {
      type: 'column'
    },
    title: {
      align: 'left',
      text: 'Global data of COVID-19 around the world'
    },
    subtitle: {
      align: 'left',
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: ''
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          {
            name: 'New Confirmed',
            y: data.Global.NewConfirmed,
            drilldown: ''
          },
          {
            name: 'Total Confirmed',
            y: data.Global.TotalConfirmed,
            drilldown: ''
          },
          {
            name: 'New Deaths',
            y: data.Global.NewDeaths,
            drilldown: ''
          },
          {
            name: 'Total Deaths',
            y: data.Global.TotalDeaths,
            drilldown: ''
          }
           ]
      }
    ]
  });
})



fetch(`https://api.covid19api.com/total/dayone/country/china`)
.then(response => response.json())
.then(data => {
  Highcharts.chart('pieChart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'First two weeks confirmed cases in China',
      align: 'left'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: ''
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Cases',
      colorByPoint: true,
      data: [{
        name: 'Day 1',
        y: data[0].Confirmed,
        sliced: true,
        selected: true
      }, {
        name: 'Day 2',
        y: data[1].Confirmed
      },  {
        name: 'Day 3',
        y: data[2].Confirmed
      }, {
        name: 'Day 4',
        y: data[3].Confirmed
      }, {
        name: 'Day 5',
        y: data[4].Confirmed
      },  {
        name: 'Day 6',
        y: data[5].Confirmed
      }, {
        name: 'Day 7',
        y: data[6].Confirmed
      }, {
        name: 'Day 8',
        y: data[7].Confirmed
      }, {
        name: 'Day 9',
        y: data[8].Confirmed
      }, {
        name: 'Day 10',
        y: data[9].Confirmed
      }, {
        name: 'Day 11',
        y: data[10].Confirmed
      }, {
        name: 'Day 12',
        y: data[11].Confirmed
      }, {
        name: 'Day 13',
        y: data[12].Confirmed
      }, {
        name: 'Day 14',
        y: data[13].Confirmed
      }]
    }]
  });
})

fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
  Highcharts.chart('stackedBar', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Top 5 countries detail data'
    },
    xAxis: {
      categories: ['USA', 'China', 'United Kingdom', 'Brazil', 'Italy']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Data'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'New Confirmed',
      data: [46931, 0, 28783, 0, 0]
    }, {
      name: 'Total Deaths',
      data: [1123836, 18831, 220721, 699276, 188322]
    }, {
      name: 'Total Confirmed',
      data: [10380270, 3378416, 24658705, 37076053, 25603510]
    }]
  });
})

fetch(`https://api.covid19api.com/total/dayone/country/france`)
.then(response => response.json())
.then(data => {
  Highcharts.chart('cylinder', {
    chart: {
      type: 'cylinder',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Number of confirmed COVID-19'
    },
    subtitle: {
      text: 'Source: ' +
        '<a href="https://www.fhi.no/en/id/infectious-diseases/coronavirus/daily-reports/daily-reports-COVID19/"' +
        'target="_blank">FHI</a>'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      title: {
        text: 'Months'
      }
    },
    yAxis: {
      title: {
        margin: 20,
        text: 'Reported cases'
      }
    },
    tooltip: {
      headerFormat: '<b>Month: {point.x}</b><br>'
    },
    plotOptions: {
      series: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      data: [data[30].Confirmed, data[58].Confirmed, data[89].Confirmed, data[119].Confirmed, data[150].Confirmed, data[180].Confirmed, data[211].Confirmed, 
      data[242].Confirmed, data[272].Confirmed, data[303].Confirmed, data[333].Confirmed, data[364].Confirmed],
      name: 'Cases',
      showInLegend: false
    }]
  });
})
  

fetch(`https://api.covid19api.com/total/dayone/country/united-states`)
.then(response => response.json())
.then(data => {
  Highcharts.chart('semiCircle', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'United<br>States<br>Infected<br>Data<br>First 6 Months',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Infected by COVID',
      innerSize: '50%',
      data: [{
        name: '1st Month',
        y: data[29].Confirmed
      }, {
        name: '2nd Month',
        y: data[59].Confirmed
      }, {
        name: '3rd Month',
        y: data[89].Confirmed
      }, {
        name: '4th Month',
        y: data[119].Confirmed
      }, {
        name: '5th Month',
        y: data[149].Confirmed
      }, {
        name: '6th Month',
        y: data[179].Confirmed
      }
      ]
    }]
  });
})

fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
  Highcharts.chart('polarChart', {

    chart: {
      polar: true
    },
  
    title: {
      text: 'Highcharts Polar Chart'
    },
  
    subtitle: {
      text: 'Also known as Radar Chart'
    },
  
    pane: {
      startAngle: 0,
      endAngle: 360
    },
  
    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 360,
      labels: {
        format: '{value}°'
      }
    },
  
    yAxis: {
      min: 0
    },
  
    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 45
      },
      column: {
        pointPadding: 0,
        groupPadding: 0
      }
    },
  
    series: [{
      type: 'column',
      name: 'Column',
      data: [8, 7, 6, 5, 4, 3, 2, 1],
      pointPlacement: 'between'
    }, {
      type: 'line',
      name: 'Line',
      data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
      type: 'area',
      name: 'Area',
      data: [1, 8, 2, 7, 3, 6, 4, 5]
    }]
  });
})