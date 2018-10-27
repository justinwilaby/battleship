/******/
( function (modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/
    if (installedModules[ moduleId ]) {
      /******/
      return installedModules[ moduleId ].exports;
      /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/
    var module = installedModules[ moduleId ] = {
      /******/      i: moduleId,
      /******/      l: false,
      /******/      exports: {}
      /******/
    };
    /******/
    /******/ 		// Execute the module function
    /******/
    modules[ moduleId ].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/
    return module.exports;
    /******/
  }

  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {enumerable: true, get: getter});
      /******/
    }
    /******/
  };
  /******/
  /******/ 	// define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {value: true});
    /******/
  };
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (( mode & 4 ) && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {enumerable: true, value: value});
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[ key ];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
      /******/      function getDefault() {
        return module[ 'default' ];
      } :
      /******/      function getModuleExports() {
        return module;
      };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ 	// __webpack_public_path__
  /******/
  __webpack_require__.p = 'http://localhost:8080/';
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = './src/js/index.js');
  /******/
} )
/************************************************************************/
/******/({

  /***/ './node_modules/@babel/runtime/helpers/arrayWithHoles.js':
  /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    module.exports = _arrayWithHoles;

    /***/
  } ),

  /***/ './node_modules/@babel/runtime/helpers/defineProperty.js':
  /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[ key ] = value;
      }

      return obj;
    }

    module.exports = _defineProperty;

    /***/
  } ),

  /***/ './node_modules/@babel/runtime/helpers/iterableToArray.js':
  /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]') return Array.from(iter);
    }

    module.exports = _iterableToArray;

    /***/
  } ),

  /***/ './node_modules/@babel/runtime/helpers/nonIterableRest.js':
  /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    function _nonIterableRest() {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }

    module.exports = _nonIterableRest;

    /***/
  } ),

  /***/ './node_modules/@babel/runtime/helpers/toArray.js':
  /*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ './node_modules/@babel/runtime/helpers/arrayWithHoles.js');

    var iterableToArray = __webpack_require__(/*! ./iterableToArray */ './node_modules/@babel/runtime/helpers/iterableToArray.js');

    var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ './node_modules/@babel/runtime/helpers/nonIterableRest.js');

    function _toArray(arr) {
      return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
    }

    module.exports = _toArray;

    /***/
  } ),

  /***/ './node_modules/bind-property/build/js/bind-property.js':
  /*!**************************************************************!*\
  !*** ./node_modules/bind-property/build/js/bind-property.js ***!
  \**************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    ( function (global, factory) {
      true ? factory(exports) : undefined;
    } )(this, function (exports) {
      'use strict';

      var shareStore = new WeakMap();

      function createStore(source) {
        var store = {
          changeListeners: new Map(),
          preCommitListeners: new Map(),
          preCommitPriorityQueue: [],
          priorityQueue: []
        };
        shareStore.set(source, store);
        return store;
      }

      /**
       * The changeListeners listening for
       * property changes.
       *
       * @return Map
       */


      function getChangeListeners() {
        var store = shareStore.get(this) || createStore(this);
        return store.changeListeners;
      }

      /**
       * The changeListeners listening for
       * pre commit property changes.
       *
       * @return Map
       */


      function getPreCommitListeners() {
        var store = shareStore.get(this) || createStore(this);
        return store.preCommitListeners;
      }

      /**
       * The changeListeners listening for
       * pre commit property changes.
       *
       * @return Array
       */


      function getPriorityQueue(source) {
        var type = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : 'priorityQueue';
        var store = shareStore.get(source) || createStore(source);
        return store[ type ];
      }

      /**
       * Adds a function as a change listener.
       * The callback will be provided
       *
       * @param {function} callback The callback that is notified of property changes.
       * @param {int} priority The priority of the callback. Larger number indicate lower priority
       */


      function addChangeListener(callback) {
        var priority = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : 0;
        getPriorityQueue(this).length = 0;
        getChangeListeners.call(this).set(callback, priority);
      }

      /**
       * Removes a callback that has been previously added
       *
       * @param {function} callback The callback to remove
       */


      function removeChangeListener(callback) {
        getPriorityQueue(this).length = 0;
        getChangeListeners.call(this).delete(callback);
      }

      /**
       * Adds a function as a change listener.
       * The callback will be provided
       *
       * @param {function} callback The callback that is notified of property changes.
       * @param {int} priority The priority of the callback. Larger number indicate lower priority
       */


      function addPreCommitListener(callback) {
        var priority = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : 0;
        getPriorityQueue(this, 'preCommitPriorityQueue').length = 0;
        getPreCommitListeners.call(this).set(callback, priority);
      }

      /**
       * Removes a callback that has been previously added
       *
       * @param {function} callback The callback to remove
       */


      function removePreCommitListener(callback) {
        getPriorityQueue(this, 'preCommitPriorityQueue').length = 0;
        getPreCommitListeners.call(this).delete(callback);
      }

      /**
       * Normalization function for applying values to objects.
       *
       * @example
       *
       * // Set complex properties
       * applyValue(htmlDiv, 'style.transform', 'translate3d(25px, 25px, 0)');
       *
       * // call function with arguments
       * applyValue(htmlButton, 'setAttribute', ['aria-selected', 'true']);
       *
       * // call function in context
       * applyValue(htmlInput, function(obj){this.value = obj.firstName + ' ' + obj.lastName}, myObject);
       *
       * @param {Object} targetSource Any object that contains the target path
       * @param {string | function} path Can be a string or function
       * @param {*} value Any value to apply.  If the path is a function and the
       * value is an array, each element is passed as an argument.
       */


      var changesByObject = new Map();
      var queue = new Set();
      var nextFrameId = void 0;

      /**
       * Function used to process property change
       * notifications by pooling and then executing
       * the notification changeListeners on the next tick.
       *
       * @param {Object} source The owner of the property being changed
       * @param {String} propertyName The name of the property that has changed
       * @param {Object} oldValue The value prior to the change
       * @param {Object} newValue The value after the change
       */

      function queueNotification(source, propertyName, oldValue, newValue) {
        if (oldValue === newValue) {
          return;
        }

        var info = changesByObject.get(source);

        if (info === undefined) {
          info = {
            source: source,
            changes: {}
          };
          changesByObject.set(source, info);
        }

        var changes = info.changes;
        changes[ propertyName ] = {
          oldValue: oldValue,
          newValue: newValue
        };
        queue.add(source);

        if (nextFrameId) {
          return;
        }

        nextFrameId = requestAnimationFrame(function () {
          var processingQueue = queue;
          var processingChanges = changesByObject;
          queue = new Set();
          changesByObject = new Map();
          nextFrameId = null; // nullify to enable queuing again

          processingQueue.forEach(function (source) {
            var _processingChanges$ge = processingChanges.get(source),
              changes = _processingChanges$ge.changes;

            notify(source, changes);
          });
        });
      }

      function mixinNotifier(prototype) {
        Object.defineProperties(prototype, {
          changeListeners: {
            get: getChangeListeners
          },
          preCommitListeners: {
            get: getPreCommitListeners
          },
          addChangeListener: {
            value: addChangeListener
          },
          removeChangeListener: {
            value: removeChangeListener
          },
          addPreCommitListener: {
            value: addPreCommitListener
          },
          removePreCommitListener: {
            value: removePreCommitListener
          },
          suspendNotifications: {
            value: false,
            writable: true
          }
        });
      }

      /**
       * Notifies all changeListeners that a property has changed.
       *
       * @param {Object} source The owner of the property
       * @param {Object} changes The details of property changes that
       * occurred on the context
       */


      function notify(source, changes) {
        var queue = getPriorityQueue(source);

        if (queue.length === 0) {
          buildPriorityQueue(getChangeListeners.call(source), queue);
        }

        queue.forEach(function (entry) {
          entry.callback(source, changes, entry.priority);
        });
      }

      /**
       * Builds the priority queue
       *
       * @param {Map} callbackMap The Map containing the callbacks as the key and the priority as the value.
       * @param {Array} queue The array that will contain the queue sorted by priority.
       */


      function buildPriorityQueue(callbackMap, queue) {
        callbackMap.forEach(function (priority, callback) {
          queue.push({
            priority: priority,
            callback: callback
          });
        });
        queue.sort(priorityComparator);
      }

      /**
       * A basic sort comparator
       *
       * @param item1
       * @param item2
       * @returns {number}
       */


      function priorityComparator(item1, item2) {
        var p1 = ~~item1.priority;
        var p2 = ~~item2.priority;

        if (p1 === p2) {
          return 0;
        }

        return p1 > p2 ? 1 : -1;
      }

      var defineProperty = function (obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[ key ] = value;
        }

        return obj;
      };

      var activeBindings = new WeakMap();

      function createGetter(property) {
        return function () {
          var self = this;
          return getPropertyValues(self)[ property ];
        };
      }

      function createSetter(property, descriptor) {
        return function (newValue) {
          var self = this;
          var suspendNotifications = self.suspendNotifications;
          var value = getPropertyValues(self)[ property ]; // Honor an existing setter if any

          if (typeof descriptor.set === 'function') {
            descriptor.set.call(self, newValue); // Mutations? Casts?

            if (descriptor.get) {
              value = descriptor.get.call(self);
            }
          }

          var oldValue = value;

          if (value === newValue || notifyPreCommit(self, defineProperty({}, property, {
            oldValue: oldValue,
            newValue: newValue
          }))) {
            return;
          }

          value = newValue;

          if (suspendNotifications === false && !getChangeListeners.call(self).values().next().done) {
            queueNotification(self, property, oldValue, newValue);
          }

          getPropertyValues(self)[ property ] = value;
        };
      }

      function getPropertyValues(context) {
        if (activeBindings.has(context)) {
          return activeBindings.get(context);
        }

        var values = {};
        activeBindings.set(context, values);
        return values;
      }

      function notifyPreCommit(source, changes) {
        var canceled = false;
        var queue = getPriorityQueue(source, 'preCommitPriorityQueue');

        if (queue.length === 0) {
          buildPriorityQueue(getPreCommitListeners.call(source), queue);
        }

        queue.forEach(function (item) {
          canceled = item.callback(source, changes, canceled, item.priority) === false || canceled;
        });
        return canceled;
      }

      /**
       * Structures the prototype to define a bindable property
       * on the first write when "this" is an instance of the
       * class or prototype.
       *
       * @param {Descriptor} descriptor The descriptor of the property to bind
       */


      function bindable(descriptor) {
        descriptor.initializer = function () {
          debugger; // Mixin

          var prototype = this.constructor.prototype;

          if (!activeBindings.has(prototype)) {
            mixinNotifier(prototype);
            activeBindings.set(prototype, true);
          }

          const {
            descriptor: propertyDescriptor,
            key
          } = descriptor; // already bound - nothing to do

          if (activeBindings.has(propertyDescriptor.get)) {
            return;
          }

          Object.defineProperty(prototype, key, {
            get: propertyDescriptor.get || createGetter(key),
            set: createSetter(key, propertyDescriptor),
            enumerable: propertyDescriptor.enumerable || true
          });
        };

        descriptor.kind = 'field';
        descriptor.placement = 'prototype';
        descriptor.descriptor.configurable = true;
        return descriptor;
      }

      exports.bindable = bindable;
      exports.queueNotification = queueNotification;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });

    /***/
  } ),

  /***/ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/board/board.scss':
  /*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/js/board/board.scss ***!
  \****************************************************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js')(false);
// imports


// module
    exports.push([ module.i, '#player1Grid, #player2Grid {\n  position: absolute; }\n  #player1Grid path.cell, #player2Grid path.cell {\n    transform: translate(225px, 225px);\n    transition: all .25s ease;\n    fill: transparent;\n    stroke: black; }\n\n#player1Grid {\n  left: 2rem; }\n\n#player2Grid {\n  right: 2rem; }\n  #player2Grid path.cell:hover {\n    fill: #ff0000; }\n', '' ]);

// exports


    /***/
  } ),

  /***/ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/board/console.scss':
  /*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/js/board/console.scss ***!
  \******************************************************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js')(false);
// imports


// module
    exports.push([ module.i, '#console {\n  width: 300px;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  z-index: 9999; }\n  #console .stats {\n    margin-bottom: 20px;\n    display: flex; }\n    #console .stats ul {\n      color: white;\n      width: 100%;\n      font-size: 24px; }\n      #console .stats ul.selected {\n        color: green; }\n      #console .stats ul li:first-of-type {\n        padding-bottom: 10px;\n        border-bottom: 1px solid black; }\n      #console .stats ul + ul {\n        position: relative;\n        padding-left: 20px; }\n        #console .stats ul + ul::before {\n          content: \'\';\n          position: absolute;\n          border-left: 1px solid black;\n          height: 100%;\n          left: 10px; }\n', '' ]);

// exports


    /***/
  } ),

  /***/ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/main.scss':
  /*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/js/main.scss ***!
  \*********************************************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ './node_modules/css-loader/lib/url/escape.js');
    exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js')(false);
// imports


// module
    exports.push([ module.i, '@font-face {\n  font-family: \'D Day Stencil\';\n  src: url(' + escape(__webpack_require__(/*! ../fonts/D_Day_Stencil.woff */ './src/fonts/D_Day_Stencil.woff')) + ') format("woff"), url(' + escape(__webpack_require__(/*! ../fonts/D_Day_Stencil.ttf */ './src/fonts/D_Day_Stencil.ttf')) + ') format("truetype"); }\n\nbody {\n  font-family: D Day Stencil, sans-serif;\n  background: #333;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n#battleshipBoard {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 800px; }\n\nbutton {\n  font-family: D Day Stencil, sans-serif;\n  font-size: 25px;\n  border: 1px solid #2174b9;\n  background: #8296a7;\n  border-radius: 10px;\n  outline: none; }\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n', '' ]);

