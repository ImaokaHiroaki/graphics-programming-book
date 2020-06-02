/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/script/script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/script/canvas2d.ts":
/*!*********************************!*\
  !*** ./_src/script/canvas2d.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Canvas2dUtility = void 0;\r\nvar Canvas2dUtility = /** @class */ (function () {\r\n    function Canvas2dUtility(_canvas) {\r\n        this._canvas = _canvas;\r\n        this.canvasElement = _canvas;\r\n        this.context2d = _canvas.getContext(\"2d\");\r\n    }\r\n    Object.defineProperty(Canvas2dUtility.prototype, \"canvas\", {\r\n        get: function () { return this.canvasElement; },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Canvas2dUtility.prototype, \"context\", {\r\n        get: function () { return this.context2d; },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Canvas2dUtility.prototype.drawRect = function (x, y, width, height, color) {\r\n        // 色が指定されている場合はスタイルを設定する\r\n        if (color != null) {\r\n            this.context2d.fillStyle = color;\r\n        }\r\n        this.context2d.fillRect(x, y, width, height);\r\n    };\r\n    return Canvas2dUtility;\r\n}());\r\nexports.Canvas2dUtility = Canvas2dUtility;\r\n\n\n//# sourceURL=webpack:///./_src/script/canvas2d.ts?");

/***/ }),

/***/ "./_src/script/script.ts":
/*!*******************************!*\
  !*** ./_src/script/script.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar canvas2d_1 = __webpack_require__(/*! ./canvas2d */ \"./_src/script/canvas2d.ts\");\r\n(function () {\r\n    var CANVAS_WIDTH = 640;\r\n    var CANVAS_HEIGHT = 480;\r\n    var canvas;\r\n    var ctx;\r\n    var util;\r\n    window.addEventListener('load', function () {\r\n        var mainCanvas = document.body.querySelector('#main_canvas');\r\n        if (!mainCanvas) {\r\n            throw new Error('#main_canvasが取得できません');\r\n        }\r\n        util = new canvas2d_1.Canvas2dUtility(mainCanvas);\r\n        canvas = util.canvas;\r\n        ctx = util.context;\r\n        initialize();\r\n        render();\r\n    }, false);\r\n    function initialize() {\r\n        // canvas の大きさを設定\r\n        canvas.width = CANVAS_WIDTH;\r\n        canvas.height = CANVAS_HEIGHT;\r\n    }\r\n    function render() {\r\n        // 描画前に画面全体を不透明な明るいグレーで塗りつぶす\r\n        util.drawRect(0, 0, canvas.width, canvas.height, '#eeeeee');\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./_src/script/script.ts?");

/***/ })

/******/ });