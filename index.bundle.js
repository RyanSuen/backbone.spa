/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ryan on 16/7/14.
	 */
	
	var $ = __webpack_require__(4),
	    _ = __webpack_require__(5),
	    Backbone = __webpack_require__(6);
	
	var App = {
	    Router: __webpack_require__(7)
	};
	
	$(function() {
	
	    //路由
	    var mainRouter = new App.Router();    //实例化路由
	    Backbone.history.start(/*{pushState: true}*/);    //启用路由
	
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = Backbone;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	        var initPage =  __webpack_require__(8),
	            initCss = __webpack_require__(9),
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
	        var module2 = __webpack_require__(12);
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div class=\"init\">\r\n    <div class=\"header\">\r\n        <div class=\"banner\">\r\n            <img src=\"/images/init_banner.png\" />\r\n        </div>\r\n        <div class=\"open\">\r\n            <i><img src=\"/images/init_iconopen.png\" /></i>\r\n            <span>�ѿ�������״̬</span>\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <img src=\"/images/init_top.png\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(10);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  width: 100%;\n  min-height: 100%;\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n  font-size: 100%;\n  font-family: Microsoft YaHei, \"\\5FAE\\8F6F\\96C5\\9ED1\", Helvetica, STHeiti, Droid Sans Fallback;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  min-height: 100%;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*\n* add by Sun yi\n*/\nul,\nol {\n  list-style: none;\n}\nbody,\ndiv,\nol,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nth,\ntd,\ndl,\ndd,\nform,\niframe,\ninput,\ntextarea,\nselect,\nlabel,\narticle,\naside,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n/*\n*remove outline\tby nsee 32015.9.26\n*/\na,\ninput,\ntextarea,\nselect {\n  outline: none;\n}\nhtml {\n  background-color: #ffffff;\n}\n.container {\n  background: #ffffff;\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  min-width: 20rem;\n  max-width: 30rem;\n  overflow: hidden;\n  margin: 0 auto;\n  color: #101010;\n}\n.wrap {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  overflow: hidden;\n}\nimg {\n  width: 100%;\n  vertical-align: top;\n}\n.clear {\n  _zoom: 1;\n}\n.clear:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.auto {\n  overflow: hidden;\n}\n.li-left li {\n  float: left;\n}\n.li-right li {\n  float: right;\n}\na.a-common:link,\na.a-common:visited,\na.a-common:hover,\na.a-common:active {\n  color: #be2837;\n  text-decoration: underline;\n}\n.hide {\n  display: none;\n}\n.rlt {\n  position: relative;\n}\n/* LESS Document */\n/*圆角*/\n/**/\n.init {\n  width: 100%;\n  height: 10.8125rem;\n  background-color: #24d7cc;\n  position: relative;\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div id=\"index\">\r\n    <h1>module2</h1>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur corporis, delectus doloribus ea earum est illo illum in ipsam ipsum magnam mollitia neque officiis, perspiciatis quia quidem recusandae saepe sapiente sit suscipit velit vitae voluptatem voluptatum! Consectetur cum debitis, eligendi harum ipsum possimus. A accusantium animi itaque non.\r\n    </p>\r\n</div>";

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map