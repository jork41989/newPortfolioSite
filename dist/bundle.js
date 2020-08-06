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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.ts":
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\nvar Content = /** @class */ (function () {\n    function Content() {\n        this.startAbout = this.startAbout.bind(this);\n    }\n    Content.prototype.startAbout = function () {\n        var aboutPhoto = document.getElementById(\"profilePhoto\");\n        var aboutText = document.getElementById(\"aboutText\");\n        var aboutHeader = document.getElementById(\"aboutHeader\");\n        setTimeout(function () {\n            aboutPhoto.classList.add(\"fadeMe\");\n            aboutText.classList.add(\"fadeMe\");\n            aboutHeader.classList.add(\"fadeMe\");\n        }, 500);\n    };\n    return Content;\n}());\n\n// module.exports = Content\n\n\n//# sourceURL=webpack:///./src/content.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_startup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/startup */ \"./src/startup.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var MainDiv = document.getElementById(\"mainDiv\");\n    var StartupGo = new _src_startup__WEBPACK_IMPORTED_MODULE_0__[\"Startup\"]();\n    StartupGo.goForLaunch();\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/menu.ts":
/*!*********************!*\
  !*** ./src/menu.ts ***!
  \*********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nvar Menu = /** @class */ (function () {\n    function Menu(currentPage) {\n        this.currentPage = currentPage;\n        this.currentPage = \"about\";\n    }\n    Menu.prototype.pageSwitch = function (selected) {\n        var cur = document.getElementById(this.currentPage);\n        var select = document.getElementById(selected);\n        var curBody = document.getElementById(this.currentPage + \"Main\");\n        var selectedBody = document.getElementById(selected + \"Main\");\n        var selectedFoot = document.getElementById(\"footBranch\");\n        cur.classList.remove(\"selectedMenu\");\n        cur.classList.add(\"notSelectedMenu\");\n        select.classList.add(\"selectedMenu\");\n        select.classList.remove(\"notSelectedMenu\");\n        curBody.classList.add(\"hidden\");\n        selectedBody.classList.remove(\"hidden\");\n        selectedFoot.innerText = selected;\n        this.currentPage = selected;\n    };\n    Menu.prototype.pageButtons = function () {\n        var _this = this;\n        var about = document.getElementById(\"about\");\n        var projects = document.getElementById(\"projects\");\n        var skills = document.getElementById(\"skills\");\n        var resume = document.getElementById(\"resume\");\n        about.addEventListener(\"click\", function () {\n            _this.pageSwitch(\"about\");\n        });\n        projects.addEventListener(\"click\", function () {\n            _this.pageSwitch(\"projects\");\n        });\n        skills.addEventListener(\"click\", function () {\n            _this.pageSwitch(\"skills\");\n        });\n        resume.addEventListener(\"click\", function () {\n            _this.pageSwitch(\"resume\");\n        });\n    };\n    Menu.prototype.start = function () {\n        this.currentPage = \"about\";\n        this.pageButtons();\n    };\n    return Menu;\n}());\n\n\n\n//# sourceURL=webpack:///./src/menu.ts?");

/***/ }),

/***/ "./src/startup.ts":
/*!************************!*\
  !*** ./src/startup.ts ***!
  \************************/
/*! exports provided: Startup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Startup\", function() { return Startup; });\n/* harmony import */ var _src_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/content */ \"./src/content.ts\");\n/* harmony import */ var _src_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/menu */ \"./src/menu.ts\");\n\n\nvar Startup = /** @class */ (function () {\n    function Startup(started, i) {\n        this.started = started;\n        this.i = i;\n        this.started = false;\n        this.i = 0;\n        this.goForLaunch = this.goForLaunch.bind(this);\n    }\n    Startup.prototype.goForLaunch = function () {\n        this.openingCrawl();\n        if (this.started)\n            console.log(\"is anyone there?\");\n    };\n    Startup.prototype.openingCrawl = function () {\n        var _this = this;\n        var openingDiv = document.getElementById(\"opening\");\n        var openingText = document.getElementById(\"openingText\");\n        var openingTextDiv = document.getElementById(\"openingTextDiv\");\n        var openingTextP = document.getElementById(\"openingText\");\n        if (!this.started) {\n            var message_1 = \"Welcome To JordanAckerman.com\";\n            var mesSplit = message_1.split(\"\");\n            var timeout_1 = 200;\n            mesSplit.forEach(function (char) {\n                setTimeout(function () {\n                    openingText.innerHTML += char;\n                    if (message_1 === openingText.innerHTML) {\n                        _this.started = true;\n                        setTimeout(function () {\n                            openingDiv.classList.add(\"hideMe\");\n                            openingTextDiv.classList.add(\"hideMe\");\n                            openingTextP.classList.add(\"hideMe\");\n                            var content = new _src_content__WEBPACK_IMPORTED_MODULE_0__[\"Content\"]();\n                            content.startAbout();\n                            var MenuMain = new _src_menu__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"]();\n                            MenuMain.start();\n                        }, 2000);\n                    }\n                }, timeout_1);\n                timeout_1 += 200;\n            });\n        }\n        if (this.started)\n            console.log(\"is anyone there?\");\n    };\n    return Startup;\n}());\n\n\n\n//# sourceURL=webpack:///./src/startup.ts?");

/***/ })

/******/ });