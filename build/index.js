/**
 * Created by ryan on 16/7/14.
 */

var $ = require('zepto'),
    _ = require('underscore'),
    Backbone = require('backbone');

var menu = require('./js/common/menu.js');
menu.onLoad();

var App = {
    Router: require('./router/appRouter.js')
};

$(function() {
    //路由
    var mainRouter = new App.Router();    //实例化路由
    Backbone.history.start(/*{pushState: true}*/);    //启用路由

});