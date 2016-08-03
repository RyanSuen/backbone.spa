
var provision = (function() {

    var Provision = function() {},
        fn = Provision.prototype;

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

    return new Provision();


})();

module.exports = provision;