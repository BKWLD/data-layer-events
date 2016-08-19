(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dataLayerEvents", [], factory);
	else if(typeof exports === 'object')
		exports["dataLayerEvents"] = factory();
	else
		root["dataLayerEvents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	
	/*
	 * A lil' util to push stuff to the dataLayer while unsetting previous values
	 */
	var createInteractionEvent, eventName, eventPrefix, push;

	eventPrefix = 'generic';

	eventName = eventPrefix + 'Event';

	createInteractionEvent = function(category, action, label, value) {
	  var obj;
	  return (
	    obj = {
	      event: eventName
	    },
	    obj[eventPrefix + "Category"] = category,
	    obj[eventPrefix + "Action"] = action,
	    obj[eventPrefix + "Label"] = label,
	    obj[eventPrefix + "Value"] = value,
	    obj[eventPrefix + "nonInteraction"] = false,
	    obj
	  );
	};

	push = function(config) {
	  return window.dataLayer.push(config);
	};

	module.exports = {
	  event: function(category, action, label, value, nonInteraction) {
	    if (label == null) {
	      label = null;
	    }
	    if (value == null) {
	      value = null;
	    }
	    return push(createInteractionEvent.apply(null, arguments));
	  },
	  nonInteractionEvent: function(category, action, label, value) {
	    var config;
	    if (label == null) {
	      label = null;
	    }
	    if (value == null) {
	      value = null;
	    }
	    config = createInteractionEvent.apply(null, arguments);
	    config[eventPrefix + "nonInteraction"] = true;
	    return push(config);
	  }
	};


/***/ }
/******/ ])
});
;