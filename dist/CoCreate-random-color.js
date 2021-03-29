(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["randomColor"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["randomColor"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar defaultSaturation = 75;\nvar defaultLightness = 58;\nvar defaultAlpha = 1;\n\nfunction updateRandomColor() {\n  var avatars = document.querySelectorAll(\"[data-background_color='random']\");\n\n  var _iterator = _createForOfIteratorHelper(avatars),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var el = _step.value;\n      el.style.backgroundColor = randomHSLColor();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction randomHSLColor() {\n  var hash = Math.floor(Math.random() * 360);\n  return 'hsla(' + hash + ', ' + defaultSaturation + '%, ' + defaultLightness + '%, ' + defaultAlpha + ')';\n}\n\nvar CoCreateRandomColor = _defineProperty({\n  randomHSLColor: randomHSLColor\n}, \"randomHSLColor\", randomHSLColor);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateRandomColor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5yYW5kb21Db2xvci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRlZmF1bHRTYXR1cmF0aW9uIiwiZGVmYXVsdExpZ2h0bmVzcyIsImRlZmF1bHRBbHBoYSIsInVwZGF0ZVJhbmRvbUNvbG9yIiwiYXZhdGFycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyYW5kb21IU0xDb2xvciIsImhhc2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJDb0NyZWF0ZVJhbmRvbUNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJQSxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLEVBQXZCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLENBQW5COztBQUdBLFNBQVNDLGlCQUFULEdBQTRCO0FBQzFCLE1BQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQ0FBMUIsQ0FBZDs7QUFEMEIsNkNBRVpGLE9BRlk7QUFBQTs7QUFBQTtBQUUxQix3REFBc0I7QUFBQSxVQUFkRyxFQUFjO0FBQ3BCQSxRQUFFLENBQUNDLEtBQUgsQ0FBU0MsZUFBVCxHQUEyQkMsY0FBYyxFQUF6QztBQUNEO0FBSnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLM0I7O0FBRUQsU0FBU0EsY0FBVCxHQUF5QjtBQUN2QixNQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBaUIsR0FBNUIsQ0FBWDtBQUNBLFNBQU8sVUFBUUgsSUFBUixHQUFhLElBQWIsR0FBa0JYLGlCQUFsQixHQUFvQyxLQUFwQyxHQUEwQ0MsZ0JBQTFDLEdBQTJELEtBQTNELEdBQWlFQyxZQUFqRSxHQUE4RSxHQUFyRjtBQUNEOztBQUVELElBQU1hLG1CQUFtQjtBQUFLTCxnQkFBYyxFQUFkQTtBQUFMLHFCQUFxQkEsY0FBckIsQ0FBekI7O0FBQ2VLLGtGQUFmIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRlZmF1bHRTYXR1cmF0aW9uID0gNzU7XG5sZXQgZGVmYXVsdExpZ2h0bmVzcyA9IDU4O1xubGV0IGRlZmF1bHRBbHBoYSA9IDE7XG5cblxuZnVuY3Rpb24gdXBkYXRlUmFuZG9tQ29sb3IoKXtcbiAgbGV0IGF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYmFja2dyb3VuZF9jb2xvcj0ncmFuZG9tJ11cIik7XG4gIGZvcihsZXQgZWwgb2YgYXZhdGFycyl7XG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tSFNMQ29sb3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21IU0xDb2xvcigpe1xuICB2YXIgaGFzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzNjApKTtcbiAgcmV0dXJuICdoc2xhKCcraGFzaCsnLCAnK2RlZmF1bHRTYXR1cmF0aW9uKyclLCAnK2RlZmF1bHRMaWdodG5lc3MrJyUsICcrZGVmYXVsdEFscGhhKycpJztcbn1cblxuY29uc3QgQ29DcmVhdGVSYW5kb21Db2xvciA9IHsgcmFuZG9tSFNMQ29sb3IsIHJhbmRvbUhTTENvbG9yIH07XG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZVJhbmRvbUNvbG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ })["default"];
});