// exports


    /***/
  } ),

  /***/ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/ship/ship.scss':
  /*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/js/ship/ship.scss ***!
  \**************************************************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js')(false);
// imports


// module
    exports.push([ module.i, 'svg g[id^="ship_"][draggable] {\n  cursor: move; }\n  svg g[id^="ship_"][draggable] path[id^="rotate_"] {\n    visibility: visible; }\n\nsvg g[id^="ship_"] text {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nsvg g[id^="ship_"] path[id^="rotate_"] {\n  cursor: pointer;\n  pointer-events: bounding-box;\n  visibility: hidden; }\n', '' ]);

// exports


    /***/
  } ),

  /***/ './node_modules/css-loader/lib/css-base.js':
  /*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[ 2 ]) {
            return '@media ' + item[ 2 ] + '{' + content + '}';
          } else {
            return content;
          }
        }).join('');
      }; // import a list of modules into the list


      list.i = function (modules, mediaQuery) {
        if (typeof modules === 'string') modules = [ [ null, modules, '' ] ];
        var alreadyImportedModules = {};

        for (var i = 0; i < this.length; i++) {
          var id = this[ i ][ 0 ];
          if (typeof id === 'number') alreadyImportedModules[ id ] = true;
        }

        for (i = 0; i < modules.length; i++) {
          var item = modules[ i ]; // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)

          if (typeof item[ 0 ] !== 'number' || !alreadyImportedModules[ item[ 0 ] ]) {
            if (mediaQuery && !item[ 2 ]) {
              item[ 2 ] = mediaQuery;
            } else if (mediaQuery) {
              item[ 2 ] = '(' + item[ 2 ] + ') and (' + mediaQuery + ')';
            }

            list.push(item);
          }
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[ 1 ] || '';
      var cssMapping = item[ 3 ];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join('\n');
      }

      return [ content ].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
      return '/*# ' + data + ' */';
    }

    /***/
  } ),

  /***/ './node_modules/css-loader/lib/url/escape.js':
  /*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    module.exports = function escape(url) {
      if (typeof url !== 'string') {
        return url;
      } // If url is already wrapped in quotes, remove them


      if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
      } // Should url be wrapped?
      // See https://drafts.csswg.org/css-values-3/#urls


      if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
      }

      return url;
    };

    /***/
  } ),

  /***/ './node_modules/style-loader/lib/addStyles.js':
  /*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

    var stylesInDom = {};

    var memoize = function (fn) {
      var memo;

      return function () {
        if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
        return memo;
      };
    };

    var isOldIE = memoize(function () {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      return window && document && document.all && !window.atob;
    });

    var getTarget = function (target, parent) {
      if (parent) {
        return parent.querySelector(target);
      }
      return document.querySelector(target);
    };

    var getElement = ( function (fn) {
      var memo = {};

      return function (target, parent) {
        // If passing function in options, then use it for resolve "head" element.
        // Useful for Shadow Root style i.e
        // {
        //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
        // }
        if (typeof target === 'function') {
          return target();
        }
        if (typeof memo[ target ] === 'undefined') {
          var styleTarget = getTarget.call(this, target, parent);
          // Special case to return head of iframe instead of iframe itself
          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          }
          memo[ target ] = styleTarget;
        }
        return memo[ target ]
      };
    } )();

    var singleton = null;
    var singletonCounter = 0;
    var stylesInsertedAtTop = [];

    var fixUrls = __webpack_require__(/*! ./urls */ './node_modules/style-loader/lib/urls.js');

    module.exports = function (list, options) {
      if (typeof DEBUG !== 'undefined' && DEBUG) {
        if (typeof document !== 'object') throw new Error('The style-loader cannot be used in a non-browser environment');
      }

      options = options || {};

      options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

      // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page
      if (!options.singleton && typeof options.singleton !== 'boolean') options.singleton = isOldIE();

      // By default, add <style> tags to the <head> element
      if (!options.insertInto) options.insertInto = 'head';

      // By default, add <style> tags to the bottom of the target
      if (!options.insertAt) options.insertAt = 'bottom';

      var styles = listToStyles(list, options);

      addStylesToDom(styles, options);

      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[ i ];
          var domStyle = stylesInDom[ item.id ];

          domStyle.refs--;
          mayRemove.push(domStyle);
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[ i ];

          if (domStyle.refs === 0) {
            for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[ j ]();

            delete stylesInDom[ domStyle.id ];
          }
        }
      };
    };

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[ i ];
        var domStyle = stylesInDom[ item.id ];

        if (domStyle) {
          domStyle.refs++;

          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[ j ](item.parts[ j ]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[ j ], options));
          }
        } else {
          var parts = [];

          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[ j ], options));
          }

          stylesInDom[ item.id ] = {id: item.id, refs: 1, parts: parts};
        }
      }
    }

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[ i ];
        var id = options.base ? item[ 0 ] + options.base : item[ 0 ];
        var css = item[ 1 ];
        var media = item[ 2 ];
        var sourceMap = item[ 3 ];
        var part = {css: css, media: media, sourceMap: sourceMap};

        if (!newStyles[ id ]) styles.push(newStyles[ id ] = {id: id, parts: [ part ]});
        else newStyles[ id ].parts.push(part);
      }

      return styles;
    }

    function insertStyleElement(options, style) {
      var target = getElement(options.insertInto)

      if (!target) {
        throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
      }

      var lastStyleElementInsertedAtTop = stylesInsertedAtTop[ stylesInsertedAtTop.length - 1 ];

      if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
          target.insertBefore(style, target.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
          target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
        } else {
          target.appendChild(style);
        }
        stylesInsertedAtTop.push(style);
      } else if (options.insertAt === 'bottom') {
        target.appendChild(style);
      } else if (typeof options.insertAt === 'object' && options.insertAt.before) {
        var nextSibling = getElement(options.insertAt.before, target);
        target.insertBefore(style, nextSibling);
      } else {
        throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n');
      }
    }

    function removeStyleElement(style) {
      if (style.parentNode === null) return false;
      style.parentNode.removeChild(style);

      var idx = stylesInsertedAtTop.indexOf(style);
      if (idx >= 0) {
        stylesInsertedAtTop.splice(idx, 1);
      }
    }

    function createStyleElement(options) {
      var style = document.createElement('style');

      if (options.attrs.type === undefined) {
        options.attrs.type = 'text/css';
      }

      if (options.attrs.nonce === undefined) {
        var nonce = getNonce();
        if (nonce) {
          options.attrs.nonce = nonce;
        }
      }

      addAttrs(style, options.attrs);
      insertStyleElement(options, style);

      return style;
    }

    function createLinkElement(options) {
      var link = document.createElement('link');

      if (options.attrs.type === undefined) {
        options.attrs.type = 'text/css';
      }
      options.attrs.rel = 'stylesheet';

      addAttrs(link, options.attrs);
      insertStyleElement(options, link);

      return link;
    }

    function addAttrs(el, attrs) {
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[ key ]);
      });
    }

    function getNonce() {
      if (false) {
      }

      return __webpack_require__.nc;
    }

    function addStyle(obj, options) {
      var style, update, remove, result;

      // If a transform function was defined, run it on the css
      if (options.transform && obj.css) {
        result = options.transform(obj.css);

        if (result) {
          // If transform returns a value, use that instead of the original css.
          // This allows running runtime transformations on the css.
          obj.css = result;
        } else {
          // If the transform function returns a falsy value, don't add this css.
          // This allows conditional loading of css
          return function () {
            // noop
          };
        }
      }

      if (options.singleton) {
        var styleIndex = singletonCounter++;

        style = singleton || ( singleton = createStyleElement(options) );

        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);

      } else if (
        obj.sourceMap &&
        typeof URL === 'function' &&
        typeof URL.createObjectURL === 'function' &&
        typeof URL.revokeObjectURL === 'function' &&
        typeof Blob === 'function' &&
        typeof btoa === 'function'
      ) {
        style = createLinkElement(options);
        update = updateLink.bind(null, style, options);
        remove = function () {
          removeStyleElement(style);

          if (style.href) URL.revokeObjectURL(style.href);
        };
      } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);
        remove = function () {
          removeStyleElement(style);
        };
      }

      update(obj);

      return function updateStyle(newObj) {
        if (newObj) {
          if (
            newObj.css === obj.css &&
            newObj.media === obj.media &&
            newObj.sourceMap === obj.sourceMap
          ) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    var replaceText = ( function () {
      var textStore = [];

      return function (index, replacement) {
        textStore[ index ] = replacement;

        return textStore.filter(Boolean).join('\n');
      };
    } )();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css;

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[ index ]) style.removeChild(childNodes[ index ]);

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[ index ]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, obj) {
      var css = obj.css;
      var media = obj.media;

      if (media) {
        style.setAttribute('media', media)
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    function updateLink(link, options, obj) {
      var css = obj.css;
      var sourceMap = obj.sourceMap;

      /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
      var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

      if (options.convertToAbsoluteUrls || autoFixUrls) {
        css = fixUrls(css);
      }

      if (sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
      }

      var blob = new Blob([ css ], {type: 'text/css'});

      var oldSrc = link.href;

      link.href = URL.createObjectURL(blob);

      if (oldSrc) URL.revokeObjectURL(oldSrc);
    }


    /***/
  } ),

  /***/ './node_modules/style-loader/lib/urls.js':
  /*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    /**
     * When source maps are enabled, `style-loader` uses a link element with a data-uri to
     * embed the css on the page. This breaks all relative urls because now they are relative to a
     * bundle instead of the current page.
     *
     * One solution is to only use full urls, but that may be impossible.
     *
     * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
     *
     * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
     *
     */
    module.exports = function (css) {
      // get current location
      var location = typeof window !== 'undefined' && window.location;

      if (!location) {
        throw new Error('fixUrls requires window.location');
      } // blank or null?


      if (!css || typeof css !== 'string') {
        return css;
      }

      var baseUrl = location.protocol + '//' + location.host;
      var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/'); // convert each url(...)

      /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

      var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
          return $1;
        }).replace(/^'(.*)'$/, function (o, $1) {
          return $1;
        }); // already a full url? no change

        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
          return fullMatch;
        } // convert the url to a full url


        var newUrl;

        if (unquotedOrigUrl.indexOf('//') === 0) {
          //TODO: should we add protocol?
          newUrl = unquotedOrigUrl;
        } else if (unquotedOrigUrl.indexOf('/') === 0) {
          // path should be relative to the base url
          newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        } else {
          // path should be relative to current directory
          newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
        } // send back the fixed url(...)


        return 'url(' + JSON.stringify(newUrl) + ')';
      }); // send back the fixed css

      return fixedCss;
    };

    /***/
  } ),

  /***/ './node_modules/svg-path-interpolator/src/math/SVGTransform.js':
  /*!*********************************************************************!*\
  !*** ./node_modules/svg-path-interpolator/src/math/SVGTransform.js ***!
  \*********************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    /**
     * Javascript adaptation of AffineTransform.ccp from
     * https://github.com/WebKit/webkit/blob/66e68cd8d7bf4ea1cf52f31ed9cb242f83ea5b57/Source/WebCore/platform/graphics/transforms/AffineTransform.cpp
     */

    /*
 * Copyright (C) Research In Motion Limited 2010. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public License
 * along with this library; see the file COPYING.LIB.  If not, write to
 * the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301, USA.
 */

    /*
 * Copyright (C) 2005, 2006 Apple Inc.  All rights reserved.
 *               2010 Dirk Schulze <krit@webkit.org>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
    const degToRads = __webpack_require__(/*! ./utils */ './node_modules/svg-path-interpolator/src/math/utils.js').degToRads;

    const radToDeg = __webpack_require__(/*! ./utils */ './node_modules/svg-path-interpolator/src/math/utils.js').radToDeg;

    class SVGTransform {
      constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        this.m_transform = [ +a, +b, +c, +d, +e, +f ];
      }

      makeIdentity() {
        this.setMatrix(1, 0, 0, 1, 0, 0);
      }

      setMatrix(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        const m_transform = this.m_transform;
        m_transform[ 0 ] = +a;
        m_transform[ 1 ] = +b;
        m_transform[ 2 ] = +c;
        m_transform[ 3 ] = +d;
        m_transform[ 4 ] = +e;
        m_transform[ 5 ] = +f;
      }

      matrix(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        this.setMatrix(a, b, c, d, e, f);
      }

      isIdentity() {
        const m_transform = this.m_transform;
        return m_transform[ 0 ] === 1 && m_transform[ 1 ] === 0 && m_transform[ 2 ] === 0 && m_transform[ 3 ] === 1 && m_transform[ 4 ] === 0 && m_transform[ 5 ] === 0;
      }

      static det(transform) {
        return +( transform[ 0 ] * transform[ 3 ] - transform[ 1 ] * transform[ 2 ] );
      }

      get xScale() {
        const m_transform = this.m_transform;
        return Math.sqrt(m_transform[ 0 ] * m_transform[ 0 ] + m_transform[ 1 ] * m_transform[ 1 ]);
      }

      get yScale() {
        const m_transform = this.m_transform;
        return Math.sqrt(m_transform[ 2 ] * m_transform[ 2 ] + m_transform[ 3 ] * m_transform[ 3 ]);
      }

      get isInvertible() {
        const determinant = SVGTransform.det(this.m_transform);
        return Boolean(determinant && isFinite(determinant));
      }

      inverse() {
        const m_transform = this.m_transform;
        const determinant = SVGTransform.det(m_transform);
        const result = new SVGTransform();

        if (this.isIdentityOrTranslation()) {
          result.m_transform[ 4 ] = -m_transform[ 4 ];
          result.m_transform[ 5 ] = -m_transform[ 5 ];
          return result;
        }

        result.m_transform[ 0 ] = m_transform[ 3 ] / determinant;
        result.m_transform[ 1 ] = -m_transform[ 1 ] / determinant;
        result.m_transform[ 2 ] = -m_transform[ 2 ] / determinant;
        result.m_transform[ 3 ] = m_transform[ 0 ] / determinant;
        result.m_transform[ 4 ] = ( m_transform[ 2 ] * m_transform[ 5 ] - m_transform[ 3 ] * m_transform[ 4 ] ) / determinant;
        result.m_transform[ 5 ] = ( m_transform[ 1 ] * m_transform[ 4 ] - m_transform[ 0 ] * m_transform[ 5 ] ) / determinant;
        return result;
      }

      isIdentityOrTranslation() {
        const m_transform = this.m_transform;
        return m_transform[ 0 ] === 1 && m_transform[ 1 ] === 0 && m_transform[ 2 ] === 0 && m_transform[ 3 ] === 1;
      }

      multiply(other) {
        const m_transform = this.m_transform;
        const trans = new SVGTransform();
        const om_transform = other.m_transform;
        const tm_transform = trans.m_transform;
        tm_transform[ 0 ] = om_transform[ 0 ] * m_transform[ 0 ] + om_transform[ 1 ] * m_transform[ 2 ];
        tm_transform[ 1 ] = om_transform[ 0 ] * m_transform[ 1 ] + om_transform[ 1 ] * m_transform[ 3 ];
        tm_transform[ 2 ] = om_transform[ 2 ] * m_transform[ 0 ] + om_transform[ 3 ] * m_transform[ 2 ];
        tm_transform[ 3 ] = om_transform[ 2 ] * m_transform[ 1 ] + om_transform[ 3 ] * m_transform[ 3 ];
        tm_transform[ 4 ] = om_transform[ 4 ] * m_transform[ 0 ] + om_transform[ 5 ] * m_transform[ 2 ] + m_transform[ 4 ];
        tm_transform[ 5 ] = om_transform[ 4 ] * m_transform[ 1 ] + om_transform[ 5 ] * m_transform[ 3 ] + m_transform[ 5 ];
        this.m_transform = trans.m_transform;
        return this;
      }

      rotate(degrees, x, y) {
        const translateFlag = Boolean(x !== undefined && y !== undefined);

        if (translateFlag) {
          this.translate(x, y);
        }

        const rads = degToRads(degrees);
        const cosAngle = Math.cos(rads);
        const sinAngle = Math.sin(rads);
        const rot = new SVGTransform(cosAngle, sinAngle, -sinAngle, cosAngle, 0, 0);
        this.multiply(rot);

        if (translateFlag) {
          this.translate(-x, -y);
        }

        return this;
      }

      scale(sx, sy) {
        const m_transform = this.m_transform;

        if (sy === undefined) {
          sy = sx;
        }

        m_transform[ 0 ] *= sx;
        m_transform[ 1 ] *= sx;
        m_transform[ 2 ] *= sy;
        m_transform[ 3 ] *= sy;
        return this;
      }

      translate(tx, ty) {
        const m_transform = this.m_transform;

        if (this.isIdentityOrTranslation()) {
          m_transform[ 4 ] += tx;
          m_transform[ 5 ] += ty;
          return this;
        }

        m_transform[ 4 ] += tx * m_transform[ 0 ] + ty * m_transform[ 2 ];
        m_transform[ 5 ] += tx * m_transform[ 1 ] + ty * m_transform[ 3 ];
        return this;
      }

      rotateFromVector(x, y) {
        return this.rotate(radToDeg(Math.atan2(y, x)));
      }

      flipX() {
        return this.scale(-1, 1);
      }

      flipY() {
        return this.scale(1, -1);
      }

      shear(sx, sy) {
        const m_transform = this.m_transform;
        const a = m_transform[ 0 ];
        const b = m_transform[ 1 ];
        m_transform[ 0 ] += sy * m_transform[ 2 ];
        m_transform[ 1 ] += sy * m_transform[ 3 ];
        m_transform[ 2 ] += sx * a;
        m_transform[ 3 ] += sx * b;
        return this;
      }

      skew(angleX, angleY) {
        return this.shear(Math.tan(degToRads(angleX)), Math.tan(degToRads(angleY)));
      }

      skewX(angle) {
        return this.shear(Math.tan(degToRads(angle)), 0);
      }

      skewY(angle) {
        return this.shear(0, Math.tan(degToRads(angle)));
      }

      map(x, y) {
        const m_transform = this.m_transform;
        return {
          x: m_transform[ 0 ] * x + m_transform[ 2 ] * y + m_transform[ 4 ],
          y: m_transform[ 1 ] * x + m_transform[ 3 ] * y + m_transform[ 5 ]
        };
      }

      mapPoint(point) {
        return this.map(point.x, point.y);
      }

    }

    module.exports = SVGTransform;

    /***/
  } ),

  /***/ './node_modules/svg-path-interpolator/src/math/utils.js':
  /*!**************************************************************!*\
  !*** ./node_modules/svg-path-interpolator/src/math/utils.js ***!
  \**************************************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    function degToRads(deg) {
      return Math.PI * deg / 180;
    }

    function radToDeg(rad) {
      return rad * 180 / Math.PI;
    }

    function isNullOrUndefined(value) {
      return Boolean(value === undefined || value === null);
    }

    /**
     * Rotates a point around the given origin
     * by the specified radians and returns the
     * rotated point.
     *
     * @param originX The x coordinate of the point to rotate around.
     * @param originY The y coordinate of the point to rotate around.
     * @param x The x coordinate of the point to be rotated.
     * @param y The y coordinate of the point to be rotated.
     * @param radiansX Radians to rotate along the x axis.
     * @param radiansY Radians to rotate along the y axis.
     *
     * @returns {Object} The point with the rotated coordinates.
     */


    function rotatePoint(originX, originY, x, y, radiansX, radiansY) {
      const v = {
        x: x - originX,
        y: y - originY
      };
      const vx = v.x * Math.cos(radiansX) - v.y * Math.sin(radiansX);
      const vy = v.x * Math.sin(radiansY) + v.y * Math.cos(radiansY);
      return {
        x: vx + originX,
        y: vy + originY
      };
    }

    module.exports = {
      degToRads,
      isNullOrUndefined,
      radToDeg,
      rotatePoint
    };

    /***/
  } ),

  /***/ './src/fonts/D_Day_Stencil.ttf':
  /*!*************************************!*\
  !*** ./src/fonts/D_Day_Stencil.ttf ***!
  \*************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + 'fonts/D_Day_Stencil.ttf';

    /***/
  } ),

  /***/ './src/fonts/D_Day_Stencil.woff':
  /*!**************************************!*\
  !*** ./src/fonts/D_Day_Stencil.woff ***!
  \**************************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + 'fonts/D_Day_Stencil.woff';

    /***/
  } ),

  /***/ './src/js/board/Board.js':
  /*!*******************************!*\
  !*** ./src/js/board/Board.js ***!
  \*******************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _utils_findCellAtPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/findCellAtPoint */ './src/js/utils/findCellAtPoint.js');
    /* harmony import */
    var _utils_findCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/findCells */ './src/js/utils/findCells.js');
    /* harmony import */
    var _utils_getMoreCellsFromCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMoreCellsFromCell */ './src/js/utils/getMoreCellsFromCell.js');
    /* harmony import */
    var _BoardGraphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardGraphic */ './src/js/board/BoardGraphic.js');


    class Board {
      constructor(gameState) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'lastHighlightedCells', []);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'validDrop', false);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'player1', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'player2', void 0);

        this.shipDragStartCallback = this.shipDragStartCallback.bind(this);
        this.shipDragCallback = this.shipDragCallback.bind(this);
        this.shipDropCallback = this.shipDropCallback.bind(this);
        this.shipModelChangeListener = this.shipModelChangeListener.bind(this);
        this.shipModelPreCommitListener = this.shipModelPreCommitListener.bind(this);
        const {
          player1,
          player2
        } = gameState;
        Object.assign(this, {
          player1,
          player2
        });
      }

      get boardGraphic() {
        if (!this._boardGraphic) {
          this._boardGraphic = new _BoardGraphic__WEBPACK_IMPORTED_MODULE_4__[ 'default' ](this.player1.ships);
        }

        return this._boardGraphic;
      }

      render() {
        const element = this.boardGraphic.render();
        this.postRenderActions();
        return element;
      }

      postRenderActions() {
        this.boardGraphic.visibleShipsMap.forEach(ship => {
          const shipModel = ship.shipModel;
          ship.dragStartCallback = this.shipDragStartCallback;
          ship.dragCallback = this.shipDragCallback;
          ship.dropCallback = this.shipDropCallback;
          shipModel.addChangeListener(this.shipModelChangeListener);
          shipModel.addPreCommitListener(this.shipModelPreCommitListener);
        });
      } //----------------------------------------
      // Ship drag callbacks
      //----------------------------------------


      shipDragStartCallback(originEvent, ship) {
        const cells = ship.shipModel.occupiedCells || [];

        if (!cells.length) {
          return;
        }

        cells.forEach(cell => {
          this.player1.occupiedCellsSet.delete(cell);
        });
        this.setHighlightedCells(cells, '#00ff00');
      }

      shipDragCallback(originEvent, ship) {
        const cells = Object(_utils_findCells__WEBPACK_IMPORTED_MODULE_2__[ 'findCells' ])(ship.segment, this.boardGraphic.grids[ 0 ], ship.shipModel.direction);
        let i = cells.length;
        this.validDrop = i === ship.shipModel.type.size;

        while (i--) {
          if (this.player1.occupiedCellsSet.has(cells[ i ])) {
            this.validDrop = false;
            break;
          }
        }

        const color = this.validDrop ? '#00ff00' : '#ff0000';
        this.setHighlightedCells(cells, color);
      }

      shipDropCallback(originEvent, ship) {
        let cellsToOccupy = this.lastHighlightedCells;
        this.setHighlightedCells([]);

        if (!cellsToOccupy.length) {
          return;
        }

        if (!this.validDrop) {
          cellsToOccupy = ship.shipModel.occupiedCells || [];
        }

        ship.shipModel.occupiedCells = cellsToOccupy.concat();
      } //----------------------------------
      // Model Change callbacks


      shipModelPreCommitListener(shipModel, changes) {
        if (!( 'direction' in changes )) {
          return;
        }

        const cells = Object(_utils_getMoreCellsFromCell__WEBPACK_IMPORTED_MODULE_3__[ 'getMoreCellsFromCell' ])(this.boardGraphic.grids[ 0 ], shipModel.occupiedCells[ 0 ], changes.direction.newValue, shipModel.type.size);
        let i = ~~cells.length;
        let allowChange = !i || i === shipModel.type.size;

        while (allowChange && i-- > 1) {
          if (this.player1.occupiedCellsSet.has(cells[ i ])) {
            allowChange = false;
          }
        }

        if (!allowChange && cells.length) {
          this.setHighlightedCells(cells, '#ff0000');
          setTimeout(() => {
            this.setHighlightedCells([]);
          }, 500);
        }

        return allowChange;
      }

      shipModelChangeListener(shipModel, changes) {
        if ('occupiedCells' in changes) {
          this.occupiedCellsChanged(changes);
        } else if ('direction' in changes) {
          this.shipDirectionChanged(shipModel, changes);
        }
      }

      shipDirectionChanged(shipModel, changes) {
        const boardGraphic = this.boardGraphic;
        const ship = boardGraphic.visibleShipsMap.get(shipModel);
        const seed = ship.shipGraphic.element.querySelector('rect');
        const seedBounds = seed.getBoundingClientRect();

        if (!Object(_utils_findCellAtPoint__WEBPACK_IMPORTED_MODULE_1__[ 'findCellAtPoint' ])(seedBounds.left, seedBounds.top, boardGraphic.grids[ 0 ])) {
          return;
        }

        const cellsToOccupy = Object(_utils_findCells__WEBPACK_IMPORTED_MODULE_2__[ 'findCells' ])(seed, boardGraphic.grids[ 0 ], changes.direction.newValue);
        shipModel.occupiedCells = cellsToOccupy;
        this.setHighlightedCells(cellsToOccupy, '#00ff00');
        setTimeout(() => {
          this.setHighlightedCells([]);
        }, 250);
      }

      occupiedCellsChanged(changes) {
        const {
          oldValue = [],
          newValue = []
        } = changes.occupiedCells;
        const occupiedCellsSet = this.player1.occupiedCellsSet;

        for (let i = 0; i < newValue.length; i++) {
          occupiedCellsSet.delete(oldValue[ i ]);
          occupiedCellsSet.add(newValue[ i ]);
        }
      }

      setHighlightedCells(cells, color) {
        this.lastHighlightedCells.forEach(cell => {
          cell.style.fill = '';
        });
        cells.forEach(cell => {
          cell.style.fill = color;
        });
        this.lastHighlightedCells = cells;
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( Board );

    /***/
  } ),

  /***/ './src/js/board/BoardGraphic.js':
  /*!**************************************!*\
  !*** ./src/js/board/BoardGraphic.js ***!
  \**************************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _ship_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship/Ship */ './src/js/ship/Ship.js');
    /* harmony import */
    var _board_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.scss */ './src/js/board/board.scss');
    /* harmony import */
    var _board_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_board_scss__WEBPACK_IMPORTED_MODULE_2__);


    class BoardGraphic {
      constructor(ships) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'visibleShipsMap', new Map());

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'grids', []);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'rendered', false);

        this.ships = ships;
      }

      get element() {
        if (!this._element) {
          const element = document.createElement('section');
          element.id = 'battleshipBoard';
          this._element = element;
        }

        return this._element;
      }

      renderShips() {
        if (this.rendered) {
          return;
        }

        const fragment = document.createDocumentFragment();
        this.ships.forEach((shipModel, index) => {
          const ship = new _ship_Ship__WEBPACK_IMPORTED_MODULE_1__[ 'default' ](shipModel);
          const element = ship.render();
          fragment.appendChild(element);
          ship.translate(0, 525 + index * 50);
          this.visibleShipsMap.set(shipModel, ship);
        });
        return fragment;
      }

      render() {
        if (this.rendered) {
          return;
        }

        const element = this.element;
        const fragment = document.createDocumentFragment();
        const player1Grid = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        player1Grid.id = 'player1Grid';
        player1Grid.setAttribute('width', '500px');
        player1Grid.setAttribute('height', '800px');
        fragment.appendChild(player1Grid);
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        player1Grid.appendChild(g);
        let gridSize = 10;

        while (gridSize--) {
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', `M0,0L50,0L50,50L0,50z`);
          path.setAttribute('class', 'cell');
          g.appendChild(path);
        }

        gridSize = 9;

        while (gridSize--) {
          const clone = g.cloneNode(true);
          player1Grid.appendChild(clone);
        }

        const player2Grid = player1Grid.cloneNode(true);
        player2Grid.id = 'player2Grid';
        this.grids.push(player1Grid, player2Grid);
        fragment.appendChild(player2Grid);
        player1Grid.appendChild(this.renderShips());
        element.appendChild(fragment);
        this.rendered = true;
        return element;
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( BoardGraphic );

    /***/
  } ),

  /***/ './src/js/board/Console.js':
  /*!*********************************!*\
  !*** ./src/js/board/Console.js ***!
  \*********************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bindableSetterChanged */ './src/js/utils/bindableSetterChanged.js');
    /* harmony import */
    var _utils_randomizeShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/randomizeShips */ './src/js/utils/randomizeShips.js');
    /* harmony import */
    var _console_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_console.html */ './src/js/board/_console.html');
    /* harmony import */
    var _console_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_console_html__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _console_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./console.scss */ './src/js/board/console.scss');
    /* harmony import */
    var _console_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_console_scss__WEBPACK_IMPORTED_MODULE_4__);


    class Console {
      constructor(grid, gameState) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'randomizeButton', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'startGameButton', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'grid', void 0);

        Object.assign(this, {
          playerModelChangeHandler: this.playerModelChangeHandler.bind(this),
          randomizeButtonClickHandler: this.randomizeButtonClickHandler.bind(this),
          startGameClickHandler: this.startGameClickHandler.bind(this),
          gameStateChangeHandler: this.gameStateChangeHandler.bind(this),
          grid,
          gameState
        });
      }

      get element() {
        if (!this._element) {
          this._element = document.createElement('section');
          this._element.id = 'console';
        }

        return this._element;
      }

      get player1() {
        return this._player1;
      }

      set player1(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__[ 'bindableSetterChanged' ].call(this, '_player1', value, this.playerModelChangeHandler);
      }

      get player2() {
        return this._player2;
      }

      set player2(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__[ 'bindableSetterChanged' ].call(this, '_player2', value, this.playerModelChangeHandler);
      }

      get gameState() {
        return this._gameState;
      }

      set gameState(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__[ 'bindableSetterChanged' ].call(this, '_gameState', value, this.gameStateChangeHandler);
        const {
          player1,
          player2
        } = value || {};
        Object.assign(this, {
          player1,
          player2
        });
      }

      render() {
        const element = this.element;
        element.innerHTML = _console_html__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.postRenderActions();
        return element;
      }

      postRenderActions() {
        const randomizeButton = this.element.querySelector('#randomize');
        randomizeButton.addEventListener('click', this.randomizeButtonClickHandler);
        const startGameButton = this.element.querySelector('#start');
        startGameButton.addEventListener('click', this.startGameClickHandler);
        Object.assign(this, {
          randomizeButton,
          startGameButton
        });
      }

      playerModelChangeHandler(source, changes) {
        if (changes.allShipsPlaced && source.allShipsPlaced) {
          this.startGameButton.removeAttribute('disabled');
        }
      }

      gameStateChangeHandler(source, changes) {
        if ('playerTurn' in changes) {
          this.playerTurnChanged(changes);
        }
      }

      playerTurnChanged(changes) {
        const player = changes.playerTurn.newValue;
        const statElements = this.element.querySelectorAll('.stats ul');
        const selected = 'selected';
        const [ stat1, stat2 ] = statElements;
        player === this.player1 ? stat1.classList.add(selected) : stat1.classList.remove(selected);
        player === this.player2 ? stat2.classList.add(selected) : stat2.classList.remove(selected);
      }

      randomizeButtonClickHandler() {
        Object(_utils_randomizeShips__WEBPACK_IMPORTED_MODULE_2__[ 'randomizeShips' ])(this.grid, this.player1);
      }

      startGameClickHandler() {
        this.gameState.gameStarted = true;
        [ this.startGameButton, this.randomizeButton ].forEach(button => button.setAttribute('disabled', ''));
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( Console );

    /***/
  } ),

  /***/ './src/js/board/_console.html':
  /*!************************************!*\
  !*** ./src/js/board/_console.html ***!
  \************************************/
  /*! no static exports found */
  /***/ ( function (module, exports) {

    module.exports = '<section id=console> <div class=stats> <ul id=player1> <li>Player 1</li> <li>hits: <span>0</span></li> <li>attempts: <span>0</span></li> <li>accuracy: <span>0</span>%</li> </ul> <ul id=player2> <li>Computer</li> <li>hits: <span>0</span></li> <li>attempts: <span>0</span></li> <li>accuracy: <span>0</span>%</li> </ul> </div> <button id=randomize>Randomize Ships</button> <button id=start disabled=disabled>Start Game</button> </section> ';

    /***/
  } ),

  /***/ './src/js/board/board.scss':
  /*!*********************************!*\
  !*** ./src/js/board/board.scss ***!
  \*********************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./board.scss */ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/board/board.scss');

    if (typeof content === 'string') content = [ [ module.i, content, '' ] ];

    var transform;
    var insertInto;


    var options = {'hmr': true}

    options.transform = transform
    options.insertInto = undefined;

    var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js')(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {
    }

    /***/
  } ),

  /***/ './src/js/board/console.scss':
  /*!***********************************!*\
  !*** ./src/js/board/console.scss ***!
  \***********************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./console.scss */ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/board/console.scss');

    if (typeof content === 'string') content = [ [ module.i, content, '' ] ];

    var transform;
    var insertInto;


    var options = {'hmr': true}

    options.transform = transform
    options.insertInto = undefined;

    var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js')(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {
    }

    /***/
  } ),

  /***/ './src/js/enum/ShipTypeEnum.js':
  /*!*************************************!*\
  !*** ./src/js/enum/ShipTypeEnum.js ***!
  \*************************************/
  /*! exports provided: allShipTypes, totalCells, ShipTypeEnum */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'allShipTypes', function () {
      return allShipTypes;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'totalCells', function () {
      return totalCells;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'ShipTypeEnum', function () {
      return ShipTypeEnum;
    });
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

    const allShipTypes = [];
    let totalCells = 0;

    class ShipTypeEnum {
      constructor(size, name, maxAllowed) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'size', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'name', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'maxAllowed', void 0);

        if (Object.isFrozen(ShipTypeEnum)) {
          throw new Error('The ShipTypeEnum cannot be constructed');
        }

        Object.assign(this, {
          size,
          name,
          maxAllowed
        });
        Object.freeze(this);
        allShipTypes.push(this);
        totalCells += size * maxAllowed;
      }

      toString() {
        return this.name;
      }

    }

    ShipTypeEnum.CORVETE = new ShipTypeEnum(2, 'Corvette', 1);
    ShipTypeEnum.FRIGATE = new ShipTypeEnum(3, 'Frigate', 2);
    ShipTypeEnum.DESTROYER = new ShipTypeEnum(4, 'Destroyer', 1);
    ShipTypeEnum.CARRIER = new ShipTypeEnum(5, 'Carrier', 1);
    Object.freeze(ShipTypeEnum);

    /***/
  } ),

  /***/ './src/js/gameplay/Computer.js':
  /*!*************************************!*\
  !*** ./src/js/gameplay/Computer.js ***!
  \*************************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _utils_randomizeShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/randomizeShips */ './src/js/utils/randomizeShips.js');
    /* harmony import */
    var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ './src/js/gameplay/Player.js');


    class Computer extends _Player__WEBPACK_IMPORTED_MODULE_1__[ 'default' ] {
      constructor(...args) {
        super(...args);
        Object(_utils_randomizeShips__WEBPACK_IMPORTED_MODULE_0__[ 'randomizeShips' ])(this.allyGrid, this.playerModel);
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( Computer );

    /***/
  } ),

  /***/ './src/js/gameplay/GamePlay.js':
  /*!*************************************!*\
  !*** ./src/js/gameplay/GamePlay.js ***!
  \*************************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bindableSetterChanged */ './src/js/utils/bindableSetterChanged.js');
    /* harmony import */
    var _utils_getHitInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getHitInfo */ './src/js/utils/getHitInfo.js');
    /* harmony import */
    var _Computer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Computer */ './src/js/gameplay/Computer.js');
    /* harmony import */
    var _Human__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Human */ './src/js/gameplay/Human.js');


    function playerModelChangeHandler(source, changes) {
      if (!( 'incomingShots' in changes )) {
        return;
      }

      const targetCell = changes.incomingShots.newValue[ 0 ];
      const hitInfo = Object(_utils_getHitInfo__WEBPACK_IMPORTED_MODULE_2__[ 'getHitInfo' ])(source, targetCell);

      if (hitInfo) {
        const {
          ship,
          index
        } = hitInfo;
        ship.hits = ( ship.hits[ index ] = true, ship.hits ).concat();
      }
    }

    class GamePlay {
      constructor(grids, gameState) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'grids', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'computer', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'human', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'playerTurn', 0);

        this.gameStateChangeHandler = this.gameStateChangeHandler.bind(this);
        Object.assign(this, {
          grids,
          gameState
        });
      }

      get player1() {
        return this._player1;
      }

      set player1(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__[ 'bindableSetterChanged' ].call(this, '_player1', value, playerModelChangeHandler);
      }

      get player2() {
        return this._player2;
      }

      set player2(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__[ 'bindableSetterChanged' ].call(this, '_player2', value, playerModelChangeHandler);
      }

      get gameState() {
        return this._gameState;
      }

      set gameState(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_1__[ 'bindableSetterChanged' ].call(this, '_gameState', value, this.gameStateChangeHandler);
        const {
          player1,
          player2
        } = value || {};
        Object.assign(this, {
          player1,
          player2
        });
      }

      gameStateChangeHandler(source, changes) {
        if ('gameStarted' in changes && changes.gameStarted.newValue) {
          this.startGame();
        }

        if ('playerTurn' in changes) {
          this.playerTurnChangedHandler(changes.playerTurn.newValue);
        }
      }

      startGame() {
        this.human = new _Human__WEBPACK_IMPORTED_MODULE_4__[ 'default' ](this.grids[ 1 ], this.grids[ 0 ], this.player1);
        this.computer = new _Computer__WEBPACK_IMPORTED_MODULE_3__[ 'default' ](this.grids[ 0 ], this.grids[ 1 ], this.player2);
        this.gameState.playerTurn = this.player1;
      }

      playerTurnChangedHandler(playerTurn) {
        if (playerTurn === this.gameState.player2) {
        }
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( GamePlay );

    /***/
  } ),

  /***/ './src/js/gameplay/Human.js':
  /*!**********************************!*\
  !*** ./src/js/gameplay/Human.js ***!
  \**********************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _utils_findCellAtPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/findCellAtPoint */ './src/js/utils/findCellAtPoint.js');
    /* harmony import */
    var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ './src/js/gameplay/Player.js');


    class Human extends _Player__WEBPACK_IMPORTED_MODULE_1__[ 'default' ] {
      constructor(...args) {
        super(...args);
        this.opponentGrid.addEventListener('click', this.opponentGridClickHandler);
      }

      opponentGridClickHandler(event) {
        const {
          pageX,
          pageY,
          currentTarget
        } = event;
        const cell = Object(_utils_findCellAtPoint__WEBPACK_IMPORTED_MODULE_0__[ 'findCellAtPoint' ])(pageX, pageY, currentTarget);
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( Human );

    /***/
  } ),

  /***/ './src/js/gameplay/Player.js':
  /*!***********************************!*\
  !*** ./src/js/gameplay/Player.js ***!
  \***********************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


    class Player {
      constructor(opponentGrid, allyGrid, playerModel) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'opponentGrid', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'allyGrid', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'playerModel', void 0);

        Object.assign(this, {
          opponentGrid,
          allyGrid,
          playerModel
        });
        this.playerModelChanged = this.playerModelChanged.bind(this);
      }

      playerModelChanged(source, changes) {
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( Player );

    /***/
  } ),

  /***/ './src/js/index.js':
  /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
  /*! no exports provided */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _board_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/Board */ './src/js/board/Board.js');
    /* harmony import */
    var _board_Console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/Console */ './src/js/board/Console.js');
    /* harmony import */
    var _gameplay_GamePlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameplay/GamePlay */ './src/js/gameplay/GamePlay.js');
    /* harmony import */
    var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ './src/js/main.scss');
    /* harmony import */
    var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _model_GameStateModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/GameStateModel */ './src/js/model/GameStateModel.js');
    /* harmony import */
    var _utils_animateBoardRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/animateBoardRender */ './src/js/utils/animateBoardRender.js');


    const gameStateModel = new _model_GameStateModel__WEBPACK_IMPORTED_MODULE_4__[ 'default' ]();
    const board = new _board_Board__WEBPACK_IMPORTED_MODULE_0__[ 'default' ](gameStateModel);
    document.body.appendChild(board.render());
    const grids = board.boardGraphic.grids;
    const consoleView = new _board_Console__WEBPACK_IMPORTED_MODULE_1__[ 'default' ](grids[ 0 ], gameStateModel);
    document.body.appendChild(consoleView.render());
    grids.forEach(grid => {
      Object(_utils_animateBoardRender__WEBPACK_IMPORTED_MODULE_5__[ 'animateBoard' ])(grid, 50, 10);
    });
    const game = new _gameplay_GamePlay__WEBPACK_IMPORTED_MODULE_2__[ 'default' ](grids, gameStateModel);

    /***/
  } ),

  /***/ './src/js/main.scss':
  /*!**************************!*\
  !*** ./src/js/main.scss ***!
  \**************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./main.scss */ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/main.scss');

    if (typeof content === 'string') content = [ [ module.i, content, '' ] ];

    var transform;
    var insertInto;


    var options = {'hmr': true}

    options.transform = transform
    options.insertInto = undefined;

    var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js')(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {
    }

    /***/
  } ),

  /***/ './src/js/model/GameStateModel.js':
  /*!****************************************!*\
  !*** ./src/js/model/GameStateModel.js ***!
  \****************************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ './node_modules/@babel/runtime/helpers/toArray.js');
    /* harmony import */
    var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var bind_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-property */ './node_modules/bind-property/build/js/bind-property.js');
    /* harmony import */
    var bind_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_property__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _model_PlayerModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/PlayerModel */ './src/js/model/PlayerModel.js');


    function _decorate(decorators, factory, superClass) {
      var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
      }, superClass);
      var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
      _initializeClassElements(r.F, decorated.elements);
      return _runClassFinishers(r.F, decorated.finishers);
    }

    function _createElementDescriptor(def) {
      var descriptor;
      if (def.kind === 'method') {
        descriptor = {value: def.value, writable: true, configurable: true, enumerable: false};
      } else if (def.kind === 'get') {
        descriptor = {get: def.value, configurable: true, enumerable: false};
      } else if (def.kind === 'set') {
        descriptor = {set: def.value, configurable: true, enumerable: false};
      } else if (def.kind === 'field') {
        descriptor = {configurable: true, writable: true, enumerable: false};
      }
      var element = {
        kind: def.kind === 'field' ? 'field' : 'method',
        key: def.key,
        placement: def.static ? 'static' : def.kind === 'field' ? 'own' : 'prototype',
        descriptor: descriptor
      };
      if (def.decorators) element.decorators = def.decorators;
      if (def.kind === 'field') element.initializer = def.value;
      return element;
    }

    function _coalesceGetterSetter(element, other) {
      if (element.descriptor.get !== undefined) {
        other.descriptor.get = element.descriptor.get;
      } else {
        other.descriptor.set = element.descriptor.set;
      }
    }

    function _coalesceClassElements(elements) {
      var newElements = [];
      var isSameElement = function (other) {
        return other.kind === 'method' && other.key === element.key && other.placement === element.placement;
      };
      for (var i = 0; i < elements.length; i++) {
        var element = elements[ i ];
        var other;
        if (element.kind === 'method' && ( other = newElements.find(isSameElement) )) {
          if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
            if (_hasDecorators(element) || _hasDecorators(other)) {
              throw new ReferenceError('Duplicated methods (' + element.key + ') can\'t be decorated.');
            }
            other.descriptor = element.descriptor;
          } else {
            if (_hasDecorators(element)) {
              if (_hasDecorators(other)) {
                throw new ReferenceError('Decorators can\'t be placed on different accessors with for ' + 'the same property (' + element.key + ').');
              }
              other.decorators = element.decorators;
            }
            _coalesceGetterSetter(element, other);
          }
        } else {
          newElements.push(element);
        }
      }
      return newElements;
    }

    function _hasDecorators(element) {
      return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
      return desc !== undefined && !( desc.value === undefined && desc.writable === undefined );
    }

    function _initializeClassElements(F, elements) {
      var proto = F.prototype;
      [ 'method', 'field' ].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;
          if (element.kind === kind && ( placement === 'static' || placement === 'prototype' )) {
            var receiver = placement === 'static' ? F : proto;
            _defineClassElement(receiver, element);
          }
        });
      });
    }

    function _initializeInstanceElements(O, elements) {
      [ 'method', 'field' ].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === 'own') {
            _defineClassElement(O, element);
          }
        });
      });
    }

    function _defineClassElement(receiver, element) {
      var descriptor = element.descriptor;
      if (element.kind === 'field') {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }
      Object.defineProperty(receiver, element.key, descriptor);
    }

    function _decorateClass(elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {static: [], prototype: [], own: []};
      elements.forEach(function (element) {
        _addElementPlacement(element, placements);
      });
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      });
      if (!decorators) {
        return {elements: newElements, finishers: finishers};
      }
      var result = _decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    }

    function _addElementPlacement(element, placements, silent) {
      var keys = placements[ element.placement ];
      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError('Duplicated element (' + element.key + ')');
      }
      keys.push(element.key);
    }

    function _decorateElement(element, placements) {
      var extras = [];
      var finishers = [];
      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[ element.placement ];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras(( 0, decorators[ i ] )(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            _addElementPlacement(newExtras[ j ], placements);
          }
          extras.push.apply(extras, newExtras);
        }
      }
      return {element: element, finishers: finishers, extras: extras};
    }

    function _decorateConstructor(elements, decorators) {
      var finishers = [];
      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor(( 0, decorators[ i ] )(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }
        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;
          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[ j ].key === elements[ k ].key && elements[ j ].placement === elements[ k ].placement) {
                throw new TypeError('Duplicated element (' + elements[ j ].key + ')');
              }
            }
          }
        }
      }
      return {elements: elements, finishers: finishers};
    }

    function _fromElementDescriptor(element) {
      var obj = {kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor};
      var desc = {value: 'Descriptor', configurable: true};
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === 'field') obj.initializer = element.initializer;
      return obj;
    }

    function _toElementDescriptors(elementObjects) {
      if (elementObjects === undefined) return;
      return _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(elementObjects).map(function (elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, 'finisher', 'An element descriptor');
        _disallowProperty(elementObject, 'extras', 'An element descriptor');
        return element;
      });
    }

    function _toElementDescriptor(elementObject) {
      var kind = String(elementObject.kind);
      if (kind !== 'method' && kind !== 'field') {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }
      var key = elementObject.key;
      if (typeof key !== 'string' && typeof key !== 'symbol') key = String(key);
      var placement = String(elementObject.placement);
      if (placement !== 'static' && placement !== 'prototype' && placement !== 'own') {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }
      var descriptor = elementObject.descriptor;
      _disallowProperty(elementObject, 'elements', 'An element descriptor');
      var element = {kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor)};
      if (kind !== 'field') {
        _disallowProperty(elementObject, 'initializer', 'A method descriptor');
      } else {
        _disallowProperty(descriptor, 'get', 'The property descriptor of a field descriptor');
        _disallowProperty(descriptor, 'set', 'The property descriptor of a field descriptor');
        _disallowProperty(descriptor, 'value', 'The property descriptor of a field descriptor');
        element.initializer = elementObject.initializer;
      }
      return element;
    }

    function _toElementFinisherExtras(elementObject) {
      var element = _toElementDescriptor(elementObject);
      var finisher = _optionalCallableProperty(elementObject, 'finisher');
      var extras = _toElementDescriptors(elementObject.extras);
      return {element: element, finisher: finisher, extras: extras};
    }

    function _fromClassDescriptor(elements) {
      var obj = {kind: 'class', elements: elements.map(_fromElementDescriptor)};
      var desc = {value: 'Descriptor', configurable: true};
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    }

    function _toClassDescriptor(obj) {
      var kind = String(obj.kind);
      if (kind !== 'class') {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }
      _disallowProperty(obj, 'key', 'A class descriptor');
      _disallowProperty(obj, 'placement', 'A class descriptor');
      _disallowProperty(obj, 'descriptor', 'A class descriptor');
      _disallowProperty(obj, 'initializer', 'A class descriptor');
      _disallowProperty(obj, 'extras', 'A class descriptor');
      var finisher = _optionalCallableProperty(obj, 'finisher');
      var elements = _toElementDescriptors(obj.elements);
      return {elements: elements, finisher: finisher};
    }

    function _disallowProperty(obj, name, objectType) {
      if (obj[ name ] !== undefined) {
        throw new TypeError(objectType + ' can\'t have a .' + name + ' property.');
      }
    }

    function _optionalCallableProperty(obj, name) {
      var value = obj[ name ];
      if (value !== undefined && typeof value !== 'function') {
        throw new TypeError('Expected \'' + name + '\' to be a function');
      }
      return value;
    }

    function _runClassFinishers(constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = ( 0, finishers[ i ] )(constructor);
        if (newConstructor !== undefined) {
          if (typeof newConstructor !== 'function') {
            throw new TypeError('Finishers must return a constructor.');
          }
          constructor = newConstructor;
        }
      }
      return constructor;
    }


    let GameStateModel = _decorate(null, function (_initialize) {
      class GameStateModel {
        constructor(gameStarted = false, playerTurn = null) {
          _initialize(this);

          Object.assign(this, {
            gameStarted,
            playerTurn
          });
        }

      }

      return {
        F: GameStateModel,
        d: [ {
          kind: 'field',
          decorators: [ bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'bindable' ] ],
          key: 'gameStarted',
          value: void 0
        }, {
          kind: 'field',
          decorators: [ bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'bindable' ] ],
          key: 'playerTurn',
          value: void 0
        }, {
          kind: 'get',
          key: 'player1',

          value() {
            return this._player1 || ( this._player1 = new _model_PlayerModel__WEBPACK_IMPORTED_MODULE_2__[ 'default' ]() );
          }

        }, {
          kind: 'get',
          key: 'player2',

          value() {
            return this._player2 || ( this._player2 = new _model_PlayerModel__WEBPACK_IMPORTED_MODULE_2__[ 'default' ]() );
          }

        } ]
      };
    });

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( GameStateModel );

    /***/
  } ),

  /***/ './src/js/model/PlayerModel.js':
  /*!*************************************!*\
  !*** ./src/js/model/PlayerModel.js ***!
  \*************************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ './node_modules/@babel/runtime/helpers/toArray.js');
    /* harmony import */
    var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var bind_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-property */ './node_modules/bind-property/build/js/bind-property.js');
    /* harmony import */
    var bind_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_property__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _enum_ShipTypeEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/ShipTypeEnum */ './src/js/enum/ShipTypeEnum.js');
    /* harmony import */
    var _ShipModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShipModel */ './src/js/model/ShipModel.js');


    function _decorate(decorators, factory, superClass) {
      var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
      }, superClass);
      var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
      _initializeClassElements(r.F, decorated.elements);
      return _runClassFinishers(r.F, decorated.finishers);
    }

    function _createElementDescriptor(def) {
      var descriptor;
      if (def.kind === 'method') {
        descriptor = {value: def.value, writable: true, configurable: true, enumerable: false};
      } else if (def.kind === 'get') {
        descriptor = {get: def.value, configurable: true, enumerable: false};
      } else if (def.kind === 'set') {
        descriptor = {set: def.value, configurable: true, enumerable: false};
      } else if (def.kind === 'field') {
        descriptor = {configurable: true, writable: true, enumerable: false};
      }
      var element = {
        kind: def.kind === 'field' ? 'field' : 'method',
        key: def.key,
        placement: def.static ? 'static' : def.kind === 'field' ? 'own' : 'prototype',
        descriptor: descriptor
      };
      if (def.decorators) element.decorators = def.decorators;
      if (def.kind === 'field') element.initializer = def.value;
      return element;
    }

    function _coalesceGetterSetter(element, other) {
      if (element.descriptor.get !== undefined) {
        other.descriptor.get = element.descriptor.get;
      } else {
        other.descriptor.set = element.descriptor.set;
      }
    }

    function _coalesceClassElements(elements) {
      var newElements = [];
      var isSameElement = function (other) {
        return other.kind === 'method' && other.key === element.key && other.placement === element.placement;
      };
      for (var i = 0; i < elements.length; i++) {
        var element = elements[ i ];
        var other;
        if (element.kind === 'method' && ( other = newElements.find(isSameElement) )) {
          if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
            if (_hasDecorators(element) || _hasDecorators(other)) {
              throw new ReferenceError('Duplicated methods (' + element.key + ') can\'t be decorated.');
            }
            other.descriptor = element.descriptor;
          } else {
            if (_hasDecorators(element)) {
              if (_hasDecorators(other)) {
                throw new ReferenceError('Decorators can\'t be placed on different accessors with for ' + 'the same property (' + element.key + ').');
              }
              other.decorators = element.decorators;
            }
            _coalesceGetterSetter(element, other);
          }
        } else {
          newElements.push(element);
        }
      }
      return newElements;
    }

    function _hasDecorators(element) {
      return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
      return desc !== undefined && !( desc.value === undefined && desc.writable === undefined );
    }

    function _initializeClassElements(F, elements) {
      var proto = F.prototype;
      [ 'method', 'field' ].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;
          if (element.kind === kind && ( placement === 'static' || placement === 'prototype' )) {
            var receiver = placement === 'static' ? F : proto;
            _defineClassElement(receiver, element);
          }
        });
      });
    }

    function _initializeInstanceElements(O, elements) {
      [ 'method', 'field' ].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === 'own') {
            _defineClassElement(O, element);
          }
        });
      });
    }

    function _defineClassElement(receiver, element) {
      var descriptor = element.descriptor;
      if (element.kind === 'field') {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }
      Object.defineProperty(receiver, element.key, descriptor);
    }

    function _decorateClass(elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {static: [], prototype: [], own: []};
      elements.forEach(function (element) {
        _addElementPlacement(element, placements);
      });
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      });
      if (!decorators) {
        return {elements: newElements, finishers: finishers};
      }
      var result = _decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    }

    function _addElementPlacement(element, placements, silent) {
      var keys = placements[ element.placement ];
      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError('Duplicated element (' + element.key + ')');
      }
      keys.push(element.key);
    }

    function _decorateElement(element, placements) {
      var extras = [];
      var finishers = [];
      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[ element.placement ];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras(( 0, decorators[ i ] )(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            _addElementPlacement(newExtras[ j ], placements);
          }
          extras.push.apply(extras, newExtras);
        }
      }
      return {element: element, finishers: finishers, extras: extras};
    }

    function _decorateConstructor(elements, decorators) {
      var finishers = [];
      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor(( 0, decorators[ i ] )(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }
        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;
          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[ j ].key === elements[ k ].key && elements[ j ].placement === elements[ k ].placement) {
                throw new TypeError('Duplicated element (' + elements[ j ].key + ')');
              }
            }
          }
        }
      }
      return {elements: elements, finishers: finishers};
    }

    function _fromElementDescriptor(element) {
      var obj = {kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor};
      var desc = {value: 'Descriptor', configurable: true};
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === 'field') obj.initializer = element.initializer;
      return obj;
    }

    function _toElementDescriptors(elementObjects) {
      if (elementObjects === undefined) return;
      return _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(elementObjects).map(function (elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, 'finisher', 'An element descriptor');
        _disallowProperty(elementObject, 'extras', 'An element descriptor');
        return element;
      });
    }

    function _toElementDescriptor(elementObject) {
      var kind = String(elementObject.kind);
      if (kind !== 'method' && kind !== 'field') {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }
      var key = elementObject.key;
      if (typeof key !== 'string' && typeof key !== 'symbol') key = String(key);
      var placement = String(elementObject.placement);
      if (placement !== 'static' && placement !== 'prototype' && placement !== 'own') {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }
      var descriptor = elementObject.descriptor;
      _disallowProperty(elementObject, 'elements', 'An element descriptor');
      var element = {kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor)};
      if (kind !== 'field') {
        _disallowProperty(elementObject, 'initializer', 'A method descriptor');
      } else {
        _disallowProperty(descriptor, 'get', 'The property descriptor of a field descriptor');
        _disallowProperty(descriptor, 'set', 'The property descriptor of a field descriptor');
        _disallowProperty(descriptor, 'value', 'The property descriptor of a field descriptor');
        element.initializer = elementObject.initializer;
      }
      return element;
    }

    function _toElementFinisherExtras(elementObject) {
      var element = _toElementDescriptor(elementObject);
      var finisher = _optionalCallableProperty(elementObject, 'finisher');
      var extras = _toElementDescriptors(elementObject.extras);
      return {element: element, finisher: finisher, extras: extras};
    }

    function _fromClassDescriptor(elements) {
      var obj = {kind: 'class', elements: elements.map(_fromElementDescriptor)};
      var desc = {value: 'Descriptor', configurable: true};
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    }

    function _toClassDescriptor(obj) {
      var kind = String(obj.kind);
      if (kind !== 'class') {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }
      _disallowProperty(obj, 'key', 'A class descriptor');
      _disallowProperty(obj, 'placement', 'A class descriptor');
      _disallowProperty(obj, 'descriptor', 'A class descriptor');
      _disallowProperty(obj, 'initializer', 'A class descriptor');
      _disallowProperty(obj, 'extras', 'A class descriptor');
      var finisher = _optionalCallableProperty(obj, 'finisher');
      var elements = _toElementDescriptors(obj.elements);
      return {elements: elements, finisher: finisher};
    }

    function _disallowProperty(obj, name, objectType) {
      if (obj[ name ] !== undefined) {
        throw new TypeError(objectType + ' can\'t have a .' + name + ' property.');
      }
    }

    function _optionalCallableProperty(obj, name) {
      var value = obj[ name ];
      if (value !== undefined && typeof value !== 'function') {
        throw new TypeError('Expected \'' + name + '\' to be a function');
      }
      return value;
    }

    function _runClassFinishers(constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = ( 0, finishers[ i ] )(constructor);
        if (newConstructor !== undefined) {
          if (typeof newConstructor !== 'function') {
            throw new TypeError('Finishers must return a constructor.');
          }
          constructor = newConstructor;
        }
      }
      return constructor;
    }


    function generateDefaultShips(changeHandler) {
      const shipModels = [];
      _enum_ShipTypeEnum__WEBPACK_IMPORTED_MODULE_2__[ 'allShipTypes' ].forEach(type => {
        const {
          maxAllowed
        } = type;

        for (let i = 0; i < maxAllowed; i++) {
          const shipModel = new _ShipModel__WEBPACK_IMPORTED_MODULE_3__[ 'default' ]({
            type
          });
          shipModel.addChangeListener(changeHandler, 1000);
          shipModels.push(shipModel);
        }
      });
      return shipModels;
    }

    let PlayerModel = _decorate(null, function (_initialize) {
      class PlayerModel {
        constructor() {
          _initialize(this);

          this.shipModelChangedHandler = this.shipModelChangedHandler.bind(this);
        }

      }

      return {
        F: PlayerModel,
        d: [ {
          kind: 'field',
          decorators: [ bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'bindable' ] ],
          key: 'incomingShots',

          value() {
            return [];
          }

        }, {
          kind: 'field',
          key: 'outboundShots',

          value() {
            return [];
          }

        }, {
          kind: 'field',
          key: 'occupiedCellsSet',

          value() {
            return new Set();
          }

        }, {
          kind: 'get',
          key: 'ships',

          value() {
            return this._ships || ( this._ships = generateDefaultShips(this.shipModelChangedHandler) );
          }

        }, {
          kind: 'get',
          key: 'allShipsPlaced',

          value() {
            return !!this._allShipsPlaced;
          }

        }, {
          kind: 'method',
          key: 'shipModelChangedHandler',

          value(source, changes, priority) {
            if (!changes.occupiedCells) {
              return;
            }

            const newValue = this.occupiedCellsSet.size === _enum_ShipTypeEnum__WEBPACK_IMPORTED_MODULE_2__[ 'totalCells' ];
            const oldValue = this.allShipsPlaced;

            if (oldValue !== newValue) {
              this._allShipsPlaced = newValue;
              Object(bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'queueNotification' ])(this, 'allShipsPlaced', newValue, oldValue);
            }
          }

        } ]
      };
    });

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( PlayerModel );

    /***/
  } ),

  /***/ './src/js/model/ShipModel.js':
  /*!***********************************!*\
  !*** ./src/js/model/ShipModel.js ***!
  \***********************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ './node_modules/@babel/runtime/helpers/toArray.js');
    /* harmony import */
    var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var bind_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-property */ './node_modules/bind-property/build/js/bind-property.js');
    /* harmony import */
    var bind_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_property__WEBPACK_IMPORTED_MODULE_1__);


    function _decorate(decorators, factory, superClass) {
      var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
      }, superClass);
      var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
      _initializeClassElements(r.F, decorated.elements);
      return _runClassFinishers(r.F, decorated.finishers);
    }

    function _createElementDescriptor(def) {
      var descriptor;
      if (def.kind === 'method') {
        descriptor = {value: def.value, writable: true, configurable: true, enumerable: false};
      } else if (def.kind === 'get') {
        descriptor = {get: def.value, configurable: true, enumerable: false};
      } else if (def.kind === 'set') {
        descriptor = {set: def.value, configurable: true, enumerable: false};
      } else if (def.kind === 'field') {
        descriptor = {configurable: true, writable: true, enumerable: false};
      }
      var element = {
        kind: def.kind === 'field' ? 'field' : 'method',
        key: def.key,
        placement: def.static ? 'static' : def.kind === 'field' ? 'own' : 'prototype',
        descriptor: descriptor
      };
      if (def.decorators) element.decorators = def.decorators;
      if (def.kind === 'field') element.initializer = def.value;
      return element;
    }

    function _coalesceGetterSetter(element, other) {
      if (element.descriptor.get !== undefined) {
        other.descriptor.get = element.descriptor.get;
      } else {
        other.descriptor.set = element.descriptor.set;
      }
    }

    function _coalesceClassElements(elements) {
      var newElements = [];
      var isSameElement = function (other) {
        return other.kind === 'method' && other.key === element.key && other.placement === element.placement;
      };
      for (var i = 0; i < elements.length; i++) {
        var element = elements[ i ];
        var other;
        if (element.kind === 'method' && ( other = newElements.find(isSameElement) )) {
          if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
            if (_hasDecorators(element) || _hasDecorators(other)) {
              throw new ReferenceError('Duplicated methods (' + element.key + ') can\'t be decorated.');
            }
            other.descriptor = element.descriptor;
          } else {
            if (_hasDecorators(element)) {
              if (_hasDecorators(other)) {
                throw new ReferenceError('Decorators can\'t be placed on different accessors with for ' + 'the same property (' + element.key + ').');
              }
              other.decorators = element.decorators;
            }
            _coalesceGetterSetter(element, other);
          }
        } else {
          newElements.push(element);
        }
      }
      return newElements;
    }

    function _hasDecorators(element) {
      return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
      return desc !== undefined && !( desc.value === undefined && desc.writable === undefined );
    }

    function _initializeClassElements(F, elements) {
      var proto = F.prototype;
      [ 'method', 'field' ].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;
          if (element.kind === kind && ( placement === 'static' || placement === 'prototype' )) {
            var receiver = placement === 'static' ? F : proto;
            _defineClassElement(receiver, element);
          }
        });
      });
    }

    function _initializeInstanceElements(O, elements) {
      [ 'method', 'field' ].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === 'own') {
            _defineClassElement(O, element);
          }
        });
      });
    }

    function _defineClassElement(receiver, element) {
      var descriptor = element.descriptor;
      if (element.kind === 'field') {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }
      Object.defineProperty(receiver, element.key, descriptor);
    }

    function _decorateClass(elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {static: [], prototype: [], own: []};
      elements.forEach(function (element) {
        _addElementPlacement(element, placements);
      });
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      });
      if (!decorators) {
        return {elements: newElements, finishers: finishers};
      }
      var result = _decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    }

    function _addElementPlacement(element, placements, silent) {
      var keys = placements[ element.placement ];
      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError('Duplicated element (' + element.key + ')');
      }
      keys.push(element.key);
    }

    function _decorateElement(element, placements) {
      var extras = [];
      var finishers = [];
      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[ element.placement ];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras(( 0, decorators[ i ] )(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            _addElementPlacement(newExtras[ j ], placements);
          }
          extras.push.apply(extras, newExtras);
        }
      }
      return {element: element, finishers: finishers, extras: extras};
    }

    function _decorateConstructor(elements, decorators) {
      var finishers = [];
      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor(( 0, decorators[ i ] )(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }
        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;
          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[ j ].key === elements[ k ].key && elements[ j ].placement === elements[ k ].placement) {
                throw new TypeError('Duplicated element (' + elements[ j ].key + ')');
              }
            }
          }
        }
      }
      return {elements: elements, finishers: finishers};
    }

    function _fromElementDescriptor(element) {
      var obj = {kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor};
      var desc = {value: 'Descriptor', configurable: true};
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === 'field') obj.initializer = element.initializer;
      return obj;
    }

    function _toElementDescriptors(elementObjects) {
      if (elementObjects === undefined) return;
      return _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(elementObjects).map(function (elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, 'finisher', 'An element descriptor');
        _disallowProperty(elementObject, 'extras', 'An element descriptor');
        return element;
      });
    }

    function _toElementDescriptor(elementObject) {
      var kind = String(elementObject.kind);
      if (kind !== 'method' && kind !== 'field') {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }
      var key = elementObject.key;
      if (typeof key !== 'string' && typeof key !== 'symbol') key = String(key);
      var placement = String(elementObject.placement);
      if (placement !== 'static' && placement !== 'prototype' && placement !== 'own') {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }
      var descriptor = elementObject.descriptor;
      _disallowProperty(elementObject, 'elements', 'An element descriptor');
      var element = {kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor)};
      if (kind !== 'field') {
        _disallowProperty(elementObject, 'initializer', 'A method descriptor');
      } else {
        _disallowProperty(descriptor, 'get', 'The property descriptor of a field descriptor');
        _disallowProperty(descriptor, 'set', 'The property descriptor of a field descriptor');
        _disallowProperty(descriptor, 'value', 'The property descriptor of a field descriptor');
        element.initializer = elementObject.initializer;
      }
      return element;
    }

    function _toElementFinisherExtras(elementObject) {
      var element = _toElementDescriptor(elementObject);
      var finisher = _optionalCallableProperty(elementObject, 'finisher');
      var extras = _toElementDescriptors(elementObject.extras);
      return {element: element, finisher: finisher, extras: extras};
    }

    function _fromClassDescriptor(elements) {
      var obj = {kind: 'class', elements: elements.map(_fromElementDescriptor)};
      var desc = {value: 'Descriptor', configurable: true};
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    }

    function _toClassDescriptor(obj) {
      var kind = String(obj.kind);
      if (kind !== 'class') {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }
      _disallowProperty(obj, 'key', 'A class descriptor');
      _disallowProperty(obj, 'placement', 'A class descriptor');
      _disallowProperty(obj, 'descriptor', 'A class descriptor');
      _disallowProperty(obj, 'initializer', 'A class descriptor');
      _disallowProperty(obj, 'extras', 'A class descriptor');
      var finisher = _optionalCallableProperty(obj, 'finisher');
      var elements = _toElementDescriptors(obj.elements);
      return {elements: elements, finisher: finisher};
    }

    function _disallowProperty(obj, name, objectType) {
      if (obj[ name ] !== undefined) {
        throw new TypeError(objectType + ' can\'t have a .' + name + ' property.');
      }
    }

    function _optionalCallableProperty(obj, name) {
      var value = obj[ name ];
      if (value !== undefined && typeof value !== 'function') {
        throw new TypeError('Expected \'' + name + '\' to be a function');
      }
      return value;
    }

    function _runClassFinishers(constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = ( 0, finishers[ i ] )(constructor);
        if (newConstructor !== undefined) {
          if (typeof newConstructor !== 'function') {
            throw new TypeError('Finishers must return a constructor.');
          }
          constructor = newConstructor;
        }
      }
      return constructor;
    }


    let ShipModel = _decorate(null, function (_initialize) {
      class ShipModel {
        constructor({
                      hits = [],
                      type,
                      direction = 0,
                      occupiedCells
                    }) {
          _initialize(this);

          Object.assign(this, {
            hits,
            type,
            direction,
            occupiedCells
          });
        }

      }

      return {
        F: ShipModel,
        d: [ {
          kind: 'field',
          decorators: [ bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'bindable' ] ],
          key: 'hits',
          value: void 0
        }, {
          kind: 'field',
          decorators: [ bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'bindable' ] ],
          key: 'direction',
          value: void 0
        }, {
          kind: 'field',
          decorators: [ bind_property__WEBPACK_IMPORTED_MODULE_1__[ 'bindable' ] ],
          key: 'occupiedCells',
          value: void 0
        }, {
          kind: 'field',
          key: 'type',
          value: void 0
        }, {
          kind: 'method',
          key: 'toString',

          value() {
            return '' + this.type;
          }

        } ]
      };
    });

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( ShipModel );

    /***/
  } ),

  /***/ './src/js/ship/Ship.js':
  /*!*****************************!*\
  !*** ./src/js/ship/Ship.js ***!
  \*****************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _utils_alignElementToCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/alignElementToCell */ './src/js/utils/alignElementToCell.js');
    /* harmony import */
    var _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/bindableSetterChanged */ './src/js/utils/bindableSetterChanged.js');
    /* harmony import */
    var _utils_findNodeAtPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/findNodeAtPoint */ './src/js/utils/findNodeAtPoint.js');
    /* harmony import */
    var _ShipGraphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShipGraphic */ './src/js/ship/ShipGraphic.js');


    class Ship {
      constructor(shipModel, draggable = true) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'lastGoodTransform', []);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'dragStartCallback', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'dragCallback', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'dropCallback', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'animationFrame', void 0);

        this.elementMouseDownHandler = this.elementMouseDownHandler.bind(this);
        this.bodyMouseUpHandler = this.bodyMouseUpHandler.bind(this);
        this.bodyMouseMoveHandler = this.bodyMouseMoveHandler.bind(this);
        this.rotateArrowClickHandler = this.rotateArrowClickHandler.bind(this);
        this.modelChangeHandler = this.modelChangeHandler.bind(this);
        Object.assign(this, {
          shipModel,
          draggable
        });
      }

      get shipGraphic() {
        if (!this._shipGraphic) {
          this._shipGraphic = new _ShipGraphic__WEBPACK_IMPORTED_MODULE_4__[ 'default' ](this.shipModel);

          this._shipGraphic.rotateArrow.addEventListener('click', this.rotateArrowClickHandler);
        }

        return this._shipGraphic;
      }

      get shipModel() {
        return this._shipModel;
      }

      set shipModel(value) {
        _utils_bindableSetterChanged__WEBPACK_IMPORTED_MODULE_2__[ 'bindableSetterChanged' ].call(this, '_shipModel', value, this.modelChangeHandler);
      }

      get draggable() {
        return this._draggable;
      }

      set draggable(value) {
        value = !!value;

        if (this._draggable === value) {
          return;
        }

        this._draggable = value;
        const element = this.shipGraphic.element;

        if (value) {
          element.setAttribute('draggable', 'true');
          element.addEventListener('mousedown', this.elementMouseDownHandler);
        } else {
          element.removeAttribute('draggable');
        }
      }

      render() {
        return this.shipGraphic.render();
      }

      translate(deltaTx, deltaTy, animate) {
        const shipGraphic = this.shipGraphic;
        const element = shipGraphic.element;
        const {
          m_transform
        } = shipGraphic.transform;

        if (animate) {
          if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
          }

          const distance = Math.sqrt(Math.pow(deltaTx, 2) + Math.pow(deltaTy, 2));
          let d = distance;
          let lastX = 0;
          let lastY = 0;

          const tick = () => {
            const progress = 1 - ( d /= 1.15 ) / distance;
            const newTx = deltaTx * progress - lastX;
            const newTy = deltaTy * progress - lastY;

            if (progress < .99999) {
              this.animationFrame = requestAnimationFrame(tick);
              lastX += newTx;
              lastY += newTy;
            }

            m_transform[ 4 ] += newTx;
            m_transform[ 5 ] += newTy;
            element.setAttribute('transform', `matrix(${m_transform.join(' ')})`);
          };

          tick();
        } else {
          m_transform[ 4 ] += deltaTx;
          m_transform[ 5 ] += deltaTy;
          element.setAttribute('transform', `matrix(${m_transform.join(' ')})`);
        }
      } //------------------------------
      // Event Handlers


      elementMouseDownHandler(event) {
        const shipGraphic = this.shipGraphic;

        if (event.target === shipGraphic.rotateArrow) {
          return;
        }

        document.body.addEventListener('mousemove', this.bodyMouseMoveHandler);
        document.body.addEventListener('mouseup', this.bodyMouseUpHandler);
        this.segment = Object(_utils_findNodeAtPoint__WEBPACK_IMPORTED_MODULE_3__[ 'findNodeAtPoint' ])(event.pageX, event.pageY, this.shipGraphic.shipSegments);
        this.lastMouseEvent = event;
        this.lastGoodTransform = shipGraphic.transform.m_transform.concat();

        if (typeof this.dragStartCallback === 'function') {
          this.dragStartCallback(event, this);
        }
      }

      bodyMouseMoveHandler(event) {
        if (!event.buttons) {
          this.bodyMouseUpHandler(event);
          return;
        }

        const {
          pageX: lastPageX,
          pageY: lastPageY
        } = this.lastMouseEvent;
        const {
          pageX,
          pageY
        } = event;
        const deltaX = pageX - lastPageX;
        const deltaY = pageY - lastPageY;
        this.translate(deltaX, deltaY);
        this.lastMouseEvent = event;

        if (typeof this.dragCallback === 'function') {
          this.dragCallback(event, this);
        }
      }

      bodyMouseUpHandler(event) {
        document.body.removeEventListener('mousemove', this.bodyMouseMoveHandler);
        document.body.removeEventListener('mouseup', this.bodyMouseUpHandler);

        if (typeof this.dropCallback === 'function') {
          this.dropCallback(event, this);
        }
      }

      rotateArrowClickHandler() {
        this.shipModel.direction = +!this.shipModel.direction;
      }

      modelChangeHandler(source, changes) {
        if ('direction' in changes) {
          this.directionChanged(changes);
        }

        if ('occupiedCells' in changes) {
          this.occupiedCellsChanged(source);
        }

        if ('hits' in changes) {
          this.hitsChanged(source.hits);
        }
      }

      directionChanged(changes) {
        const transform = this.shipGraphic.transform;
        const direction = changes.direction.newValue;
        const deg = direction === 1 ? 90 : -90;
        transform.rotate(deg, 25, 17.5);
        this.shipGraphic.element.setAttribute('transform', `matrix(${transform.m_transform.join(' ')})`);
      }

      occupiedCellsChanged(source) {
        const cell = source.occupiedCells[ 0 ];
        const m_transform = this.shipGraphic.transform.m_transform;

        if (!cell) {
          const {
            '4': x1,
            '5': y1
          } = m_transform;
          const {
            '4': x2,
            '5': y2
          } = this.lastGoodTransform;
          this.translate(x2 - x1, y2 - y1, true);
        } else {
          const {
            x,
            y
          } = Object(_utils_alignElementToCell__WEBPACK_IMPORTED_MODULE_1__[ 'alignElementToCell' ])(this.shipGraphic.element, this.shipModel.direction, m_transform, cell);
          this.translate(x, y, true);
        }
      }

      hitsChanged(hits) {
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( Ship );

    /***/
  } ),

  /***/ './src/js/ship/ShipGraphic.js':
  /*!************************************!*\
  !*** ./src/js/ship/ShipGraphic.js ***!
  \************************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js');
    /* harmony import */
    var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var svg_path_interpolator_src_math_SVGTransform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-path-interpolator/src/math/SVGTransform */ './node_modules/svg-path-interpolator/src/math/SVGTransform.js');
    /* harmony import */
    var svg_path_interpolator_src_math_SVGTransform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_path_interpolator_src_math_SVGTransform__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _svgPaths_rotate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svgPaths/rotate */ './src/js/svgPaths/rotate.js');
    /* harmony import */
    var _ship_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.scss */ './src/js/ship/ship.scss');
    /* harmony import */
    var _ship_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ship_scss__WEBPACK_IMPORTED_MODULE_3__);


    let i = 0;

    class ShipGraphic {
      constructor(shipModel) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'id', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'segment', void 0);

        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, 'transform', new svg_path_interpolator_src_math_SVGTransform__WEBPACK_IMPORTED_MODULE_1___default.a());

        this.id = 'ship_' + i++;
        this.shipModel = shipModel;
      }

      get element() {
        if (!this._element) {
          const element = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          element.id = this.id;
          this._element = element;
        }

        return this._element;
      }

      get shipSegments() {
        if (!this._shipSegments) {
          this._shipSegments = this.element.querySelectorAll('rect');
        }

        return this._shipSegments;
      }

      get rotateArrow() {
        if (!this._roateArrow) {
          const rotateArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          rotateArrow.id = `rotate_${this.id}`;
          rotateArrow.setAttribute('d', _svgPaths_rotate__WEBPACK_IMPORTED_MODULE_2__[ 'default' ]);
          rotateArrow.setAttribute('transform', `translate(${this.shipModel.type.size * 50} 24)`);
          this._roateArrow = rotateArrow;
        }

        return this._roateArrow;
      }

      render() {
        const element = this.element;
        this.segment = null;
        this._shipSegments = null;
        element.innerHTML = '';
        let {
          type,
          hits
        } = this.shipModel;
        const {
          size
        } = type;

        for (let i = 0; i < size; i++) {
          const hit = hits[ i ];
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('width', '50');
          rect.setAttribute('height', '35');
          rect.setAttribute('x', '' + i * 50);
          rect.setAttribute('fill', hit ? '#ff0000' : 'steelblue');
          element.appendChild(rect);
        }

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.textContent = '' + type;
        text.setAttribute('font-family', 'D Day Stencil');
        text.setAttribute('font-size', '30');
        text.setAttribute('y', '28');
        text.setAttribute('x', '5');
        element.appendChild(text);
        element.appendChild(this.rotateArrow);
        return element;
      }

    }

    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( ShipGraphic );

    /***/
  } ),

  /***/ './src/js/ship/ship.scss':
  /*!*******************************!*\
  !*** ./src/js/ship/ship.scss ***!
  \*******************************/
  /*! no static exports found */
  /***/ ( function (module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./ship.scss */ './node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/ship/ship.scss');

    if (typeof content === 'string') content = [ [ module.i, content, '' ] ];

    var transform;
    var insertInto;


    var options = {'hmr': true}

    options.transform = transform
    options.insertInto = undefined;

    var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js')(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {
    }

    /***/
  } ),

  /***/ './src/js/svgPaths/rotate.js':
  /*!***********************************!*\
  !*** ./src/js/svgPaths/rotate.js ***!
  \***********************************/
  /*! exports provided: default */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__[ 'default' ] = ( `M12.241,9.37h-1.43C10.05,4.08,5.51,0,0,0c-4.25,0-7.93,2.44-9.74,5.98l2.94,1.13
		c1.34-2.38,3.88-3.99,6.81-3.99c3.78,0,6.93,2.68,7.65,6.25H5.78C5.541,9.6,5.311,9.75,5.651,10.16l2.91,2.959
		c0.239,0.23,0.629,0.23,0.869,0l2.93-2.959C12.61,9.92,12.491,9.6,12.241,9.37z M0.01,18.74c-3.5,0-6.45-2.301-7.45-5.471h1.71
		c0.24-0.229,0.37-0.55,0.13-0.789l-2.94-2.96c-0.24-0.23-0.63-0.23-0.87,0l-2.91,2.97c-0.35,0.41-0.12,0.55,0.13,0.789h1.43
		c0.85,4.631,5.34,8.59,10.78,8.59c3.98,0,7.451-2.129,9.36-5.309L6.42,15.39C5,17.41,2.661,18.74,0.01,18.74z` );

    /***/
  } ),

  /***/ './src/js/utils/alignElementToCell.js':
  /*!********************************************!*\
  !*** ./src/js/utils/alignElementToCell.js ***!
  \********************************************/
  /*! exports provided: alignElementToCell */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'alignElementToCell', function () {
      return alignElementToCell;
    });

    function alignElementToCell(element, direction, m_transform, cell) {
      const gridRect = element.parentElement.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      const offsetHeight = direction ? 50 : 35;
      const offsetWidth = direction ? 35 + 7.5 : 0;
      const x = offsetWidth + ( cellRect.left - gridRect.left ) - m_transform[ 4 ];
      const y = ( cellRect.height - offsetHeight ) / 2 + ( cellRect.top - gridRect.top ) - m_transform[ 5 ];
      return {
        x,
        y
      };
    }

    /***/
  } ),

  /***/ './src/js/utils/animateBoardRender.js':
  /*!********************************************!*\
  !*** ./src/js/utils/animateBoardRender.js ***!
  \********************************************/
  /*! exports provided: animateBoard */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'animateBoard', function () {
      return animateBoard;
    });
    const animateBoard = (boardElement, cellSize, colCt) => {
      cellSize = cellSize | 0;
      colCt = colCt | 0;
      const paths = boardElement.querySelectorAll('.cell');
      const len = ~~paths.length;
      const delay = 250;
      let row = 0;

      for (let i = 0; i < len; i++) {
        const path = paths[ i ];
        const x = +( i % colCt * cellSize );
        const y = +( row * cellSize );
        setTimeout(() => {
          path.style.transform = `translate(${x}px, ${y}px)`;
        }, i % row * delay);

        if (!path.nextSibling) {
          row++;
        }
      }
    };

    /***/
  } ),

  /***/ './src/js/utils/bindableSetterChanged.js':
  /*!***********************************************!*\
  !*** ./src/js/utils/bindableSetterChanged.js ***!
  \***********************************************/
  /*! exports provided: bindableSetterChanged */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'bindableSetterChanged', function () {
      return bindableSetterChanged;
    });

    function bindableSetterChanged(property, value, handler) {
      if (this[ property ] === value) return;

      if (this[ property ]) {
        this[ property ].removeChangeListener(handler);
      }

      this[ property ] = value;
      this[ property ].addChangeListener(handler);
    }

    /***/
  } ),

  /***/ './src/js/utils/findCellAtPoint.js':
  /*!*****************************************!*\
  !*** ./src/js/utils/findCellAtPoint.js ***!
  \*****************************************/
  /*! exports provided: findCellAtPoint */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'findCellAtPoint', function () {
      return findCellAtPoint;
    });

    function findCellAtPoint(x, y, grid) {
      const {
        top,
        left
      } = grid.getBoundingClientRect();
      const cellPt = {
        x: x - left,
        y: y - top
      };
      const colNum = ~~( cellPt.x / 50 );
      const rowNum = ~~( cellPt.y / 50 );
      if (isNaN(colNum) || rowNum > 9 || colNum > 9 || isNaN(rowNum) || !grid.children[ rowNum ] || !grid.children[ rowNum ].children[ colNum ]) return null;
      return grid.children[ rowNum ].children[ colNum ];
    }

    /***/
  } ),

  /***/ './src/js/utils/findCells.js':
  /*!***********************************!*\
  !*** ./src/js/utils/findCells.js ***!
  \***********************************/
  /*! exports provided: findCells */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'findCells', function () {
      return findCells;
    });
    /* harmony import */
    var _getCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCell */ './src/js/utils/getCell.js');

    function findCells(shipSegment, board, direction) {
      if (!shipSegment) {
        return [];
      }

      const shipSegmentRect = shipSegment.getBoundingClientRect();
      const boardRect = board.getBoundingClientRect();
      const rowNum = ~~( ( shipSegmentRect.top - boardRect.top ) / 50 );
      const colNum = ~~( ( shipSegmentRect.left - boardRect.left ) / 50 );
      const cells = [];
      let colCursor = colNum;
      let rowCursor = rowNum;
      let thisSegment = shipSegment;

      while (thisSegment && thisSegment.nodeName === 'rect') {
        const cell = Object(_getCell__WEBPACK_IMPORTED_MODULE_0__[ 'getCell' ])(board, rowCursor, colCursor);

        if (cell) {
          cells.push(cell);
        }

        thisSegment = thisSegment.nextSibling;
        direction ? rowCursor++ : colCursor++;
      }

      colCursor = colNum;
      rowCursor = rowNum;
      thisSegment = shipSegment;

      while (thisSegment.previousSibling && thisSegment.previousSibling.nodeName === 'rect') {
        direction ? rowCursor-- : colCursor--;
        const cell = Object(_getCell__WEBPACK_IMPORTED_MODULE_0__[ 'getCell' ])(board, rowCursor, colCursor);

        if (cell) {
          cells.unshift(cell);
        }

        thisSegment = thisSegment.previousSibling;
      }

      return cells;
    }

    /***/
  } ),

  /***/ './src/js/utils/findNodeAtPoint.js':
  /*!*****************************************!*\
  !*** ./src/js/utils/findNodeAtPoint.js ***!
  \*****************************************/
  /*! exports provided: findNodeAtPoint */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'findNodeAtPoint', function () {
      return findNodeAtPoint;
    });

    function findNodeAtPoint(x, y, nodeList) {
      let len = +nodeList.length;
      let i = +0;

      for (; i < len; i++) {
        const {
          left,
          top,
          width,
          height
        } = nodeList[ i ].getBoundingClientRect();

        if (x >= left && x <= left + width && y >= top && y <= top + height) {
          break;
        }
      }

      return nodeList[ i ];
    }

    /***/
  } ),

  /***/ './src/js/utils/getCell.js':
  /*!*********************************!*\
  !*** ./src/js/utils/getCell.js ***!
  \*********************************/
  /*! exports provided: getCell */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'getCell', function () {
      return getCell;
    });

    function getCell(board, row, col) {
      if (row > 9 || col > 9) {
        return null;
      }

      return board.children[ row ].children[ col ];
    }

    /***/
  } ),

  /***/ './src/js/utils/getHitInfo.js':
  /*!************************************!*\
  !*** ./src/js/utils/getHitInfo.js ***!
  \************************************/
  /*! exports provided: getHitInfo */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'getHitInfo', function () {
      return getHitInfo;
    });

    function getHitInfo(playerModel, targetCell) {
      const playerShips = playerModel.ships;
      let i = playerShips.length;

      outer: while (i--) {
        const cells = playerShips[ i ].occupiedCells;
        let j = cells.length;

        while (j--) {
          if (cells[ j ] === targetCell) {
            return {
              ship: playerShips[ i ],
              index: j
            };
          }
        }
      }

      return null;
    }

    /***/
  } ),

  /***/ './src/js/utils/getMoreCellsFromCell.js':
  /*!**********************************************!*\
  !*** ./src/js/utils/getMoreCellsFromCell.js ***!
  \**********************************************/
  /*! exports provided: getMoreCellsFromCell */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'getMoreCellsFromCell', function () {
      return getMoreCellsFromCell;
    });
    /* harmony import */
    var _getCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCell */ './src/js/utils/getCell.js');

    function getMoreCellsFromCell(grid, cell, direction, n) {
      const cellRect = cell.getBoundingClientRect();
      const gridRect = grid.getBoundingClientRect();
      let pt = {
        y: ~~( ( cellRect.top - gridRect.top ) / 50 ),
        x: ~~( ( cellRect.left - gridRect.left ) / 50 )
      };
      const axis = direction ? 'y' : 'x';
      const cells = [];

      for (let i = 0; i < n; i++) {
        const targetCell = Object(_getCell__WEBPACK_IMPORTED_MODULE_0__[ 'getCell' ])(grid, pt.y, pt.x);

        if (!targetCell) {
          break;
        }

        cells[ i ] = targetCell;
        pt[ axis ]++;
      }

      return cells;
    }

    /***/
  } ),

  /***/ './src/js/utils/randomizeShips.js':
  /*!****************************************!*\
  !*** ./src/js/utils/randomizeShips.js ***!
  \****************************************/
  /*! exports provided: randomizeShips */
  /***/ ( function (module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'randomizeShips', function () {
      return randomizeShips;
    });
    /* harmony import */
    var _utils_getCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getCell */ './src/js/utils/getCell.js');

    const floor = Math.floor;
    const random = Math.random;

    function randomizeShips(grid, playerModel) {
      const occupiedCellsSet = playerModel.occupiedCellsSet;
      occupiedCellsSet.clear();
      const shipModels = playerModel.ships;
      shipModels.forEach(shipModel => {
        const {
          cells,
          direction
        } = findUnusedCells(grid, occupiedCellsSet, getRandomStartPoint(), floor(random() * 2), shipModel.type.size);
        shipModel.occupiedCells = cells;
        shipModel.direction = direction;
        cells.forEach(cell => {
          occupiedCellsSet.add(cell);
        });
      });
    }

    function findUnusedCells(board, occupiedCellsSet, pt, direction, n) {
      const axis = direction ? 'y' : 'x';

      if (pt[ axis ] + n > 9) {
        return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
      }

      const cells = [];

      for (let i = 0; i < n; i++) {
        const cell = Object(_utils_getCell__WEBPACK_IMPORTED_MODULE_0__[ 'getCell' ])(board, pt.y, pt.x);

        if (occupiedCellsSet.has(cell)) {
          return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
        }

        cells[ i ] = cell;
        pt[ axis ]++;
      }

      return {
        cells,
        direction: direction
      };
    }

    function getRandomStartPoint() {
      return {
        x: floor(random() * 10),
        y: floor(random() * 10)
      };
    }

    /***/
  } )

  /******/
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0FycmF5LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9hcmQvYm9hcmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9hcmQvY29uc29sZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NoaXAvc2hpcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGgtaW50ZXJwb2xhdG9yL3NyYy9tYXRoL1NWR1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGgtaW50ZXJwb2xhdG9yL3NyYy9tYXRoL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9EX0RheV9TdGVuY2lsLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvRF9EYXlfU3RlbmNpbC53b2ZmIiwid2VicGFjazovLy8uL3NyYy9qcy9ib2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9hcmQvQm9hcmRHcmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ib2FyZC9Db25zb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ib2FyZC9fY29uc29sZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9qcy9ib2FyZC9ib2FyZC5zY3NzP2RkYjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2JvYXJkL2NvbnNvbGUuc2Nzcz84ZmExIiwid2VicGFjazovLy8uL3NyYy9qcy9lbnVtL1NoaXBUeXBlRW51bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZXBsYXkvQ29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWVwbGF5L0dhbWVQbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lcGxheS9IdW1hbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZXBsYXkvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5zY3NzPzYxYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL0dhbWVTdGF0ZU1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbC9QbGF5ZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvU2hpcE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaGlwL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NoaXAvU2hpcEdyYXBoaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NoaXAvc2hpcC5zY3NzP2NjNDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N2Z1BhdGhzL3JvdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvYWxpZ25FbGVtZW50VG9DZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9hbmltYXRlQm9hcmRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2JpbmRhYmxlU2V0dGVyQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZmluZENlbGxBdFBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9maW5kQ2VsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2ZpbmROb2RlQXRQb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0Q2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0SGl0SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0TW9yZUNlbGxzRnJvbUNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3JhbmRvbWl6ZVNoaXBzLmpzIl0sIm5hbWVzIjpbIl9hcnJheVdpdGhIb2xlcyIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2l0ZXJhYmxlVG9BcnJheSIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImZyb20iLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwiYXJyYXlXaXRoSG9sZXMiLCJyZXF1aXJlIiwiaXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiX3RvQXJyYXkiLCJzdG9yZSIsInNoYXJlU3RvcmUiLCJjcmVhdGVTdG9yZSIsImxlbmd0aCIsIm5leHRGcmFtZUlkIiwiaW5mbyIsImNoYW5nZXMiLCJwcm9wZXJ0eU5hbWUiLCJwcm9jZXNzaW5nQ2hhbmdlcyIsImNoYW5nZXNCeU9iamVjdCIsImZvckVhY2giLCJzb3VyY2UiLCJnZXRDaGFuZ2VMaXN0ZW5lcnMiLCJxdWV1ZSIsImNhbGxiYWNrIiwic29ydCIsInByaW9yaXR5Q29tcGFyYXRvciIsInAyIiwicDEiLCJwcm9wZXJ0eSIsImdldFByb3BlcnR5VmFsdWVzIiwic3VzcGVuZE5vdGlmaWNhdGlvbnMiLCJkZXNjcmlwdG9yIiwibmV3VmFsdWUiLCJhY3RpdmVCaW5kaW5ncyIsImhhcyIsIm5vdGlmeVByZUNvbW1pdCIsImNhbmNlbGVkIiwiaXRlbSIsImNyZWF0ZUdldHRlciIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJtYXAiLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImVzY2FwZSIsInVybCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJjc3MiLCJsb2NhdGlvbiIsIndpbmRvdyIsIkVycm9yIiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsImN1cnJlbnREaXIiLCJwYXRobmFtZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsInRyaW0iLCJvIiwiJDEiLCJuZXdVcmwiLCJpbmRleE9mIiwiZGVnVG9SYWRzIiwicmFkVG9EZWciLCJTVkdUcmFuc2Zvcm0iLCJjb25zdHJ1Y3RvciIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsIm1fdHJhbnNmb3JtIiwibWFrZUlkZW50aXR5Iiwic2V0TWF0cml4IiwibWF0cml4IiwiaXNJZGVudGl0eSIsImRldCIsInRyYW5zZm9ybSIsInhTY2FsZSIsIk1hdGgiLCJzcXJ0IiwieVNjYWxlIiwiaXNJbnZlcnRpYmxlIiwiZGV0ZXJtaW5hbnQiLCJCb29sZWFuIiwiaXNGaW5pdGUiLCJpbnZlcnNlIiwicmVzdWx0IiwiaXNJZGVudGl0eU9yVHJhbnNsYXRpb24iLCJtdWx0aXBseSIsIm90aGVyIiwidHJhbnMiLCJvbV90cmFuc2Zvcm0iLCJ0bV90cmFuc2Zvcm0iLCJyb3RhdGUiLCJkZWdyZWVzIiwieCIsInkiLCJ0cmFuc2xhdGVGbGFnIiwidW5kZWZpbmVkIiwidHJhbnNsYXRlIiwicmFkcyIsImNvc0FuZ2xlIiwiY29zIiwic2luQW5nbGUiLCJzaW4iLCJyb3QiLCJzY2FsZSIsInN4Iiwic3kiLCJ0eCIsInR5Iiwicm90YXRlRnJvbVZlY3RvciIsImF0YW4yIiwiZmxpcFgiLCJmbGlwWSIsInNoZWFyIiwic2tldyIsImFuZ2xlWCIsImFuZ2xlWSIsInRhbiIsInNrZXdYIiwiYW5nbGUiLCJza2V3WSIsIm1hcFBvaW50IiwicG9pbnQiLCJkZWciLCJQSSIsInJhZCIsImlzTnVsbE9yVW5kZWZpbmVkIiwicm90YXRlUG9pbnQiLCJvcmlnaW5YIiwib3JpZ2luWSIsInJhZGlhbnNYIiwicmFkaWFuc1kiLCJ2IiwidngiLCJ2eSIsIkJvYXJkIiwiZ2FtZVN0YXRlIiwic2hpcERyYWdTdGFydENhbGxiYWNrIiwiYmluZCIsInNoaXBEcmFnQ2FsbGJhY2siLCJzaGlwRHJvcENhbGxiYWNrIiwic2hpcE1vZGVsQ2hhbmdlTGlzdGVuZXIiLCJzaGlwTW9kZWxQcmVDb21taXRMaXN0ZW5lciIsInBsYXllcjEiLCJwbGF5ZXIyIiwiYXNzaWduIiwiYm9hcmRHcmFwaGljIiwiX2JvYXJkR3JhcGhpYyIsIkJvYXJkR3JhcGhpYyIsInNoaXBzIiwicmVuZGVyIiwiZWxlbWVudCIsInBvc3RSZW5kZXJBY3Rpb25zIiwidmlzaWJsZVNoaXBzTWFwIiwic2hpcCIsInNoaXBNb2RlbCIsImRyYWdTdGFydENhbGxiYWNrIiwiZHJhZ0NhbGxiYWNrIiwiZHJvcENhbGxiYWNrIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJhZGRQcmVDb21taXRMaXN0ZW5lciIsIm9yaWdpbkV2ZW50IiwiY2VsbHMiLCJvY2N1cGllZENlbGxzIiwiY2VsbCIsIm9jY3VwaWVkQ2VsbHNTZXQiLCJkZWxldGUiLCJzZXRIaWdobGlnaHRlZENlbGxzIiwiZmluZENlbGxzIiwic2VnbWVudCIsImdyaWRzIiwiZGlyZWN0aW9uIiwidmFsaWREcm9wIiwidHlwZSIsInNpemUiLCJjb2xvciIsImNlbGxzVG9PY2N1cHkiLCJsYXN0SGlnaGxpZ2h0ZWRDZWxscyIsImdldE1vcmVDZWxsc0Zyb21DZWxsIiwiYWxsb3dDaGFuZ2UiLCJzZXRUaW1lb3V0Iiwib2NjdXBpZWRDZWxsc0NoYW5nZWQiLCJzaGlwRGlyZWN0aW9uQ2hhbmdlZCIsImdldCIsInNlZWQiLCJzaGlwR3JhcGhpYyIsInF1ZXJ5U2VsZWN0b3IiLCJzZWVkQm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZmluZENlbGxBdFBvaW50IiwibGVmdCIsInRvcCIsIm9sZFZhbHVlIiwiYWRkIiwic3R5bGUiLCJmaWxsIiwiTWFwIiwiX2VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXJTaGlwcyIsInJlbmRlcmVkIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaW5kZXgiLCJTaGlwIiwiYXBwZW5kQ2hpbGQiLCJzZXQiLCJwbGF5ZXIxR3JpZCIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsImciLCJncmlkU2l6ZSIsInBhdGgiLCJjbG9uZSIsImNsb25lTm9kZSIsInBsYXllcjJHcmlkIiwiQ29uc29sZSIsImdyaWQiLCJwbGF5ZXJNb2RlbENoYW5nZUhhbmRsZXIiLCJyYW5kb21pemVCdXR0b25DbGlja0hhbmRsZXIiLCJzdGFydEdhbWVDbGlja0hhbmRsZXIiLCJnYW1lU3RhdGVDaGFuZ2VIYW5kbGVyIiwiX3BsYXllcjEiLCJiaW5kYWJsZVNldHRlckNoYW5nZWQiLCJfcGxheWVyMiIsIl9nYW1lU3RhdGUiLCJpbm5lckhUTUwiLCJjb25zb2xlVGVtcGxhdGUiLCJyYW5kb21pemVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lQnV0dG9uIiwiYWxsU2hpcHNQbGFjZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwbGF5ZXJUdXJuQ2hhbmdlZCIsInBsYXllciIsInBsYXllclR1cm4iLCJzdGF0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0ZWQiLCJzdGF0MSIsInN0YXQyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmFuZG9taXplU2hpcHMiLCJnYW1lU3RhcnRlZCIsImJ1dHRvbiIsImFsbFNoaXBUeXBlcyIsInRvdGFsQ2VsbHMiLCJTaGlwVHlwZUVudW0iLCJuYW1lIiwibWF4QWxsb3dlZCIsImlzRnJvemVuIiwiZnJlZXplIiwiQ09SVkVURSIsIkZSSUdBVEUiLCJERVNUUk9ZRVIiLCJDQVJSSUVSIiwiQ29tcHV0ZXIiLCJQbGF5ZXIiLCJhcmdzIiwiYWxseUdyaWQiLCJwbGF5ZXJNb2RlbCIsInRhcmdldENlbGwiLCJpbmNvbWluZ1Nob3RzIiwiaGl0SW5mbyIsImdldEhpdEluZm8iLCJoaXRzIiwiR2FtZVBsYXkiLCJzdGFydEdhbWUiLCJwbGF5ZXJUdXJuQ2hhbmdlZEhhbmRsZXIiLCJodW1hbiIsIkh1bWFuIiwiY29tcHV0ZXIiLCJvcHBvbmVudEdyaWQiLCJvcHBvbmVudEdyaWRDbGlja0hhbmRsZXIiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJjdXJyZW50VGFyZ2V0IiwicGxheWVyTW9kZWxDaGFuZ2VkIiwiZ2FtZVN0YXRlTW9kZWwiLCJHYW1lU3RhdGVNb2RlbCIsImJvYXJkIiwiYm9keSIsImNvbnNvbGVWaWV3IiwiYW5pbWF0ZUJvYXJkIiwiZ2FtZSIsImJpbmRhYmxlIiwiUGxheWVyTW9kZWwiLCJnZW5lcmF0ZURlZmF1bHRTaGlwcyIsImNoYW5nZUhhbmRsZXIiLCJzaGlwTW9kZWxzIiwiU2hpcE1vZGVsIiwic2hpcE1vZGVsQ2hhbmdlZEhhbmRsZXIiLCJTZXQiLCJfc2hpcHMiLCJfYWxsU2hpcHNQbGFjZWQiLCJwcmlvcml0eSIsInF1ZXVlTm90aWZpY2F0aW9uIiwiZHJhZ2dhYmxlIiwiZWxlbWVudE1vdXNlRG93bkhhbmRsZXIiLCJib2R5TW91c2VVcEhhbmRsZXIiLCJib2R5TW91c2VNb3ZlSGFuZGxlciIsInJvdGF0ZUFycm93Q2xpY2tIYW5kbGVyIiwibW9kZWxDaGFuZ2VIYW5kbGVyIiwiX3NoaXBHcmFwaGljIiwiU2hpcEdyYXBoaWMiLCJyb3RhdGVBcnJvdyIsIl9zaGlwTW9kZWwiLCJfZHJhZ2dhYmxlIiwiZGVsdGFUeCIsImRlbHRhVHkiLCJhbmltYXRlIiwiYW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3RhbmNlIiwicG93IiwibGFzdFgiLCJsYXN0WSIsInRpY2siLCJwcm9ncmVzcyIsIm5ld1R4IiwibmV3VHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJmaW5kTm9kZUF0UG9pbnQiLCJzaGlwU2VnbWVudHMiLCJsYXN0TW91c2VFdmVudCIsImxhc3RHb29kVHJhbnNmb3JtIiwiYnV0dG9ucyIsImxhc3RQYWdlWCIsImxhc3RQYWdlWSIsImRlbHRhWCIsImRlbHRhWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXJlY3Rpb25DaGFuZ2VkIiwiaGl0c0NoYW5nZWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImFsaWduRWxlbWVudFRvQ2VsbCIsIl9zaGlwU2VnbWVudHMiLCJfcm9hdGVBcnJvdyIsImhpdCIsInJlY3QiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJncmlkUmVjdCIsInBhcmVudEVsZW1lbnQiLCJjZWxsUmVjdCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0IiwiYm9hcmRFbGVtZW50IiwiY2VsbFNpemUiLCJjb2xDdCIsInBhdGhzIiwibGVuIiwiZGVsYXkiLCJyb3ciLCJuZXh0U2libGluZyIsImhhbmRsZXIiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNlbGxQdCIsImNvbE51bSIsInJvd051bSIsImlzTmFOIiwiY2hpbGRyZW4iLCJzaGlwU2VnbWVudCIsInNoaXBTZWdtZW50UmVjdCIsImJvYXJkUmVjdCIsImNvbEN1cnNvciIsInJvd0N1cnNvciIsInRoaXNTZWdtZW50Iiwibm9kZU5hbWUiLCJnZXRDZWxsIiwicHJldmlvdXNTaWJsaW5nIiwidW5zaGlmdCIsIm5vZGVMaXN0Iiwid2lkdGgiLCJjb2wiLCJwbGF5ZXJTaGlwcyIsIm91dGVyIiwiaiIsIm4iLCJwdCIsImF4aXMiLCJmbG9vciIsInJhbmRvbSIsImNsZWFyIiwiZmluZFVudXNlZENlbGxzIiwiZ2V0UmFuZG9tU3RhcnRQb2ludCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzVCLE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixHQUFkLENBQUosRUFBd0IsT0FBT0EsR0FBUDtBQUN6Qjs7QUFFREcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxlQUFqQixDOzs7Ozs7Ozs7OztBQ0pBLFNBQVNNLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDeEMsTUFBSUQsR0FBRyxJQUFJRCxHQUFYLEVBQWdCO0FBQ2RHLFVBQU0sQ0FBQ0MsY0FBUCxDQUFzQkosR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCQyxXQUFLLEVBQUVBLEtBRHVCO0FBRTlCRyxnQkFBVSxFQUFFLElBRmtCO0FBRzlCQyxrQkFBWSxFQUFFLElBSGdCO0FBSTlCQyxjQUFRLEVBQUU7QUFKb0IsS0FBaEM7QUFNRCxHQVBELE1BT087QUFDTFAsT0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV0MsS0FBWDtBQUNEOztBQUVELFNBQU9GLEdBQVA7QUFDRDs7QUFFREgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxlQUFqQixDOzs7Ozs7Ozs7OztBQ2ZBLFNBQVNTLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUM5QixNQUFJQyxNQUFNLENBQUNDLFFBQVAsSUFBbUJSLE1BQU0sQ0FBQ00sSUFBRCxDQUF6QixJQUFtQ04sTUFBTSxDQUFDUyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JMLElBQS9CLE1BQXlDLG9CQUFoRixFQUFzRyxPQUFPZCxLQUFLLENBQUNvQixJQUFOLENBQVdOLElBQVgsQ0FBUDtBQUN2Rzs7QUFFRFosTUFBTSxDQUFDQyxPQUFQLEdBQWlCVSxnQkFBakIsQzs7Ozs7Ozs7Ozs7QUNKQSxTQUFTUSxnQkFBVCxHQUE0QjtBQUMxQixRQUFNLElBQUlDLFNBQUosQ0FBYyxzREFBZCxDQUFOO0FBQ0Q7O0FBRURwQixNQUFNLENBQUNDLE9BQVAsR0FBaUJrQixnQkFBakIsQzs7Ozs7Ozs7Ozs7QUNKQSxJQUFJRSxjQUFjLEdBQUdDLG1CQUFPLENBQUMsaUZBQUQsQ0FBNUI7O0FBRUEsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLG1GQUFELENBQTdCOztBQUVBLElBQUlFLGVBQWUsR0FBR0YsbUJBQU8sQ0FBQyxtRkFBRCxDQUE3Qjs7QUFFQSxTQUFTRyxRQUFULENBQWtCNUIsR0FBbEIsRUFBdUI7QUFDckIsU0FBT3dCLGNBQWMsQ0FBQ3hCLEdBQUQsQ0FBZCxJQUF1QjBCLGVBQWUsQ0FBQzFCLEdBQUQsQ0FBdEMsSUFBK0MyQixlQUFlLEVBQXJFO0FBQ0Q7O0FBRUR4QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ3QixRQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVUMsdUJBQVEsTUFBUkEsRUFBUTtnQkFBQTsyQkFBQSxHLEVBQUE7OEJBQUEsRyxFQUFBO0FBSUssZ0NBSkw7QUFBZDtBQUFjLEs7QUFPUEEsZUFBUCxHQUFPQSxDQUFQLE1BQU9BLEVBQVAsS0FBT0E7Ozs7Ozs7Ozs7O1dBVUFBLGtCLEdBQVA7Ozs7Ozs7Ozs7OztXQVdLQSxxQixHQUFQOzs7Ozs7Ozs7Ozs7O1FBVU1BLGdCQUFRQyxPQUFSRCxHQUFRQyxDQUFSRCxJQUFRQyxTQUEwQkMsR0FBMUJELEtBQWQsU0FBTUQsR0FBTixZQUFNQSxHQUFOLGU7Ozs7Ozs7Ozs7Ozs7O21CQVlFLFNBQXVCRyxDQUF2QiwyRDs7Ozs7Ozs7Ozs7V0FXQSxvQixDQUFBLFEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7bUJBV0EsU0FBdUIsT0FBdkIsR0FBdUIsQ0FBdkIsaUQ7Ozs7Ozs7Ozs7O1dBV0EsdUIsQ0FBQSxRLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RKLE1BQUlDLFlBQUosR0FBSUEsRUFBSjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JJOzs7UUFFSUMsT0FBSixlQUF3QixJQUF4QixDQUF3QixNQUF4QixDOztpQkFDVyxTLEVBQUE7YUFFTTtBQUZiLHNCQUVhO2lCQUViO0FBRmEsTztBQUlYQyxxQkFBVUQsSUFBVkMsQ0FBTixNQUFNQSxFQUFOLElBQU1BOzs7UUFFRUMsZUFBUixPO0FBRUlILFlBQUosWUFBSUEsSUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFiQTs7Ozs7QUFJVTs7QUFFSkksdUNBQW9CQyxDQUExQjtVQUNRLGVBQVIsUTtVQUNrQixvQkFBbEIsZTtrQkFKc0MsRzs7b0JBT3RCQyxJLENBTGhCLENBS0E7O0FBQ1dKLHNCQUR1QixPQUN2QkEsQ0FEdUI7O21CQUV2QkssR0FBUCw2Qjs7QUFUUjtPQVFlTDtLQU5lRyxDQUFwQkQ7QUFZUDs7eUJBRWtCLFMsRUFBQTtXQUNSSSxnQixDQUFBQSxTLEVBQUFBO0FBRnNCOztBQUFBLE9BRXRCQTtBQUZzQjthQUFBO0FBQUEsT0FFdEJBOztBQVFhLGVBVlM7T0FFdEJBOztBQVNnQixlQVhNO09BRXRCQTs7QUFVYSxhQUFDakMsRUFBRDtPQVZiaUM7QUFGYjtBQUFBO0FBQUEsT0FFYUE7Ozs7O0FBQUFBLEs7Ozs7Ozs7Ozs7O0FBdUJUQywwQkFBSixPQUFJQSxFQUFtQjtnQkFDQUQsaUJBQW5CLE1BQW1CQSxDOzs7QUFFdkIsd0JBQWMsbUJBQWUsS0FBZixDQUFlLE1BQWYsR0FBZSxLQUFmLENBQWQ7QUFDRTs7QUFERjs7S0FBQTs7Ozs7Ozs7OztXQWFBLGtCLENBQVcsVyxFQUFXRSxLLEVBQXRCO0FBREY7QUFHTUMsWUFBTixJQUFNQSxDQUFLQztBQUFBQSxrQkFBWCxRQUFXQTtBQUFYO0FBQVdBLE9BQUxEO0tBSE47Ozs7Ozs7Ozs7OztBQWVRRSxXQUFOLGtCQUFNQSxDQUFOLEtBQU1BLEVBQU4sS0FBTUEsRUFBTjs7UUFFSUMsT0FBSixLQUFjLFM7Ozs7QUFJZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelBKLEc7O0FBRUEsdUJBQXNCQyxJQUF0QixPQUFzQkEsRUFBdEI7O1dBRVcsWSxDQUFZLFEsRUFBQTtXQUVSQyxZQUFQO0FBRko7OztBQU1KOztXQUVXLFksQ0FBQSxRLEVBQW9CLFUsRUFBQTtXQUVqQkMsb0JBQU47VUFDSTFDLE9BQUosSTs7VUFFSSxnQ0FBSixRQUFJLEMsQ0FISixDQUlJOzs7QUFFSTJDLDRCQUFKLElBQUlBLEVBQWdCLFFBQWhCQSxFLENBQ0E7Ozs7QUFHUjtBQUNBOzs7OztnQkFHUUMsRUFBUixRO0FBQ0lGLGtCQUFKO1dBQ0k7O0FBRUo7O0FBcEJKOzs7O0FBd0JKOztBQUNRRyx1QkFBZUMsQ0FBZkQsSUFBZUMsQ0FBZkQsQ0FBSixRQUFJQSxJQUE2QixLQUE3QkE7QUFDQSxLOzs7V0FHSixpQixDQUFBLE8sRUFBQTtRQUNBLDJCLEVBQUE7Ozs7QUFHSixjQUFTRSxHQUFUO0FBQ1FDLG1CQUFXLEdBQVhBLENBQUosT0FBSUEsRUFBSixNQUFJQTtBQUNFZCxXQUFOLE1BQU1BO0FBQ047OztRQUdNSCxRQUFOLEdBQWMsSztnQkFDRWtCLHlCQUFaLHdCQUFZQSxDOztBQURoQjtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFlc0J2QyxVLEVBQWQ7O2dCQUlKOzs7O1dBRUltQyw2QixFQUFKOzs7Ozs7QUFLU0Ysc0M7QUFBa0JPO1VBRGdCLFUsRUFBQTs7d0JBRzNCUCxJLENBQUFBLGtCQUFXeEMsSSxHQUFBQTtBQUgzQjtBQWRKOztBQXFCSjt3REFBQTtrREFBQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLCtCQUErQix1QkFBdUIsRUFBRSxvREFBb0QseUNBQXlDLGdDQUFnQyx3QkFBd0Isb0JBQW9CLEVBQUUsa0JBQWtCLGVBQWUsRUFBRSxrQkFBa0IsZ0JBQWdCLEVBQUUsa0NBQWtDLG9CQUFvQixFQUFFOztBQUV6WDs7Ozs7Ozs7Ozs7O0FDUEEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxhQUFhLGlCQUFpQix1QkFBdUIsY0FBYyxxQ0FBcUMsYUFBYSxrQkFBa0IsRUFBRSxxQkFBcUIsMEJBQTBCLG9CQUFvQixFQUFFLDBCQUEwQixxQkFBcUIsb0JBQW9CLHdCQUF3QixFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSw2Q0FBNkMsK0JBQStCLHlDQUF5QyxFQUFFLGlDQUFpQyw2QkFBNkIsNkJBQTZCLEVBQUUsMkNBQTJDLHdCQUF3QiwrQkFBK0IseUNBQXlDLHlCQUF5Qix1QkFBdUIsRUFBRTs7QUFFanhCOzs7Ozs7Ozs7Ozs7QUNQQSxhQUFhLG1CQUFPLENBQUMsb0dBQWlEO0FBQ3RFLDJCQUEyQixtQkFBTyxDQUFDLGdHQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsd0JBQXdCLG1CQUFPLENBQUMsbUVBQTZCLHlDQUF5QyxtQkFBTyxDQUFDLGlFQUE0Qiw2QkFBNkIsRUFBRSxVQUFVLDJDQUEyQyxxQkFBcUIscUJBQXFCLGVBQWUsY0FBYyw4QkFBOEIsMkJBQTJCLDBCQUEwQixzQkFBc0IsRUFBRSxzQkFBc0IsdUJBQXVCLGFBQWEsZ0NBQWdDLGdCQUFnQixrQkFBa0IsRUFBRSxZQUFZLDJDQUEyQyxvQkFBb0IsOEJBQThCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLEVBQUUsUUFBUSxxQkFBcUIsZUFBZSxjQUFjLEVBQUU7O0FBRTl6Qjs7Ozs7Ozs7Ozs7O0FDUkEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxvQ0FBb0MsaUJBQWlCLEVBQUUsMkRBQTJELDBCQUEwQixFQUFFLCtCQUErQiw4QkFBOEIsMkJBQTJCLDBCQUEwQixzQkFBc0IsRUFBRSxnREFBZ0Qsb0JBQW9CLGlDQUFpQyx1QkFBdUIsRUFBRTs7QUFFN2E7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBSUE7QUFDQVIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVN1RCxZQUFULEVBQXVCO0FBQ3ZDLE1BQUlDLElBQUksR0FBRyxFQUFYLENBRHVDLENBR3ZDOztBQUNBQSxNQUFJLENBQUN6QyxRQUFMLEdBQWdCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbkMsV0FBTyxLQUFLMEMsR0FBTCxDQUFTLFVBQVVKLElBQVYsRUFBZ0I7QUFDL0IsVUFBSUssT0FBTyxHQUFHQyxzQkFBc0IsQ0FBQ04sSUFBRCxFQUFPRSxZQUFQLENBQXBDOztBQUNBLFVBQUdGLElBQUksQ0FBQyxDQUFELENBQVAsRUFBWTtBQUNYLGVBQU8sWUFBWUEsSUFBSSxDQUFDLENBQUQsQ0FBaEIsR0FBc0IsR0FBdEIsR0FBNEJLLE9BQTVCLEdBQXNDLEdBQTdDO0FBQ0EsT0FGRCxNQUVPO0FBQ04sZUFBT0EsT0FBUDtBQUNBO0FBQ0QsS0FQTSxFQU9KRSxJQVBJLENBT0MsRUFQRCxDQUFQO0FBUUEsR0FURCxDQUp1QyxDQWV2Qzs7O0FBQ0FKLE1BQUksQ0FBQ0ssQ0FBTCxHQUFTLFVBQVNDLE9BQVQsRUFBa0JDLFVBQWxCLEVBQThCO0FBQ3RDLFFBQUcsT0FBT0QsT0FBUCxLQUFtQixRQUF0QixFQUNDQSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUQsRUFBT0EsT0FBUCxFQUFnQixFQUFoQixDQUFELENBQVY7QUFDRCxRQUFJRSxzQkFBc0IsR0FBRyxFQUE3Qjs7QUFDQSxTQUFJLElBQUlILENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLakMsTUFBeEIsRUFBZ0NpQyxDQUFDLEVBQWpDLEVBQXFDO0FBQ3BDLFVBQUlJLEVBQUUsR0FBRyxLQUFLSixDQUFMLEVBQVEsQ0FBUixDQUFUO0FBQ0EsVUFBRyxPQUFPSSxFQUFQLEtBQWMsUUFBakIsRUFDQ0Qsc0JBQXNCLENBQUNDLEVBQUQsQ0FBdEIsR0FBNkIsSUFBN0I7QUFDRDs7QUFDRCxTQUFJSixDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUdDLE9BQU8sQ0FBQ2xDLE1BQXZCLEVBQStCaUMsQ0FBQyxFQUFoQyxFQUFvQztBQUNuQyxVQUFJUixJQUFJLEdBQUdTLE9BQU8sQ0FBQ0QsQ0FBRCxDQUFsQixDQURtQyxDQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFHLE9BQU9SLElBQUksQ0FBQyxDQUFELENBQVgsS0FBbUIsUUFBbkIsSUFBK0IsQ0FBQ1csc0JBQXNCLENBQUNYLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBekQsRUFBb0U7QUFDbkUsWUFBR1UsVUFBVSxJQUFJLENBQUNWLElBQUksQ0FBQyxDQUFELENBQXRCLEVBQTJCO0FBQzFCQSxjQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVVLFVBQVY7QUFDQSxTQUZELE1BRU8sSUFBR0EsVUFBSCxFQUFlO0FBQ3JCVixjQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsTUFBTUEsSUFBSSxDQUFDLENBQUQsQ0FBVixHQUFnQixTQUFoQixHQUE0QlUsVUFBNUIsR0FBeUMsR0FBbkQ7QUFDQTs7QUFDRFAsWUFBSSxDQUFDVSxJQUFMLENBQVViLElBQVY7QUFDQTtBQUNEO0FBQ0QsR0F4QkQ7O0FBeUJBLFNBQU9HLElBQVA7QUFDQSxDQTFDRDs7QUE0Q0EsU0FBU0csc0JBQVQsQ0FBZ0NOLElBQWhDLEVBQXNDRSxZQUF0QyxFQUFvRDtBQUNuRCxNQUFJRyxPQUFPLEdBQUdMLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxFQUF6QjtBQUNBLE1BQUljLFVBQVUsR0FBR2QsSUFBSSxDQUFDLENBQUQsQ0FBckI7O0FBQ0EsTUFBSSxDQUFDYyxVQUFMLEVBQWlCO0FBQ2hCLFdBQU9ULE9BQVA7QUFDQTs7QUFFRCxNQUFJSCxZQUFZLElBQUksT0FBT2EsSUFBUCxLQUFnQixVQUFwQyxFQUFnRDtBQUMvQyxRQUFJQyxhQUFhLEdBQUdDLFNBQVMsQ0FBQ0gsVUFBRCxDQUE3QjtBQUNBLFFBQUlJLFVBQVUsR0FBR0osVUFBVSxDQUFDSyxPQUFYLENBQW1CZixHQUFuQixDQUF1QixVQUFVckIsTUFBVixFQUFrQjtBQUN6RCxhQUFPLG1CQUFtQitCLFVBQVUsQ0FBQ00sVUFBOUIsR0FBMkNyQyxNQUEzQyxHQUFvRCxLQUEzRDtBQUNBLEtBRmdCLENBQWpCO0FBSUEsV0FBTyxDQUFDc0IsT0FBRCxFQUFVZ0IsTUFBVixDQUFpQkgsVUFBakIsRUFBNkJHLE1BQTdCLENBQW9DLENBQUNMLGFBQUQsQ0FBcEMsRUFBcURULElBQXJELENBQTBELElBQTFELENBQVA7QUFDQTs7QUFFRCxTQUFPLENBQUNGLE9BQUQsRUFBVUUsSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNBLEMsQ0FFRDs7O0FBQ0EsU0FBU1UsU0FBVCxDQUFtQkssU0FBbkIsRUFBOEI7QUFDN0I7QUFDQSxNQUFJQyxNQUFNLEdBQUdSLElBQUksQ0FBQ1MsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLFNBQWYsQ0FBRCxDQUFuQixDQUFULENBQWpCO0FBQ0EsTUFBSU0sSUFBSSxHQUFHLGlFQUFpRUwsTUFBNUU7QUFFQSxTQUFPLFNBQVNLLElBQVQsR0FBZ0IsS0FBdkI7QUFDQSxDOzs7Ozs7Ozs7OztBQzNFRGxGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTa0YsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUI7QUFDbEMsTUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDekIsV0FBT0EsR0FBUDtBQUNILEdBSGlDLENBSWxDOzs7QUFDQSxNQUFJLGVBQWVDLElBQWYsQ0FBb0JELEdBQXBCLENBQUosRUFBOEI7QUFDMUJBLE9BQUcsR0FBR0EsR0FBRyxDQUFDRSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFOO0FBQ0gsR0FQaUMsQ0FRbEM7QUFDQTs7O0FBQ0EsTUFBSSxjQUFjRCxJQUFkLENBQW1CRCxHQUFuQixDQUFKLEVBQTZCO0FBQ3pCLFdBQU8sTUFBTUEsR0FBRyxDQUFDRyxPQUFKLENBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QkEsT0FBekIsQ0FBaUMsS0FBakMsRUFBd0MsS0FBeEMsQ0FBTixHQUF1RCxHQUE5RDtBQUNIOztBQUVELFNBQU9ILEdBQVA7QUFDSCxDQWZELEM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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O0FBQ0QsQyIsImZpbGUiOiJiYXR0bGVzaGlwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0FycmF5OyIsImNvbnN0IHNoYXJlU3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShzb3VyY2Upe1xuICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgICBjaGFuZ2VMaXN0ZW5lcnM6IG5ldyBNYXAoKSxcbiAgICAgICAgcHJlQ29tbWl0TGlzdGVuZXJzOiBuZXcgTWFwKCksXG4gICAgICAgIHByZUNvbW1pdFByaW9yaXR5UXVldWU6IFtdLFxuICAgICAgICBwcmlvcml0eVF1ZXVlOiBbXVxuICAgIH07XG4gICAgc2hhcmVTdG9yZS5zZXQoc291cmNlLCBzdG9yZSk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuLyoqXG4gKiBUaGUgY2hhbmdlTGlzdGVuZXJzIGxpc3RlbmluZyBmb3JcbiAqIHByb3BlcnR5IGNoYW5nZXMuXG4gKlxuICogQHJldHVybiBNYXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5nZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBzdG9yZSA9IHNoYXJlU3RvcmUuZ2V0KHRoaXMpIHx8IGNyZWF0ZVN0b3JlKHRoaXMpO1xuICAgIHJldHVybiBzdG9yZS5jaGFuZ2VMaXN0ZW5lcnM7XG59XG5cbi8qKlxuICogVGhlIGNoYW5nZUxpc3RlbmVycyBsaXN0ZW5pbmcgZm9yXG4gKiBwcmUgY29tbWl0IHByb3BlcnR5IGNoYW5nZXMuXG4gKlxuICogQHJldHVybiBNYXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByZUNvbW1pdExpc3RlbmVycygpIHtcbiAgY29uc3Qgc3RvcmUgPSBzaGFyZVN0b3JlLmdldCh0aGlzKSB8fCBjcmVhdGVTdG9yZSh0aGlzKTtcbiAgcmV0dXJuIHN0b3JlLnByZUNvbW1pdExpc3RlbmVycztcbn1cblxuLyoqXG4gKiBUaGUgY2hhbmdlTGlzdGVuZXJzIGxpc3RlbmluZyBmb3JcbiAqIHByZSBjb21taXQgcHJvcGVydHkgY2hhbmdlcy5cbiAqXG4gKiBAcmV0dXJuIEFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlvcml0eVF1ZXVlKHNvdXJjZSwgdHlwZSA9ICdwcmlvcml0eVF1ZXVlJykge1xuICBjb25zdCBzdG9yZSA9IHNoYXJlU3RvcmUuZ2V0KHNvdXJjZSkgfHwgY3JlYXRlU3RvcmUoc291cmNlKTtcbiAgcmV0dXJuIHN0b3JlW3R5cGVdO1xufVxuXG4vKipcbiAqIEFkZHMgYSBmdW5jdGlvbiBhcyBhIGNoYW5nZSBsaXN0ZW5lci5cbiAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIHByb3ZpZGVkXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRoYXQgaXMgbm90aWZpZWQgb2YgcHJvcGVydHkgY2hhbmdlcy5cbiAqIEBwYXJhbSB7aW50fSBwcmlvcml0eSBUaGUgcHJpb3JpdHkgb2YgdGhlIGNhbGxiYWNrLiBMYXJnZXIgbnVtYmVyIGluZGljYXRlIGxvd2VyIHByaW9yaXR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgZ2V0UHJpb3JpdHlRdWV1ZSh0aGlzKS5sZW5ndGggPSAwO1xuICAgIGdldENoYW5nZUxpc3RlbmVycy5jYWxsKHRoaXMpLnNldChjYWxsYmFjaywgcHJpb3JpdHkpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IGhhcyBiZWVuIHByZXZpb3VzbHkgYWRkZWRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGdldFByaW9yaXR5UXVldWUodGhpcykubGVuZ3RoID0gMDtcbiAgICBnZXRDaGFuZ2VMaXN0ZW5lcnMuY2FsbCh0aGlzKS5kZWxldGUoY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIEFkZHMgYSBmdW5jdGlvbiBhcyBhIGNoYW5nZSBsaXN0ZW5lci5cbiAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIHByb3ZpZGVkXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRoYXQgaXMgbm90aWZpZWQgb2YgcHJvcGVydHkgY2hhbmdlcy5cbiAqIEBwYXJhbSB7aW50fSBwcmlvcml0eSBUaGUgcHJpb3JpdHkgb2YgdGhlIGNhbGxiYWNrLiBMYXJnZXIgbnVtYmVyIGluZGljYXRlIGxvd2VyIHByaW9yaXR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcmVDb21taXRMaXN0ZW5lcihjYWxsYmFjaywgcHJpb3JpdHkgPSAwKSB7XG4gICAgZ2V0UHJpb3JpdHlRdWV1ZSh0aGlzLCAncHJlQ29tbWl0UHJpb3JpdHlRdWV1ZScpLmxlbmd0aCA9IDA7XG4gICAgZ2V0UHJlQ29tbWl0TGlzdGVuZXJzLmNhbGwodGhpcykuc2V0KGNhbGxiYWNrLCBwcmlvcml0eSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIHRoYXQgaGFzIGJlZW4gcHJldmlvdXNseSBhZGRlZFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByZUNvbW1pdExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgZ2V0UHJpb3JpdHlRdWV1ZSh0aGlzLCAncHJlQ29tbWl0UHJpb3JpdHlRdWV1ZScpLmxlbmd0aCA9IDA7XG4gICAgZ2V0UHJlQ29tbWl0TGlzdGVuZXJzLmNhbGwodGhpcykuZGVsZXRlKGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemF0aW9uIGZ1bmN0aW9uIGZvciBhcHBseWluZyB2YWx1ZXMgdG8gb2JqZWN0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFNldCBjb21wbGV4IHByb3BlcnRpZXNcbiAqIGFwcGx5VmFsdWUoaHRtbERpdiwgJ3N0eWxlLnRyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgyNXB4LCAyNXB4LCAwKScpO1xuICpcbiAqIC8vIGNhbGwgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHNcbiAqIGFwcGx5VmFsdWUoaHRtbEJ1dHRvbiwgJ3NldEF0dHJpYnV0ZScsIFsnYXJpYS1zZWxlY3RlZCcsICd0cnVlJ10pO1xuICpcbiAqIC8vIGNhbGwgZnVuY3Rpb24gaW4gY29udGV4dFxuICogYXBwbHlWYWx1ZShodG1sSW5wdXQsIGZ1bmN0aW9uKG9iail7dGhpcy52YWx1ZSA9IG9iai5maXJzdE5hbWUgKyAnICcgKyBvYmoubGFzdE5hbWV9LCBteU9iamVjdCk7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFNvdXJjZSBBbnkgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHRhcmdldCBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZyB8IGZ1bmN0aW9ufSBwYXRoIENhbiBiZSBhIHN0cmluZyBvciBmdW5jdGlvblxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUgdG8gYXBwbHkuICBJZiB0aGUgcGF0aCBpcyBhIGZ1bmN0aW9uIGFuZCB0aGVcbiAqIHZhbHVlIGlzIGFuIGFycmF5LCBlYWNoIGVsZW1lbnQgaXMgcGFzc2VkIGFzIGFuIGFyZ3VtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWYWx1ZSh0YXJnZXRTb3VyY2UsIHBhdGgsIHZhbHVlKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8IHBhdGguaW5kZXhPZignLicpID09PSAtMTtcbiAgICBsZXQgdGFyZ2V0ID0gdGFyZ2V0U291cmNlO1xuICAgIGxldCBjb250ZXh0O1xuICAgIC8vIENoZWNrIGZvciBkZWVwIG9iamVjdCByZWZlcmVuY2VzXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgIGNvbnN0IGxlbiA9IH5+cGF0aHMubGVuZ3RoO1xuICAgICAgICBsZXQgaSA9IH5+MDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGZyYWdtZW50ID0gcGF0aHNbaV07XG4gICAgICAgICAgICBjb250ZXh0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGkgIT09IGxlbikge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNvbnRleHRbZnJhZ21lbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBtZW1iZXIgcHJvcGVydGllc1xuICAgIGVsc2UgaWYgKHR5cGVvZiBwYXRoID09PSAnZnVuY3Rpb24nICYmIHBhdGggaW4gdGFyZ2V0U291cmNlKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFNvdXJjZVtwYXRoXTtcbiAgICAgICAgY29udGV4dCA9IHRhcmdldFNvdXJjZTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIGZ1bmN0aW9uIGluIG91ciB0YXJnZXQncyBjb250ZXh0XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRmFzdGVyIHRoYW4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3BsaWNlKSB7XG4gICAgICAgICAgICB0YXJnZXQuYXBwbHkoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmNhbGwoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXRTb3VyY2VbcGF0aF0gPSB2YWx1ZTtcbiAgICB9XG59XG5cbmxldCBjaGFuZ2VzQnlPYmplY3QgPSBuZXcgTWFwKCk7XG5sZXQgcXVldWUgPSBuZXcgU2V0KCk7XG5cbmxldCBuZXh0RnJhbWVJZDtcblxuLyoqXG4gKiBGdW5jdGlvbiB1c2VkIHRvIHByb2Nlc3MgcHJvcGVydHkgY2hhbmdlXG4gKiBub3RpZmljYXRpb25zIGJ5IHBvb2xpbmcgYW5kIHRoZW4gZXhlY3V0aW5nXG4gKiB0aGUgbm90aWZpY2F0aW9uIGNoYW5nZUxpc3RlbmVycyBvbiB0aGUgbmV4dCB0aWNrLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG93bmVyIG9mIHRoZSBwcm9wZXJ0eSBiZWluZyBjaGFuZ2VkXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0aGF0IGhhcyBjaGFuZ2VkXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWUgVGhlIHZhbHVlIHByaW9yIHRvIHRoZSBjaGFuZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdWYWx1ZSBUaGUgdmFsdWUgYWZ0ZXIgdGhlIGNoYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVldWVOb3RpZmljYXRpb24oc291cmNlLCBwcm9wZXJ0eU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW5mbyA9IGNoYW5nZXNCeU9iamVjdC5nZXQoc291cmNlKTtcblxuICAgIGlmIChpbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5mbyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgY2hhbmdlczoge31cbiAgICAgICAgfTtcbiAgICAgICAgY2hhbmdlc0J5T2JqZWN0LnNldChzb3VyY2UsIGluZm8pO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VzID0gaW5mby5jaGFuZ2VzO1xuXG4gICAgY2hhbmdlc1twcm9wZXJ0eU5hbWVdID0ge29sZFZhbHVlLCBuZXdWYWx1ZX07XG4gICAgcXVldWUuYWRkKHNvdXJjZSk7XG4gICAgaWYgKG5leHRGcmFtZUlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0RnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NpbmdRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nQ2hhbmdlcyA9IGNoYW5nZXNCeU9iamVjdDtcbiAgICAgICAgcXVldWUgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNoYW5nZXNCeU9iamVjdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgbmV4dEZyYW1lSWQgPSBudWxsOyAvLyBudWxsaWZ5IHRvIGVuYWJsZSBxdWV1aW5nIGFnYWluXG5cbiAgICAgICAgcHJvY2Vzc2luZ1F1ZXVlLmZvckVhY2goc291cmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtjaGFuZ2VzfSA9IHByb2Nlc3NpbmdDaGFuZ2VzLmdldChzb3VyY2UpO1xuICAgICAgICAgICAgbm90aWZ5KHNvdXJjZSwgY2hhbmdlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Ob3RpZmllcihwcm90b3R5cGUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwcm90b3R5cGUsIHtcbiAgICAgICAgY2hhbmdlTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICBnZXQ6IGdldENoYW5nZUxpc3RlbmVyc1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZUNvbW1pdExpc3RlbmVyczoge1xuICAgICAgICAgICAgZ2V0OiBnZXRQcmVDb21taXRMaXN0ZW5lcnNcbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ2hhbmdlTGlzdGVuZXI6IHt2YWx1ZTogYWRkQ2hhbmdlTGlzdGVuZXJ9LFxuICAgICAgICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjoge3ZhbHVlOiByZW1vdmVDaGFuZ2VMaXN0ZW5lcn0sXG4gICAgICAgIGFkZFByZUNvbW1pdExpc3RlbmVyOiB7dmFsdWU6IGFkZFByZUNvbW1pdExpc3RlbmVyfSxcbiAgICAgICAgcmVtb3ZlUHJlQ29tbWl0TGlzdGVuZXI6IHt2YWx1ZTogcmVtb3ZlUHJlQ29tbWl0TGlzdGVuZXJ9LFxuICAgICAgICBzdXNwZW5kTm90aWZpY2F0aW9uczoge3ZhbHVlOiBmYWxzZSwgd3JpdGFibGU6IHRydWV9XG4gICAgfSk7XG59XG5cbi8qKlxuICogTm90aWZpZXMgYWxsIGNoYW5nZUxpc3RlbmVycyB0aGF0IGEgcHJvcGVydHkgaGFzIGNoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb3duZXIgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlcyBUaGUgZGV0YWlscyBvZiBwcm9wZXJ0eSBjaGFuZ2VzIHRoYXRcbiAqIG9jY3VycmVkIG9uIHRoZSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIG5vdGlmeShzb3VyY2UsIGNoYW5nZXMpIHtcbiAgICBjb25zdCBxdWV1ZSA9IGdldFByaW9yaXR5UXVldWUoc291cmNlKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgYnVpbGRQcmlvcml0eVF1ZXVlKGdldENoYW5nZUxpc3RlbmVycy5jYWxsKHNvdXJjZSksIHF1ZXVlKTtcbiAgICB9XG4gICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbihlbnRyeSl7XG4gICAgICBlbnRyeS5jYWxsYmFjayhzb3VyY2UsIGNoYW5nZXMsIGVudHJ5LnByaW9yaXR5KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHByaW9yaXR5IHF1ZXVlXG4gKlxuICogQHBhcmFtIHtNYXB9IGNhbGxiYWNrTWFwIFRoZSBNYXAgY29udGFpbmluZyB0aGUgY2FsbGJhY2tzIGFzIHRoZSBrZXkgYW5kIHRoZSBwcmlvcml0eSBhcyB0aGUgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBxdWV1ZSBUaGUgYXJyYXkgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIHF1ZXVlIHNvcnRlZCBieSBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJpb3JpdHlRdWV1ZShjYWxsYmFja01hcCwgcXVldWUpIHtcbiAgY2FsbGJhY2tNYXAuZm9yRWFjaChmdW5jdGlvbihwcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICBxdWV1ZS5wdXNoKHtwcmlvcml0eSwgY2FsbGJhY2t9KTtcbiAgfSk7XG4gIHF1ZXVlLnNvcnQocHJpb3JpdHlDb21wYXJhdG9yKTtcbn1cblxuLyoqXG4gKiBBIGJhc2ljIHNvcnQgY29tcGFyYXRvclxuICpcbiAqIEBwYXJhbSBpdGVtMVxuICogQHBhcmFtIGl0ZW0yXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBwcmlvcml0eUNvbXBhcmF0b3IoaXRlbTEsIGl0ZW0yKXtcbiAgICBjb25zdCBwMSA9IH5+aXRlbTEucHJpb3JpdHk7XG4gICAgY29uc3QgcDIgPSB+fml0ZW0yLnByaW9yaXR5O1xuXG4gICAgaWYgKHAxID09PSBwMil7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBwMSA+IHAyID8gMSA6IC0xO1xufVxuIiwiaW1wb3J0IHtcbiAgICBtaXhpbk5vdGlmaWVyLFxuICAgIHF1ZXVlTm90aWZpY2F0aW9uLFxuICAgIGdldENoYW5nZUxpc3RlbmVycyxcbiAgICBnZXRQcmlvcml0eVF1ZXVlLFxuICAgIGdldFByZUNvbW1pdExpc3RlbmVycyxcbiAgICBidWlsZFByaW9yaXR5UXVldWVcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGFjdGl2ZUJpbmRpbmdzID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVyKHByb3BlcnR5KSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGdldFByb3BlcnR5VmFsdWVzKHNlbGYpW3Byb3BlcnR5XTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNldHRlcihwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgc3VzcGVuZE5vdGlmaWNhdGlvbnMgPSBzZWxmLnN1c3BlbmROb3RpZmljYXRpb25zO1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXRQcm9wZXJ0eVZhbHVlcyhzZWxmKVtwcm9wZXJ0eV07XG4gICAgICAgIC8vIEhvbm9yIGFuIGV4aXN0aW5nIHNldHRlciBpZiBhbnlcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyBNdXRhdGlvbnM/IENhc3RzP1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkZXNjcmlwdG9yLmdldC5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbmV3VmFsdWUgfHwgbm90aWZ5UHJlQ29tbWl0KHNlbGYsIHtbcHJvcGVydHldOiB7b2xkVmFsdWUsIG5ld1ZhbHVlfX0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHN1c3BlbmROb3RpZmljYXRpb25zID09PSBmYWxzZSAmJiAhZ2V0Q2hhbmdlTGlzdGVuZXJzLmNhbGwoc2VsZikudmFsdWVzKCkubmV4dCgpLmRvbmUpIHtcbiAgICAgICAgICAgIHF1ZXVlTm90aWZpY2F0aW9uKHNlbGYsIHByb3BlcnR5LCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGdldFByb3BlcnR5VmFsdWVzKHNlbGYpW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZXMoY29udGV4dCkge1xuICAgIGlmIChhY3RpdmVCaW5kaW5ncy5oYXMoY29udGV4dCkpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUJpbmRpbmdzLmdldChjb250ZXh0KTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgYWN0aXZlQmluZGluZ3Muc2V0KGNvbnRleHQsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxuZnVuY3Rpb24gbm90aWZ5UHJlQ29tbWl0KHNvdXJjZSwgY2hhbmdlcykge1xuICAgIGxldCBjYW5jZWxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHF1ZXVlID0gZ2V0UHJpb3JpdHlRdWV1ZShzb3VyY2UsICdwcmVDb21taXRQcmlvcml0eVF1ZXVlJyk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIGJ1aWxkUHJpb3JpdHlRdWV1ZShnZXRQcmVDb21taXRMaXN0ZW5lcnMuY2FsbChzb3VyY2UpLCBxdWV1ZSk7XG4gICAgfVxuICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY2FuY2VsZWQgPSAoaXRlbS5jYWxsYmFjayhzb3VyY2UsIGNoYW5nZXMsIGNhbmNlbGVkLCBpdGVtLnByaW9yaXR5KSA9PT0gZmFsc2UpIHx8IGNhbmNlbGVkO1xuICAgIH0pO1xuICAgIHJldHVybiBjYW5jZWxlZDtcbn1cblxuLyoqXG4gKiBTdHJ1Y3R1cmVzIHRoZSBwcm90b3R5cGUgdG8gZGVmaW5lIGEgYmluZGFibGUgcHJvcGVydHlcbiAqIG9uIHRoZSBmaXJzdCB3cml0ZSB3aGVuIFwidGhpc1wiIGlzIGFuIGluc3RhbmNlIG9mIHRoZVxuICogY2xhc3Mgb3IgcHJvdG90eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gYmluZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZGFibGUocHJvcGVydHkpIHtcbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT4ge1xuICAgICAgICAvLyBNaXhpblxuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIGlmICghYWN0aXZlQmluZGluZ3MuaGFzKHByb3RvdHlwZSkpIHtcbiAgICAgICAgICAgIG1peGluTm90aWZpZXIocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGFjdGl2ZUJpbmRpbmdzLnNldChwcm90b3R5cGUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wZXJ0eSkgfHwge307XG4gICAgICAgIC8vIGFscmVhZHkgYm91bmQgLSBub3RoaW5nIHRvIGRvXG4gICAgICAgIGlmIChhY3RpdmVCaW5kaW5ncy5oYXMoZGVzY3JpcHRvci5nZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuICAgICAgICAgICAgZ2V0OiBkZXNjcmlwdG9yLmdldCB8fCBjcmVhdGVHZXR0ZXIocHJvcGVydHkpLFxuICAgICAgICAgICAgc2V0OiBjcmVhdGVTZXR0ZXIocHJvcGVydHksIGRlc2NyaXB0b3IpLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQge3F1ZXVlTm90aWZpY2F0aW9ufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNwbGF5ZXIxR3JpZCwgI3BsYXllcjJHcmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgI3BsYXllcjFHcmlkIHBhdGguY2VsbCwgI3BsYXllcjJHcmlkIHBhdGguY2VsbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIyNXB4LCAyMjVweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XFxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgICBzdHJva2U6IGJsYWNrOyB9XFxuXFxuI3BsYXllcjFHcmlkIHtcXG4gIGxlZnQ6IDJyZW07IH1cXG5cXG4jcGxheWVyMkdyaWQge1xcbiAgcmlnaHQ6IDJyZW07IH1cXG4gICNwbGF5ZXIyR3JpZCBwYXRoLmNlbGw6aG92ZXIge1xcbiAgICBmaWxsOiAjZmYwMDAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY29uc29sZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogOTk5OTsgfVxcbiAgI2NvbnNvbGUgLnN0YXRzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAjY29uc29sZSAuc3RhdHMgdWwge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7IH1cXG4gICAgICAjY29uc29sZSAuc3RhdHMgdWwuc2VsZWN0ZWQge1xcbiAgICAgICAgY29sb3I6IGdyZWVuOyB9XFxuICAgICAgI2NvbnNvbGUgLnN0YXRzIHVsIGxpOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7IH1cXG4gICAgICAjY29uc29sZSAuc3RhdHMgdWwgKyB1bCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG4gICAgICAgICNjb25zb2xlIC5zdGF0cyB1bCArIHVsOjpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIGxlZnQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRCBEYXkgU3RlbmNpbCc7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvRF9EYXlfU3RlbmNpbC53b2ZmXCIpKSArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9EX0RheV9TdGVuY2lsLnR0ZlwiKSkgKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogRCBEYXkgU3RlbmNpbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG4jYmF0dGxlc2hpcEJvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwMHB4OyB9XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBEIERheSBTdGVuY2lsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxNzRiOTtcXG4gIGJhY2tncm91bmQ6ICM4Mjk2YTc7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzdmcgZ1tpZF49XFxcInNoaXBfXFxcIl1bZHJhZ2dhYmxlXSB7XFxuICBjdXJzb3I6IG1vdmU7IH1cXG4gIHN2ZyBnW2lkXj1cXFwic2hpcF9cXFwiXVtkcmFnZ2FibGVdIHBhdGhbaWRePVxcXCJyb3RhdGVfXFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuc3ZnIGdbaWRePVxcXCJzaGlwX1xcXCJdIHRleHQge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbnN2ZyBnW2lkXj1cXFwic2hpcF9cXFwiXSBwYXRoW2lkXj1cXFwicm90YXRlX1xcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBib3VuZGluZy1ib3g7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qKlxyXG4gKiBKYXZhc2NyaXB0IGFkYXB0YXRpb24gb2YgQWZmaW5lVHJhbnNmb3JtLmNjcCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJLaXQvd2Via2l0L2Jsb2IvNjZlNjhjZDhkN2JmNGVhMWNmNTJmMzFlZDljYjI0MmY4M2VhNWI1Ny9Tb3VyY2UvV2ViQ29yZS9wbGF0Zm9ybS9ncmFwaGljcy90cmFuc2Zvcm1zL0FmZmluZVRyYW5zZm9ybS5jcHBcclxuICovXHJcbi8qXHJcbiAqIENvcHlyaWdodCAoQykgUmVzZWFyY2ggSW4gTW90aW9uIExpbWl0ZWQgMjAxMC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxyXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGlicmFyeSBHZW5lcmFsIFB1YmxpY1xyXG4gKiBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXJcclxuICogdmVyc2lvbiAyIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcclxuICogTGlicmFyeSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMaWJyYXJ5IEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIGxpYnJhcnk7IHNlZSB0aGUgZmlsZSBDT1BZSU5HLkxJQi4gIElmIG5vdCwgd3JpdGUgdG9cclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3RyZWV0LCBGaWZ0aCBGbG9vcixcclxuICogQm9zdG9uLCBNQSAwMjExMC0xMzAxLCBVU0EuXHJcbiAqL1xyXG4vKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMDUsIDIwMDYgQXBwbGUgSW5jLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogICAgICAgICAgICAgICAyMDEwIERpcmsgU2NodWx6ZSA8a3JpdEB3ZWJraXQub3JnPlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcclxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zXHJcbiAqIGFyZSBtZXQ6XHJcbiAqIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbiAqICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxyXG4gKiAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKlxyXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIEFQUExFIElOQy4gYGBBUyBJUycnIEFORCBBTllcclxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcclxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSXHJcbiAqIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuICBJTiBOTyBFVkVOVCBTSEFMTCBBUFBMRSBJTkMuIE9SXHJcbiAqIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxyXG4gKiBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXHJcbiAqIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZXHJcbiAqIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxyXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcclxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbmNvbnN0IGRlZ1RvUmFkcyA9IHJlcXVpcmUoJy4vdXRpbHMnKS5kZWdUb1JhZHM7XHJcbmNvbnN0IHJhZFRvRGVnID0gcmVxdWlyZSgnLi91dGlscycpLnJhZFRvRGVnO1xyXG5cclxuY2xhc3MgU1ZHVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGEgPSAxLCBiID0gMCwgYyA9IDAsIGQgPSAxLCBlID0gMCwgZiA9IDApIHtcclxuICAgICAgICB0aGlzLm1fdHJhbnNmb3JtID0gWythLCArYiwgK2MsICtkLCArZSwgK2ZdO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VJZGVudGl0eSgpIHtcclxuICAgICAgICB0aGlzLnNldE1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXRyaXgoYSA9IDEsIGIgPSAwLCBjID0gMCwgZCA9IDEsIGUgPSAwLCBmID0gMCkge1xyXG4gICAgICAgIGNvbnN0IG1fdHJhbnNmb3JtID0gdGhpcy5tX3RyYW5zZm9ybTtcclxuICAgICAgICBtX3RyYW5zZm9ybVswXSA9ICthO1xyXG4gICAgICAgIG1fdHJhbnNmb3JtWzFdID0gK2I7XHJcbiAgICAgICAgbV90cmFuc2Zvcm1bMl0gPSArYztcclxuICAgICAgICBtX3RyYW5zZm9ybVszXSA9ICtkO1xyXG4gICAgICAgIG1fdHJhbnNmb3JtWzRdID0gK2U7XHJcbiAgICAgICAgbV90cmFuc2Zvcm1bNV0gPSArZjtcclxuICAgIH1cclxuXHJcbiAgICBtYXRyaXgoYSA9IDEsIGIgPSAwLCBjID0gMCwgZCA9IDEsIGUgPSAwLCBmID0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRNYXRyaXgoYSwgYiwgYywgZCwgZSwgZik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJZGVudGl0eSgpIHtcclxuICAgICAgICBjb25zdCBtX3RyYW5zZm9ybSA9IHRoaXMubV90cmFuc2Zvcm07XHJcblxyXG4gICAgICAgIHJldHVybiAobV90cmFuc2Zvcm1bMF0gPT09IDEgJiYgbV90cmFuc2Zvcm1bMV0gPT09IDBcclxuICAgICAgICAmJiBtX3RyYW5zZm9ybVsyXSA9PT0gMCAmJiBtX3RyYW5zZm9ybVszXSA9PT0gMVxyXG4gICAgICAgICYmIG1fdHJhbnNmb3JtWzRdID09PSAwICYmIG1fdHJhbnNmb3JtWzVdID09PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGV0KHRyYW5zZm9ybSkge1xyXG4gICAgICAgIHJldHVybiArKHRyYW5zZm9ybVswXSAqIHRyYW5zZm9ybVszXSAtIHRyYW5zZm9ybVsxXSAqIHRyYW5zZm9ybVsyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHhTY2FsZSgpIHtcclxuICAgICAgICBjb25zdCBtX3RyYW5zZm9ybSA9IHRoaXMubV90cmFuc2Zvcm07XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQobV90cmFuc2Zvcm1bMF0gKiBtX3RyYW5zZm9ybVswXSArIG1fdHJhbnNmb3JtWzFdICogbV90cmFuc2Zvcm1bMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB5U2NhbGUoKSB7XHJcbiAgICAgICAgY29uc3QgbV90cmFuc2Zvcm0gPSB0aGlzLm1fdHJhbnNmb3JtO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQobV90cmFuc2Zvcm1bMl0gKiBtX3RyYW5zZm9ybVsyXSArIG1fdHJhbnNmb3JtWzNdICogbV90cmFuc2Zvcm1bM10pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0ludmVydGlibGUoKSB7XHJcbiAgICAgICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBTVkdUcmFuc2Zvcm0uZGV0KHRoaXMubV90cmFuc2Zvcm0pO1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKGRldGVybWluYW50ICYmIGlzRmluaXRlKGRldGVybWluYW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW52ZXJzZSgpIHtcclxuICAgICAgICBjb25zdCBtX3RyYW5zZm9ybSA9IHRoaXMubV90cmFuc2Zvcm07XHJcbiAgICAgICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBTVkdUcmFuc2Zvcm0uZGV0KG1fdHJhbnNmb3JtKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU1ZHVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJZGVudGl0eU9yVHJhbnNsYXRpb24oKSkge1xyXG4gICAgICAgICAgICByZXN1bHQubV90cmFuc2Zvcm1bNF0gPSAtbV90cmFuc2Zvcm1bNF07XHJcbiAgICAgICAgICAgIHJlc3VsdC5tX3RyYW5zZm9ybVs1XSA9IC1tX3RyYW5zZm9ybVs1XTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5tX3RyYW5zZm9ybVswXSA9IG1fdHJhbnNmb3JtWzNdIC8gZGV0ZXJtaW5hbnQ7XHJcbiAgICAgICAgcmVzdWx0Lm1fdHJhbnNmb3JtWzFdID0gLW1fdHJhbnNmb3JtWzFdIC8gZGV0ZXJtaW5hbnQ7XHJcbiAgICAgICAgcmVzdWx0Lm1fdHJhbnNmb3JtWzJdID0gLW1fdHJhbnNmb3JtWzJdIC8gZGV0ZXJtaW5hbnQ7XHJcbiAgICAgICAgcmVzdWx0Lm1fdHJhbnNmb3JtWzNdID0gbV90cmFuc2Zvcm1bMF0gLyBkZXRlcm1pbmFudDtcclxuICAgICAgICByZXN1bHQubV90cmFuc2Zvcm1bNF0gPSAobV90cmFuc2Zvcm1bMl0gKiBtX3RyYW5zZm9ybVs1XSAtIG1fdHJhbnNmb3JtWzNdICogbV90cmFuc2Zvcm1bNF0pIC8gZGV0ZXJtaW5hbnQ7XHJcbiAgICAgICAgcmVzdWx0Lm1fdHJhbnNmb3JtWzVdID0gKG1fdHJhbnNmb3JtWzFdICogbV90cmFuc2Zvcm1bNF0gLSBtX3RyYW5zZm9ybVswXSAqIG1fdHJhbnNmb3JtWzVdKSAvIGRldGVybWluYW50O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlzSWRlbnRpdHlPclRyYW5zbGF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG1fdHJhbnNmb3JtID0gdGhpcy5tX3RyYW5zZm9ybTtcclxuICAgICAgICByZXR1cm4gbV90cmFuc2Zvcm1bMF0gPT09IDEgJiYgbV90cmFuc2Zvcm1bMV0gPT09IDAgJiYgbV90cmFuc2Zvcm1bMl0gPT09IDAgJiYgbV90cmFuc2Zvcm1bM10gPT09IDE7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHkob3RoZXIpe1xyXG4gICAgICAgIGNvbnN0IG1fdHJhbnNmb3JtID0gdGhpcy5tX3RyYW5zZm9ybTtcclxuICAgICAgICBjb25zdCB0cmFucyA9IG5ldyBTVkdUcmFuc2Zvcm0oKTtcclxuICAgICAgICBjb25zdCBvbV90cmFuc2Zvcm0gPSBvdGhlci5tX3RyYW5zZm9ybTtcclxuICAgICAgICBjb25zdCB0bV90cmFuc2Zvcm0gPSB0cmFucy5tX3RyYW5zZm9ybTtcclxuXHJcbiAgICAgICAgdG1fdHJhbnNmb3JtWzBdID0gb21fdHJhbnNmb3JtWzBdICogbV90cmFuc2Zvcm1bMF0gKyBvbV90cmFuc2Zvcm1bMV0gKiBtX3RyYW5zZm9ybVsyXTtcclxuICAgICAgICB0bV90cmFuc2Zvcm1bMV0gPSBvbV90cmFuc2Zvcm1bMF0gKiBtX3RyYW5zZm9ybVsxXSArIG9tX3RyYW5zZm9ybVsxXSAqIG1fdHJhbnNmb3JtWzNdO1xyXG4gICAgICAgIHRtX3RyYW5zZm9ybVsyXSA9IG9tX3RyYW5zZm9ybVsyXSAqIG1fdHJhbnNmb3JtWzBdICsgb21fdHJhbnNmb3JtWzNdICogbV90cmFuc2Zvcm1bMl07XHJcbiAgICAgICAgdG1fdHJhbnNmb3JtWzNdID0gb21fdHJhbnNmb3JtWzJdICogbV90cmFuc2Zvcm1bMV0gKyBvbV90cmFuc2Zvcm1bM10gKiBtX3RyYW5zZm9ybVszXTtcclxuICAgICAgICB0bV90cmFuc2Zvcm1bNF0gPSBvbV90cmFuc2Zvcm1bNF0gKiBtX3RyYW5zZm9ybVswXSArIG9tX3RyYW5zZm9ybVs1XSAqIG1fdHJhbnNmb3JtWzJdICsgbV90cmFuc2Zvcm1bNF07XHJcbiAgICAgICAgdG1fdHJhbnNmb3JtWzVdID0gb21fdHJhbnNmb3JtWzRdICogbV90cmFuc2Zvcm1bMV0gKyBvbV90cmFuc2Zvcm1bNV0gKiBtX3RyYW5zZm9ybVszXSArIG1fdHJhbnNmb3JtWzVdO1xyXG5cclxuICAgICAgICB0aGlzLm1fdHJhbnNmb3JtID0gdHJhbnMubV90cmFuc2Zvcm07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGRlZ3JlZXMsIHgsIHkpe1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZUZsYWcgPSBCb29sZWFuKHggIT09IHVuZGVmaW5lZCAmJiB5ICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmICh0cmFuc2xhdGVGbGFnKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhZHMgPSBkZWdUb1JhZHMoZGVncmVlcyk7XHJcbiAgICAgICAgY29uc3QgY29zQW5nbGUgPSBNYXRoLmNvcyhyYWRzKTtcclxuICAgICAgICBjb25zdCBzaW5BbmdsZSA9IE1hdGguc2luKHJhZHMpO1xyXG4gICAgICAgIGNvbnN0IHJvdCA9IG5ldyBTVkdUcmFuc2Zvcm0oY29zQW5nbGUsIHNpbkFuZ2xlLCAtc2luQW5nbGUsIGNvc0FuZ2xlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5tdWx0aXBseShyb3QpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlRmxhZyl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKC14LCAteSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHN4LCBzeSl7XHJcbiAgICAgICAgY29uc3QgbV90cmFuc2Zvcm0gPSB0aGlzLm1fdHJhbnNmb3JtO1xyXG4gICAgICAgIGlmIChzeSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgc3kgPSBzeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbV90cmFuc2Zvcm1bMF0gKj0gc3g7XHJcbiAgICAgICAgbV90cmFuc2Zvcm1bMV0gKj0gc3g7XHJcbiAgICAgICAgbV90cmFuc2Zvcm1bMl0gKj0gc3k7XHJcbiAgICAgICAgbV90cmFuc2Zvcm1bM10gKj0gc3k7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zbGF0ZSh0eCwgdHkpe1xyXG4gICAgICAgIGNvbnN0IG1fdHJhbnNmb3JtID0gdGhpcy5tX3RyYW5zZm9ybTtcclxuICAgICAgICBpZiAodGhpcy5pc0lkZW50aXR5T3JUcmFuc2xhdGlvbigpKSB7XHJcbiAgICAgICAgICAgIG1fdHJhbnNmb3JtWzRdICs9IHR4O1xyXG4gICAgICAgICAgICBtX3RyYW5zZm9ybVs1XSArPSB0eTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtX3RyYW5zZm9ybVs0XSArPSB0eCAqIG1fdHJhbnNmb3JtWzBdICsgdHkgKiBtX3RyYW5zZm9ybVsyXTtcclxuICAgICAgICBtX3RyYW5zZm9ybVs1XSArPSB0eCAqIG1fdHJhbnNmb3JtWzFdICsgdHkgKiBtX3RyYW5zZm9ybVszXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGVGcm9tVmVjdG9yKHgsIHkpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZShyYWRUb0RlZyhNYXRoLmF0YW4yKHksIHgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcFgoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSgtMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcFkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSgxLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hlYXIoc3gsIHN5KXtcclxuICAgICAgICBjb25zdCBtX3RyYW5zZm9ybSA9IHRoaXMubV90cmFuc2Zvcm07XHJcbiAgICAgICAgY29uc3QgYSA9IG1fdHJhbnNmb3JtWzBdO1xyXG4gICAgICAgIGNvbnN0IGIgPSBtX3RyYW5zZm9ybVsxXTtcclxuXHJcbiAgICAgICAgbV90cmFuc2Zvcm1bMF0gKz0gc3kgKiBtX3RyYW5zZm9ybVsyXTtcclxuICAgICAgICBtX3RyYW5zZm9ybVsxXSArPSBzeSAqIG1fdHJhbnNmb3JtWzNdO1xyXG4gICAgICAgIG1fdHJhbnNmb3JtWzJdICs9IHN4ICogYTtcclxuICAgICAgICBtX3RyYW5zZm9ybVszXSArPSBzeCAqIGI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2tldyhhbmdsZVgsIGFuZ2xlWSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hlYXIoTWF0aC50YW4oZGVnVG9SYWRzKGFuZ2xlWCkpLCBNYXRoLnRhbihkZWdUb1JhZHMoYW5nbGVZKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNrZXdYKGFuZ2xlKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGVhcihNYXRoLnRhbihkZWdUb1JhZHMoYW5nbGUpKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tld1koYW5nbGUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoZWFyKDAsIE1hdGgudGFuKGRlZ1RvUmFkcyhhbmdsZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXAoeCwgeSl7XHJcbiAgICAgICAgY29uc3QgbV90cmFuc2Zvcm0gPSB0aGlzLm1fdHJhbnNmb3JtO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IChtX3RyYW5zZm9ybVswXSAqIHggKyBtX3RyYW5zZm9ybVsyXSAqIHkgKyBtX3RyYW5zZm9ybVs0XSksXHJcbiAgICAgICAgICAgIHk6IChtX3RyYW5zZm9ybVsxXSAqIHggKyBtX3RyYW5zZm9ybVszXSAqIHkgKyBtX3RyYW5zZm9ybVs1XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFwUG9pbnQocG9pbnQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcChwb2ludC54LCBwb2ludC55KTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNWR1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBkZWdUb1JhZHMoZGVnKXtcclxuICAgIHJldHVybiBNYXRoLlBJICogZGVnIC8gMTgwO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYWRUb0RlZyhyYWQpe1xyXG4gICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKXtcclxuICAgIHJldHVybiBCb29sZWFuKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpO1xyXG59XHJcblxyXG4vKipcclxuICogUm90YXRlcyBhIHBvaW50IGFyb3VuZCB0aGUgZ2l2ZW4gb3JpZ2luXHJcbiAqIGJ5IHRoZSBzcGVjaWZpZWQgcmFkaWFucyBhbmQgcmV0dXJucyB0aGVcclxuICogcm90YXRlZCBwb2ludC5cclxuICpcclxuICogQHBhcmFtIG9yaWdpblggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gcm90YXRlIGFyb3VuZC5cclxuICogQHBhcmFtIG9yaWdpblkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gcm90YXRlIGFyb3VuZC5cclxuICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gYmUgcm90YXRlZC5cclxuICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gYmUgcm90YXRlZC5cclxuICogQHBhcmFtIHJhZGlhbnNYIFJhZGlhbnMgdG8gcm90YXRlIGFsb25nIHRoZSB4IGF4aXMuXHJcbiAqIEBwYXJhbSByYWRpYW5zWSBSYWRpYW5zIHRvIHJvdGF0ZSBhbG9uZyB0aGUgeSBheGlzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9pbnQgd2l0aCB0aGUgcm90YXRlZCBjb29yZGluYXRlcy5cclxuICovXHJcbmZ1bmN0aW9uIHJvdGF0ZVBvaW50KG9yaWdpblgsIG9yaWdpblksIHgsIHksIHJhZGlhbnNYLCByYWRpYW5zWSkge1xyXG4gICAgY29uc3QgdiA9IHt4OiB4IC0gb3JpZ2luWCwgeTogeSAtIG9yaWdpbll9O1xyXG4gICAgY29uc3QgdnggPSAodi54ICogTWF0aC5jb3MocmFkaWFuc1gpKSAtICh2LnkgKiBNYXRoLnNpbihyYWRpYW5zWCkpO1xyXG4gICAgY29uc3QgdnkgPSAodi54ICogTWF0aC5zaW4ocmFkaWFuc1kpKSArICh2LnkgKiBNYXRoLmNvcyhyYWRpYW5zWSkpO1xyXG4gICAgcmV0dXJuIHt4OiB2eCArIG9yaWdpblgsIHk6IHZ5ICsgb3JpZ2luWX07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRlZ1RvUmFkcyxcclxuICAgIGlzTnVsbE9yVW5kZWZpbmVkLFxyXG4gICAgcmFkVG9EZWcsXHJcbiAgICByb3RhdGVQb2ludFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL0RfRGF5X1N0ZW5jaWwudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvRF9EYXlfU3RlbmNpbC53b2ZmXCI7IiwiaW1wb3J0IHsgZmluZENlbGxBdFBvaW50IH0gZnJvbSAnLi4vdXRpbHMvZmluZENlbGxBdFBvaW50JztcclxuaW1wb3J0IHsgZmluZENlbGxzIH0gZnJvbSAnLi4vdXRpbHMvZmluZENlbGxzJztcclxuaW1wb3J0IHsgZ2V0TW9yZUNlbGxzRnJvbUNlbGwgfSBmcm9tICcuLi91dGlscy9nZXRNb3JlQ2VsbHNGcm9tQ2VsbCc7XHJcbmltcG9ydCBCb2FyZEdyYXBoaWMgZnJvbSAnLi9Cb2FyZEdyYXBoaWMnO1xyXG5cclxuY2xhc3MgQm9hcmQge1xyXG5cclxuICBsYXN0SGlnaGxpZ2h0ZWRDZWxscyA9IFtdO1xyXG4gIHZhbGlkRHJvcCA9IGZhbHNlO1xyXG4gIHBsYXllcjE7XHJcbiAgcGxheWVyMjtcclxuXHJcbiAgY29uc3RydWN0b3IoZ2FtZVN0YXRlKSB7XHJcbiAgICB0aGlzLnNoaXBEcmFnU3RhcnRDYWxsYmFjayA9IHRoaXMuc2hpcERyYWdTdGFydENhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNoaXBEcmFnQ2FsbGJhY2sgPSB0aGlzLnNoaXBEcmFnQ2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2hpcERyb3BDYWxsYmFjayA9IHRoaXMuc2hpcERyb3BDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zaGlwTW9kZWxDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuc2hpcE1vZGVsQ2hhbmdlTGlzdGVuZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2hpcE1vZGVsUHJlQ29tbWl0TGlzdGVuZXIgPSB0aGlzLnNoaXBNb2RlbFByZUNvbW1pdExpc3RlbmVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgY29uc3Qge3BsYXllcjEsIHBsYXllcjJ9ID0gZ2FtZVN0YXRlO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7cGxheWVyMSwgcGxheWVyMn0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvYXJkR3JhcGhpYygpIHtcclxuICAgIGlmICghdGhpcy5fYm9hcmRHcmFwaGljKSB7XHJcbiAgICAgIHRoaXMuX2JvYXJkR3JhcGhpYyA9IG5ldyBCb2FyZEdyYXBoaWModGhpcy5wbGF5ZXIxLnNoaXBzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9ib2FyZEdyYXBoaWM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ib2FyZEdyYXBoaWMucmVuZGVyKCk7XHJcbiAgICB0aGlzLnBvc3RSZW5kZXJBY3Rpb25zKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHBvc3RSZW5kZXJBY3Rpb25zKCkge1xyXG4gICAgdGhpcy5ib2FyZEdyYXBoaWMudmlzaWJsZVNoaXBzTWFwLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaXBNb2RlbCA9IHNoaXAuc2hpcE1vZGVsO1xyXG4gICAgICBzaGlwLmRyYWdTdGFydENhbGxiYWNrID0gdGhpcy5zaGlwRHJhZ1N0YXJ0Q2FsbGJhY2s7XHJcbiAgICAgIHNoaXAuZHJhZ0NhbGxiYWNrID0gdGhpcy5zaGlwRHJhZ0NhbGxiYWNrO1xyXG4gICAgICBzaGlwLmRyb3BDYWxsYmFjayA9IHRoaXMuc2hpcERyb3BDYWxsYmFjaztcclxuICAgICAgc2hpcE1vZGVsLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuc2hpcE1vZGVsQ2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgICBzaGlwTW9kZWwuYWRkUHJlQ29tbWl0TGlzdGVuZXIodGhpcy5zaGlwTW9kZWxQcmVDb21taXRMaXN0ZW5lcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIFNoaXAgZHJhZyBjYWxsYmFja3NcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgc2hpcERyYWdTdGFydENhbGxiYWNrKG9yaWdpbkV2ZW50LCBzaGlwKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IHNoaXAuc2hpcE1vZGVsLm9jY3VwaWVkQ2VsbHMgfHwgW107XHJcbiAgICBpZiAoIWNlbGxzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllcjEub2NjdXBpZWRDZWxsc1NldC5kZWxldGUoY2VsbCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRDZWxscyhjZWxscywgJyMwMGZmMDAnKTtcclxuICB9XHJcblxyXG4gIHNoaXBEcmFnQ2FsbGJhY2sob3JpZ2luRXZlbnQsIHNoaXApIHtcclxuICAgIGNvbnN0IGNlbGxzID0gZmluZENlbGxzKHNoaXAuc2VnbWVudCwgdGhpcy5ib2FyZEdyYXBoaWMuZ3JpZHNbIDAgXSwgc2hpcC5zaGlwTW9kZWwuZGlyZWN0aW9uKTtcclxuICAgIGxldCBpID0gY2VsbHMubGVuZ3RoO1xyXG4gICAgdGhpcy52YWxpZERyb3AgPSBpID09PSBzaGlwLnNoaXBNb2RlbC50eXBlLnNpemU7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIGlmICh0aGlzLnBsYXllcjEub2NjdXBpZWRDZWxsc1NldC5oYXMoY2VsbHNbIGkgXSkpIHtcclxuICAgICAgICB0aGlzLnZhbGlkRHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMudmFsaWREcm9wID8gJyMwMGZmMDAnIDogJyNmZjAwMDAnO1xyXG4gICAgdGhpcy5zZXRIaWdobGlnaHRlZENlbGxzKGNlbGxzLCBjb2xvcik7XHJcbiAgfVxyXG5cclxuICBzaGlwRHJvcENhbGxiYWNrKG9yaWdpbkV2ZW50LCBzaGlwKSB7XHJcbiAgICBsZXQgY2VsbHNUb09jY3VweSA9IHRoaXMubGFzdEhpZ2hsaWdodGVkQ2VsbHM7XHJcbiAgICB0aGlzLnNldEhpZ2hsaWdodGVkQ2VsbHMoW10pO1xyXG4gICAgaWYgKCFjZWxsc1RvT2NjdXB5Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMudmFsaWREcm9wKSB7XHJcbiAgICAgIGNlbGxzVG9PY2N1cHkgPSBzaGlwLnNoaXBNb2RlbC5vY2N1cGllZENlbGxzIHx8IFtdO1xyXG4gICAgfVxyXG4gICAgc2hpcC5zaGlwTW9kZWwub2NjdXBpZWRDZWxscyA9IGNlbGxzVG9PY2N1cHkuY29uY2F0KCk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBNb2RlbCBDaGFuZ2UgY2FsbGJhY2tzXHJcbiAgc2hpcE1vZGVsUHJlQ29tbWl0TGlzdGVuZXIoc2hpcE1vZGVsLCBjaGFuZ2VzKSB7XHJcbiAgICBpZiAoISggJ2RpcmVjdGlvbicgaW4gY2hhbmdlcyApKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNlbGxzID0gZ2V0TW9yZUNlbGxzRnJvbUNlbGwodGhpcy5ib2FyZEdyYXBoaWMuZ3JpZHNbIDAgXSwgc2hpcE1vZGVsLm9jY3VwaWVkQ2VsbHNbIDAgXSwgY2hhbmdlcy5kaXJlY3Rpb24ubmV3VmFsdWUsIHNoaXBNb2RlbC50eXBlLnNpemUpO1xyXG4gICAgbGV0IGkgPSB+fmNlbGxzLmxlbmd0aDtcclxuICAgIGxldCBhbGxvd0NoYW5nZSA9ICFpIHx8IGkgPT09IHNoaXBNb2RlbC50eXBlLnNpemU7XHJcbiAgICB3aGlsZSAoYWxsb3dDaGFuZ2UgJiYgaS0tID4gMSkge1xyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIxLm9jY3VwaWVkQ2VsbHNTZXQuaGFzKGNlbGxzWyBpIF0pKSB7XHJcbiAgICAgICAgYWxsb3dDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghYWxsb3dDaGFuZ2UgJiYgY2VsbHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRDZWxscyhjZWxscywgJyNmZjAwMDAnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRIaWdobGlnaHRlZENlbGxzKFtdKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbGxvd0NoYW5nZTtcclxuICB9XHJcblxyXG4gIHNoaXBNb2RlbENoYW5nZUxpc3RlbmVyKHNoaXBNb2RlbCwgY2hhbmdlcykge1xyXG4gICAgaWYgKCdvY2N1cGllZENlbGxzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMub2NjdXBpZWRDZWxsc0NoYW5nZWQoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgnZGlyZWN0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuc2hpcERpcmVjdGlvbkNoYW5nZWQoc2hpcE1vZGVsLCBjaGFuZ2VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNoaXBEaXJlY3Rpb25DaGFuZ2VkKHNoaXBNb2RlbCwgY2hhbmdlcykge1xyXG4gICAgY29uc3QgYm9hcmRHcmFwaGljID0gdGhpcy5ib2FyZEdyYXBoaWM7XHJcbiAgICBjb25zdCBzaGlwID0gYm9hcmRHcmFwaGljLnZpc2libGVTaGlwc01hcC5nZXQoc2hpcE1vZGVsKTtcclxuICAgIGNvbnN0IHNlZWQgPSBzaGlwLnNoaXBHcmFwaGljLmVsZW1lbnQucXVlcnlTZWxlY3RvcigncmVjdCcpO1xyXG4gICAgY29uc3Qgc2VlZEJvdW5kcyA9IHNlZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoIWZpbmRDZWxsQXRQb2ludChzZWVkQm91bmRzLmxlZnQsIHNlZWRCb3VuZHMudG9wLCBib2FyZEdyYXBoaWMuZ3JpZHNbIDAgXSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2VsbHNUb09jY3VweSA9IGZpbmRDZWxscyhzZWVkLCBib2FyZEdyYXBoaWMuZ3JpZHNbIDAgXSwgY2hhbmdlcy5kaXJlY3Rpb24ubmV3VmFsdWUpO1xyXG4gICAgc2hpcE1vZGVsLm9jY3VwaWVkQ2VsbHMgPSBjZWxsc1RvT2NjdXB5O1xyXG4gICAgdGhpcy5zZXRIaWdobGlnaHRlZENlbGxzKGNlbGxzVG9PY2N1cHksICcjMDBmZjAwJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRIaWdobGlnaHRlZENlbGxzKFtdKTtcclxuICAgIH0sIDI1MCk7XHJcbiAgfVxyXG5cclxuICBvY2N1cGllZENlbGxzQ2hhbmdlZChjaGFuZ2VzKSB7XHJcbiAgICBjb25zdCB7b2xkVmFsdWUgPSBbXSwgbmV3VmFsdWUgPSBbXX0gPSBjaGFuZ2VzLm9jY3VwaWVkQ2VsbHM7XHJcbiAgICBjb25zdCBvY2N1cGllZENlbGxzU2V0ID0gdGhpcy5wbGF5ZXIxLm9jY3VwaWVkQ2VsbHNTZXQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1ZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG9jY3VwaWVkQ2VsbHNTZXQuZGVsZXRlKG9sZFZhbHVlWyBpIF0pO1xyXG4gICAgICBvY2N1cGllZENlbGxzU2V0LmFkZChuZXdWYWx1ZVsgaSBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEhpZ2hsaWdodGVkQ2VsbHMoY2VsbHMsIGNvbG9yKSB7XHJcbiAgICB0aGlzLmxhc3RIaWdobGlnaHRlZENlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgIGNlbGwuc3R5bGUuZmlsbCA9ICcnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgY2VsbC5zdHlsZS5maWxsID0gY29sb3I7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxhc3RIaWdobGlnaHRlZENlbGxzID0gY2VsbHM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi4vc2hpcC9TaGlwJztcclxuaW1wb3J0ICcuL2JvYXJkLnNjc3MnO1xyXG5cclxuY2xhc3MgQm9hcmRHcmFwaGljIHtcclxuICB2aXNpYmxlU2hpcHNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgZ3JpZHMgPSBbXTtcclxuICByZW5kZXJlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzaGlwcykge1xyXG4gICAgdGhpcy5zaGlwcyA9IHNoaXBzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgZWxlbWVudC5pZCA9ICdiYXR0bGVzaGlwQm9hcmQnO1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2hpcHMoKSB7XHJcbiAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcE1vZGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcE1vZGVsKTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHNoaXAucmVuZGVyKCk7XHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICBzaGlwLnRyYW5zbGF0ZSgwLCA1MjUgKyAoIGluZGV4ICogNTAgKSk7XHJcblxyXG4gICAgICB0aGlzLnZpc2libGVTaGlwc01hcC5zZXQoc2hpcE1vZGVsLCBzaGlwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmcmFnbWVudDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IHBsYXllcjFHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgIHBsYXllcjFHcmlkLmlkID0gJ3BsYXllcjFHcmlkJztcclxuICAgIHBsYXllcjFHcmlkLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNTAwcHgnKTtcclxuICAgIHBsYXllcjFHcmlkLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzgwMHB4Jyk7XHJcblxyXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGxheWVyMUdyaWQpO1xyXG4gICAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG4gICAgcGxheWVyMUdyaWQuYXBwZW5kQ2hpbGQoZyk7XHJcblxyXG4gICAgbGV0IGdyaWRTaXplID0gMTA7XHJcbiAgICB3aGlsZSAoZ3JpZFNpemUtLSkge1xyXG4gICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgYE0wLDBMNTAsMEw1MCw1MEwwLDUwemApO1xyXG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xyXG4gICAgICBnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG4gICAgfVxyXG4gICAgZ3JpZFNpemUgPSA5O1xyXG4gICAgd2hpbGUgKGdyaWRTaXplLS0pIHtcclxuICAgICAgY29uc3QgY2xvbmUgPSBnLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgcGxheWVyMUdyaWQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheWVyMkdyaWQgPSBwbGF5ZXIxR3JpZC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBwbGF5ZXIyR3JpZC5pZCA9ICdwbGF5ZXIyR3JpZCc7XHJcbiAgICB0aGlzLmdyaWRzLnB1c2gocGxheWVyMUdyaWQsIHBsYXllcjJHcmlkKTtcclxuXHJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChwbGF5ZXIyR3JpZCk7XHJcblxyXG4gICAgcGxheWVyMUdyaWQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJTaGlwcygpKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgdGhpcy5yZW5kZXJlZCA9IHRydWU7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkR3JhcGhpYztcclxuIiwiaW1wb3J0IHsgYmluZGFibGVTZXR0ZXJDaGFuZ2VkIH0gZnJvbSAnLi4vdXRpbHMvYmluZGFibGVTZXR0ZXJDaGFuZ2VkJztcclxuaW1wb3J0IHsgcmFuZG9taXplU2hpcHMgfSBmcm9tICcuLi91dGlscy9yYW5kb21pemVTaGlwcyc7XHJcbmltcG9ydCBjb25zb2xlVGVtcGxhdGUgZnJvbSAnLi9fY29uc29sZS5odG1sJztcclxuaW1wb3J0ICcuL2NvbnNvbGUuc2Nzcyc7XHJcblxyXG5jbGFzcyBDb25zb2xlIHtcclxuXHJcbiAgcmFuZG9taXplQnV0dG9uO1xyXG4gIHN0YXJ0R2FtZUJ1dHRvbjtcclxuICBncmlkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihncmlkLCBnYW1lU3RhdGUpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICBwbGF5ZXJNb2RlbENoYW5nZUhhbmRsZXI6IHRoaXMucGxheWVyTW9kZWxDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgIHJhbmRvbWl6ZUJ1dHRvbkNsaWNrSGFuZGxlcjogdGhpcy5yYW5kb21pemVCdXR0b25DbGlja0hhbmRsZXIuYmluZCh0aGlzKSxcclxuICAgICAgc3RhcnRHYW1lQ2xpY2tIYW5kbGVyOiB0aGlzLnN0YXJ0R2FtZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICBnYW1lU3RhdGVDaGFuZ2VIYW5kbGVyOiB0aGlzLmdhbWVTdGF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcclxuXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIGdhbWVTdGF0ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbWVudCgpIHtcclxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmlkID0gJ2NvbnNvbGUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWVyMSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIxO1xyXG4gIH1cclxuXHJcbiAgc2V0IHBsYXllcjEodmFsdWUpIHtcclxuICAgIGJpbmRhYmxlU2V0dGVyQ2hhbmdlZC5jYWxsKHRoaXMsICdfcGxheWVyMScsIHZhbHVlLCB0aGlzLnBsYXllck1vZGVsQ2hhbmdlSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWVyMigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIyO1xyXG4gIH1cclxuXHJcbiAgc2V0IHBsYXllcjIodmFsdWUpIHtcclxuICAgIGJpbmRhYmxlU2V0dGVyQ2hhbmdlZC5jYWxsKHRoaXMsICdfcGxheWVyMicsIHZhbHVlLCB0aGlzLnBsYXllck1vZGVsQ2hhbmdlSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2FtZVN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBnYW1lU3RhdGUodmFsdWUpIHtcclxuICAgIGJpbmRhYmxlU2V0dGVyQ2hhbmdlZC5jYWxsKHRoaXMsICdfZ2FtZVN0YXRlJywgdmFsdWUsIHRoaXMuZ2FtZVN0YXRlQ2hhbmdlSGFuZGxlcik7XHJcbiAgICBjb25zdCB7cGxheWVyMSwgcGxheWVyMn0gPSAoIHZhbHVlIHx8IHt9ICk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtwbGF5ZXIxLCBwbGF5ZXIyfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb25zb2xlVGVtcGxhdGU7XHJcbiAgICB0aGlzLnBvc3RSZW5kZXJBY3Rpb25zKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHBvc3RSZW5kZXJBY3Rpb25zKCkge1xyXG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21pemUnKTtcclxuICAgIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmFuZG9taXplQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XHJcbiAgICBzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN0YXJ0R2FtZUNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7cmFuZG9taXplQnV0dG9uLCBzdGFydEdhbWVCdXR0b259KTtcclxuICB9XHJcblxyXG4gIHBsYXllck1vZGVsQ2hhbmdlSGFuZGxlcihzb3VyY2UsIGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmFsbFNoaXBzUGxhY2VkICYmIHNvdXJjZS5hbGxTaGlwc1BsYWNlZCkge1xyXG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnYW1lU3RhdGVDaGFuZ2VIYW5kbGVyKHNvdXJjZSwgY2hhbmdlcykge1xyXG4gICAgaWYgKCdwbGF5ZXJUdXJuJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMucGxheWVyVHVybkNoYW5nZWQoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwbGF5ZXJUdXJuQ2hhbmdlZChjaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSBjaGFuZ2VzLnBsYXllclR1cm4ubmV3VmFsdWU7XHJcbiAgICBjb25zdCBzdGF0RWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXRzIHVsJyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9ICdzZWxlY3RlZCc7XHJcbiAgICBjb25zdCBbIHN0YXQxLCBzdGF0MiBdID0gc3RhdEVsZW1lbnRzO1xyXG4gICAgcGxheWVyID09PSB0aGlzLnBsYXllcjEgPyBzdGF0MS5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkKSA6IHN0YXQxLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0ZWQpO1xyXG4gICAgcGxheWVyID09PSB0aGlzLnBsYXllcjIgPyBzdGF0Mi5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkKSA6IHN0YXQyLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9taXplQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgcmFuZG9taXplU2hpcHModGhpcy5ncmlkLCB0aGlzLnBsYXllcjEpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgdGhpcy5nYW1lU3RhdGUuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgWyB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiwgdGhpcy5yYW5kb21pemVCdXR0b24gXS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gaWQ9Y29uc29sZT4gPGRpdiBjbGFzcz1zdGF0cz4gPHVsIGlkPXBsYXllcjE+IDxsaT5QbGF5ZXIgMTwvbGk+IDxsaT5oaXRzOiA8c3Bhbj4wPC9zcGFuPjwvbGk+IDxsaT5hdHRlbXB0czogPHNwYW4+MDwvc3Bhbj48L2xpPiA8bGk+YWNjdXJhY3k6IDxzcGFuPjA8L3NwYW4+JTwvbGk+IDwvdWw+IDx1bCBpZD1wbGF5ZXIyPiA8bGk+Q29tcHV0ZXI8L2xpPiA8bGk+aGl0czogPHNwYW4+MDwvc3Bhbj48L2xpPiA8bGk+YXR0ZW1wdHM6IDxzcGFuPjA8L3NwYW4+PC9saT4gPGxpPmFjY3VyYWN5OiA8c3Bhbj4wPC9zcGFuPiU8L2xpPiA8L3VsPiA8L2Rpdj4gPGJ1dHRvbiBpZD1yYW5kb21pemU+UmFuZG9taXplIFNoaXBzPC9idXR0b24+IDxidXR0b24gaWQ9c3RhcnQgZGlzYWJsZWQ9ZGlzYWJsZWQ+U3RhcnQgR2FtZTwvYnV0dG9uPiA8L3NlY3Rpb24+IFwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2JvYXJkLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYm9hcmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYm9hcmQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnNvbGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb25zb2xlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnNvbGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBjb25zdCBhbGxTaGlwVHlwZXMgPSBbXTtcclxuZXhwb3J0IGxldCB0b3RhbENlbGxzID0gMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGlwVHlwZUVudW0ge1xyXG5cclxuICBzaXplO1xyXG4gIG5hbWU7XHJcbiAgbWF4QWxsb3dlZDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2l6ZSwgbmFtZSwgbWF4QWxsb3dlZCkge1xyXG4gICAgaWYgKE9iamVjdC5pc0Zyb3plbihTaGlwVHlwZUVudW0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIFNoaXBUeXBlRW51bSBjYW5ub3QgYmUgY29uc3RydWN0ZWQnKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge3NpemUsIG5hbWUsIG1heEFsbG93ZWR9KTtcclxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XHJcbiAgICBhbGxTaGlwVHlwZXMucHVzaCh0aGlzKTtcclxuICAgIHRvdGFsQ2VsbHMgKz0gKCBzaXplICogbWF4QWxsb3dlZCApO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG5cclxuU2hpcFR5cGVFbnVtLkNPUlZFVEUgPSBuZXcgU2hpcFR5cGVFbnVtKDIsICdDb3J2ZXR0ZScsIDEpO1xyXG5TaGlwVHlwZUVudW0uRlJJR0FURSA9IG5ldyBTaGlwVHlwZUVudW0oMywgJ0ZyaWdhdGUnLCAyKTtcclxuU2hpcFR5cGVFbnVtLkRFU1RST1lFUiA9IG5ldyBTaGlwVHlwZUVudW0oNCwgJ0Rlc3Ryb3llcicsIDEpO1xyXG5TaGlwVHlwZUVudW0uQ0FSUklFUiA9IG5ldyBTaGlwVHlwZUVudW0oNSwgJ0NhcnJpZXInLCAxKTtcclxuXHJcbk9iamVjdC5mcmVlemUoU2hpcFR5cGVFbnVtKTtcclxuIiwiaW1wb3J0IHsgcmFuZG9taXplU2hpcHMgfSBmcm9tICcuLi91dGlscy9yYW5kb21pemVTaGlwcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5cclxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgcmFuZG9taXplU2hpcHModGhpcy5hbGx5R3JpZCwgdGhpcy5wbGF5ZXJNb2RlbCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wdXRlcjtcclxuIiwiaW1wb3J0IHsgYmluZGFibGVTZXR0ZXJDaGFuZ2VkIH0gZnJvbSAnLi4vdXRpbHMvYmluZGFibGVTZXR0ZXJDaGFuZ2VkJztcclxuaW1wb3J0IHsgZ2V0SGl0SW5mbyB9IGZyb20gJy4uL3V0aWxzL2dldEhpdEluZm8nO1xyXG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9Db21wdXRlcic7XHJcbmltcG9ydCBIdW1hbiBmcm9tICcuL0h1bWFuJztcclxuXHJcbmZ1bmN0aW9uIHBsYXllck1vZGVsQ2hhbmdlSGFuZGxlcihzb3VyY2UsIGNoYW5nZXMpIHtcclxuICBpZiAoISggJ2luY29taW5nU2hvdHMnIGluIGNoYW5nZXMgKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCB0YXJnZXRDZWxsID0gY2hhbmdlcy5pbmNvbWluZ1Nob3RzLm5ld1ZhbHVlWyAwIF07XHJcbiAgY29uc3QgaGl0SW5mbyA9IGdldEhpdEluZm8oc291cmNlLCB0YXJnZXRDZWxsKTtcclxuICBpZiAoaGl0SW5mbykge1xyXG4gICAgY29uc3Qge3NoaXAsIGluZGV4fSA9IGhpdEluZm87XHJcbiAgICBzaGlwLmhpdHMgPSAoIHNoaXAuaGl0c1sgaW5kZXggXSA9IHRydWUsIHNoaXAuaGl0cyApLmNvbmNhdCgpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZVBsYXkge1xyXG4gIGdyaWRzO1xyXG4gIGNvbXB1dGVyO1xyXG4gIGh1bWFuO1xyXG4gIHBsYXllclR1cm4gPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihncmlkcywgZ2FtZVN0YXRlKSB7XHJcbiAgICB0aGlzLmdhbWVTdGF0ZUNoYW5nZUhhbmRsZXIgPSB0aGlzLmdhbWVTdGF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge2dyaWRzLCBnYW1lU3RhdGV9KTtcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXIxKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcjE7XHJcbiAgfVxyXG5cclxuICBzZXQgcGxheWVyMSh2YWx1ZSkge1xyXG4gICAgYmluZGFibGVTZXR0ZXJDaGFuZ2VkLmNhbGwodGhpcywgJ19wbGF5ZXIxJywgdmFsdWUsIHBsYXllck1vZGVsQ2hhbmdlSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWVyMigpIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGF5ZXIyO1xyXG4gIH1cclxuXHJcbiAgc2V0IHBsYXllcjIodmFsdWUpIHtcclxuICAgIGJpbmRhYmxlU2V0dGVyQ2hhbmdlZC5jYWxsKHRoaXMsICdfcGxheWVyMicsIHZhbHVlLCBwbGF5ZXJNb2RlbENoYW5nZUhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdhbWVTdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZ2FtZVN0YXRlKHZhbHVlKSB7XHJcbiAgICBiaW5kYWJsZVNldHRlckNoYW5nZWQuY2FsbCh0aGlzLCAnX2dhbWVTdGF0ZScsIHZhbHVlLCB0aGlzLmdhbWVTdGF0ZUNoYW5nZUhhbmRsZXIpO1xyXG4gICAgY29uc3Qge3BsYXllcjEsIHBsYXllcjJ9ID0gKCB2YWx1ZSB8fCB7fSApO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7cGxheWVyMSwgcGxheWVyMn0pO1xyXG4gIH1cclxuXHJcbiAgZ2FtZVN0YXRlQ2hhbmdlSGFuZGxlcihzb3VyY2UsIGNoYW5nZXMpIHtcclxuICAgIGlmICgnZ2FtZVN0YXJ0ZWQnIGluIGNoYW5nZXMgJiYgY2hhbmdlcy5nYW1lU3RhcnRlZC5uZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgncGxheWVyVHVybicgaW4gY2hhbmdlcykge1xyXG4gICAgICB0aGlzLnBsYXllclR1cm5DaGFuZ2VkSGFuZGxlcihjaGFuZ2VzLnBsYXllclR1cm4ubmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5odW1hbiA9IG5ldyBIdW1hbih0aGlzLmdyaWRzWyAxIF0sIHRoaXMuZ3JpZHNbIDAgXSwgdGhpcy5wbGF5ZXIxKTtcclxuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIodGhpcy5ncmlkc1sgMCBdLCB0aGlzLmdyaWRzWyAxIF0sIHRoaXMucGxheWVyMik7XHJcbiAgICB0aGlzLmdhbWVTdGF0ZS5wbGF5ZXJUdXJuID0gdGhpcy5wbGF5ZXIxO1xyXG4gIH1cclxuXHJcbiAgcGxheWVyVHVybkNoYW5nZWRIYW5kbGVyKHBsYXllclR1cm4pIHtcclxuICAgIGlmIChwbGF5ZXJUdXJuID09PSB0aGlzLmdhbWVTdGF0ZS5wbGF5ZXIyKSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVBsYXk7XHJcbiIsImltcG9ydCB7IGZpbmRDZWxsQXRQb2ludCB9IGZyb20gJy4uL3V0aWxzL2ZpbmRDZWxsQXRQb2ludCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5cclxuY2xhc3MgSHVtYW4gZXh0ZW5kcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy5vcHBvbmVudEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wcG9uZW50R3JpZENsaWNrSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBvcHBvbmVudEdyaWRDbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgIGNvbnN0IHtwYWdlWCwgcGFnZVksIGN1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XHJcbiAgICBjb25zdCBjZWxsID0gZmluZENlbGxBdFBvaW50KHBhZ2VYLCBwYWdlWSwgY3VycmVudFRhcmdldCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdW1hbjtcclxuIiwiY2xhc3MgUGxheWVyIHtcbiAgb3Bwb25lbnRHcmlkO1xuICBhbGx5R3JpZDtcbiAgcGxheWVyTW9kZWw7XG5cbiAgY29uc3RydWN0b3Iob3Bwb25lbnRHcmlkLCBhbGx5R3JpZCwgcGxheWVyTW9kZWwpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtvcHBvbmVudEdyaWQsIGFsbHlHcmlkLCBwbGF5ZXJNb2RlbH0pO1xuICAgIHRoaXMucGxheWVyTW9kZWxDaGFuZ2VkID0gdGhpcy5wbGF5ZXJNb2RlbENoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsYXllck1vZGVsQ2hhbmdlZChzb3VyY2UsIGNoYW5nZXMpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC9Cb2FyZCc7XHJcbmltcG9ydCBDb25zb2xlIGZyb20gJy4vYm9hcmQvQ29uc29sZSc7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL2dhbWVwbGF5L0dhbWVQbGF5JztcclxuaW1wb3J0ICcuL21haW4uc2Nzcyc7XHJcbmltcG9ydCBHYW1lU3RhdGVNb2RlbCBmcm9tICcuL21vZGVsL0dhbWVTdGF0ZU1vZGVsJztcclxuaW1wb3J0IHsgYW5pbWF0ZUJvYXJkIH0gZnJvbSAnLi91dGlscy9hbmltYXRlQm9hcmRSZW5kZXInO1xyXG5cclxuY29uc3QgZ2FtZVN0YXRlTW9kZWwgPSBuZXcgR2FtZVN0YXRlTW9kZWwoKTtcclxuY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoZ2FtZVN0YXRlTW9kZWwpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvYXJkLnJlbmRlcigpKTtcclxuXHJcbmNvbnN0IGdyaWRzID0gYm9hcmQuYm9hcmRHcmFwaGljLmdyaWRzO1xyXG5jb25zdCBjb25zb2xlVmlldyA9IG5ldyBDb25zb2xlKGdyaWRzWyAwIF0sIGdhbWVTdGF0ZU1vZGVsKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb25zb2xlVmlldy5yZW5kZXIoKSk7XHJcblxyXG5ncmlkcy5mb3JFYWNoKGdyaWQgPT4ge1xyXG4gIGFuaW1hdGVCb2FyZChncmlkLCA1MCwgMTApXHJcbn0pO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lUGxheShncmlkcywgZ2FtZVN0YXRlTW9kZWwpO1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBiaW5kYWJsZSB9IGZyb20gJ2JpbmQtcHJvcGVydHknO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSAnLi4vbW9kZWwvUGxheWVyTW9kZWwnO1xyXG5cclxuY2xhc3MgR2FtZVN0YXRlTW9kZWwge1xyXG5cclxuICBAYmluZGFibGUgZ2FtZVN0YXJ0ZWQ7XHJcblxyXG4gIEBiaW5kYWJsZSBwbGF5ZXJUdXJuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lU3RhcnRlZCA9IGZhbHNlLCBwbGF5ZXJUdXJuID0gbnVsbCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7Z2FtZVN0YXJ0ZWQsIHBsYXllclR1cm59KTtcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXIxKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcjEgfHwgKCB0aGlzLl9wbGF5ZXIxID0gbmV3IFBsYXllck1vZGVsKCkgKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXIyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcjIgfHwgKCB0aGlzLl9wbGF5ZXIyID0gbmV3IFBsYXllck1vZGVsKCkgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGF0ZU1vZGVsO1xyXG4iLCJpbXBvcnQgeyBiaW5kYWJsZSwgcXVldWVOb3RpZmljYXRpb24gfSBmcm9tICdiaW5kLXByb3BlcnR5JztcclxuaW1wb3J0IHsgYWxsU2hpcFR5cGVzLCB0b3RhbENlbGxzIH0gZnJvbSAnLi4vZW51bS9TaGlwVHlwZUVudW0nO1xyXG5pbXBvcnQgU2hpcE1vZGVsIGZyb20gJy4vU2hpcE1vZGVsJ1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZWZhdWx0U2hpcHMoY2hhbmdlSGFuZGxlcikge1xyXG4gIGNvbnN0IHNoaXBNb2RlbHMgPSBbXTtcclxuICBhbGxTaGlwVHlwZXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgIGNvbnN0IHttYXhBbGxvd2VkfSA9IHR5cGU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEFsbG93ZWQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwTW9kZWwgPSBuZXcgU2hpcE1vZGVsKHt0eXBlfSk7XHJcbiAgICAgIHNoaXBNb2RlbC5hZGRDaGFuZ2VMaXN0ZW5lcihjaGFuZ2VIYW5kbGVyLCAxMDAwKTtcclxuICAgICAgc2hpcE1vZGVscy5wdXNoKHNoaXBNb2RlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNoaXBNb2RlbHM7XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllck1vZGVsIHtcclxuICBAYmluZGFibGUgaW5jb21pbmdTaG90cyA9IFtdO1xyXG4gIG91dGJvdW5kU2hvdHMgPSBbXTtcclxuICBvY2N1cGllZENlbGxzU2V0ID0gbmV3IFNldCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2hpcE1vZGVsQ2hhbmdlZEhhbmRsZXIgPSB0aGlzLnNoaXBNb2RlbENoYW5nZWRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hpcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hpcHMgfHwgKCB0aGlzLl9zaGlwcyA9IGdlbmVyYXRlRGVmYXVsdFNoaXBzKHRoaXMuc2hpcE1vZGVsQ2hhbmdlZEhhbmRsZXIpICk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWxsU2hpcHNQbGFjZWQoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLl9hbGxTaGlwc1BsYWNlZDtcclxuICB9XHJcblxyXG4gIHNoaXBNb2RlbENoYW5nZWRIYW5kbGVyKHNvdXJjZSwgY2hhbmdlcywgcHJpb3JpdHkpIHtcclxuICAgIGlmICghY2hhbmdlcy5vY2N1cGllZENlbGxzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5vY2N1cGllZENlbGxzU2V0LnNpemUgPT09IHRvdGFsQ2VsbHM7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuYWxsU2hpcHNQbGFjZWQ7XHJcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2FsbFNoaXBzUGxhY2VkID0gbmV3VmFsdWU7XHJcbiAgICAgIHF1ZXVlTm90aWZpY2F0aW9uKHRoaXMsICdhbGxTaGlwc1BsYWNlZCcsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJNb2RlbDtcclxuIiwiaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tICdiaW5kLXByb3BlcnR5JztcclxuXHJcbmNsYXNzIFNoaXBNb2RlbCB7XHJcbiAgQGJpbmRhYmxlIGhpdHM7XHJcbiAgQGJpbmRhYmxlIGRpcmVjdGlvbjtcclxuICBAYmluZGFibGUgb2NjdXBpZWRDZWxscztcclxuXHJcbiAgdHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioe2hpdHMgPSBbXSwgdHlwZSwgZGlyZWN0aW9uID0gMCwgb2NjdXBpZWRDZWxsc30pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge2hpdHMsIHR5cGUsIGRpcmVjdGlvbiwgb2NjdXBpZWRDZWxsc30pO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gJycgKyB0aGlzLnR5cGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwTW9kZWw7XHJcbiIsImltcG9ydCB7IGFsaWduRWxlbWVudFRvQ2VsbCB9IGZyb20gJy4uL3V0aWxzL2FsaWduRWxlbWVudFRvQ2VsbCc7XHJcbmltcG9ydCB7IGJpbmRhYmxlU2V0dGVyQ2hhbmdlZCB9IGZyb20gJy4uL3V0aWxzL2JpbmRhYmxlU2V0dGVyQ2hhbmdlZCc7XHJcbmltcG9ydCB7IGZpbmROb2RlQXRQb2ludCB9IGZyb20gJy4uL3V0aWxzL2ZpbmROb2RlQXRQb2ludCc7XHJcbmltcG9ydCBTaGlwR3JhcGhpYyBmcm9tICcuL1NoaXBHcmFwaGljJztcclxuXHJcbmNsYXNzIFNoaXAge1xyXG4gIGxhc3RHb29kVHJhbnNmb3JtID0gW107XHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2s7XHJcbiAgZHJhZ0NhbGxiYWNrO1xyXG4gIGRyb3BDYWxsYmFjaztcclxuICBhbmltYXRpb25GcmFtZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2hpcE1vZGVsLCBkcmFnZ2FibGUgPSB0cnVlKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRNb3VzZURvd25IYW5kbGVyID0gdGhpcy5lbGVtZW50TW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5ib2R5TW91c2VVcEhhbmRsZXIgPSB0aGlzLmJvZHlNb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5ib2R5TW91c2VNb3ZlSGFuZGxlciA9IHRoaXMuYm9keU1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucm90YXRlQXJyb3dDbGlja0hhbmRsZXIgPSB0aGlzLnJvdGF0ZUFycm93Q2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlSGFuZGxlciA9IHRoaXMubW9kZWxDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7c2hpcE1vZGVsLCBkcmFnZ2FibGV9KTtcclxuICB9XHJcblxyXG4gIGdldCBzaGlwR3JhcGhpYygpIHtcclxuICAgIGlmICghdGhpcy5fc2hpcEdyYXBoaWMpIHtcclxuICAgICAgdGhpcy5fc2hpcEdyYXBoaWMgPSBuZXcgU2hpcEdyYXBoaWModGhpcy5zaGlwTW9kZWwpO1xyXG4gICAgICB0aGlzLl9zaGlwR3JhcGhpYy5yb3RhdGVBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlQXJyb3dDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3NoaXBHcmFwaGljO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNoaXBNb2RlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGlwTW9kZWw7XHJcbiAgfVxyXG5cclxuICBzZXQgc2hpcE1vZGVsKHZhbHVlKSB7XHJcbiAgICBiaW5kYWJsZVNldHRlckNoYW5nZWQuY2FsbCh0aGlzLCAnX3NoaXBNb2RlbCcsIHZhbHVlLCB0aGlzLm1vZGVsQ2hhbmdlSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ2dhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdnYWJsZTtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWUpIHtcclxuICAgIHZhbHVlID0gISF2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9kcmFnZ2FibGUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2RyYWdnYWJsZSA9IHZhbHVlO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuc2hpcEdyYXBoaWMuZWxlbWVudDtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmVsZW1lbnRNb3VzZURvd25IYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwR3JhcGhpYy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZShkZWx0YVR4LCBkZWx0YVR5LCBhbmltYXRlKSB7XHJcbiAgICBjb25zdCBzaGlwR3JhcGhpYyA9IHRoaXMuc2hpcEdyYXBoaWM7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc2hpcEdyYXBoaWMuZWxlbWVudDtcclxuICAgIGNvbnN0IHttX3RyYW5zZm9ybX0gPSBzaGlwR3JhcGhpYy50cmFuc2Zvcm07XHJcbiAgICBpZiAoYW5pbWF0ZSkge1xyXG4gICAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGRlbHRhVHgsIDIpICsgTWF0aC5wb3coZGVsdGFUeSwgMikpO1xyXG4gICAgICBsZXQgZCA9IGRpc3RhbmNlO1xyXG4gICAgICBsZXQgbGFzdFggPSAwO1xyXG4gICAgICBsZXQgbGFzdFkgPSAwO1xyXG4gICAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gMSAtICggZCAvPSAxLjE1ICkgLyBkaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBuZXdUeCA9ICggZGVsdGFUeCAqIHByb2dyZXNzICkgLSBsYXN0WDtcclxuICAgICAgICBjb25zdCBuZXdUeSA9ICggZGVsdGFUeSAqIHByb2dyZXNzICkgLSBsYXN0WTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAuOTk5OTkpIHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICAgICAgICBsYXN0WCArPSBuZXdUeDtcclxuICAgICAgICAgIGxhc3RZICs9IG5ld1R5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtX3RyYW5zZm9ybVsgNCBdICs9IG5ld1R4O1xyXG4gICAgICAgIG1fdHJhbnNmb3JtWyA1IF0gKz0gbmV3VHk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGBtYXRyaXgoJHttX3RyYW5zZm9ybS5qb2luKCcgJyl9KWApO1xyXG4gICAgICB9O1xyXG4gICAgICB0aWNrKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbV90cmFuc2Zvcm1bIDQgXSArPSBkZWx0YVR4O1xyXG4gICAgICBtX3RyYW5zZm9ybVsgNSBdICs9IGRlbHRhVHk7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgbWF0cml4KCR7bV90cmFuc2Zvcm0uam9pbignICcpfSlgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gRXZlbnQgSGFuZGxlcnNcclxuICBlbGVtZW50TW91c2VEb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgY29uc3Qgc2hpcEdyYXBoaWMgPSB0aGlzLnNoaXBHcmFwaGljO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gc2hpcEdyYXBoaWMucm90YXRlQXJyb3cpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmJvZHlNb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm9keU1vdXNlVXBIYW5kbGVyKTtcclxuICAgIHRoaXMuc2VnbWVudCA9IGZpbmROb2RlQXRQb2ludChldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHRoaXMuc2hpcEdyYXBoaWMuc2hpcFNlZ21lbnRzKTtcclxuICAgIHRoaXMubGFzdE1vdXNlRXZlbnQgPSBldmVudDtcclxuICAgIHRoaXMubGFzdEdvb2RUcmFuc2Zvcm0gPSBzaGlwR3JhcGhpYy50cmFuc2Zvcm0ubV90cmFuc2Zvcm0uY29uY2F0KCk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZHJhZ1N0YXJ0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFjayhldmVudCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBib2R5TW91c2VNb3ZlSGFuZGxlcihldmVudCkge1xyXG4gICAgaWYgKCFldmVudC5idXR0b25zKSB7XHJcbiAgICAgIHRoaXMuYm9keU1vdXNlVXBIYW5kbGVyKGV2ZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qge3BhZ2VYOiBsYXN0UGFnZVgsIHBhZ2VZOiBsYXN0UGFnZVl9ID0gdGhpcy5sYXN0TW91c2VFdmVudDtcclxuICAgIGNvbnN0IHtwYWdlWCwgcGFnZVl9ID0gZXZlbnQ7XHJcbiAgICBjb25zdCBkZWx0YVggPSBwYWdlWCAtIGxhc3RQYWdlWDtcclxuICAgIGNvbnN0IGRlbHRhWSA9IHBhZ2VZIC0gbGFzdFBhZ2VZO1xyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlKGRlbHRhWCwgZGVsdGFZKTtcclxuICAgIHRoaXMubGFzdE1vdXNlRXZlbnQgPSBldmVudDtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5kcmFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5kcmFnQ2FsbGJhY2soZXZlbnQsIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYm9keU1vdXNlVXBIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuYm9keU1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib2R5TW91c2VVcEhhbmRsZXIpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmRyb3BDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmRyb3BDYWxsYmFjayhldmVudCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByb3RhdGVBcnJvd0NsaWNrSGFuZGxlcigpIHtcclxuICAgIHRoaXMuc2hpcE1vZGVsLmRpcmVjdGlvbiA9ICshdGhpcy5zaGlwTW9kZWwuZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgbW9kZWxDaGFuZ2VIYW5kbGVyKHNvdXJjZSwgY2hhbmdlcykge1xyXG4gICAgaWYgKCdkaXJlY3Rpb24nIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25DaGFuZ2VkKGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgnb2NjdXBpZWRDZWxscycgaW4gY2hhbmdlcykge1xyXG4gICAgICB0aGlzLm9jY3VwaWVkQ2VsbHNDaGFuZ2VkKHNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdoaXRzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuaGl0c0NoYW5nZWQoc291cmNlLmhpdHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlyZWN0aW9uQ2hhbmdlZChjaGFuZ2VzKSB7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLnNoaXBHcmFwaGljLnRyYW5zZm9ybTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNoYW5nZXMuZGlyZWN0aW9uLm5ld1ZhbHVlO1xyXG4gICAgY29uc3QgZGVnID0gZGlyZWN0aW9uID09PSAxID8gOTAgOiAtOTA7XHJcbiAgICB0cmFuc2Zvcm0ucm90YXRlKGRlZywgMjUsIDE3LjUpO1xyXG4gICAgdGhpcy5zaGlwR3JhcGhpYy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYG1hdHJpeCgke3RyYW5zZm9ybS5tX3RyYW5zZm9ybS5qb2luKCcgJyl9KWApO1xyXG4gIH1cclxuXHJcbiAgb2NjdXBpZWRDZWxsc0NoYW5nZWQoc291cmNlKSB7XHJcbiAgICBjb25zdCBjZWxsID0gc291cmNlLm9jY3VwaWVkQ2VsbHNbIDAgXTtcclxuICAgIGNvbnN0IG1fdHJhbnNmb3JtID0gdGhpcy5zaGlwR3JhcGhpYy50cmFuc2Zvcm0ubV90cmFuc2Zvcm07XHJcbiAgICBpZiAoIWNlbGwpIHtcclxuICAgICAgY29uc3Qgeyc0JzogeDEsICc1JzogeTF9ID0gbV90cmFuc2Zvcm07XHJcbiAgICAgIGNvbnN0IHsnNCc6IHgyLCAnNSc6IHkyfSA9IHRoaXMubGFzdEdvb2RUcmFuc2Zvcm07XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlKHgyIC0geDEsIHkyIC0geTEsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHt4LCB5fSA9IGFsaWduRWxlbWVudFRvQ2VsbCh0aGlzLnNoaXBHcmFwaGljLmVsZW1lbnQsIHRoaXMuc2hpcE1vZGVsLmRpcmVjdGlvbiwgbV90cmFuc2Zvcm0sIGNlbGwpO1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZSh4LCB5LCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpdHNDaGFuZ2VkKGhpdHMpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCJpbXBvcnQgU1ZHVHJhbnNmb3JtIGZyb20gJ3N2Zy1wYXRoLWludGVycG9sYXRvci9zcmMvbWF0aC9TVkdUcmFuc2Zvcm0nO1xyXG5cclxuaW1wb3J0IHJvdGF0ZSBmcm9tICcuLi9zdmdQYXRocy9yb3RhdGUnO1xyXG5cclxuaW1wb3J0ICcuL3NoaXAuc2Nzcyc7XHJcblxyXG5sZXQgaSA9IDA7XHJcblxyXG5jbGFzcyBTaGlwR3JhcGhpYyB7XHJcbiAgaWQ7XHJcbiAgc2VnbWVudDtcclxuICB0cmFuc2Zvcm0gPSBuZXcgU1ZHVHJhbnNmb3JtKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNoaXBNb2RlbCkge1xyXG4gICAgdGhpcy5pZCA9ICdzaGlwXycgKyBpKys7XHJcbiAgICB0aGlzLnNoaXBNb2RlbCA9IHNoaXBNb2RlbDtcclxuICB9XHJcblxyXG4gIGdldCBlbGVtZW50KCkge1xyXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuICAgICAgZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hpcFNlZ21lbnRzKCkge1xyXG4gICAgaWYgKCF0aGlzLl9zaGlwU2VnbWVudHMpIHtcclxuICAgICAgdGhpcy5fc2hpcFNlZ21lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3JlY3QnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fc2hpcFNlZ21lbnRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJvdGF0ZUFycm93KCkge1xyXG4gICAgaWYgKCF0aGlzLl9yb2F0ZUFycm93KSB7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZUFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICAgIHJvdGF0ZUFycm93LmlkID0gYHJvdGF0ZV8ke3RoaXMuaWR9YDtcclxuICAgICAgcm90YXRlQXJyb3cuc2V0QXR0cmlidXRlKCdkJywgcm90YXRlKTtcclxuICAgICAgcm90YXRlQXJyb3cuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5zaGlwTW9kZWwudHlwZS5zaXplICogNTB9IDI0KWApO1xyXG4gICAgICB0aGlzLl9yb2F0ZUFycm93ID0gcm90YXRlQXJyb3c7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcm9hdGVBcnJvdztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlZ21lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5fc2hpcFNlZ21lbnRzID0gbnVsbDtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsZXQge3R5cGUsIGhpdHN9ID0gdGhpcy5zaGlwTW9kZWw7XHJcbiAgICBjb25zdCB7c2l6ZX0gPSB0eXBlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgY29uc3QgaGl0ID0gaGl0c1sgaSBdO1xyXG4gICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdyZWN0Jyk7XHJcbiAgICAgIHJlY3Quc2V0QXR0cmlidXRlKCd3aWR0aCcsICc1MCcpO1xyXG4gICAgICByZWN0LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzM1Jyk7XHJcbiAgICAgIHJlY3Quc2V0QXR0cmlidXRlKCd4JywgJycgKyBpICogNTApO1xyXG4gICAgICByZWN0LnNldEF0dHJpYnV0ZSgnZmlsbCcsICggaGl0ID8gJyNmZjAwMDAnIDogJ3N0ZWVsYmx1ZScgKSk7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmVjdCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0Jyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJycgKyB0eXBlO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtZmFtaWx5JywgJ0QgRGF5IFN0ZW5jaWwnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCAnMzAnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd5JywgJzI4Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneCcsICc1Jyk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZUFycm93KTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcEdyYXBoaWM7XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NoaXAuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zaGlwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NoaXAuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGBNMTIuMjQxLDkuMzdoLTEuNDNDMTAuMDUsNC4wOCw1LjUxLDAsMCwwYy00LjI1LDAtNy45MywyLjQ0LTkuNzQsNS45OGwyLjk0LDEuMTNcblx0XHRjMS4zNC0yLjM4LDMuODgtMy45OSw2LjgxLTMuOTljMy43OCwwLDYuOTMsMi42OCw3LjY1LDYuMjVINS43OEM1LjU0MSw5LjYsNS4zMTEsOS43NSw1LjY1MSwxMC4xNmwyLjkxLDIuOTU5XG5cdFx0YzAuMjM5LDAuMjMsMC42MjksMC4yMywwLjg2OSwwbDIuOTMtMi45NTlDMTIuNjEsOS45MiwxMi40OTEsOS42LDEyLjI0MSw5LjM3eiBNMC4wMSwxOC43NGMtMy41LDAtNi40NS0yLjMwMS03LjQ1LTUuNDcxaDEuNzFcblx0XHRjMC4yNC0wLjIyOSwwLjM3LTAuNTUsMC4xMy0wLjc4OWwtMi45NC0yLjk2Yy0wLjI0LTAuMjMtMC42My0wLjIzLTAuODcsMGwtMi45MSwyLjk3Yy0wLjM1LDAuNDEtMC4xMiwwLjU1LDAuMTMsMC43ODloMS40M1xuXHRcdGMwLjg1LDQuNjMxLDUuMzQsOC41OSwxMC43OCw4LjU5YzMuOTgsMCw3LjQ1MS0yLjEyOSw5LjM2LTUuMzA5TDYuNDIsMTUuMzlDNSwxNy40MSwyLjY2MSwxOC43NCwwLjAxLDE4Ljc0emA7IiwiZXhwb3J0IGZ1bmN0aW9uIGFsaWduRWxlbWVudFRvQ2VsbChlbGVtZW50LCBkaXJlY3Rpb24sIG1fdHJhbnNmb3JtLCBjZWxsKSB7XHJcbiAgY29uc3QgZ3JpZFJlY3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGNvbnN0IG9mZnNldEhlaWdodCA9IGRpcmVjdGlvbiA/IDUwIDogMzU7XHJcbiAgY29uc3Qgb2Zmc2V0V2lkdGggPSBkaXJlY3Rpb24gPyAzNSArIDcuNSA6IDA7XHJcbiAgY29uc3QgeCA9IG9mZnNldFdpZHRoICsgKCBjZWxsUmVjdC5sZWZ0IC0gZ3JpZFJlY3QubGVmdCApIC0gbV90cmFuc2Zvcm1bIDQgXTtcclxuICBjb25zdCB5ID0gKCAoIGNlbGxSZWN0LmhlaWdodCAtIG9mZnNldEhlaWdodCApIC8gMiApICsgKCBjZWxsUmVjdC50b3AgLSBncmlkUmVjdC50b3AgKSAtIG1fdHJhbnNmb3JtWyA1IF07XHJcbiAgcmV0dXJuIHt4LCB5fTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYW5pbWF0ZUJvYXJkID0gKGJvYXJkRWxlbWVudCwgY2VsbFNpemUsIGNvbEN0KSA9PiB7XHJcbiAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8IDA7XHJcbiAgY29sQ3QgPSBjb2xDdCB8IDA7XHJcbiAgY29uc3QgcGF0aHMgPSBib2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICBjb25zdCBsZW4gPSB+fnBhdGhzLmxlbmd0aDtcclxuICBjb25zdCBkZWxheSA9IDI1MDtcclxuICBsZXQgcm93ID0gMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBjb25zdCBwYXRoID0gcGF0aHNbIGkgXTtcclxuICAgIGNvbnN0IHggPSArKCAoIGkgJSBjb2xDdCApICogY2VsbFNpemUgKTtcclxuICAgIGNvbnN0IHkgPSArKCByb3cgKiBjZWxsU2l6ZSApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHBhdGguc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xyXG4gICAgfSwgaSAlIHJvdyAqIGRlbGF5KTtcclxuXHJcbiAgICBpZiAoIXBhdGgubmV4dFNpYmxpbmcpIHtcclxuICAgICAgcm93Kys7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gYmluZGFibGVTZXR0ZXJDaGFuZ2VkKHByb3BlcnR5LCB2YWx1ZSwgaGFuZGxlcikge1xyXG4gIGlmICh0aGlzWyBwcm9wZXJ0eSBdID09PSB2YWx1ZSlcclxuICAgIHJldHVybjtcclxuXHJcbiAgaWYgKHRoaXNbIHByb3BlcnR5IF0pIHtcclxuICAgIHRoaXNbIHByb3BlcnR5IF0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoaGFuZGxlcik7XHJcbiAgfVxyXG4gIHRoaXNbIHByb3BlcnR5IF0gPSB2YWx1ZTtcclxuICB0aGlzWyBwcm9wZXJ0eSBdLmFkZENoYW5nZUxpc3RlbmVyKGhhbmRsZXIpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmaW5kQ2VsbEF0UG9pbnQoeCwgeSwgZ3JpZCkge1xyXG4gIGNvbnN0IHt0b3AsIGxlZnR9ID0gZ3JpZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCBjZWxsUHQgPSB7eDogeCAtIGxlZnQsIHk6IHkgLSB0b3B9O1xyXG4gIGNvbnN0IGNvbE51bSA9IH5+KCBjZWxsUHQueCAvIDUwICk7XHJcbiAgY29uc3Qgcm93TnVtID0gfn4oIGNlbGxQdC55IC8gNTAgKTtcclxuICBpZiAoaXNOYU4oY29sTnVtKSB8fCByb3dOdW0gPiA5IHx8IGNvbE51bSA+IDkgfHxcclxuICAgIGlzTmFOKHJvd051bSkgfHwgIWdyaWQuY2hpbGRyZW5bIHJvd051bSBdIHx8ICFncmlkLmNoaWxkcmVuWyByb3dOdW0gXS5jaGlsZHJlblsgY29sTnVtIF0pXHJcbiAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIGdyaWQuY2hpbGRyZW5bIHJvd051bSBdLmNoaWxkcmVuWyBjb2xOdW0gXTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRDZWxsIH0gZnJvbSAnLi9nZXRDZWxsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2VsbHMoc2hpcFNlZ21lbnQsIGJvYXJkLCBkaXJlY3Rpb24pIHtcclxuICBpZiAoIXNoaXBTZWdtZW50KSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHNoaXBTZWdtZW50UmVjdCA9IHNoaXBTZWdtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGNvbnN0IGJvYXJkUmVjdCA9IGJvYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICBjb25zdCByb3dOdW0gPSB+figgKCBzaGlwU2VnbWVudFJlY3QudG9wIC0gYm9hcmRSZWN0LnRvcCApIC8gNTAgKTtcclxuICBjb25zdCBjb2xOdW0gPSB+figgKCBzaGlwU2VnbWVudFJlY3QubGVmdCAtIGJvYXJkUmVjdC5sZWZ0ICkgLyA1MCApO1xyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgbGV0IGNvbEN1cnNvciA9IGNvbE51bTtcclxuICBsZXQgcm93Q3Vyc29yID0gcm93TnVtO1xyXG4gIGxldCB0aGlzU2VnbWVudCA9IHNoaXBTZWdtZW50O1xyXG5cclxuICB3aGlsZSAodGhpc1NlZ21lbnQgJiYgdGhpc1NlZ21lbnQubm9kZU5hbWUgPT09ICdyZWN0Jykge1xyXG4gICAgY29uc3QgY2VsbCA9IGdldENlbGwoYm9hcmQsIHJvd0N1cnNvciwgY29sQ3Vyc29yKTtcclxuICAgIGlmIChjZWxsKSB7XHJcbiAgICAgIGNlbGxzLnB1c2goY2VsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzU2VnbWVudCA9IHRoaXNTZWdtZW50Lm5leHRTaWJsaW5nO1xyXG4gICAgZGlyZWN0aW9uID8gcm93Q3Vyc29yKysgOiBjb2xDdXJzb3IrKztcclxuICB9XHJcblxyXG4gIGNvbEN1cnNvciA9IGNvbE51bTtcclxuICByb3dDdXJzb3IgPSByb3dOdW07XHJcbiAgdGhpc1NlZ21lbnQgPSBzaGlwU2VnbWVudDtcclxuICB3aGlsZSAodGhpc1NlZ21lbnQucHJldmlvdXNTaWJsaW5nICYmIHRoaXNTZWdtZW50LnByZXZpb3VzU2libGluZy5ub2RlTmFtZSA9PT0gJ3JlY3QnKSB7XHJcbiAgICBkaXJlY3Rpb24gPyByb3dDdXJzb3ItLSA6IGNvbEN1cnNvci0tO1xyXG4gICAgY29uc3QgY2VsbCA9IGdldENlbGwoYm9hcmQsIHJvd0N1cnNvciwgY29sQ3Vyc29yKTtcclxuICAgIGlmIChjZWxsKSB7XHJcbiAgICAgIGNlbGxzLnVuc2hpZnQoY2VsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzU2VnbWVudCA9IHRoaXNTZWdtZW50LnByZXZpb3VzU2libGluZztcclxuICB9XHJcblxyXG4gIHJldHVybiBjZWxscztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZmluZE5vZGVBdFBvaW50KHgsIHksIG5vZGVMaXN0KSB7XHJcbiAgbGV0IGxlbiA9ICtub2RlTGlzdC5sZW5ndGg7XHJcbiAgbGV0IGkgPSArMDtcclxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBjb25zdCB7bGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0fSA9IG5vZGVMaXN0WyBpIF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoeCA+PSBsZWZ0ICYmIHggPD0gbGVmdCArIHdpZHRoICYmIHkgPj0gdG9wICYmIHkgPD0gdG9wICsgaGVpZ2h0KSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbm9kZUxpc3RbIGkgXTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbChib2FyZCwgcm93LCBjb2wpIHtcclxuICBpZiAocm93ID4gOSB8fCBjb2wgPiA5KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkLmNoaWxkcmVuWyByb3cgXS5jaGlsZHJlblsgY29sIF07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEhpdEluZm8ocGxheWVyTW9kZWwsIHRhcmdldENlbGwpIHtcclxuICBjb25zdCBwbGF5ZXJTaGlwcyA9IHBsYXllck1vZGVsLnNoaXBzO1xyXG4gIGxldCBpID0gcGxheWVyU2hpcHMubGVuZ3RoO1xyXG4gIG91dGVyOndoaWxlIChpLS0pIHtcclxuICAgIGNvbnN0IGNlbGxzID0gcGxheWVyU2hpcHNbIGkgXS5vY2N1cGllZENlbGxzO1xyXG4gICAgbGV0IGogPSBjZWxscy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoai0tKSB7XHJcbiAgICAgIGlmIChjZWxsc1sgaiBdID09PSB0YXJnZXRDZWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHtzaGlwOiBwbGF5ZXJTaGlwc1sgaSBdLCBpbmRleDogan07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Q2VsbCB9IGZyb20gJy4vZ2V0Q2VsbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9yZUNlbGxzRnJvbUNlbGwoZ3JpZCwgY2VsbCwgZGlyZWN0aW9uLCBuKSB7XHJcbiAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGNvbnN0IGdyaWRSZWN0ID0gZ3JpZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBsZXQgcHQgPSB7XHJcbiAgICB5OiB+figgKCBjZWxsUmVjdC50b3AgLSBncmlkUmVjdC50b3AgKSAvIDUwICksXHJcbiAgICB4OiB+figgKCBjZWxsUmVjdC5sZWZ0IC0gZ3JpZFJlY3QubGVmdCApIC8gNTAgKVxyXG4gIH07XHJcbiAgY29uc3QgYXhpcyA9IGRpcmVjdGlvbiA/ICd5JyA6ICd4JztcclxuICBjb25zdCBjZWxscyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZ2V0Q2VsbChncmlkLCBwdC55LCBwdC54KTtcclxuICAgIGlmICghdGFyZ2V0Q2VsbCkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNlbGxzWyBpIF0gPSB0YXJnZXRDZWxsO1xyXG4gICAgcHRbIGF4aXMgXSsrO1xyXG4gIH1cclxuICByZXR1cm4gY2VsbHM7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Q2VsbCB9IGZyb20gJy4uL3V0aWxzL2dldENlbGwnO1xyXG5cclxuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xyXG5jb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVTaGlwcyhncmlkLCBwbGF5ZXJNb2RlbCkge1xyXG4gIGNvbnN0IG9jY3VwaWVkQ2VsbHNTZXQgPSBwbGF5ZXJNb2RlbC5vY2N1cGllZENlbGxzU2V0O1xyXG4gIG9jY3VwaWVkQ2VsbHNTZXQuY2xlYXIoKTtcclxuICBjb25zdCBzaGlwTW9kZWxzID0gcGxheWVyTW9kZWwuc2hpcHM7XHJcbiAgc2hpcE1vZGVscy5mb3JFYWNoKHNoaXBNb2RlbCA9PiB7XHJcbiAgICBjb25zdCB7Y2VsbHMsIGRpcmVjdGlvbn0gPSBmaW5kVW51c2VkQ2VsbHMoZ3JpZCwgb2NjdXBpZWRDZWxsc1NldCwgZ2V0UmFuZG9tU3RhcnRQb2ludCgpLCBmbG9vcihyYW5kb20oKSAqIDIpLCBzaGlwTW9kZWwudHlwZS5zaXplKTtcclxuICAgIHNoaXBNb2RlbC5vY2N1cGllZENlbGxzID0gY2VsbHM7XHJcbiAgICBzaGlwTW9kZWwuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgb2NjdXBpZWRDZWxsc1NldC5hZGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFVudXNlZENlbGxzKGJvYXJkLCBvY2N1cGllZENlbGxzU2V0LCBwdCwgZGlyZWN0aW9uLCBuKSB7XHJcbiAgY29uc3QgYXhpcyA9IGRpcmVjdGlvbiA/ICd5JyA6ICd4JztcclxuICBpZiAocHRbIGF4aXMgXSArIG4gPiA5KSB7XHJcbiAgICByZXR1cm4gZmluZFVudXNlZENlbGxzKGJvYXJkLCBvY2N1cGllZENlbGxzU2V0LCBnZXRSYW5kb21TdGFydFBvaW50KCksIGRpcmVjdGlvbiwgbik7XHJcbiAgfVxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IGNlbGwgPSBnZXRDZWxsKGJvYXJkLCBwdC55LCBwdC54KTtcclxuICAgIGlmIChvY2N1cGllZENlbGxzU2V0LmhhcyhjZWxsKSkge1xyXG4gICAgICByZXR1cm4gZmluZFVudXNlZENlbGxzKGJvYXJkLCBvY2N1cGllZENlbGxzU2V0LCBnZXRSYW5kb21TdGFydFBvaW50KCksIGRpcmVjdGlvbiwgbik7XHJcbiAgICB9XHJcbiAgICBjZWxsc1sgaSBdID0gY2VsbDtcclxuICAgIHB0WyBheGlzIF0rKztcclxuICB9XHJcbiAgcmV0dXJuIHtjZWxscywgZGlyZWN0aW9uOiBkaXJlY3Rpb259O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21TdGFydFBvaW50KCkge1xyXG4gIHJldHVybiB7eDogZmxvb3IocmFuZG9tKCkgKiAxMCksIHk6IGZsb29yKHJhbmRvbSgpICogMTApfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
