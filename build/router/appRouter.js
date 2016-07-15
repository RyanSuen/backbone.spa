/**
 * Created by sun yi on 2016/7/15.
 */

var mergeHtmlAndCss = function( css, html) {
    return '<style>' + css + '</style>' + html;
};

module.exports = Backbone.Router.extend({    //创建路由
    routes: {
        "": "index",
        "teams": "getTeams",
        "teams/:country": "getTeamsCountry",
        "teams/:country/:name": "getTeam",
        "error": "fourOfOur"
    },
    index: function() {

        //html,css
        var module1Page =  require('html!../views/part1/module1.html'),
            module1Css = require('../less/index/module1.less'),
            merge = mergeHtmlAndCss(module1Css, module1Page);
        $('body').html( merge );

        //js
        var module1 = require('../js/index/module1.js');
        module1.onLoad();

    },
    getTeams: function() {
        var module2 = require('html!../views/part1/module2.html');
        $('body').html( module2 );
    },
    getTeamsCountry: function(a, b, c) {    console.log('a:', a, ',b:', b, ',c:', c);
        console.log('i will get all countries!');
    },
    getTeam: function(a, b, c) {    console.log('a:', a, ',b:', b, ',c:', c);
        console.log('get team!');
    },
    fourOfOur: function() {    console.log( 'error' );
        //404 page
    }
});