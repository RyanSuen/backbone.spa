/**
 * Created by sun yi on 2016/7/15.
 */

var mergeHtmlAndCss = function( css, html) {
    return '<style>' + css + '</style>' + html;
};

module.exports = Backbone.Router.extend({    //创建路由

    routes: {
        "": "indexAction",
        "inits": "initAction",
        "inits/:gender": "initGenderAction",
        "mains/record":"mainRecordAction",
        "finds":"findAction",
        "mines":"mineAction",
        "error": "fourOfOurAction"
    },

    indexAction: function() {

        //html,css
        var mainPage =  require('../views/part1/main.html'),
            mainCss = require('../less/part1/main.less'),
            merge = mergeHtmlAndCss(mainCss, mainPage);

        $('#page-main-container').html( merge ).addClass('animated fadeIn');

        //js
        var main = require('../js/part1/main.js');
        main.onLoad();

    },

    initAction: function () {

        var initPage =  require('../views/init/init.html'),
            initCss = require('../less/init/init.less'),
            merge = mergeHtmlAndCss(initCss, initPage);
        $('body').html( merge ).addClass('animated fadeIn');

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
    mainRecordAction: function () {

        var recordPage =  require('../views/part1/record.html'),
            recordCss = require('../less/part1/record.less'),
            merge = mergeHtmlAndCss(recordCss, recordPage);
        $('body').html( merge ).addClass('animated fadeIn');

        var record = require('../js/part1/record.js');
        record.onLoad();
    },

    findAction: function () {
        var findPage =  require('../views/part2/find.html'),
            findCss = require('../less/part2/find.less'),
            merge = mergeHtmlAndCss(findCss, findPage);

        $('#page-main-container').html( merge ).addClass('animated fadeIn');

        var find = require('../js/part2/find.js');
        find.onLoad();
    },

    mineAction:function(){
        var minePage =  require('../views/part3/mine.html'),
            mineCss = require('../less/part3/mine.less'),
            merge = mergeHtmlAndCss(mineCss, minePage);

        $('#page-main-container').html( merge ).addClass('animated fadeIn');

        var mine = require('../js/part3/mine.js');
        mine.onLoad();
    },

    fourOfOurAction: function() {    console.log( 'error' );
        //404 page
    }

});