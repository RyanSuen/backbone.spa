/**
 * Created by Administrator on 2016/7/20 0020.
 */
var config = require('../common/config');
var Gender = (function() {
    var gender = function() {},
        fn = gender.prototype;

    fn.onLoad = function(){
        this.handleClick();
    };

    fn.data = {

    };

    fn.handleClick = function () {
        var that = this;
        $('#select-sex li').on('click', function () {
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            that.data.gender = $this.data('id');
            console.log(that.data);
            console.log(config.APP_URL);
        });
        $('#pre-btn').on('click',function(){
            location.href = config.APP_URL;
        })
    };

    return new gender;

})();

module.exports = Gender;