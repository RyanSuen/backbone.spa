/**
 * Created by sun yi on 2016/7/20.
 */

var config = require('../common/config');

var init = (function() {

    var Init = function() {},
        fn = Init.prototype;

    fn.handleClick = function(){

        $('#link').on('click',function(){
            location.href = "/backbone.spa/#teams";
        });

        Mustache.render('html', {
            pageData: {},
            IMG_URL: ''
        });

        /*$("#fileinput").change(function(e){
         console.log(e.target,e.dataTransfer);
         var file = e.target.files||e.dataTransfer.files;
         if(file){
         var reader = new FileReader();
         reader.onload=function(){
         $("<img src='"+this.result+"'/>").appendTo("body");

         };
         console.log(reader);
         reader.readAsDataURL(file);
         }
         });*/
    };

    fn.zeptoTest = function() {

        $.fn.ryan = function() {
            console.log( 'ryan' );
        };

        $.ryan = function() {
            console.log('$.ryan');
        };

    };

    fn.renderPage = function() {
        var html = $('#init-tmpl').html(),
            render;
        Mustache.parse( html );
        render = Mustache.render( html, {
            IMG_PATH: config.IMG_PATH,
            DATE: config.DATE
        } );
        $('#page-init').html( render );
    };

    fn.onLoad = function() {
        this.handleClick();
        //this.zeptoTest();
        this.renderPage();
    };

    return new Init();

})();

module.exports =  init;