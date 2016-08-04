
var config = require('../common/config'),
    cookie = require('../common/commonCookie');

var main = (function() {

    "use strict";

    var Main = function() {},
        fn = Main.prototype;

    fn.onLoad = function() {
        this.getData();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    //请求数据
    fn.getData = function(){
        var that = this;
        $.ajax({
            type: 'GET',
            url: config.API_URL.MAINJSON_PATH,
            dataType: 'json',
            success: function(data){
                that.data.contentLists = data;
                that.renderPage();
                that.events();
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        });
    };

    fn.events = function () {
        this.eventGoToRecordClick();
        this.eventGoToListClick();
        this.eventGoToDetail();
    };

    /*跳转到体重身高记录页*/
    fn.eventGoToRecordClick = function(){

        $('.today-list').on('click', function goToRecordClickHandle() {
            location.href = config.PAGE_URL.MAIN_RECORD_PATH;
        })

    };

    /*点击跳转到宝宝知道列表页*/
    fn.eventGoToListClick = function(){

        var baby_id = cookie.getItem('baby_id');
        $('#more').on('click',function goToListClickHandle(){
            location.href = config.PAGE_URL.FIND_PATH + '/0';
        })

    };

    /*点击跳转到文章详情页*/
    fn.eventGoToDetail = function(){

        $('.list-content').on('click',function(){
            var $this = $(this);
            location.href = config.PAGE_URL.FIND_PATH + '/0/1?id=' + $this.data('id');
        })

    };

    fn.renderPage = function () {
        this.loadTpl($('#main-tpl'),$('#main'),this.data);
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new Main();

})();

module.exports =  main;