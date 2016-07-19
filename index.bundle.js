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
	        var mainPage =  __webpack_require__(5),
	            mainCss = __webpack_require__(6),
	            merge = mergeHtmlAndCss(mainCss, mainPage);
	        $('body').html( merge ).addClass('animated fadeIn');
	
	        //js
	        var main = __webpack_require__(9);
	        main.onLoad();
	    },
	
	    getTeamsAction: function() {
	        var module2 = __webpack_require__(10);
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
/* 5 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div id=\"index\">\r\n    <h1>module1</h1>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur corporis, delectus doloribus ea earum est illo illum in ipsam ipsum magnam mollitia neque officiis, perspiciatis quia quidem recusandae saepe sapiente sit suscipit velit vitae voluptatem voluptatum! Consectetur cum debitis, eligendi harum ipsum possimus. A accusantium animi itaque non.\r\n    </p>\r\n</div>\r\n\r\n<span class=\"get-picture\">\r\n    <input id=\"fileinput\" type=\"file\" />\r\n</span>\r\n\r\n<a id=\"link\" href=\"javascript:void 0;\">wo yao tiao lo </a>\r\n\r\n<video id=\"video\"></video>\r\n<canvas id=\"canvas\"></canvas>";

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
	exports.push([module.id, "body {\n  background: grey;\n}\n.get-picture {\n  display: block;\n  width: 4rem;\n  height: 4rem;\n  background: #000;\n  font-size: 1rem;\n  /*opacity: 0;*/\n  /*visibility: hidden;*/\n}\n.get-picture input {\n  height: 100%;\n  width: 100%;\n  display: block;\n  font-size: 1rem;\n}\n.place-img {\n  width: 6rem;\n  height: 6rem;\n}\n", ""]);
	
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
	
	var main = (function() {
	
	    var main = function() {},
	        fn = main.prototype;
	
	    fn.handleClick = function(){
	        $('#link').on('click',function(){
	            location.href = "/backbone.spa/#teams";
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<!--Created by sun yi on 2016/7/15.-->\r\n<div id=\"index\">\r\n    <h1>module2</h1>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur corporis, delectus doloribus ea earum est illo illum in ipsam ipsum magnam mollitia neque officiis, perspiciatis quia quidem recusandae saepe sapiente sit suscipit velit vitae voluptatem voluptatum! Consectetur cum debitis, eligendi harum ipsum possimus. A accusantium animi itaque non.\r\n    </p>\r\n</div>";

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map