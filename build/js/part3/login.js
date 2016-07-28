
var config = require('../common/config');

var login = (function() {

    var Login = function() {},
        fn = Login.prototype;

    fn.onLoad = function () {
        this.renderPage();
        this.slidePicture();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    /*事件点击处理*/
    fn.events = function(){
        this.eventTabNavClick();
    };

    /*头部轮播图片*/
    fn.slidePicture = function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay:3000,
            autoplayDisableOnInteraction:true
        });
    };

    /*导航切换*/
    fn.eventTabNavClick = function(){
        $('.login-nav ul li').on('click',function tabNavClickHandle(){
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            if( $this.index() == 0 ){
                $('#login-part').show();
                $('#register-part').hide();
            }else if( $this.index() == 1 ){
                $('#login-part').hide();
                $('#register-part').show();
            }

        })
    };

    /*模板渲染*/
    fn.renderPage = function () {
        this.loadTpl($('#login-tpl'),$('#login'),this.data)
    };

    /*模板调用方法*/
    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new Login();


})();

module.exports = login;