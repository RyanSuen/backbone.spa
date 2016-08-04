
var config = require('../common/config');

var set = (function() {

    var Set = function() {},
        fn = Set.prototype;

    fn.onLoad = function () {
        this.renderPage();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.events = function(){
        this.eventGoToBackClick();
        this.eventGoToWhichClick();
    };

    //点击返回
    fn.eventGoToBackClick = function(){

        $('#back').on('click',function goToBackClickHandle(){
            history.back();
        })

    };

    //点击判断跳转页面
    fn.eventGoToWhichClick = function () {

        $('.set-lists ul li').on('click',function goToWhichClickHandle(){
            var $this = $(this);

            switch ($this.data('id')){
                case 1:
                    //todo
                    break;
                case 2:
                    location.href = config.PAGE_URL.PROVISION_PATH;
                    break;
                case 3:
                    location.href = config.PAGE_URL.ABOUT_US_PATH;
                    break;
                default :
                    break;
            }
        })

    };

    fn.renderPage = function () {

        this.loadTpl($('#set-tpl'),$('#set'),this.data)

    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据

        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);

    };

    return new Set();


})();

module.exports = set;