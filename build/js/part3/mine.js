
var config = require('../common/config');

var mine = (function() {

    var Mine = function() {},
        fn = Mine.prototype;

    fn.onLoad = function () {
        this.renderPage();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.events = function(){
        this.eventShowPopupClick();
        this.eventGoToCollectClick();
        this.eventGoToSetClick();
    };

    //点击显示升级中
    fn.eventShowPopupClick = function () {

        $('.mine-info').on('click',function showPopupClickHandle(){
            $('.popup').show();
            setTimeout(function(){
                $('.popup').hide();
            },3000);
        })

    };

    //点击跳转到我的收藏
    fn.eventGoToCollectClick = function(){

        $('.mine-keep').on('click',function goToCollectClickHandle(){
            location.href = config.PAGE_URL.COLLECT_PATH;
        })

    };

    //点击跳转到意见反馈或者设置页
    fn.eventGoToSetClick = function(){

        $('.mine-other ul li').on('click',function goToSetClickHandle(){
            var $this = $(this);
            switch ( $this.data('id') ){
                case 1:
                    //TODO
                case 2:
                    location.href = config.PAGE_URL.SUGGESTION_PATH;
                    break;
                case 3:
                    location.href = config.PAGE_URL.SET_PATH;
                    break;
                default :
                    break;
            }
        })

    };

    fn.renderPage = function () {

        this.loadTpl($('#mine-tpl'),$('#mine'),this.data)

    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据

        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);

    };

    return new Mine();

})();

module.exports = mine;