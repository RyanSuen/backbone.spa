/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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

	var $ = __webpack_require__(1),
	    _ = __webpack_require__(2),
	    Backbone = __webpack_require__(3);

	var App = {
	    Router: __webpack_require__(4)
	};

	$(function() {

	    //路由
	    var mainRouter = new App.Router();    //实例化路由
	    Backbone.history.start(/*{pushState: true}*/);    //启用路由

	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Backbone;

/***/ },
/* 4 */
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
	        var module1Page =  __webpack_require__(5),
	            module1Css = __webpack_require__(6),
	            merge = mergeHtmlAndCss(module1Css, module1Page);
	        $('body').html( merge );

	        //js
	        var module1 = __webpack_require__(9);
	        module1.onLoad();

	    },

	    getTeamsAction: function() {
	        var module2 = __webpack_require__(10);
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div id=\"index\">\r\n    <h1>module1</h1>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur corporis, delectus doloribus ea earum est illo illum in ipsam ipsum magnam mollitia neque officiis, perspiciatis quia quidem recusandae saepe sapiente sit suscipit velit vitae voluptatem voluptatum! Consectetur cum debitis, eligendi harum ipsum possimus. A accusantium animi itaque non.\r\n    </p>\r\n</div>";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output

	// Get the styles
	var styles = __webpack_require__(7);

	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: green;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by sun yi on 2016/7/15.
	 */

	var module1 = (function() {

	    var Module1 = function() {},
	        fn = Module1.prototype;

	    fn.onLoad = function() {
	        console.log( 'module1' );
	    };

	    return new Module1();

	})();

	module.exports =  module1;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div id=\"index\">\r\n    <h1>module2</h1>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur corporis, delectus doloribus ea earum est illo illum in ipsam ipsum magnam mollitia neque officiis, perspiciatis quia quidem recusandae saepe sapiente sit suscipit velit vitae voluptatem voluptatum! Consectetur cum debitis, eligendi harum ipsum possimus. A accusantium animi itaque non.\r\n    </p>\r\n</div>";

/***/ }
/******/ ]);