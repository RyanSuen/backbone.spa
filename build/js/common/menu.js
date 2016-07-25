/**
 * Created by Administrator on 2016/7/22 0022.
 */
var animateCss = require('../../less/common/animate.less'),
    menuCss = require('../../less/common/menu.less'),
    config = require('./config.js');


var menu = (function () {
    var Menu = function() {},
        fn = Menu.prototype;

    fn.onLoad = function(){
        this.addAnimateCss();
        this.handleClick();
    };

    fn.addAnimateCss = function () {
        $('head').eq(0).append('<style>' + animateCss + menuCss + '</style>');
    };

    fn.handleClick = function(){
        $('.index-nav li').on('click', function () {
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            console.log($this.index());
            if($this.index()==0){
                location.href = config.PAGE_URL.MAIN_PATH;
            }else if($this.index()==1){
                location.href = config.PAGE_URL.INIT_GENDER_PATH;//todo
            }else{
                location.href = config.PAGE_URL.INIT_PATH;//todo
            }
        })
    };

    return new Menu();
})();

module.exports = menu;