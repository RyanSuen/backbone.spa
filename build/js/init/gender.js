/**
 * Created by Administrator on 2016/7/20 0020.
 */
var config = require('../common/config'),
    cookie = require('../common/commonCookie')

var gender = (function() {

    var Gender = function() {},
        fn = Gender.prototype;

    fn.onLoad = function(){
        this.events();
    };

    fn.data = {

    };

    fn.events = function(){
        this.eventGoNextOrPreClick();
        this.eventSelectSexClick();
        this.eventSubmitClick();
    };

    /*获取链接上的参数*/
    fn.getQueryFromUrl = function(key){
        var search = location.hash,
            obj = {};
        search = search.split('?')[1];
        var arr = search.split('&'),
            len = arr.length,
            i;
        if( len > 0 ) {
            for( i = 0; i < len; i ++ ) {
                var subArr = arr[i].split('=');
                obj[subArr[0]] = subArr[1];
            }
        }
        return obj[key];
    };

    /*点击完成保存baby_id到cookie*/
    fn.eventSubmitClick = function(){
        var that = this;
        $('#next-btn').on('click',function(){
            var data = {
                sex:1
            };
            data.birth = that.getQueryFromUrl('birth');
            data.sex = that.data.gender;
            console.log(data);
            $.ajax({
                type: 'POST',
                url: config.API_URL.BABYREGISTER_PATH,
                data:data,
                dataType: 'json',
                success: function(data){
                    cookie.setItem('baby_id',data.baby_id);
                },
                error: function(xhr, type){
                    alert('Ajax error!')
                }
            });
        })
    };

    /*选择性别*/
    fn.eventSelectSexClick = function () {
        var that = this;
        $('#select-sex').find('li').on('click', function () {
            var $this = $(this);
            $this.addClass('active').siblings('li').removeClass('active');
            that.data.gender = $this.data('id');
        });
    };

    /*点击返回上一步*/
    fn.eventGoNextOrPreClick = function () {

        $('#pre-btn').on('click',function(){
            location.href = config.PAGE_URL.INIT_PATH;
        });

    };

    return new Gender();

})();

module.exports = gender;