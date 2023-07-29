fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
    Highcharts.chart('packedBubble', {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Effected persons all over the world (2020)',
          align: 'left'
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
          packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 250
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },
        series: [{
          name: 'Europe',
          data: [{
            name: 'Germany',
            value: 10
          }, {
            name: 'Croatia',
            value: 20.7
          },
          {
            name: 'Belgium',
            value: 97.2
          },
          {
            name: 'Czech Republic',
            value: 111.7
          },
          {
            name: 'Netherlands',
            value: 158.1
          },
          {
            name: 'Spain',
            value: 241.6
          },
          {
            name: 'Ukraine',
            value: 249.1
          },
          {
            name: 'Poland',
            value: 298.1
          },
          {
            name: 'France',
            value: 323.7
          },
          {
            name: 'Romania',
            value: 78.3
          },
          {
            name: 'United Kingdom',
            value: 415.4
          }, {
            name: 'Turkey',
            value: 353.2
          }, {
            name: 'Italy',
            value: 337.6
          },
          {
            name: 'Greece',
            value: 71.1
          },
          {
            name: 'Austria',
            value: 69.8
          },
          {
            name: 'Belarus',
            value: 67.7
          },
          {
            name: 'Serbia',
            value: 59.3
          },
          {
            name: 'Finland',
            value: 54.8
          },
          {
            name: 'Bulgaria',
            value: 51.2
          },
          {
            name: 'Portugal',
            value: 48.3
          },
          {
            name: 'Norway',
            value: 44.4
          },
          {
            name: 'Sweden',
            value: 44.3
          },
          {
            name: 'Hungary',
            value: 43.7
          },
          {
            name: 'Switzerland',
            value: 40.2
          },
          {
            name: 'Denmark',
            value: 40
          },
          {
            name: 'Slovakia',
            value: 34.7
          },
          {
            name: 'Ireland',
            value: 34.6
          },
          {
            name: 'Croatia',
            value: 20.7
          },
          {
            name: 'Estonia',
            value: 19.4
          },
          {
            name: 'Slovenia',
            value: 16.7
          },
          {
            name: 'Lithuania',
            value: 12.3
          },
          {
            name: 'Luxembourg',
            value: 10.4
          },
          {
            name: 'Macedonia',
            value: 9.5
          },
          {
            name: 'Moldova',
            value: 7.8
          },
          {
            name: 'Latvia',
            value: 7.5
          },
          {
            name: 'Cyprus',
            value: 7.2
          }]
        }, {
          name: 'Africa',
          data: [{
            name: 'Senegal',
            value: 8.2
          },
          {
            name: 'Cameroon',
            value: 9.2
          },
          {
            name: 'Zimbabwe',
            value: 13.1
          },
          {
            name: 'Ghana',
            value: 14.1
          },
          {
            name: 'Kenya',
            value: 14.1
          },
          {
            name: 'Sudan',
            value: 17.3
          },
          {
            name: 'Tunisia',
            value: 24.3
          },
          {
            name: 'Angola',
            value: 25
          },
          {
            name: 'Libya',
            value: 50.6
          },
          {
            name: 'Ivory Coast',
            value: 7.3
          },
          {
            name: 'Morocco',
            value: 60.7
          },
          {
            name: 'Ethiopia',
            value: 8.9
          },
          {
            name: 'United Republic of Tanzania',
            value: 9.1
          },
          {
            name: 'Nigeria',
            value: 93.9
          },
          {
            name: 'South Africa',
            value: 392.7
          }, {
            name: 'Egypt',
            value: 225.1
          }, {
            name: 'Algeria',
            value: 141.5
          }]
        }, {
          name: 'Oceania',
          data: [{
            name: 'Australia',
            value: 409.4
          },
          {
            name: 'New Zealand',
            value: 34.1
          },
          {
            name: 'Papua New Guinea',
            value: 7.1
          }]
        }, {
          name: 'North America',
          data: [{
            name: 'Costa Rica',
            value: 7.6
          },
          {
            name: 'Honduras',
            value: 8.4
          },
          {
            name: 'Jamaica',
            value: 8.3
          },
          {
            name: 'Panama',
            value: 10.2
          },
          {
            name: 'Guatemala',
            value: 12
          },
          {
            name: 'Dominican Republic',
            value: 23.4
          },
          {
            name: 'Malaysia',
            value: 227.5
          },
          {
            name: 'Kazakhstan',
            value: 236.2
          },
          {
            name: 'Thailand',
            value: 272
          },
          {
            name: 'Taiwan',
            value: 276.7
          },
          {
            name: 'Indonesia',
            value: 453
          },
          {
            name: 'Korea',
            value: 610.1
          }]
        }]
      });
})

fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
    Highcharts.chart('basicBar', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Number of infected persons among main continents',
          align: 'left'
        },
        subtitle: {
          text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
          align: 'left'
        },
        xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Year 1990',
          data: [631, 727, 3202, 721, 26]
        }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 726, 31]
        }, {
          name: 'Year 2010',
          data: [1044, 944, 4170, 735, 40]
        }, {
          name: 'Year 2018',
          data: [1276, 1007, 4561, 746, 42]
        }]
      });
})

fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
    Highcharts.chart('stackedArea', {
        chart: {
          type: 'area'
        },
        title: {
          text: 'COVIDs effect in the livelihood',
          align: 'left'
        },
        subtitle: {
          text: 'Source: ' +
            '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
            'target="_blank">SSB</a>',
          align: 'left'
        },
        yAxis: {
          title: {
            useHTML: true,
            text: 'Million tonnes CO<sub>2</sub>-equivalents'
          }
        },
        tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
        },
        plotOptions: {
          series: {
            pointStart: 2012
          },
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          }
        },
        series: [{
          name: 'Ocean transport',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
        }, {
          name: 'Households',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
      
        }, {
          name: 'Agriculture and hunting',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
        }, {
          name: 'Air transport',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
      
        }, {
          name: 'Construction',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
        }]
      });
})

fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
    Highcharts.getJSON(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/range.json',
        function (data) {
      
          Highcharts.chart('areaRange', {
      
            chart: {
              type: 'arearange',
              zoomType: 'x',
              scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
              }
            },
      
            title: {
              text: 'Temperature variation by day'
            },
      
            xAxis: {
              type: 'datetime',
              accessibility: {
                rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.'
              }
            },
      
            yAxis: {
              title: {
                text: null
              }
            },
      
            tooltip: {
              crosshairs: true,
              shared: true,
              valueSuffix: '°C',
              xDateFormat: '%A, %b %e'
            },
      
            legend: {
              enabled: false
            },
      
            series: [{
              name: 'Temperatures',
              data: data
            }]
      
          });
        }
      );
})

fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
    Highcharts.chart('logAxis', {

        title: {
          text: 'Logarithmic axis demo'
        },
      
        xAxis: {
          tickInterval: 1,
          type: 'logarithmic',
          accessibility: {
            rangeDescription: 'Range: 1 to 10'
          }
        },
      
        yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1,
          accessibility: {
            rangeDescription: 'Range: 0.1 to 1000'
          }
        },
      
        tooltip: {
          headerFormat: '<b>{series.name}</b><br />',
          pointFormat: 'x = {point.x}, y = {point.y}'
        },
      
        series: [{
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
          pointStart: 1
        }]
      });
})