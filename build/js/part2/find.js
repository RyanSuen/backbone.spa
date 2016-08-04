
var config = require('../common/config');

var find = (function() {

    var Find = function() {},
        fn = Find.prototype;

    fn.onLoad = function () {
        this.renderPage();
        this.eventGoToClick();
    };

    fn.data = {
        IMG_PATH: config.IMG_PATH,
        DATE:config.DATE
    };

    fn.eventGoToClick = function(){
        $('.find-lists ul li').on('click',function goToClickHandle(){
            var $this = $(this);
            if($this.data('id') == 0){
                location.href = config.PAGE_URL.FIND_PATH + '/0';
            }else if($this.data('id') == 1){
                location.href = config.PAGE_URL.FIND_PATH + '/1';
            }
        })
    };

    fn.renderPage = function () {
        this.loadTpl($('#find-tpl'),$('#find'),this.data)
    };

    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
        var template = $tpl.html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $target.html(rendered);
    };

    return new Find();

})();

module.exports = find;