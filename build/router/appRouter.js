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
        var module1Page =  require('../views/part1/module1.html'),
            module1Css = require('../less/index/module1.less'),
            merge = mergeHtmlAndCss(module1Css, module1Page);
        $('body').html( merge );

        //js
        var module1 = require('../js/index/module1.js');
        module1.onLoad();

    },

    getTeamsAction: function() {
        var module2 = require('../views/part1/module2.html');
        $('body').html( module2 );
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