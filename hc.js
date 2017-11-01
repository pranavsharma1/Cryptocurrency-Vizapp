
   $(function () {
        new Highcharts.chart('container', {
           xAxis: {
               type: 'datetime',
               text: 'Time Period'
           },
           yAxis: {
               title: {
                   text: 'Value in USD'
               }
           },
           title: {
               text: 'Bitcoin Price History'
           },
           chart: {
               zoomType: 'x'
           },
           credits: {
               enabled: false
           },
           subtitle: {
               text: 'Data input from CSV'
           },

           data: {
               csv: document.getElementById('btc-csv').innerHTML
           },


           plotOptions: {
               series: {
                   marker: {
                       enabled: true,
                       radius: 2

                   }
               }
           },

           series: [{
               lineWidth: 1
           }, {
               type: 'areaspline',
               color: '#c4392d',
               negativeColor: '#5679c4',
               fillOpacity: 0.7
           }]
       });

       $('#btc').click(function() {
               Highcharts.chart('container', {
                   xAxis: {
                       type: 'datetime',
                       text: 'Time Period'
                   },
                   yAxis: {
                       title: {
                           text: 'Value in USD'
                       }
                   },
                   title: {
                       text: 'Bitcoin Price History'
                   },
                   chart: {
                       zoomType: 'x'
                   },
                   credits: {
                       enabled: false
                   },
                   subtitle: {
                       text: 'Data input from CSV'
                   },

                   data: {
                       csv: document.getElementById('btc-csv').innerHTML
                   },


                   plotOptions: {
                       series: {
                           marker: {
                               enabled: true,
                               radius: 2

                           }
                       }
                   },

                   series: [{
                       lineWidth: 1
                   }, {
                       type: 'areaspline',
                       color: '#c4392d',
                       negativeColor: '#5679c4',
                       fillOpacity: 0.7
               }]
           });
       });


       $('#eth').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Ethereum Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('eth-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });


       $('#xrp').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Ripple Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('xrp-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#dash').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Dash Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('dash-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#etc').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Etherum Classic Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('etc-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#ltc').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Litecoin Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('ltc-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#xmr').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Monero Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('xmr-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#xem').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'NEM Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('nem-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#neos').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'NEOS Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('neos-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });

       $('#strat').click(function() {
           Highcharts.chart('container', {
               xAxis: {
                   type: 'datetime',
                   text: 'Time Period'
               },
               yAxis: {
                   title: {
                       text: 'Value in USD'
                   }
               },
               title: {
                   text: 'Stratis Price History'
               },
               chart: {
                   zoomType: 'x'
               },
               credits: {
                   enabled: false
               },
               subtitle: {
                   text: 'Data input from CSV'
               },

               data: {
                   csv: document.getElementById('strat-csv').innerHTML
               },


               plotOptions: {
                   series: {
                       marker: {
                           enabled: true,
                           radius: 2

                       }
                   }
               },

               series: [{
                   lineWidth: 1
               }, {
                   type: 'areaspline',
                   color: '#c4392d',
                   negativeColor: '#5679c4',
                   fillOpacity: 0.7
               }]
           });
       });
   });


