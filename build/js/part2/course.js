
var config = require('../common/config');

var course = (function() {

    var Course = function() {},
        fn = Course.prototype;

    fn.onLoad = function () {
        this.renderPage();
        this.events();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
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
        this.loadTpl($('#course-tpl'),$('#course'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new Course();

})();

module.exports = course;