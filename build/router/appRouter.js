/**
 * Created by sun yi on 2016/7/15.
 */

var mergeHtmlAndCss = function( css, html) {
    return '<style>' + css + '</style>' + html;
};

module.exports = Backbone.Router.extend({    //创建路由

    routes: {
        "": "indexAction",
        "teams": "getTeamsAction",
        "teams/:country": "getTeamsCountryAction",
        "teams/:country/:name": "getTeamAction",
        "error": "fourOfOurAction"
    },

    indexAction: function() {

        //html,css
        var initPage =  require('../views/part1/init.html'),
            initCss = require('../less/part1/init.less'),
            merge = mergeHtmlAndCss(initCss, initPage);
        $('body').html( merge ).addClass('animated fadeIn');

        //js
        /*var init = require('../js/part1/init.js');
        init.onLoad();*/
        /*//html,css
        var mainPage =  require('../views/part1/main.html'),
            mainCss = require('../less/part1/main.less'),
            merge = mergeHtmlAndCss(mainCss, mainPage);
        $('body').html( merge ).addClass('animated fadeIn');

        //js
        var main = require('../js/part1/main.js');
        main.onLoad();*/
    },

    getTeamsAction: function() {
        var module2 = require('../views/part1/module2.html');
        $('body').html( module2 ).addClass('animated fadeIn');
    },

    getTeamsCountryAction: function(a, b, c) {    console.log('a:', a, ',b:', b, ',c:', c);
        console.log('i will get all countries!');
    },

    getTeamAction: function(a, b, c) {    console.log('a:', a, ',b:', b, ',c:', c);
        console.log('get team!');
    },

    fourOfOurAction: function() {    console.log( 'error' );
        //404 page
    }

});