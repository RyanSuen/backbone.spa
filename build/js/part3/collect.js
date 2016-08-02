
var config = require('../common/config');

var collect = (function() {

    var Collect = function() {},
        fn = Collect.prototype;

    fn.onLoad = function () {
        this.renderPage();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.events = function(){
        this.eventGoToBackClick();
    };

    //点击返回
    fn.eventGoToBackClick = function(){

        $('#back').on('click',function goToBackClickHandle(){
            history.back();
        })

    };

    fn.renderPage = function () {

        this.loadTpl($('#collect-tpl'),$('#collect'),this.data)

    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据

        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);

    };

    return new Collect();


})();

module.exports = collect;