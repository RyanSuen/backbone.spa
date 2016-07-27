
var config = require('../common/config');

var record = (function() {

    var Record = function() {},
        fn = Record.prototype;

    fn.onLoad = function() {
        this.renderChart([50,60,70,80,100,69,66,63,68,77,45,88,74,40]);
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    /**
     * 绘制图表
     * @param chartData
     */
    fn.renderChart = function (data) {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                datasets: [{
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
        //this.loadTpl($('#title-tpl'),$('#main'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    fn.handleClick = function(){

    };

    return new Record();

})();

module.exports = record;