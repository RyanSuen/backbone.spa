
var config = require('../common/config');

var babyKnow = (function() {

    var BabyKnow = function() {},
        fn = BabyKnow.prototype;

    fn.onLoad = function () {
        //this.renderPage();
        this.swipePicture();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    /*导航轮播*/
    fn.swipePicture = function(){
        var swiper = new Swiper('.swiper-container', {
            //scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 0,
            grabCursor: true
        });
    };

    fn.renderPage = function () {
        this.loadTpl($('#babyKnow-tpl'),$('#babyKnow'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new BabyKnow();

})();

module.exports = babyKnow;