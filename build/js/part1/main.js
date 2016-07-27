
var config = require('../common/config');

var main = (function() {

    "use strict";

    var Main = function() {},
        fn = Main.prototype;

    fn.onLoad = function() {
        this.renderPage();
        this.clickHandle();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.clickHandle = function () {
        this.goToRecord();
    };

    fn.renderPage = function () {
        this.loadTpl($('#title-tpl'),$('#main'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    fn.goToRecord = function(){
        $('.today-list').on('click', function () {
            location.href = config.PAGE_URL.MAIN_RECORD_PATH;
        })
    };

    return new Main();

})();

module.exports =  main;