/**
 * Created by sun yi on 2016/7/15.
 */

var module1 = (function() {

    var Module1 = function() {},
        fn = Module1.prototype;

    fn.onLoad = function() {
        console.log( 'module1' );
    };

    return new Module1();

})();

module.exports =  module1;