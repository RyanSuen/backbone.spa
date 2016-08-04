/**
 * Created by Administrator on 2016/7/20 0020.
 */
var config = require('../common/config');

var gender = (function() {

    var Gender = function() {},
        fn = Gender.prototype;

    fn.onLoad = function(){
        this.handleClick();
    };

    fn.events = function(){

    };

    /*点击完成保存baby_id到cookie*/

    fn.data = {

    };

    fn.handleClick = function () {
        var that = this;
        $('#select-sex').find('li').on('click', function () {
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            that.data.gender = $this.data('id');
        });

        $('#pre-btn').on('click',function(){
            location.href = config.PAGE_URL.INIT_PATH;
        });

        $('#next-btn').on('click',function(){
            location.href = config.PAGE_URL.MAIN_PATH;
        });
    };

    return new Gender();

})();

module.exports = gender;