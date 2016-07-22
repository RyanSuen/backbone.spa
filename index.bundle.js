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
	
	var $ = __webpack_require__(5),
	    _ = __webpack_require__(6),
	    Backbone = __webpack_require__(7);
	
	var App = {
	    Router: __webpack_require__(8)
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
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = Backbone;

/***/ },
/* 8 */
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
	        "inits": "initAction",
	        "inits/:gender": "initGenderAction",
	        "teams": "getTeamsAction",
	        "teams/:country": "getTeamsCountryAction",
	        "teams/:country/:name": "getTeamAction",
	        "error": "fourOfOurAction"
	    },
	
	    indexAction: function() {
	
	        //html,css
	        var mainPage =  __webpack_require__(9),
	            mainCss = __webpack_require__(10),
	            merge = mergeHtmlAndCss(mainCss, mainPage);
	        $('body').html( merge ).addClass('animated fadeIn');
	
	        //js
	        var main = __webpack_require__(13);
	        main.onLoad();
	
	    },
	
	    initAction: function () {
	
	        var initPage =  __webpack_require__(15),
	            initCss = __webpack_require__(16),
	            merge = mergeHtmlAndCss(initCss, initPage);
	        $('body').html( merge ).addClass('animated fadeIn');
	
	        var init = __webpack_require__(18);
	        init.onLoad();
	
	    },
	
	    initGenderAction: function () {
	
	        var genderPage =  __webpack_require__(19),
	            genderCss = __webpack_require__(20),
	            merge = mergeHtmlAndCss(genderCss, genderPage);
	        $('body').html( merge ).addClass('animated fadeIn');
	
	        var gender = __webpack_require__(22);
	        gender.onLoad();
	    },
	
	    getTeamsAction: function() {
	        var module2 = __webpack_require__(23);
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
/* 9 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\n<div class=\"main\">\n    <div id=\"main\"></div>\n    <script id=\"title-tpl\" type=\"x-tmpl-mustache\">\n\n    </script>\n\n    <section class=\"info\">\n        <header class=\"main-title clear\">\n            <div class=\"left\">\n                <span>今天</span>\n            </div>\n            <div class=\"right\">\n                <img src=\"{{IMG_PATH}}main_icon_msg.png{{RANDOM}}\" />\n            </div>\n            <div class=\"date\">\n                <i class=\"pre\"></i>\n                <span>12月12日</span>\n                <i class=\"next\"></i>\n            </div>\n        </header>\n        <div class=\"how-old\">\n            <p>一个月6天</p>\n        </div>\n        <!--<div class=\"base-info clear\">\n            <div class=\"left\">\n\n            </div>\n        </div>-->\n        <div class=\"desc\">\n            <p>我出生了！如果是男宝宝，高48.0-51.8厘米、重2.9-3.9千克；如果是女宝宝，高47.3-51.0厘米、重2.8-3.7千克。</p>\n        </div>\n    </section>\n    <section class=\"today-msg\">\n        <h4 class=\"today-title\">\n            <span>今日提醒</span>\n            <i>\n                <img src=\"/backbone.spa/images/main_index.png\" />\n            </i>\n        </h4>\n        <div class=\"today-list clear\">\n            <div class=\"left\">\n                <img src=\"/backbone.spa/images/main_todaycontent.png\" />\n            </div>\n            <div class=\"auto\">\n                <h5>宝宝身高体重记录</h5>\n                <p>记录宝宝第一周身高体重变化</p>\n            </div>\n        </div>\n        <div class=\"line\"></div>\n    </section>\n\n    <section class=\"baby-know\">\n        <header class=\"clear\">\n            <div class=\"left\">\n                宝宝知道\n            </div>\n            <div class=\"right\">\n                更多\n            </div>\n        </header>\n        <ul>\n            <li>\n                <div class=\"list-title clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_title_01.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <h4></h4>\n                    </div>\n                </div>\n                <div class=\"list-content clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_content_01.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <p></p>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"list-title clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_title_02.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <h4></h4>\n                    </div>\n                </div>\n                <div class=\"list-content clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_content_02.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <p></p>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"list-title clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_title_03.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <h4></h4>\n                    </div>\n                </div>\n                <div class=\"list-content clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_content_03.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <p></p>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"list-title clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_title_04.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <h4></h4>\n                    </div>\n                </div>\n                <div class=\"list-content clear\">\n                    <div class=\"left\">\n                        <img src=\"/backbone.spa/images/main_content_04.png\" />\n                    </div>\n                    <div class=\"auto\">\n                        <p></p>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </section>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(11);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  width: 100%;\n  min-height: 100%;\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n  font-size: 100%;\n  font-family: Microsoft YaHei, \"\\5FAE\\8F6F\\96C5\\9ED1\", Helvetica, STHeiti, Droid Sans Fallback;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  min-height: 100%;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*\n* add by Sun yi\n*/\nul,\nol {\n  list-style: none;\n}\nbody,\ndiv,\nol,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nth,\ntd,\ndl,\ndd,\nform,\niframe,\ninput,\ntextarea,\nselect,\nlabel,\narticle,\naside,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n/*\n*remove outline\tby nsee 32015.9.26\n*/\na,\ninput,\ntextarea,\nselect {\n  outline: none;\n}\nhtml {\n  background-color: #ffffff;\n}\n.container {\n  background: #ffffff;\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  min-width: 20rem;\n  max-width: 30rem;\n  overflow: hidden;\n  margin: 0 auto;\n  color: #101010;\n}\n.wrap {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  overflow: hidden;\n}\nimg {\n  width: 100%;\n  display: block;\n  vertical-align: top;\n}\n.clear {\n  _zoom: 1;\n}\n.clear:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.auto {\n  overflow: hidden;\n}\n.li-left li {\n  float: left;\n}\n.li-right li {\n  float: right;\n}\na.a-common:link,\na.a-common:visited,\na.a-common:hover,\na.a-common:active {\n  color: #be2837;\n  text-decoration: underline;\n}\n.hide {\n  display: none;\n}\n.rlt {\n  position: relative;\n}\n/* LESS Document */\n/*圆角*/\n/**/\n.main .info {\n  background-color: #24d7cc;\n  background-image: url('/backbone.spa/images/main_bg.png');\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  color: #FFFFFF;\n}\n.main .info .main-title {\n  padding: .75rem 0;\n}\n.main .info .main-title .left {\n  margin-left: 1.1875rem;\n}\n.main .info .main-title .right {\n  margin-right: 2.1875rem;\n  width: 1.3125rem;\n  height: 1.1875rem;\n}\n.main .info .main-title .date {\n  width: 6.8125rem;\n  height: 1.1875rem;\n  line-height: 1.1875rem;\n  margin: 0 auto;\n}\n.main .info .main-title .date i {\n  display: inline-block;\n  width: .5rem;\n  height: .8125rem;\n  background-position: center center;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n}\n.main .info .main-title .date i.pre {\n  background-image: url(\"/backbone.spa/images/main_icon_pre.png\");\n}\n.main .info .main-title .date i.next {\n  background-image: url(\"/backbone.spa/images/main_icon_next.png\");\n}\n.main .info .main-title .date span {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  margin: 0 .25rem;\n  font-size: 1.0625rem;\n  color: #FFFFFF;\n}\n.main .info .how-old p {\n  text-align: center;\n  font-size: .75rem;\n}\n.main .info .desc {\n  padding: .9375rem .9375rem 2.5rem .9375rem;\n}\n.main .info .desc p {\n  font-size: .8125rem;\n}\n.main .today-msg {\n  margin-left: .875rem;\n}\n.main .today-msg .today-title {\n  padding-top: 1.125rem;\n  font-weight: 500;\n  font-size: .9375rem;\n  color: #000000;\n}\n.main .today-msg .today-title span,\n.main .today-msg .today-title i {\n  display: inline-block;\n  vertical-align: middle;\n}\n.main .today-msg .today-title i {\n  width: 1.5rem;\n  margin-left: .625rem;\n}\n.main .today-msg .today-list {\n  margin: .6875rem 0 .875rem 0;\n}\n.main .today-msg .today-list .left {\n  width: 3.125rem;\n  margin-right: .625rem;\n}\n.main .today-msg .today-list .auto {\n  padding-top: .375rem;\n}\n.main .today-msg .today-list .auto h5 {\n  font-weight: 500;\n  font-size: .9375rem;\n  color: #000;\n  line-height: 1.3125rem;\n}\n.main .today-msg .today-list .auto p {\n  font-size: .8125rem;\n  color: #808080;\n}\n.main .today-msg .line {\n  width: 100%;\n  height: .6875rem;\n  background-color: #f5f8fa;\n}\n.main .baby-know {\n  margin-left: .5rem;\n}\n.main .baby-know header {\n  height: 2.625rem;\n  line-height: 2.625rem;\n  font-size: .9375rem;\n}\n.main .baby-know header .right {\n  padding-right: .5rem;\n  font-size: .75rem;\n}\n.main .baby-know ul li {\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	var config = __webpack_require__(14);
	
	var main = (function() {
	
	    var main = function() {},
	        fn = main.prototype;
	
	    fn.onLoad = function() {
	        this.renderPage();
	        this.handleClick();
	    };
	
	    fn.data = {
	        IMG_PATH: config.IMG_PATH,
	        RANDOM:config.RANDOM
	    }
	
	    fn.renderPage = function () {
	        this.loadTpl($('#title-tpl'),$('#main-title'),this.data)
	    };
	
	    fn.loadTpl = function($tpl,$target,data){ //三个参数的顺序分别是script的id,div的id,数据
	        var template = $tpl.html();
	        Mustache.parse(template);
	        var rendered = Mustache.render(template, data);
	        $target.html(rendered);
	    };
	
	    fn.handleClick = function(){
	
	    };
	
	    return new main();
	
	})();
	
	module.exports =  main;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Created by sun yi on 2016/7/20.
	 */
	
	var commonPagePath = '/backbone.spa/';
	
	module.exports = {
	    IMG_PATH: commonPagePath+'images/',
	    PAGE_URL: {
	        INIT_PATH: commonPagePath +'#inits',
	        INIT_GENDER_PATH: commonPagePath+'#inits/gender',
	        MAIN_PATH: commonPagePath
	    },
	    API_URL: {
	
	    },
	    DATE: '?date=2016072101'// +Math.random().toString().replace('.', '')
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\n<div id=\"page-init\">\n    <!--generate by js-->\n</div>\n<section>\n    <div>\n        宝宝出生日期\n    </div>\n</section>\n<script id=\"init-tmpl\" type=\"x-tmpl-mustache\">\n    <div class=\"init\">\n        <div class=\"header\">\n            <div class=\"banner\">\n                <img src=\"{{IMG_PATH}}init_banner.png{{DATE}}\" />\n            </div>\n            <div class=\"open\">\n                <i><img src=\"/backbone.spa/images/init_iconopen.png\" /></i>\n                <span></span>\n            </div>\n            <div class=\"bottom\">\n                <img src=\"/backbone.spa/images/init_top.png\" />\n            </div>\n        </div>\n    </div>\n\n</script>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(17);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  width: 100%;\n  min-height: 100%;\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n  font-size: 100%;\n  font-family: Microsoft YaHei, \"\\5FAE\\8F6F\\96C5\\9ED1\", Helvetica, STHeiti, Droid Sans Fallback;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  min-height: 100%;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*\n* add by Sun yi\n*/\nul,\nol {\n  list-style: none;\n}\nbody,\ndiv,\nol,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nth,\ntd,\ndl,\ndd,\nform,\niframe,\ninput,\ntextarea,\nselect,\nlabel,\narticle,\naside,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n/*\n*remove outline\tby nsee 32015.9.26\n*/\na,\ninput,\ntextarea,\nselect {\n  outline: none;\n}\nhtml {\n  background-color: #ffffff;\n}\n.container {\n  background: #ffffff;\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  min-width: 20rem;\n  max-width: 30rem;\n  overflow: hidden;\n  margin: 0 auto;\n  color: #101010;\n}\n.wrap {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  overflow: hidden;\n}\nimg {\n  width: 100%;\n  display: block;\n  vertical-align: top;\n}\n.clear {\n  _zoom: 1;\n}\n.clear:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.auto {\n  overflow: hidden;\n}\n.li-left li {\n  float: left;\n}\n.li-right li {\n  float: right;\n}\na.a-common:link,\na.a-common:visited,\na.a-common:hover,\na.a-common:active {\n  color: #be2837;\n  text-decoration: underline;\n}\n.hide {\n  display: none;\n}\n.rlt {\n  position: relative;\n}\n/* LESS Document */\n/*圆角*/\n/**/\n.init {\n  width: 100%;\n  height: 10.8125rem;\n  background-color: #24d7cc;\n  position: relative;\n}\n.init .open {\n  width: 6.375rem;\n  margin: 1.5rem auto 0 auto;\n}\n.init .open i {\n  display: inline-block;\n  vertical-align: middle;\n  width: .625rem;\n  height: .625rem;\n}\n.init .open span {\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  font-size: .75rem;\n}\n.init .banner {\n  padding-top: 3.125rem;\n}\n.init .bottom {\n  width: 100%;\n  height: .5625rem;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by sun yi on 2016/7/20.
	 */
	
	var config = __webpack_require__(14);
	
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

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\n<div class=\"gender\">\n    <header class=\"title\">\n        <h4>因男孩和女孩成长速度有差异</h4>\n        <h4>请选择宝宝性别</h4>\n    </header>\n    <ul id=\"select-sex\">\n        <li class=\"boy active\" data-id=\"1\">\n            <i></i>\n            <span>男孩</span>\n        </li>\n        <li class=\"girl\" data-id=\"0\">\n            <i></i>\n            <span>女孩</span>\n        </li>\n    </ul>\n    <div class=\"btn clear\">\n        <span class=\"left\" id=\"pre-btn\">上一步</span>\n        <span class=\"right active\" id=\"next-btn\">完成</span>\n    </div>\n</div>\n\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(21);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"utf-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  width: 100%;\n  min-height: 100%;\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n  font-size: 100%;\n  font-family: Microsoft YaHei, \"\\5FAE\\8F6F\\96C5\\9ED1\", Helvetica, STHeiti, Droid Sans Fallback;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  min-height: 100%;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*\n* add by Sun yi\n*/\nul,\nol {\n  list-style: none;\n}\nbody,\ndiv,\nol,\nul,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nth,\ntd,\ndl,\ndd,\nform,\niframe,\ninput,\ntextarea,\nselect,\nlabel,\narticle,\naside,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n/*\n*remove outline\tby nsee 32015.9.26\n*/\na,\ninput,\ntextarea,\nselect {\n  outline: none;\n}\nhtml {\n  background-color: #ffffff;\n}\n.container {\n  background: #ffffff;\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  min-width: 20rem;\n  max-width: 30rem;\n  overflow: hidden;\n  margin: 0 auto;\n  color: #101010;\n}\n.wrap {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  overflow: hidden;\n}\nimg {\n  width: 100%;\n  display: block;\n  vertical-align: top;\n}\n.clear {\n  _zoom: 1;\n}\n.clear:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.auto {\n  overflow: hidden;\n}\n.li-left li {\n  float: left;\n}\n.li-right li {\n  float: right;\n}\na.a-common:link,\na.a-common:visited,\na.a-common:hover,\na.a-common:active {\n  color: #be2837;\n  text-decoration: underline;\n}\n.hide {\n  display: none;\n}\n.rlt {\n  position: relative;\n}\n/* LESS Document */\n/*圆角*/\n/**/\n.gender .title {\n  padding-top: 4.125rem;\n}\n.gender .title h4 {\n  text-align: center;\n  color: #24d7cc;\n  font-size: 1.0625rem;\n  font-weight: 500;\n}\n.gender ul {\n  width: 5.625rem;\n  margin: 0 auto;\n  padding-top: 1.125rem;\n}\n.gender ul li {\n  margin-top: 1.8125rem;\n}\n.gender ul li i {\n  display: block;\n  width: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n}\n.gender ul li span {\n  width: 100%;\n  display: block;\n  margin: .5rem auto 0  auto;\n  font-size: 1rem ;\n  text-align: center;\n}\n.gender ul li.boy i {\n  height: 5.625rem;\n  background-image: url('/backbone.spa/images/gender_boy.png?random=06661838851869106');\n}\n.gender ul li.boy span {\n  color: #5b7c9b;\n}\n.gender ul li.boy.active i {\n  background-image: url('/backbone.spa/images/gender_boy_active.png?random=04223203712608665');\n}\n.gender ul li.girl i {\n  height: 6.1875rem;\n  background-image: url('/backbone.spa/images/gender_girl.png?random=05678966848645359');\n}\n.gender ul li.girl span {\n  color: #ff6382;\n}\n.gender ul li.girl.active i {\n  background-image: url('/backbone.spa/images/gender_girl_active.png?random=010712078982032835');\n}\n.gender .btn {\n  width: 15.9375rem;\n  height: 2rem;\n  margin: 4rem auto 2.75rem auto;\n}\n.gender .btn span {\n  display: inline-block;\n  width: 6.9375rem;\n  height: 100%;\n  line-height: 2rem;\n  text-align: center;\n  border: .0625rem solid #24d7cc;\n  color: #24d7cc;\n  font-size: .9375rem;\n  border-radius: 2rem;\n  -o-border-radius: 2rem;\n  -ms-border-radius: 2rem;\n  -moz-border-radius: 2rem;\n  -webkit-border-radius: 2rem;\n}\n.gender .btn span.active {\n  background-color: #24d7cc;\n  color: #FFFFFF;\n}\n", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/7/20 0020.
	 */
	var config = __webpack_require__(14);
	
	var Gender = (function() {
	
	    var gender = function() {},
	        fn = gender.prototype;
	
	    fn.onLoad = function(){
	        this.handleClick();
	    };
	
	    fn.data = {
	
	    };
	
	    fn.handleClick = function () {
	        var that = this;
	        $('#select-sex').find('li').on('click', function () {
	            var $this = $(this);
	            $this.addClass('active').siblings('li').removeClass('active');
	            that.data.gender = $this.data('id');
	        });
	
	        $('#pre-btn').on('click',function(){
	            location.href = config.PAGE_URL.INIT_PATH;
	        });
	
	        $('#next-btn').on('click',function(){
	            location.href = config.PAGE_URL.MAIN_PATH;
	        });
	    };
	
	    return new gender;
	
	})();
	
	module.exports = Gender;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div id=\"index\">\r\n    <h1>module2</h1>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur corporis, delectus doloribus ea earum est illo illum in ipsam ipsum magnam mollitia neque officiis, perspiciatis quia quidem recusandae saepe sapiente sit suscipit velit vitae voluptatem voluptatum! Consectetur cum debitis, eligendi harum ipsum possimus. A accusantium animi itaque non.\r\n    </p>\r\n</div>";

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map