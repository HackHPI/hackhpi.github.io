var trackingClient =
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

	'use strict';

	var snippet = __webpack_require__(1);


	var settings = {
	  enabled: false,
	  initialized: false
	};

	var loadAnalytics = function loadAnalytics(apiKey) {
	  var hasLoaded = snippet(apiKey);
	  settings.initialized = true;
	  settings.enabled = true;
	  return hasLoaded;
	};

	var trackingService = {
	  init: function init(apiKey) {
	    if (!settings.initialized) {
	      var hasLoaded = loadAnalytics(apiKey);
	      if (hasLoaded) {
	        this.sendPage();
	      }
	    }
	  },

	  initRenderer: function initRenderer(apiKey) {
	    if (!settings.initialized) {
	      loadAnalytics(apiKey);
	    }
	  },

	  setEnabled: function setEnabled() {
	    if (settings.initialized) settings.enabled = true;
	  },

	  isEnabled: function isEnabled() {
	    return settings.enabled;
	  },

	  identify: function identify(userId, traits, options, callback) {
	    if (settings.enabled) window.analytics.identify(userId, traits, options, callback);
	  },

	  sendEvent: function sendEvent(eventName, properties, callback) {
	    if (settings.enabled) {
	      if (!properties) {
	        console.warn('sendEvent called without properties');
	        properties = {};
	      }

	      window.analytics.track(eventName, properties, callback);
	    } else {
	      console.warn('sendEvent called when trackingService was not initialized', {
	        eventName: eventName,
	        properties: properties
	      });
	      if (callback) callback();
	    }
	  },

	  sendPage: function sendPage(pageName, properties) {
	    if (settings.enabled) window.analytics.page(pageName, properties);
	  },

	  setUserProperties: function setUserProperties(userId, properties, callback) {
	    if (settings.enabled) window.analytics.identify(userId, properties, {}, callback);
	  },

	  incrementUserProperty: function incrementUserProperty(userId, properties) {
	    if (settings.enabled) {
	      window.analytics.identify(userId, {}, {
	        integrations: {
	          Intercom: {
	            increments: properties
	          }
	        }
	      });
	    }
	  },

	  updateWidget: function updateWidget() {
	    if (settings.enabled && typeof window.Intercom !== 'undefined') window.Intercom('update');
	  },

	  sendOrder: function sendOrder(data) {
	    if (settings.enabled) {
	      window.analytics.track('Added Product', data.product);
	      window.analytics.track('Completed Order', {
	        orderId: data.transactionId,
	        total: data.total,
	        revenue: data.total,
	        currency: data.currency,
	        label: data.sku,
	        products: [data.product]
	      });
	    }
	  },

	  trackRevertToV1: function trackRevertToV1(payload, callback) {
	    this.sendEvent('revert_to_V1', payload, callback);
	  },

	  trackPublishTypeform: function trackPublishTypeform(payload, callback) {
	    this.sendEvent('publish_typeform', payload, callback);
	  },

	  trackCreateEditBlock: function trackCreateEditBlock(payload, callback) {
	    this.sendEvent('create_edit_block', payload, callback);
	  },

	  trackChangeDesign: function trackChangeDesign(payload, callback) {
	    this.sendEvent('change_design', payload, callback);
	  }
	};

	module.exports = trackingService;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (apiKey) {
	  // Create a queue, but don't obliterate an existing one!
	  var analytics = window.analytics = window.analytics || [];
	  var hasLoaded = false;

	  // If the real analytics.js is already on the page return.
	  if (analytics.initialize) {
	    return hasLoaded;
	  }

	  // If the snippet was invoked already show an error.
	  if (analytics.invoked) {
	    if (window.console && console.error) {
	      console.error('Segment snippet included twice.');
	    }
	    return hasLoaded;
	  }

	  // Invoked flag, to make sure the snippet
	  // is never invoked twice.
	  analytics.invoked = true;

	  // A list of the methods in Analytics.js to stub.
	  analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'page', 'once', 'off', 'on'];

	  // Define a factory to create stubs. These are placeholders
	  // for methods in Analytics.js so that you never have to wait
	  // for it to load to actually record data. The `method` is
	  // stored as the first argument, so we can replay the data.
	  analytics.factory = function (method) {
	    return function () {
	      var args = Array.prototype.slice.call(arguments);
	      args.unshift(method);
	      analytics.push(args);
	      return analytics;
	    };
	  };

	  // For each of our methods, generate a queueing stub.
	  for (var i = 0; i < analytics.methods.length; i++) {
	    var key = analytics.methods[i];
	    analytics[key] = analytics.factory(key);
	  }

	  // Define a method to load Analytics.js from our CDN,
	  // and that will be sure to only ever load it once.
	  analytics.load = function (key) {
	    // Create an async script element based on your key.
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.async = true;
	    script.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') + 'cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';

	    // Insert our script next to the first script element.
	    var first = document.getElementsByTagName('script')[0];
	    first.parentNode.insertBefore(script, first);
	  };

	  // Add a version to keep track of what's in the wild.
	  analytics.SNIPPET_VERSION = '3.1.0';

	  // Modifying the segment snippet...
	  // We're going to call .load and .page ourselves so we
	  // can rewrite this as an npm module

	  // Load Analytics.js with your key, which will automatically
	  // load the tools you've enabled for your account. Boosh!
	  analytics.load(apiKey);

	  hasLoaded = true;

	  return hasLoaded;
	};

/***/ }
/******/ ]);