/**
 * Created by sun yi on 2016/7/15.
 */

var mergeHtmlAndCss = function( css, html) {
    return '<style>' + css + '</style>' + html;
};

module.exports = Backbone.Router.extend({    //创建路由

    routes: {
        "index": "indexAction",
        "init": "initAction",
        "init/:birthday": "initGenderAction",
        "main": "indexAction",
        "record": "recordAction",
        "find": "findAction",
        "find/:lists": "listsAction",
        "mine": "mineAction",
        "login": "loginAction",
        "login/:name/:phone": "setPasswordAction",
        "findPassword": "findPasswordAction",
        "set": "setAction",
        "error": "fourOfOurAction"
    },

    indexAction: function() {

        //html,css
        var mainPage =  require('../views/part1/main.html'),
            mainCss = require('../less/part1/main.less'),
            merge = mergeHtmlAndCss(mainCss, mainPage);

        $('#page-main-container').html( merge ).addClass('animated fadeIn').show();
        $('#page-menu').show();
        $('#page-full').hide();

        //js
        var main = require('../js/part1/main.js');
        main.onLoad();

    },

    initAction: function () {

        //html,css
        var initPage =  require('../views/init/init.html'),
            initCss = require('../less/init/init.less'),
            merge = mergeHtmlAndCss(initCss, initPage);
        $('body').html( merge ).addClass('animated fadeIn');

        //js
        var init = require('../js/init/init.js');
        init.onLoad();

    },

    initGenderAction: function () {

        var genderPage =  require('../views/init/gender.html'),
            genderCss = require('../less/init/gender.less'),
            merge = mergeHtmlAndCss(genderCss, genderPage);
        $('body').html( merge ).addClass('animated fadeIn');

        var gender = require('../js/init/gender.js');
        gender.onLoad();
    },

    recordAction: function () {

        var recordPage =  require('../views/part1/record.html'),
            recordCss = require('../less/part1/record.less'),
            merge = mergeHtmlAndCss(recordCss, recordPage);
        $('#page-full').html( merge ).addClass('animated fadeIn').show();
        $('#page-main-container').hide();
        $('#page-menu').hide();

        var record = require('../js/part1/record.js');
        record.onLoad();
    },

    findAction: function () {
        var findPage =  require('../views/part2/find.html'),
            findCss = require('../less/part2/find.less'),
            merge = mergeHtmlAndCss(findCss, findPage);

        $('#page-main-container').html( merge ).addClass('animated fadeIn').show();
        $('#page-menu').show();
        $('#page-full').hide();

        var find = require('../js/part2/find.js');
        find.onLoad();
    },

    listsAction: function (id) {

        if(id == 0){
            var babyKnowPage =  require('../views/part2/babyKnow.html'),
                babyKnowCss = require('../less/part2/babyKnow.less'),
                merge = mergeHtmlAndCss(babyKnowCss, babyKnowPage);

            $('#page-full').html( merge ).addClass('animated fadeIn').show();
            $('#page-menu').hide();
            $('#page-main-container').hide();

            var babyKnow = require('../js/part2/babyKnow.js');
            babyKnow.onLoad();

        }else if(id == 1){

            /*var findPage =  require('../views/part2/find.html'),
                findCss = require('../less/part2/find.less'),
                merge = mergeHtmlAndCss(findCss, findPage);

            $('#page-main-container').html( merge ).addClass('animated fadeIn').show();
            $('#page-menu').show();
            $('#page-full').hide();*/

            /*var find = require('../js/part2/find.js');
             find.onLoad();*/
        }

    },

    mineAction:function(){
        var minePage =  require('../views/part3/mine.html'),
            mineCss = require('../less/part3/mine.less'),
            merge = mergeHtmlAndCss(mineCss, minePage);

        $('#page-main-container').html( merge ).addClass('animated fadeIn').show();
        $('#page-menu').show();
        $('#page-full').hide();

        var mine = require('../js/part3/mine.js');
        mine.onLoad();
    },

    loginAction:function(){
        var loginPage =  require('../views/part3/login.html'),
            loginCss = require('../less/part3/login.less'),
            merge = mergeHtmlAndCss(loginCss, loginPage);

        $('#page-full').html( merge ).addClass('animated fadeIn').show();
        $('#page-main-container').hide();
        $('#page-menu').hide();

        var login = require('../js/part3/login.js');
        login.onLoad();
    },

    setPasswordAction:function(){
        var setPasswordPage =  require('../views/part3/setPassword.html'),
            setPasswordCss = require('../less/part3/setPassword.less'),
            merge = mergeHtmlAndCss(setPasswordCss, setPasswordPage);

        $('#page-full').html( merge ).addClass('animated fadeIn').show();
        $('#page-main-container').hide();
        $('#page-menu').hide();

        /*var setPassword = require('../js/part3/setPassword.js');
        setPassword.onLoad();*/
    },

    findPasswordAction:function(){
        var findPasswordPage =  require('../views/part3/findPassword.html'),
            findPasswordCss = require('../less/part3/setPassword.less'),
            merge = mergeHtmlAndCss(findPasswordCss, findPasswordPage);

        $('#page-full').html( merge ).addClass('animated fadeIn').show();
        $('#page-main-container').hide();
        $('#page-menu').hide();

        /*var setPassword = require('../js/part3/setPassword.js');
         setPassword.onLoad();*/
    },

    setAction: function () {
        var setPage =  require('../views/part3/set.html'),
            setCss = require('../less/part3/set.less'),
            merge = mergeHtmlAndCss(setCss, setPage);

        $('#page-full').html( merge ).addClass('animated fadeIn').show();
        $('#page-main-container').hide();
        $('#page-menu').hide();

        /*var setPassword = require('../js/part3/setPassword.js');
         setPassword.onLoad();*/
    },

    fourOfOurAction: function() {    console.log( 'error' );
        //404 page
    }

});