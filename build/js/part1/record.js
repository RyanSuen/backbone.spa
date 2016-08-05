
var config = require('../common/config');
var echarts = require('../common/echarts.common.min.js');

var record = (function() {

    var Record = function() {},
        fn = Record.prototype;

    fn.onLoad = function() {
        this.renderPage();
        this.events();
        this.renderEChart();
        //this.renderChart([50,54,60,61,62,63,66,67,68,77,80,88,89,90],[45,50,60,70,80,84,82,83,86,89,90,96,97,100],[60,62,64,68,80,81,89,90,94,97,100,103,109,110]);
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.events = function () {
        this.eventGoBackClick();
    };

    /*点击返回上一页*/
    fn.eventGoBackClick = function () {
        $('#back').on('click', function GoBackClickHandle() {
            location.href = config.PAGE_URL.MAIN_PATH;
        })
    };

    //echarts
    fn.renderEChart = function(){
        var chart = echarts.init(document.getElementById('record-data'), null, {
            renderer: 'canvas'
        });
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        chart.setOption({
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: '大数据量面积图'
            },
            legend: {
                top: 'bottom',
                data:['意向']
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'模拟数据',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }])
                        }
                    },
                    data: data
                }
            ]
        });
    };

    /**
     * 绘制图表
     * @param chartData
     */
    fn.renderChart = function (minData,maxData,data) {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                datasets: [
                    {
                        data: data,
                        borderWidth: 1,
                        lineTension: 0.1,
                        backgroundColor: "rgba(221,255,253,.4)",
                        borderColor: "#ff6382",
                        borderCapStyle: 'butt',
                        //borderDash: [5,5],
                        //borderDashOffset: 0.5,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#ff6382',
                        pointBackgroundColor: "#ff6382",
                        pointBorderWidth: 7,
                        //pointHoverRadius: 7,
                        //pointHoverBackgroundColor: "rgba(255,99,130,1)",
                        //pointHoverBorderColor: "rgba(220,220,220,1)",
                        //pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        //pointHitRadius: 10
                    },
                    {
                        data: minData,
                        borderWidth: 1,
                        lineTension: 0.1,
                        backgroundColor: "rgba(221,255,253,.4)",
                        borderColor: "#ff6382",
                        borderCapStyle: 'butt',
                        //borderDash: [5,5],
                        //borderDashOffset: 0.5,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#ff6382',
                        pointBackgroundColor: "#ff6382",
                        pointBorderWidth: 7,
                        //pointHoverRadius: 7,
                        //pointHoverBackgroundColor: "rgba(255,99,130,1)",
                        //pointHoverBorderColor: "rgba(220,220,220,1)",
                        //pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        //pointHitRadius: 10
                    },
                    {
                        data: maxData,
                        borderWidth: 1,
                        lineTension: 0.1,
                        backgroundColor: "rgba(221,255,253,.4)",
                        borderColor: "#ff6382",
                        borderCapStyle: 'butt',
                        //borderDash: [5,5],
                        //borderDashOffset: 0.5,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#ff6382',
                        pointBackgroundColor: "#ff6382",
                        pointBorderWidth: 7,
                        //pointHoverRadius: 7,
                        //pointHoverBackgroundColor: "rgba(255,99,130,1)",
                        //pointHoverBorderColor: "rgba(220,220,220,1)",
                        //pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        //pointHitRadius: 10
                    }
                ]
            },
            options: {
                responsive: true,
                title:{
                    display:false
                },
                hover: {
                    mode: 'dataset'
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        //beforeTitle: function() {
                        //    return '...beforeTitle';
                        //},
                        //afterTitle: function() {
                        //    return '...afterTitle';
                        //},
                        //beforeBody: function() {
                        //    return '...beforeBody';
                        //},
                        //afterBody: function() {
                        //    return '...afterBody';
                        //},
                        //beforeFooter: function() {
                        //    return '...beforeFooter';
                        //},
                        //footer: function() {
                        //    return 'Footer';
                        //},
                        //afterFooter: function() {
                        //    return '...afterFooter';
                        //}
                    }
                },
                scales: {
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            //beginAtZero:true,
                            suggestedMin:40,
                            suggestedMax: 120,
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    };

    fn.renderPage = function () {
        this.loadTpl($('#record-tpl'),$('#record'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };


    return new Record();

})();

module.exports = record;