
var config = require('../common/config');

var babyDetail = (function() {

    var BabyDetail = function() {},
        fn = BabyDetail.prototype;

    fn.onLoad = function () {
        this.renderLoading();
        this.getData();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    /*加载动画*/
    fn.renderLoading = function(){
        this.loadTpl($('#loading-tpl'),$('#loading'),this.data);
    };

    /*获取链接上的参数*/
    fn.getQueryFromUrl = function(key){
        var search = location.search,
            obj = {};
        search = decodeURIComponent( search.substring(1) );
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

    /*请求文章数据*/
    fn.getData = function () {
        var that = this;
        $.ajax({
            type: 'GET',
            url: config.API_URL.BABYDETAIL_PATH,
            dataType: 'json',
            success: function(data){
                that.data.contentData = data;
                that.renderPage();
                that.eventCollectClick();
                $('#ajax-loading').hide();
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        });
    };

    /*是否收藏*/
    fn.eventCollectClick = function(){
        var that = this,
            $keep = $('.keep-box');
        if(this.data.contentData.isFavorite){
            $keep.addClass('active');
            $keep.find('span').html("已收藏");
        }
        $keep.on('click', function () {
            var $this = $(this),
                id = that.getQueryFromUrl('id');//文章id
            if($this.hasClass('active')){
                $this.removeClass('active');
                $keep.find('span').html("收藏");
                //todo ajax
                /*$.ajax({
                    type: 'GET',
                    url: config.API_URL.BABYDETAIL_PATH,
                    dataType: 'json',
                    success: function(data){
                        that.data.contentData = data;
                        that.renderPage();
                        that.eventCollectClick();
                    },
                    error: function(xhr, type){
                        alert('Ajax error!')
                    }
                });*/
            }else{
                $this.addClass('active');
                $keep.find('span').html("已收藏");
                //todo ajax
                /*$.ajax({
                 type: 'GET',
                 url: config.API_URL.BABYDETAIL_PATH,
                 dataType: 'json',
                 success: function(data){
                 that.data.contentData = data;
                 that.renderPage();
                 that.eventCollectClick();
                 },
                 error: function(xhr, type){
                 alert('Ajax error!')
                 }
                 });*/
            }
        })
    };

    fn.events = function(){
        this.eventGoBackClick();
    };

    fn.eventGoBackClick = function(){
        $('#back').on('click',function(){
            history.back();
        })
    };

    fn.renderPage = function () {
        this.loadTpl($('#details-tpl'),$('#details'),this.data.contentData)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new BabyDetail();

})();

module.exports = babyDetail;