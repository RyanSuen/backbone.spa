
var config = require('../common/config');

var babyKnow = (function() {

    var BabyKnow = function() {},
        fn = BabyKnow.prototype;

    fn.onLoad = function () {
        //this.renderPage();
        this.swipePicture();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.events = function(){
        this.eventTabNavClick();
        this.eventGoBackClick();
        //this.eventLikeClick();
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

    fn.eventTabNavClick = function(){
        $('.swiper-slide').on('click',function tabNavClickHandle(){
            var $this = $(this),
                id = $this.data('id');
            $this.addClass('active').siblings('.swiper-slide').removeClass('active');
            switch (id){
                case 1:
                    //todo
                    break;
                case 2:
                    //todo
                    break;
                case 3:
                    //todo
                    break;
                case 4:
                    //todo
                    break;
                case 5:
                    //todo
                    break;
                case 6:
                    //todo
                    break;
            }
        })
    };

    fn.eventGoBackClick = function(){
        $('#back').on('click',function(){
            history.back();
        })
    };

    /*fn.eventLikeClick = function () {
        $('.list-like').on('click',function likeClickHandle(){
            var $this = $(this);
            if($this.hasClass('active')){
                $this.removeClass('active');
                //todo  ajax请求
            }else{
                $this.addClass('active');
                //todo  ajax请求
            }
        })
    };*/

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