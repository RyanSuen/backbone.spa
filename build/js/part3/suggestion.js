var suggestion = (function() {

    var Suggestion = function() {},
        fn = Suggestion.prototype;

    fn.onLoad = function () {
        this.events();
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

    return new Suggestion();

})();

module.exports = suggestion;