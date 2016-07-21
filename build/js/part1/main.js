
var config = require('../common/config');

var main = (function() {

    var main = function() {},
        fn = main.prototype;

    fn.onLoad = function() {
        this.renderPage();
        this.handleClick();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        RANDOM:config.RANDOM
    }

    fn.renderPage = function () {
        this.loadTpl($('#title-tpl'),$('#main-title'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    fn.handleClick = function(){

    };

    return new main();

})();

module.exports =  main;