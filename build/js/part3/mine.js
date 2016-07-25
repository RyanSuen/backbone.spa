
var config = require('../common/config');

var mine = (function() {

    var Mine = function() {},
        fn = Mine.prototype;

    fn.onLoad = function () {
        this.renderPage();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.renderPage = function () {
        this.loadTpl($('#mine-tpl'),$('#mine'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new Mine();

})();

module.exports = mine;