/**
 * Created by Administrator on 2016/7/22 0022.
 */
var animateCss = require('../../less/common/animate.less'),
    menuCss = require('../../less/common/menu.less');


var menu = (function () {
    var Menu = function() {},
        fn = Menu.prototype;

    fn.onLoad = function(){
        this.addAnimateCss();
    };

    fn.addAnimateCss = function () {
        $('head').eq(0).append('<style>' + animateCss + menuCss + '</style>');
    };

    return new Menu();
})();

module.exports = menu;