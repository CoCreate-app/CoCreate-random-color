(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateColor"] = factory();
	else
		root["CoCreateColor"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./CoCreate-components/CoCreate-color/src/CoCreate-color.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CoCreate-components/CoCreate-color/src/CoCreate-color.js":
/*!******************************************************************!*\
  !*** ./CoCreate-components/CoCreate-color/src/CoCreate-color.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar defaultSaturation = 75;\nvar defaultLightness = 58;\nvar defaultAlpha = 1;\n\nfunction updateRandomColor() {\n  var avatars = document.querySelectorAll(\"[data-background_color='random']\");\n\n  var _iterator = _createForOfIteratorHelper(avatars),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var el = _step.value;\n      el.style.backgroundColor = randomHSLColor();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction randomHSLColor() {\n  var hash = Math.floor(Math.random() * 360);\n  return 'hsla(' + hash + ', ' + defaultSaturation + '%, ' + defaultLightness + '%, ' + defaultAlpha + ')';\n}\n\nvar CoCreateColor = _defineProperty({\n  randomHSLColor: randomHSLColor\n}, \"randomHSLColor\", randomHSLColor);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateColor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZUNvbG9yLy4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1jb2xvci9zcmMvQ29DcmVhdGUtY29sb3IuanM/Y2FlZiJdLCJuYW1lcyI6WyJkZWZhdWx0U2F0dXJhdGlvbiIsImRlZmF1bHRMaWdodG5lc3MiLCJkZWZhdWx0QWxwaGEiLCJ1cGRhdGVSYW5kb21Db2xvciIsImF2YXRhcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicmFuZG9tSFNMQ29sb3IiLCJoYXNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQ29DcmVhdGVDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxFQUF2QjtBQUNBLElBQUlDLFlBQVksR0FBRyxDQUFuQjs7QUFHQSxTQUFTQyxpQkFBVCxHQUE0QjtBQUMxQixNQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0NBQTFCLENBQWQ7O0FBRDBCLDZDQUVaRixPQUZZO0FBQUE7O0FBQUE7QUFFMUIsd0RBQXNCO0FBQUEsVUFBZEcsRUFBYztBQUNwQkEsUUFBRSxDQUFDQyxLQUFILENBQVNDLGVBQVQsR0FBMkJDLGNBQWMsRUFBekM7QUFDRDtBQUp5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSzNCOztBQUVELFNBQVNBLGNBQVQsR0FBeUI7QUFDdkIsTUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWlCLEdBQTVCLENBQVg7QUFDQSxTQUFPLFVBQVFILElBQVIsR0FBYSxJQUFiLEdBQWtCWCxpQkFBbEIsR0FBb0MsS0FBcEMsR0FBMENDLGdCQUExQyxHQUEyRCxLQUEzRCxHQUFpRUMsWUFBakUsR0FBOEUsR0FBckY7QUFDRDs7QUFFRCxJQUFNYSxhQUFhO0FBQUtMLGdCQUFjLEVBQWRBO0FBQUwscUJBQXFCQSxjQUFyQixDQUFuQjs7QUFDZUssNEVBQWYiLCJmaWxlIjoiLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWNvbG9yL3NyYy9Db0NyZWF0ZS1jb2xvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBkZWZhdWx0U2F0dXJhdGlvbiA9IDc1O1xubGV0IGRlZmF1bHRMaWdodG5lc3MgPSA1ODtcbmxldCBkZWZhdWx0QWxwaGEgPSAxO1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmRvbUNvbG9yKCl7XG4gIGxldCBhdmF0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWJhY2tncm91bmRfY29sb3I9J3JhbmRvbSddXCIpO1xuICBmb3IobGV0IGVsIG9mIGF2YXRhcnMpe1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUhTTENvbG9yKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tSFNMQ29sb3IoKXtcbiAgdmFyIGhhc2ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzYwKSk7XG4gIHJldHVybiAnaHNsYSgnK2hhc2grJywgJytkZWZhdWx0U2F0dXJhdGlvbisnJSwgJytkZWZhdWx0TGlnaHRuZXNzKyclLCAnK2RlZmF1bHRBbHBoYSsnKSc7XG59XG5cbmNvbnN0IENvQ3JlYXRlQ29sb3IgPSB7IHJhbmRvbUhTTENvbG9yLCByYW5kb21IU0xDb2xvciB9O1xuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVDb2xvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./CoCreate-components/CoCreate-color/src/CoCreate-color.js\n");

/***/ })

/******/ })["default"];
});