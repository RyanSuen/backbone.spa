/**
 * Created by sun yi on 2016/7/20.
 */

var main = (function() {

    var main = function() {},
        fn = main.prototype;

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

    fn.onLoad = function() {
        this.handleClick();
    };

    return new main();

})();

module.exports =  main;