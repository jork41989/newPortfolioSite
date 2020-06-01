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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Content {\n  constructor() {\n    this.startAbout = this.startAbout.bind(this)\n  }\n\n  startAbout(){\n    let aboutPhoto = document.getElementById(\"profilePhoto\")\n    let aboutText = document.getElementById(\"aboutText\")\n    setTimeout(()=> {\n      aboutPhoto.classList.add(\"fadeMe\")\n      aboutText.classList.add(\"fadeMe\")\n    }, 500)\n  }\n\n}\n\nmodule.exports = Content\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Startup = __webpack_require__(/*! ./startup */ \"./src/startup.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const MainDiv = document.getElementById(\"mainDiv\");\n  const StartupGo = new Startup(MainDiv);\n  StartupGo.goForLaunch();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/startup.js":
/*!************************!*\
  !*** ./src/startup.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Content = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\nclass Startup{\n  constructor(mainDiv){\n    this.started = false;\n    this.i = 0\n    this.goForLaunch = this.goForLaunch.bind(this)\n    this.content = new Content\n    \n  }\n\n  \n\n  goForLaunch(){\n    this.openingCrawl()\n    if (this.started) console.log(\"is anyone there?\")\n    \n\n  }\n  \n  openingCrawl(){\n    let openingDiv = document.getElementById(\"opening\")\n    let openingText = document.getElementById(\"openingText\")\n    let openingTextDiv = document.getElementById(\"openingTextDiv\")\n    let openingTextP = document.getElementById(\"openingText\")\n    if (!this.started) {\n      let message = \"Welcome To JordanAckerman.com\"\n      let mesSplit = message.split(\"\")\n      let timeout = 200;\n      mesSplit.forEach(char => {\n\n        setTimeout(() => {\n          openingText.innerHTML += char;\n          if(message === openingText.innerHTML) {\n            this.started = true\n            setTimeout(()=>{\n              openingDiv.classList.add(\"hideMe\")\n              openingTextDiv.classList.add(\"hideMe\")\n              openingTextP.classList.add(\"hideMe\")\n              this.content.startAbout()\n              \n            }, 2000)\n          }\n        }, timeout)\n        timeout += 200\n      })\n\n    }\n    if (this.started) console.log(\"is anyone there?\")\n  }\n\n\n}\n\n\n\n\nmodule.exports = Startup\n\n//# sourceURL=webpack:///./src/startup.js?");

/***/ })

/******/ });