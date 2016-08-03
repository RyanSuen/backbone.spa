
var config = require('../common/config');

var main = (function() {

    "use strict";

    var Main = function() {},
        fn = Main.prototype;

    fn.onLoad = function() {
        this.getData();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    //请求数据
    fn.getData = function(){
        console.log(config.API_URL.MAINJSON_PATH);
        var that = this;
        $.ajax({
            type: 'GET',
            url: config.API_URL.MAINJSON_PATH,
            dataType: 'json',
            success: function(data){
                that.data.contentLists = data;
                that.renderPage();
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        });
    };

    fn.events = function () {
        this.eventGoToRecordClick();
        this.eventGoToListClick();
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

    //跳转到体重身高记录页
    fn.eventGoToRecordClick = function(){
        $('.today-list').on('click', function goToRecordClickHandle() {
            location.href = config.PAGE_URL.MAIN_RECORD_PATH;
        })
    };

    //点击跳转到宝宝知道列表页
    fn.eventGoToListClick = function(){

        $('#more').on('click',function goToListClickHandle(){
            location.href = config.PAGE_URL.FIND_PATH + '/0';
        })

    };

    return new Main();

})();

module.exports =  main;