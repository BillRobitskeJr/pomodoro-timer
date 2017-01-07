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

	'use strict';
	
	var _timer = __webpack_require__(1);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.addEventListener('load', function () {
	  var timer = new _timer2.default({
	    workDuration: 25 * 60000,
	    breakDuration: 5 * 60000,
	    longBreakDuration: 15 * 60000
	  });
	  var startButton = document.querySelector('.c-timer__start-button');
	  var pauseButton = document.querySelector('.c-timer__pause-button');
	  var restartButton = document.querySelector('.c-timer__restart-button');
	
	  startButton.addEventListener('click', function () {
	    timer.start();
	  });
	  pauseButton.addEventListener('click', function () {
	    timer.pause();
	  });
	  restartButton.addEventListener('click', function () {
	    timer.restart();
	  });
	}); /**
	     * Pomodoro Timer app behavior
	     *
	     * @copyright Bill Robitske, Jr. 2017
	     * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	     * @license MIT
	     */

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Timer module
	 *
	 * @module
	 * @copyright Bill Robitske, Jr. 2017
	 * @author Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
	 * @license MIT
	 */
	
	/**
	 * @class
	 */
	var _class = function () {
	
	  /**
	   * @constructor
	   * @param {Object} config This timer's configuration
	   * @param {Number} config.workDuration Length of work durations (ms)
	   * @param {Number} config.breakDuration Length of normal break durations (ms)
	   * @param {Number} config.longBreakDuration Length of long break durations (ms)
	   */
	  function _class(config) {
	    _classCallCheck(this, _class);
	
	    this.workDuration = config.workDuration;
	    this.breakDuration = config.breakDuration;
	    this.longBreakDuration = config.longBreakDuration;
	  }
	
	  /**
	   * Starts the next timer duration
	   */
	
	
	  _createClass(_class, [{
	    key: "start",
	    value: function start() {
	      this.timerStart = Date.now();
	    }
	
	    /**
	     * Pauses the current timer duration
	     */
	
	  }, {
	    key: "pause",
	    value: function pause() {
	      this.pauseStart = Date.now();
	    }
	
	    /**
	     * Restarts the timer
	     */
	
	  }, {
	    key: "restart",
	    value: function restart() {
	      this.completedDurations = 0;
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ }
/******/ ]);
//# sourceMappingURL=client-bundle.js.map