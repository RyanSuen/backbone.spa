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

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.handleClick = function(){

        if(location.hash == '#main'){
            $('.main').addClass('active').siblings('li').removeClass('active');
        }else if(location.hash == '#find'){
            $('.find').addClass('active').siblings('li').removeClass('active');
        }else if(location.hash == '#mine'){
            $('.mine').addClass('active').siblings('li').removeClass('active');
        }

        $('.index-nav li').on('click', function () {
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            if($this.index()==0){
                location.href = config.PAGE_URL.MAIN_PATH;
            }else if($this.index()==1){
                location.href = config.PAGE_URL.FIND_PATH;
            }else if($this.index()==2){
                location.href = config.PAGE_URL.MINE_PATH;
            }
        })

    };

    return new Menu();
})();

module.exports = menu;