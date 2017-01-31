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
	
	__webpack_require__(1);
	
	var _Board = __webpack_require__(7);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _Console = __webpack_require__(25);
	
	var _Console2 = _interopRequireDefault(_Console);
	
	var _GamePlay = __webpack_require__(30);
	
	var _GamePlay2 = _interopRequireDefault(_GamePlay);
	
	var _GameStateModel = __webpack_require__(35);
	
	var _GameStateModel2 = _interopRequireDefault(_GameStateModel);
	
	var _animateBoardRender = __webpack_require__(40);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var gameStateModel = new _GameStateModel2.default();
	var board = new _Board2.default(gameStateModel);
	document.body.appendChild(board.render());
	
	var grids = board.boardGraphic.grids;
	var console = new _Console2.default(grids[0], gameStateModel);
	document.body.appendChild(console.render());
	
	grids.forEach(function (grid) {
	    (0, _animateBoardRender.animateBoard)(grid, 50, 10);
	});
	
	var game = new _GamePlay2.default(grids, gameStateModel);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'D Day Stencil';\n  src: url(" + __webpack_require__(4) + ") format(\"woff\"), url(" + __webpack_require__(5) + ") format(\"truetype\"); }\n\nbody {\n  font-family: D Day Stencil, sans-serif;\n  background: #333;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n#battleshipBoard {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 800px; }\n\nbutton {\n  font-family: D Day Stencil, sans-serif;\n  font-size: 25px;\n  border: 1px solid #2174b9;\n  background: #8296a7;\n  border-radius: 10px;\n  outline: none; }\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/D_Day_Stencil.woff";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/D_Day_Stencil.ttf";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BoardGraphic = __webpack_require__(8);
	
	var _BoardGraphic2 = _interopRequireDefault(_BoardGraphic);
	
	var _findCells = __webpack_require__(21);
	
	var _findCellAtPoint = __webpack_require__(23);
	
	var _getMoreCellsFromCell = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	    function Board(gameState) {
	        _classCallCheck(this, Board);
	
	        Object.defineProperty(this, 'lastHighlightedCells', {
	            enumerable: true,
	            writable: true,
	            value: []
	        });
	        Object.defineProperty(this, 'validDrop', {
	            enumerable: true,
	            writable: true,
	            value: false
	        });
	
	        this.shipDragStartCallback = this.shipDragStartCallback.bind(this);
	        this.shipDragCallback = this.shipDragCallback.bind(this);
	        this.shipDropCallback = this.shipDropCallback.bind(this);
	        this.shipModelChangeListener = this.shipModelChangeListener.bind(this);
	        this.shipModelPreCommitListener = this.shipModelPreCommitListener.bind(this);
	
	        var player1 = gameState.player1,
	            player2 = gameState.player2;
	
	        Object.assign(this, { player1: player1, player2: player2 });
	    }
	
	    _createClass(Board, [{
	        key: 'render',
	        value: function render() {
	            var element = this.boardGraphic.render();
	            this.postRenderActions();
	            return element;
	        }
	    }, {
	        key: 'postRenderActions',
	        value: function postRenderActions() {
	            var _this = this;
	
	            this.boardGraphic.visibleShipsMap.forEach(function (ship) {
	                var shipModel = ship.shipModel;
	                ship.dragStartCallback = _this.shipDragStartCallback;
	                ship.dragCallback = _this.shipDragCallback;
	                ship.dropCallback = _this.shipDropCallback;
	                shipModel.addChangeListener(_this.shipModelChangeListener);
	                shipModel.addPreCommitListener(_this.shipModelPreCommitListener);
	            });
	        }
	
	        //----------------------------------------
	        // Ship drag callbacks
	        //----------------------------------------
	
	    }, {
	        key: 'shipDragStartCallback',
	        value: function shipDragStartCallback(originEvent, ship) {
	            var _this2 = this;
	
	            var cells = ship.shipModel.occupiedCells || [];
	            if (!cells.length) {
	                return;
	            }
	            cells.forEach(function (cell) {
	                _this2.player1.occupiedCellsSet.delete(cell);
	            });
	            this.setHighlightedCells(cells, '#00ff00');
	        }
	    }, {
	        key: 'shipDragCallback',
	        value: function shipDragCallback(originEvent, ship) {
	            var cells = (0, _findCells.findCells)(ship.segment, this.boardGraphic.grids[0], ship.shipModel.direction);
	            var i = cells.length;
	            this.validDrop = i === ship.shipModel.type.size;
	            while (i--) {
	                if (this.player1.occupiedCellsSet.has(cells[i])) {
	                    this.validDrop = false;
	                    break;
	                }
	            }
	            var color = this.validDrop ? '#00ff00' : '#ff0000';
	            this.setHighlightedCells(cells, color);
	        }
	    }, {
	        key: 'shipDropCallback',
	        value: function shipDropCallback(originEvent, ship) {
	            var cellsToOccupy = this.lastHighlightedCells;
	            this.setHighlightedCells([]);
	            if (!cellsToOccupy.length) {
	                return;
	            }
	            if (!this.validDrop) {
	                cellsToOccupy = ship.shipModel.occupiedCells || [];
	            }
	            ship.shipModel.occupiedCells = cellsToOccupy.concat();
	        }
	
	        //----------------------------------
	        // Model Change callbacks
	
	    }, {
	        key: 'shipModelPreCommitListener',
	        value: function shipModelPreCommitListener(shipModel, changes) {
	            var _this3 = this;
	
	            if (!('direction' in changes)) {
	                return;
	            }
	            var cells = (0, _getMoreCellsFromCell.getMoreCellsFromCell)(this.boardGraphic.grids[0], shipModel.occupiedCells[0], changes.direction.newValue, shipModel.type.size);
	            var i = ~~cells.length;
	            var allowChange = !i || i === shipModel.type.size;
	            while (allowChange && i-- > 1) {
	                if (this.player1.occupiedCellsSet.has(cells[i])) {
	                    allowChange = false;
	                }
	            }
	
	            if (!allowChange && cells.length) {
	                this.setHighlightedCells(cells, '#ff0000');
	                setTimeout(function () {
	                    _this3.setHighlightedCells([]);
	                }, 500);
	            }
	            return allowChange;
	        }
	    }, {
	        key: 'shipModelChangeListener',
	        value: function shipModelChangeListener(shipModel, changes) {
	            if ('occupiedCells' in changes) {
	                this.occupiedCellsChanged(changes);
	            } else if ('direction' in changes) {
	                this.shipDirectionChanged(shipModel, changes);
	            }
	        }
	    }, {
	        key: 'shipDirectionChanged',
	        value: function shipDirectionChanged(shipModel, changes) {
	            var _this4 = this;
	
	            var boardGraphic = this.boardGraphic;
	            var ship = boardGraphic.visibleShipsMap.get(shipModel);
	            var seed = ship.shipGraphic.element.querySelector('rect');
	            var seedBounds = seed.getBoundingClientRect();
	            if (!(0, _findCellAtPoint.findCellAtPoint)(seedBounds.left, seedBounds.top, boardGraphic.grids[0])) {
	                return;
	            }
	            var cellsToOccupy = (0, _findCells.findCells)(seed, boardGraphic.grids[0], changes.direction.newValue);
	            shipModel.occupiedCells = cellsToOccupy;
	            this.setHighlightedCells(cellsToOccupy, '#00ff00');
	            setTimeout(function () {
	                _this4.setHighlightedCells([]);
	            }, 250);
	        }
	    }, {
	        key: 'occupiedCellsChanged',
	        value: function occupiedCellsChanged(changes) {
	            var _changes$occupiedCell = changes.occupiedCells,
	                _changes$occupiedCell2 = _changes$occupiedCell.oldValue,
	                oldValue = _changes$occupiedCell2 === undefined ? [] : _changes$occupiedCell2,
	                _changes$occupiedCell3 = _changes$occupiedCell.newValue,
	                newValue = _changes$occupiedCell3 === undefined ? [] : _changes$occupiedCell3;
	
	            var occupiedCellsSet = this.player1.occupiedCellsSet;
	            for (var i = 0; i < newValue.length; i++) {
	                occupiedCellsSet.delete(oldValue[i]);
	                occupiedCellsSet.add(newValue[i]);
	            }
	        }
	    }, {
	        key: 'setHighlightedCells',
	        value: function setHighlightedCells(cells, color) {
	            this.lastHighlightedCells.forEach(function (cell) {
	                cell.style.fill = '';
	            });
	
	            cells.forEach(function (cell) {
	                cell.style.fill = color;
	            });
	
	            this.lastHighlightedCells = cells;
	        }
	    }, {
	        key: 'boardGraphic',
	        get: function get() {
	            if (!this._boardGraphic) {
	                this._boardGraphic = new _BoardGraphic2.default(this.player1.ships);
	            }
	            return this._boardGraphic;
	        }
	    }]);
	
	    return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(9);
	
	var _Ship = __webpack_require__(11);
	
	var _Ship2 = _interopRequireDefault(_Ship);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BoardGraphic = function () {
	    function BoardGraphic(ships) {
	        _classCallCheck(this, BoardGraphic);
	
	        Object.defineProperty(this, 'visibleShipsMap', {
	            enumerable: true,
	            writable: true,
	            value: new Map()
	        });
	        Object.defineProperty(this, 'grids', {
	            enumerable: true,
	            writable: true,
	            value: []
	        });
	        Object.defineProperty(this, 'rendered', {
	            enumerable: true,
	            writable: true,
	            value: false
	        });
	
	        this.ships = ships;
	    }
	
	    _createClass(BoardGraphic, [{
	        key: 'renderShips',
	        value: function renderShips() {
	            var _this = this;
	
	            if (this.rendered) {
	                return;
	            }
	            var fragment = document.createDocumentFragment();
	            this.ships.forEach(function (shipModel, index) {
	                var ship = new _Ship2.default(shipModel);
	                var element = ship.render();
	                fragment.appendChild(element);
	                ship.translate(0, 525 + index * 50);
	
	                _this.visibleShipsMap.set(shipModel, ship);
	            });
	
	            return fragment;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.rendered) {
	                return;
	            }
	            var element = this.element;
	            var fragment = document.createDocumentFragment();
	            var player1Grid = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	            player1Grid.id = 'player1Grid';
	            player1Grid.setAttribute('width', '500px');
	            player1Grid.setAttribute('height', '800px');
	
	            fragment.appendChild(player1Grid);
	            var g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
	            player1Grid.appendChild(g);
	
	            var gridSize = 10;
	            while (gridSize--) {
	                var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	                path.setAttribute('d', 'M0,0L50,0L50,50L0,50z');
	                path.setAttribute('class', 'cell');
	                g.appendChild(path);
	            }
	            gridSize = 9;
	            while (gridSize--) {
	                var clone = g.cloneNode(true);
	                player1Grid.appendChild(clone);
	            }
	            var player2Grid = player1Grid.cloneNode(true);
	            player2Grid.id = 'player2Grid';
	            this.grids.push(player1Grid, player2Grid);
	
	            fragment.appendChild(player2Grid);
	
	            player1Grid.appendChild(this.renderShips());
	            element.appendChild(fragment);
	            this.rendered = true;
	            return element;
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            if (!this._element) {
	                var element = document.createElement('section');
	                element.id = 'battleshipBoard';
	                this._element = element;
	            }
	            return this._element;
	        }
	    }]);
	
	    return BoardGraphic;
	}();
	
	exports.default = BoardGraphic;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./board.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./board.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "#player1Grid, #player2Grid {\n  position: absolute; }\n  #player1Grid path.cell, #player2Grid path.cell {\n    transform: translate(225px, 225px);\n    transition: all .25s ease;\n    fill: transparent;\n    stroke: black; }\n\n#player1Grid {\n  left: 2rem; }\n\n#player2Grid {\n  right: 2rem; }\n  #player2Grid path.cell:hover {\n    fill: #ff0000; }\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShipGraphic = __webpack_require__(12);
	
	var _ShipGraphic2 = _interopRequireDefault(_ShipGraphic);
	
	var _findNodeAtPoint = __webpack_require__(18);
	
	var _alignElementToCell2 = __webpack_require__(19);
	
	var _bindableSetterChanged = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ship = function () {
	    function Ship(shipModel) {
	        var draggable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	        _classCallCheck(this, Ship);
	
	        Object.defineProperty(this, 'lastGoodTransform', {
	            enumerable: true,
	            writable: true,
	            value: []
	        });
	
	        this.elementMouseDownHandler = this.elementMouseDownHandler.bind(this);
	        this.bodyMouseUpHandler = this.bodyMouseUpHandler.bind(this);
	        this.bodyMouseMoveHandler = this.bodyMouseMoveHandler.bind(this);
	        this.rotateArrowClickHandler = this.rotateArrowClickHandler.bind(this);
	        this.modelChangeHandler = this.modelChangeHandler.bind(this);
	
	        Object.assign(this, { shipModel: shipModel, draggable: draggable });
	    }
	
	    _createClass(Ship, [{
	        key: 'render',
	        value: function render() {
	            return this.shipGraphic.render();
	        }
	    }, {
	        key: 'translate',
	        value: function translate(deltaTx, deltaTy, animate) {
	            var _this = this;
	
	            var shipGraphic = this.shipGraphic;
	            var element = shipGraphic.element;
	            var m_transform = shipGraphic.transform.m_transform;
	
	            if (animate) {
	                (function () {
	                    if (_this.animationFrame) {
	                        cancelAnimationFrame(_this.animationFrame);
	                    }
	                    var distance = Math.sqrt(Math.pow(deltaTx, 2) + Math.pow(deltaTy, 2));
	                    var d = distance;
	                    var lastX = 0;
	                    var lastY = 0;
	                    var tick = function tick() {
	                        var progress = 1 - (d /= 1.15) / distance;
	                        var newTx = deltaTx * progress - lastX;
	                        var newTy = deltaTy * progress - lastY;
	                        if (progress < .99999) {
	                            _this.animationFrame = requestAnimationFrame(tick);
	                            lastX += newTx;
	                            lastY += newTy;
	                        }
	                        m_transform[4] += newTx;
	                        m_transform[5] += newTy;
	                        element.setAttribute('transform', 'matrix(' + m_transform.join(' ') + ')');
	                    };
	                    tick();
	                })();
	            } else {
	                m_transform[4] += deltaTx;
	                m_transform[5] += deltaTy;
	                element.setAttribute('transform', 'matrix(' + m_transform.join(' ') + ')');
	            }
	        }
	
	        //------------------------------
	        // Event Handlers
	
	    }, {
	        key: 'elementMouseDownHandler',
	        value: function elementMouseDownHandler(event) {
	            var shipGraphic = this.shipGraphic;
	            if (event.target === shipGraphic.rotateArrow) {
	                return;
	            }
	            document.body.addEventListener('mousemove', this.bodyMouseMoveHandler);
	            document.body.addEventListener('mouseup', this.bodyMouseUpHandler);
	            this.segment = (0, _findNodeAtPoint.findNodeAtPoint)(event.pageX, event.pageY, this.shipGraphic.shipSegments);
	            this.lastMouseEvent = event;
	            this.lastGoodTransform = shipGraphic.transform.m_transform.concat();
	            if (typeof this.dragStartCallback === 'function') {
	                this.dragStartCallback(event, this);
	            }
	        }
	    }, {
	        key: 'bodyMouseMoveHandler',
	        value: function bodyMouseMoveHandler(event) {
	            if (!event.buttons) {
	                this.bodyMouseUpHandler(event);
	                return;
	            }
	            var _lastMouseEvent = this.lastMouseEvent,
	                lastPageX = _lastMouseEvent.pageX,
	                lastPageY = _lastMouseEvent.pageY;
	            var pageX = event.pageX,
	                pageY = event.pageY;
	
	            var deltaX = pageX - lastPageX;
	            var deltaY = pageY - lastPageY;
	
	            this.translate(deltaX, deltaY);
	            this.lastMouseEvent = event;
	            if (typeof this.dragCallback === 'function') {
	                this.dragCallback(event, this);
	            }
	        }
	    }, {
	        key: 'bodyMouseUpHandler',
	        value: function bodyMouseUpHandler(event) {
	            document.body.removeEventListener('mousemove', this.bodyMouseMoveHandler);
	            document.body.removeEventListener('mouseup', this.bodyMouseUpHandler);
	            if (typeof this.dropCallback === 'function') {
	                this.dropCallback(event, this);
	            }
	        }
	    }, {
	        key: 'rotateArrowClickHandler',
	        value: function rotateArrowClickHandler() {
	            this.shipModel.direction = +!this.shipModel.direction;
	        }
	    }, {
	        key: 'modelChangeHandler',
	        value: function modelChangeHandler(source, changes) {
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
	    }, {
	        key: 'directionChanged',
	        value: function directionChanged(changes) {
	            var transform = this.shipGraphic.transform;
	            var direction = changes.direction.newValue;
	            var deg = direction === 1 ? 90 : -90;
	            transform.rotate(deg, 25, 17.5);
	            this.shipGraphic.element.setAttribute('transform', 'matrix(' + transform.m_transform.join(' ') + ')');
	        }
	    }, {
	        key: 'occupiedCellsChanged',
	        value: function occupiedCellsChanged(source) {
	            var cell = source.occupiedCells[0];
	            var m_transform = this.shipGraphic.transform.m_transform;
	            if (!cell) {
	                var x1 = m_transform['4'],
	                    y1 = m_transform['5'];
	                var _lastGoodTransform = this.lastGoodTransform,
	                    x2 = _lastGoodTransform['4'],
	                    y2 = _lastGoodTransform['5'];
	
	                this.translate(x2 - x1, y2 - y1, true);
	            } else {
	                var _alignElementToCell = (0, _alignElementToCell2.alignElementToCell)(this.shipGraphic.element, this.shipModel.direction, m_transform, cell),
	                    x = _alignElementToCell.x,
	                    y = _alignElementToCell.y;
	
	                this.translate(x, y, true);
	            }
	        }
	    }, {
	        key: 'hitsChanged',
	        value: function hitsChanged(hits) {}
	    }, {
	        key: 'shipGraphic',
	        get: function get() {
	            if (!this._shipGraphic) {
	                this._shipGraphic = new _ShipGraphic2.default(this.shipModel);
	                this._shipGraphic.rotateArrow.addEventListener('click', this.rotateArrowClickHandler);
	            }
	            return this._shipGraphic;
	        }
	    }, {
	        key: 'shipModel',
	        get: function get() {
	            return this._shipModel;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_shipModel', value, this.modelChangeHandler);
	        }
	    }, {
	        key: 'draggable',
	        get: function get() {
	            return this._draggable;
	        },
	        set: function set(value) {
	            value = !!value;
	            if (this._draggable === value) {
	                return;
	            }
	            this._draggable = value;
	            var element = this.shipGraphic.element;
	            if (value) {
	                element.setAttribute('draggable', 'true');
	                element.addEventListener('mousedown', this.elementMouseDownHandler);
	            } else {
	                element.removeAttribute('draggable');
	            }
	        }
	    }]);
	
	    return Ship;
	}();
	
	exports.default = Ship;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SVGTransform = __webpack_require__(13);
	
	var _SVGTransform2 = _interopRequireDefault(_SVGTransform);
	
	var _rotate = __webpack_require__(15);
	
	var _rotate2 = _interopRequireDefault(_rotate);
	
	__webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var i = 0;
	
	var ShipGraphic = function () {
	    function ShipGraphic(shipModel) {
	        _classCallCheck(this, ShipGraphic);
	
	        Object.defineProperty(this, 'transform', {
	            enumerable: true,
	            writable: true,
	            value: new _SVGTransform2.default()
	        });
	
	        this.id = 'ship_' + i++;
	        this.shipModel = shipModel;
	    }
	
	    _createClass(ShipGraphic, [{
	        key: 'render',
	        value: function render() {
	            var element = this.element;
	            this.segment = null;
	            this._shipSegments = null;
	            element.innerHTML = '';
	            var _shipModel = this.shipModel,
	                type = _shipModel.type,
	                hits = _shipModel.hits;
	            var size = type.size;
	
	            for (var _i = 0; _i < size; _i++) {
	                var hit = hits[_i];
	                var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	                rect.setAttribute('width', '50');
	                rect.setAttribute('height', '35');
	                rect.setAttribute('x', '' + _i * 50);
	                rect.setAttribute('fill', hit ? '#ff0000' : 'steelblue');
	                element.appendChild(rect);
	            }
	            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	            text.textContent = '' + type;
	            text.setAttribute('font-family', 'D Day Stencil');
	            text.setAttribute('font-size', '30');
	            text.setAttribute('y', '28');
	            text.setAttribute('x', '5');
	            element.appendChild(text);
	            element.appendChild(this.rotateArrow);
	            return element;
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            if (!this._element) {
	                var element = document.createElementNS("http://www.w3.org/2000/svg", 'g');
	                element.id = this.id;
	                this._element = element;
	            }
	            return this._element;
	        }
	    }, {
	        key: 'shipSegments',
	        get: function get() {
	            if (!this._shipSegments) {
	                this._shipSegments = this.element.querySelectorAll('rect');
	            }
	
	            return this._shipSegments;
	        }
	    }, {
	        key: 'rotateArrow',
	        get: function get() {
	            if (!this._roateArrow) {
	                var rotateArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	                rotateArrow.id = 'rotate_' + this.id;
	                rotateArrow.setAttribute('d', _rotate2.default);
	                rotateArrow.setAttribute('transform', 'translate(' + this.shipModel.type.size * 50 + ' 24)');
	                this._roateArrow = rotateArrow;
	            }
	            return this._roateArrow;
	        }
	    }]);
	
	    return ShipGraphic;
	}();
	
	exports.default = ShipGraphic;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	var degToRads = __webpack_require__(14).degToRads;
	var radToDeg = __webpack_require__(14).radToDeg;
	
	var SVGTransform = function () {
	    function SVGTransform() {
	        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	        var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	        var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	        _classCallCheck(this, SVGTransform);
	
	        this.m_transform = [a, b, c, d, e, f];
	    }
	
	    _createClass(SVGTransform, [{
	        key: 'makeIdentity',
	        value: function makeIdentity() {
	            this.setMatrix(1, 0, 0, 1, 0, 0);
	        }
	    }, {
	        key: 'setMatrix',
	        value: function setMatrix() {
	            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	            var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	            var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	            var m_transform = this.m_transform;
	            m_transform[0] = a;
	            m_transform[1] = b;
	            m_transform[2] = c;
	            m_transform[3] = d;
	            m_transform[4] = e;
	            m_transform[5] = f;
	        }
	    }, {
	        key: 'matrix',
	        value: function matrix() {
	            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	            var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	            var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	            var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	            this.setMatrix(a, b, c, d, e, f);
	        }
	    }, {
	        key: 'isIdentity',
	        value: function isIdentity() {
	            var m_transform = this.m_transform;
	
	            return m_transform[0] === 1 && m_transform[1] === 0 && m_transform[2] === 0 && m_transform[3] === 1 && m_transform[4] === 0 && m_transform[5] === 0;
	        }
	    }, {
	        key: 'inverse',
	        value: function inverse() {
	            var m_transform = this.m_transform;
	            var determinant = SVGTransform.det(m_transform);
	            var result = new SVGTransform();
	            if (this.isIdentityOrTranslation()) {
	                result.m_transform[4] = -m_transform[4];
	                result.m_transform[5] = -m_transform[5];
	                return result;
	            }
	
	            result.m_transform[0] = m_transform[3] / determinant;
	            result.m_transform[1] = -m_transform[1] / determinant;
	            result.m_transform[2] = -m_transform[2] / determinant;
	            result.m_transform[3] = m_transform[0] / determinant;
	            result.m_transform[4] = (m_transform[2] * m_transform[5] - m_transform[3] * m_transform[4]) / determinant;
	            result.m_transform[5] = (m_transform[1] * m_transform[4] - m_transform[0] * m_transform[5]) / determinant;
	
	            return result;
	        }
	    }, {
	        key: 'isIdentityOrTranslation',
	        value: function isIdentityOrTranslation() {
	            var m_transform = this.m_transform;
	            return m_transform[0] === 1 && m_transform[1] === 0 && m_transform[2] === 0 && m_transform[3] === 1;
	        }
	    }, {
	        key: 'multiply',
	        value: function multiply(other) {
	            var m_transform = this.m_transform;
	            var trans = new SVGTransform();
	            var om_transform = other.m_transform;
	            var tm_transform = trans.m_transform;
	
	            tm_transform[0] = om_transform[0] * m_transform[0] + om_transform[1] * m_transform[2];
	            tm_transform[1] = om_transform[0] * m_transform[1] + om_transform[1] * m_transform[3];
	            tm_transform[2] = om_transform[2] * m_transform[0] + om_transform[3] * m_transform[2];
	            tm_transform[3] = om_transform[2] * m_transform[1] + om_transform[3] * m_transform[3];
	            tm_transform[4] = om_transform[4] * m_transform[0] + om_transform[5] * m_transform[2] + m_transform[4];
	            tm_transform[5] = om_transform[4] * m_transform[1] + om_transform[5] * m_transform[3] + m_transform[5];
	
	            this.m_transform = trans.m_transform;
	            return this;
	        }
	    }, {
	        key: 'rotate',
	        value: function rotate(degrees, x, y) {
	            var translateFlag = Boolean(x !== undefined && y !== undefined);
	            if (translateFlag) {
	                this.translate(x, y);
	            }
	            var rads = degToRads(degrees);
	            var cosAngle = Math.cos(rads);
	            var sinAngle = Math.sin(rads);
	            var rot = new SVGTransform(cosAngle, sinAngle, -sinAngle, cosAngle, 0, 0);
	
	            this.multiply(rot);
	
	            if (translateFlag) {
	                this.translate(-x, -y);
	            }
	            return this;
	        }
	    }, {
	        key: 'scale',
	        value: function scale(sx, sy) {
	            var m_transform = this.m_transform;
	            if (sy === undefined) {
	                sy = sx;
	            }
	            m_transform[0] *= sx;
	            m_transform[1] *= sx;
	            m_transform[2] *= sy;
	            m_transform[3] *= sy;
	
	            return this;
	        }
	    }, {
	        key: 'translate',
	        value: function translate(tx, ty) {
	            var m_transform = this.m_transform;
	            if (this.isIdentityOrTranslation()) {
	                m_transform[4] += tx;
	                m_transform[5] += ty;
	                return this;
	            }
	
	            m_transform[4] += tx * m_transform[0] + ty * m_transform[2];
	            m_transform[5] += tx * m_transform[1] + ty * m_transform[3];
	            return this;
	        }
	    }, {
	        key: 'rotateFromVector',
	        value: function rotateFromVector(x, y) {
	            return this.rotate(radToDeg(Math.atan2(y, x)));
	        }
	    }, {
	        key: 'flipX',
	        value: function flipX() {
	            return this.scale(-1, 1);
	        }
	    }, {
	        key: 'flipY',
	        value: function flipY() {
	            return this.scale(1, -1);
	        }
	    }, {
	        key: 'shear',
	        value: function shear(sx, sy) {
	            var m_transform = this.m_transform;
	            var a = m_transform[0];
	            var b = m_transform[1];
	
	            m_transform[0] += sy * m_transform[2];
	            m_transform[1] += sy * m_transform[3];
	            m_transform[2] += sx * a;
	            m_transform[3] += sx * b;
	            return this;
	        }
	    }, {
	        key: 'skew',
	        value: function skew(angleX, angleY) {
	            return this.shear(Math.tan(degToRads(angleX)), Math.tan(degToRads(angleY)));
	        }
	    }, {
	        key: 'skewX',
	        value: function skewX(angle) {
	            return this.shear(Math.tan(degToRads(angle)), 0);
	        }
	    }, {
	        key: 'skewY',
	        value: function skewY(angle) {
	            return this.shear(0, Math.tan(degToRads(angle)));
	        }
	    }, {
	        key: 'map',
	        value: function map(x, y) {
	            var m_transform = this.m_transform;
	            return {
	                x: m_transform[0] * x + m_transform[2] * y + m_transform[4],
	                y: m_transform[1] * x + m_transform[3] * y + m_transform[5]
	            };
	        }
	    }, {
	        key: 'mapPoint',
	        value: function mapPoint(point) {
	            return this.map(point.x, point.y);
	        }
	    }, {
	        key: 'xScale',
	        get: function get() {
	            var m_transform = this.m_transform;
	
	            return Math.sqrt(m_transform[0] * m_transform[0] + m_transform[1] * m_transform[1]);
	        }
	    }, {
	        key: 'yScale',
	        get: function get() {
	            var m_transform = this.m_transform;
	            return Math.sqrt(m_transform[2] * m_transform[2] + m_transform[3] * m_transform[3]);
	        }
	    }, {
	        key: 'isInvertible',
	        get: function get() {
	            var determinant = SVGTransform.det(this.m_transform);
	            return Boolean(determinant && isFinite(determinant));
	        }
	    }], [{
	        key: 'det',
	        value: function det(transform) {
	            return transform[0] * transform[3] - transform[1] * transform[2];
	        }
	    }]);
	
	    return SVGTransform;
	}();
	
	module.exports = SVGTransform;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
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
	    var v = { x: x - originX, y: y - originY };
	    var vx = v.x * Math.cos(radiansX) - v.y * Math.sin(radiansX);
	    var vy = v.x * Math.sin(radiansY) + v.y * Math.cos(radiansY);
	    return { x: vx + originX, y: vy + originY };
	}
	
	module.exports = {
	    degToRads: degToRads,
	    isNullOrUndefined: isNullOrUndefined,
	    radToDeg: radToDeg,
	    rotatePoint: rotatePoint
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = "M12.241,9.37h-1.43C10.05,4.08,5.51,0,0,0c-4.25,0-7.93,2.44-9.74,5.98l2.94,1.13\n\t\tc1.34-2.38,3.88-3.99,6.81-3.99c3.78,0,6.93,2.68,7.65,6.25H5.78C5.541,9.6,5.311,9.75,5.651,10.16l2.91,2.959\n\t\tc0.239,0.23,0.629,0.23,0.869,0l2.93-2.959C12.61,9.92,12.491,9.6,12.241,9.37z M0.01,18.74c-3.5,0-6.45-2.301-7.45-5.471h1.71\n\t\tc0.24-0.229,0.37-0.55,0.13-0.789l-2.94-2.96c-0.24-0.23-0.63-0.23-0.87,0l-2.91,2.97c-0.35,0.41-0.12,0.55,0.13,0.789h1.43\n\t\tc0.85,4.631,5.34,8.59,10.78,8.59c3.98,0,7.451-2.129,9.36-5.309L6.42,15.39C5,17.41,2.661,18.74,0.01,18.74z";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./ship.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./ship.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "svg g[id^=\"ship_\"][draggable] {\n  cursor: move; }\n  svg g[id^=\"ship_\"][draggable] path[id^=\"rotate_\"] {\n    visibility: visible; }\n\nsvg g[id^=\"ship_\"] text {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nsvg g[id^=\"ship_\"] path[id^=\"rotate_\"] {\n  cursor: pointer;\n  pointer-events: bounding-box;\n  visibility: hidden; }\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findNodeAtPoint = findNodeAtPoint;
	function findNodeAtPoint(x, y, nodeList) {
	    var len = +nodeList.length;
	    var i = +0;
	    for (; i < len; i++) {
	        var _nodeList$i$getBoundi = nodeList[i].getBoundingClientRect(),
	            left = _nodeList$i$getBoundi.left,
	            top = _nodeList$i$getBoundi.top,
	            width = _nodeList$i$getBoundi.width,
	            height = _nodeList$i$getBoundi.height;
	
	        if (x >= left && x <= left + width && y >= top && y <= top + height) {
	            break;
	        }
	    }
	    return nodeList[i];
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.alignElementToCell = alignElementToCell;
	function alignElementToCell(element, direction, m_transform, cell) {
	    var gridRect = element.parentElement.getBoundingClientRect();
	    var cellRect = cell.getBoundingClientRect();
	    var offsetHeight = direction ? 50 : 35;
	    var offsetWidth = direction ? 35 + 7.5 : 0;
	    var x = offsetWidth + (cellRect.left - gridRect.left) - m_transform[4];
	    var y = (cellRect.height - offsetHeight) / 2 + (cellRect.top - gridRect.top) - m_transform[5];
	    return { x: x, y: y };
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bindableSetterChanged = bindableSetterChanged;
	function bindableSetterChanged(property, value, handler) {
	    if (this[property] === value) return;
	
	    if (this[property]) {
	        this[property].removeChangeListener(handler);
	    }
	    this[property] = value;
	    this[property].addChangeListener(handler);
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findCells = findCells;
	
	var _getCell = __webpack_require__(22);
	
	function findCells(shipSegment, board, direction) {
	    if (!shipSegment) {
	        return [];
	    }
	    var shipSegmentRect = shipSegment.getBoundingClientRect();
	    var boardRect = board.getBoundingClientRect();
	
	    var rowNum = ~~((shipSegmentRect.top - boardRect.top) / 50);
	    var colNum = ~~((shipSegmentRect.left - boardRect.left) / 50);
	    var cells = [];
	    var colCursor = colNum;
	    var rowCursor = rowNum;
	    var thisSegment = shipSegment;
	
	    while (thisSegment && thisSegment.nodeName === 'rect') {
	        var cell = (0, _getCell.getCell)(board, rowCursor, colCursor);
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
	        var _cell = (0, _getCell.getCell)(board, rowCursor, colCursor);
	        if (_cell) {
	            cells.unshift(_cell);
	        }
	        thisSegment = thisSegment.previousSibling;
	    }
	
	    return cells;
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCell = getCell;
	function getCell(board, row, col) {
	    if (row > 9 || col > 9) {
	        return null;
	    }
	    return board.children[row].children[col];
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findCellAtPoint = findCellAtPoint;
	function findCellAtPoint(x, y, grid) {
	    var _grid$getBoundingClie = grid.getBoundingClientRect(),
	        top = _grid$getBoundingClie.top,
	        left = _grid$getBoundingClie.left;
	
	    var cellPt = { x: x - left, y: y - top };
	    var colNum = ~~(cellPt.x / 50);
	    var rowNum = ~~(cellPt.y / 50);
	    if (isNaN(colNum) || rowNum > 9 || colNum > 9 || isNaN(rowNum) || !grid.children[rowNum] || !grid.children[rowNum].children[colNum]) return null;
	
	    return grid.children[rowNum].children[colNum];
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getMoreCellsFromCell = getMoreCellsFromCell;
	
	var _getCell = __webpack_require__(22);
	
	function getMoreCellsFromCell(grid, cell, direction, n) {
	    var cellRect = cell.getBoundingClientRect();
	    var gridRect = grid.getBoundingClientRect();
	    var pt = {
	        y: ~~((cellRect.top - gridRect.top) / 50),
	        x: ~~((cellRect.left - gridRect.left) / 50)
	    };
	    var axis = direction ? 'y' : 'x';
	    var cells = [];
	    for (var i = 0; i < n; i++) {
	        var targetCell = (0, _getCell.getCell)(grid, pt.y, pt.x);
	        if (!targetCell) {
	            break;
	        }
	        cells[i] = targetCell;
	        pt[axis]++;
	    }
	    return cells;
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(26);
	
	var _randomizeShips = __webpack_require__(28);
	
	var _bindableSetterChanged = __webpack_require__(20);
	
	var _console = __webpack_require__(29);
	
	var _console2 = _interopRequireDefault(_console);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Console = function () {
	    function Console(grid, gameState) {
	        _classCallCheck(this, Console);
	
	        Object.assign(this, {
	            playerModelChangeHandler: this.playerModelChangeHandler.bind(this),
	            randomizeButtonClickHandler: this.randomizeButtonClickHandler.bind(this),
	            startGameClickHandler: this.startGameClickHandler.bind(this),
	            gameStateChangeHandler: this.gameStateChangeHandler.bind(this),
	
	            grid: grid,
	            gameState: gameState
	        });
	    }
	
	    _createClass(Console, [{
	        key: 'render',
	        value: function render() {
	            var element = this.element;
	            element.innerHTML = _console2.default;
	            this.postRenderActions();
	            return element;
	        }
	    }, {
	        key: 'postRenderActions',
	        value: function postRenderActions() {
	            var randomizeButton = this.element.querySelector('#randomize');
	            randomizeButton.addEventListener('click', this.randomizeButtonClickHandler);
	
	            var startGameButton = this.element.querySelector('#start');
	            startGameButton.addEventListener('click', this.startGameClickHandler);
	        }
	    }, {
	        key: 'playerModelChangeHandler',
	        value: function playerModelChangeHandler(source, changes) {}
	    }, {
	        key: 'gameStateChangeHandler',
	        value: function gameStateChangeHandler(source, changes) {
	            if ('playerTurn' in changes) {
	                this.playerTurnChanged(changes);
	            }
	        }
	    }, {
	        key: 'playerTurnChanged',
	        value: function playerTurnChanged(changes) {
	            var player = changes.playerTurn.newValue;
	            var statElements = this.element.querySelectorAll('.stats ul');
	            statElements[0].classList = player === this.player1 ? 'selected' : '';
	            statElements[1].classList = player === this.player2 ? 'selected' : '';
	        }
	    }, {
	        key: 'randomizeButtonClickHandler',
	        value: function randomizeButtonClickHandler() {
	            (0, _randomizeShips.randomizeShips)(this.grid, this.player1);
	        }
	    }, {
	        key: 'startGameClickHandler',
	        value: function startGameClickHandler(event) {
	            this.gameState.gameStarted = true;
	            this.gameState.playerTurn = this.player1;
	
	            var buttons = this.element.querySelectorAll('#start, #randomize');
	            buttons.forEach(function (button) {
	                return button.setAttribute('disabled', '');
	            });
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            if (!this._element) {
	                this._element = document.createElement('section');
	                this._element.id = 'console';
	            }
	            return this._element;
	        }
	    }, {
	        key: 'player1',
	        get: function get() {
	            return this._player1;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_player1', value, this.playerModelChangeHandler);
	        }
	    }, {
	        key: 'player2',
	        get: function get() {
	            return this._player2;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_player2', value, this.playerModelChangeHandler);
	        }
	    }, {
	        key: 'gameState',
	        get: function get() {
	            return this._gameState;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_gameState', value, this.gameStateChangeHandler);
	
	            var _ref = value || {},
	                player1 = _ref.player1,
	                player2 = _ref.player2;
	
	            Object.assign(this, { player1: player1, player2: player2 });
	        }
	    }]);
	
	    return Console;
	}();
	
	exports.default = Console;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./console.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./console.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "#console {\n  width: 300px;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  z-index: 9999; }\n  #console .stats {\n    margin-bottom: 20px;\n    display: flex; }\n    #console .stats ul {\n      color: white;\n      width: 100%;\n      font-size: 24px; }\n      #console .stats ul.selected {\n        color: green; }\n      #console .stats ul li:first-of-type {\n        padding-bottom: 10px;\n        border-bottom: 1px solid black; }\n      #console .stats ul + ul {\n        position: relative;\n        padding-left: 20px; }\n        #console .stats ul + ul::before {\n          content: '';\n          position: absolute;\n          border-left: 1px solid black;\n          height: 100%;\n          left: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.randomizeShips = randomizeShips;
	
	var _getCell = __webpack_require__(22);
	
	var floor = Math.floor;
	var random = Math.random;
	
	function randomizeShips(grid, playerModel) {
	    var occupiedCellsSet = playerModel.occupiedCellsSet;
	    occupiedCellsSet.clear();
	    var shipModels = playerModel.ships;
	    shipModels.forEach(function (shipModel) {
	        var _findUnusedCells = findUnusedCells(grid, occupiedCellsSet, getRandomStartPoint(), floor(random() * 2), shipModel.type.size),
	            cells = _findUnusedCells.cells,
	            direction = _findUnusedCells.direction;
	
	        shipModel.occupiedCells = cells;
	        shipModel.direction = direction;
	        cells.forEach(function (cell) {
	            occupiedCellsSet.add(cell);
	        });
	    });
	}
	
	function findUnusedCells(board, occupiedCellsSet, pt, direction, n) {
	    var axis = direction ? 'y' : 'x';
	    if (pt[axis] + n > 9) {
	        return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
	    }
	    var cells = [];
	    for (var i = 0; i < n; i++) {
	        var cell = (0, _getCell.getCell)(board, pt.y, pt.x);
	        if (occupiedCellsSet.has(cell)) {
	            return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
	        }
	        cells[i] = cell;
	        pt[axis]++;
	    }
	    return { cells: cells, direction: direction };
	}
	
	function getRandomStartPoint() {
	    return { x: floor(random() * 10), y: floor(random() * 10) };
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<section id=console> <div class=stats> <ul id=player1> <li>Player 1</li> <li>hits: <span>0</span></li> <li>attempts: <span>0</span></li> <li>accuracy: <span>0</span>%</li> </ul> <ul id=player2> <li>Computer</li> <li>hits: <span>0</span></li> <li>attempts: <span>0</span></li> <li>accuracy: <span>0</span>%</li> </ul> </div> <button id=randomize>Randomize Ships</button> <button id=start>Start Game</button> </section>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _getHitInfo = __webpack_require__(31);
	
	var _bindableSetterChanged = __webpack_require__(20);
	
	var _Computer = __webpack_require__(32);
	
	var _Computer2 = _interopRequireDefault(_Computer);
	
	var _Human = __webpack_require__(34);
	
	var _Human2 = _interopRequireDefault(_Human);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function playerModelChangeHandler(source, changes) {
	    if (!('incomingShots' in changes)) {
	        return;
	    }
	    var targetCell = changes.incomingShots.newValue[0];
	    var hitInfo = (0, _getHitInfo.getHitInfo)(source, targetCell);
	    if (hitInfo) {
	        var ship = hitInfo.ship,
	            index = hitInfo.index;
	
	        ship.hits = (ship.hits[index] = true, ship.hits).concat();
	    }
	}
	
	var GamePlay = function () {
	    function GamePlay(grids, gameState) {
	        _classCallCheck(this, GamePlay);
	
	        Object.defineProperty(this, 'playerTurn', {
	            enumerable: true,
	            writable: true,
	            value: 0
	        });
	
	        Object.assign(this, { grids: grids, gameState: gameState });
	    }
	
	    _createClass(GamePlay, [{
	        key: 'gameStateChangeHandler',
	        value: function gameStateChangeHandler(source, changes) {
	            if ('gameStarted' in changes && changes.gameStarted.newValue) {
	                this.startGame();
	            }
	
	            if ('playerTurn' in changes) {}
	        }
	    }, {
	        key: 'startGame',
	        value: function startGame() {
	            this.human = new _Human2.default(this.grids[1], this.grids[0], this.player1);
	            this.computer = new _Computer2.default(this.grids[0], this.grids[1], this.player2);
	            this.gameState.playerTurn = this.human;
	        }
	    }, {
	        key: 'player1',
	        get: function get() {
	            return this._player1;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_player1', value, playerModelChangeHandler);
	        }
	    }, {
	        key: 'player2',
	        get: function get() {
	            return this._player2;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_player2', value, playerModelChangeHandler);
	        }
	    }, {
	        key: 'gameState',
	        get: function get() {
	            return this._gameState;
	        },
	        set: function set(value) {
	            _bindableSetterChanged.bindableSetterChanged.call(this, '_gameState', value, this.gameStateChangeHandler);
	
	            var _ref = value || {},
	                player1 = _ref.player1,
	                player2 = _ref.player2;
	
	            Object.assign(this, { player1: player1, player2: player2 });
	        }
	    }]);
	
	    return GamePlay;
	}();
	
	exports.default = GamePlay;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getHitInfo = getHitInfo;
	function getHitInfo(playerModel, targetCell) {
	    var playerShips = playerModel.ships;
	    var i = playerShips.length;
	    outer: while (i--) {
	        var cells = playerShips[i].occupiedCells;
	        var j = cells.length;
	        while (j--) {
	            if (cells[j] === targetCell) {
	                return { ship: playerShips[i], index: j };
	            }
	        }
	    }
	    return null;
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Player2 = __webpack_require__(33);
	
	var _Player3 = _interopRequireDefault(_Player2);
	
	var _randomizeShips = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Computer = function (_Player) {
	    _inherits(Computer, _Player);
	
	    function Computer() {
	        var _ref;
	
	        _classCallCheck(this, Computer);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, (_ref = Computer.__proto__ || Object.getPrototypeOf(Computer)).call.apply(_ref, [this].concat(args)));
	
	        (0, _randomizeShips.randomizeShips)(_this.allyGrid, _this.playerModel);
	        return _this;
	    }
	
	    return Computer;
	}(_Player3.default);
	
	exports.default = Computer;

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Player = function () {
	    function Player(opponentGrid, allyGrid, playerModel) {
	        _classCallCheck(this, Player);
	
	        Object.assign(this, { opponentGrid: opponentGrid, allyGrid: allyGrid, playerModel: playerModel });
	        this.playerModelChanged = this.playerModelChanged.bind(this);
	    }
	
	    _createClass(Player, [{
	        key: "playerModelChanged",
	        value: function playerModelChanged(source, changes) {}
	    }]);
	
	    return Player;
	}();
	
	exports.default = Player;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Player2 = __webpack_require__(33);
	
	var _Player3 = _interopRequireDefault(_Player2);
	
	var _findCellAtPoint = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Human = function (_Player) {
	    _inherits(Human, _Player);
	
	    function Human() {
	        var _ref;
	
	        _classCallCheck(this, Human);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, (_ref = Human.__proto__ || Object.getPrototypeOf(Human)).call.apply(_ref, [this].concat(args)));
	
	        _this.opponentGrid.addEventListener('click', _this.opponentGridClickHandler);
	        return _this;
	    }
	
	    _createClass(Human, [{
	        key: 'opponentGridClickHandler',
	        value: function opponentGridClickHandler(event) {
	            var pageX = event.pageX,
	                pageY = event.pageY,
	                currentTarget = event.currentTarget;
	
	            var cell = (0, _findCellAtPoint.findCellAtPoint)(pageX, pageY, currentTarget);
	        }
	    }]);
	
	    return Human;
	}(_Player3.default);
	
	exports.default = Human;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _PlayerModel = __webpack_require__(36);
	
	var _PlayerModel2 = _interopRequireDefault(_PlayerModel);
	
	var _bindProperty = __webpack_require__(37);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameStateModel = (_dec = (0, _bindProperty.bindable)('gameStarted'), _dec2 = (0, _bindProperty.bindable)('playerTurn'), _dec(_class = _dec2(_class = function () {
	    function GameStateModel() {
	        var gameStarted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	        var playerTurn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	        _classCallCheck(this, GameStateModel);
	
	        Object.assign(this, { gameStarted: gameStarted, playerTurn: playerTurn });
	    }
	
	    _createClass(GameStateModel, [{
	        key: 'player1',
	        get: function get() {
	            return this._player1 || (this._player1 = new _PlayerModel2.default());
	        }
	    }, {
	        key: 'player2',
	        get: function get() {
	            return this._player2 || (this._player2 = new _PlayerModel2.default());
	        }
	    }]);
	
	    return GameStateModel;
	}()) || _class) || _class);
	exports.default = GameStateModel;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _bindProperty = __webpack_require__(37);
	
	var _ShipTypeEnum = __webpack_require__(38);
	
	var _ShipModel = __webpack_require__(39);
	
	var _ShipModel2 = _interopRequireDefault(_ShipModel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function generateDefaultShips(changeHandler) {
	    var shipModels = [];
	    _ShipTypeEnum.allShipTypes.forEach(function (type) {
	        var maxAllowed = type.maxAllowed;
	
	        for (var i = 0; i < maxAllowed; i++) {
	            var shipModel = new _ShipModel2.default({ type: type });
	            shipModel.addChangeListener(changeHandler);
	            shipModels.push(shipModel);
	        }
	    });
	    return shipModels;
	}
	
	var PlayerModel = (_dec = (0, _bindProperty.bindable)('incomingShots'), _dec(_class = function () {
	    function PlayerModel() {
	        _classCallCheck(this, PlayerModel);
	
	        Object.defineProperty(this, 'outboundShots', {
	            enumerable: true,
	            writable: true,
	            value: []
	        });
	        Object.defineProperty(this, 'incomingShots', {
	            enumerable: true,
	            writable: true,
	            value: []
	        });
	        Object.defineProperty(this, 'occupiedCellsSet', {
	            enumerable: true,
	            writable: true,
	            value: new Set()
	        });
	
	        this.shipModelChangedHandler = this.shipModelChangedHandler.bind(this);
	    }
	
	    _createClass(PlayerModel, [{
	        key: 'shipModelChangedHandler',
	        value: function shipModelChangedHandler(source, changes) {
	            if (!changes.occupiedCells) {
	                return;
	            }
	            var newValue = this.occupiedCellsSet.size === _ShipTypeEnum.totalCells;
	            var oldValue = this.allShipsPlaced;
	            if (oldValue !== newValue) {
	                this._allShipsPlaced = newValue;
	                (0, _bindProperty.queueNotification)(this, 'allShipsPlaced', newValue, oldValue);
	            }
	        }
	    }, {
	        key: 'ships',
	        get: function get() {
	            return this._ships || (this._ships = generateDefaultShips(this.shipModelChangedHandler));
	        }
	    }, {
	        key: 'allShipsPlaced',
	        get: function get() {
	            return !!this._allShipsPlaced;
	        }
	    }]);
	
	    return PlayerModel;
	}()) || _class);
	exports.default = PlayerModel;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global['bind-property'] = global['bind-property'] || {});
	})(undefined, function (exports) {
	    'use strict';
	
	    var changeListeners = new WeakMap();
	    var preCommitListeners = new WeakMap();
	    /**
	     * The changeListeners listening for
	     * property changes.
	     *
	     * @return Set
	     */
	    function getChangeListeners() {
	        var self = this;
	        if (changeListeners.has(self)) {
	            return changeListeners.get(self);
	        }
	        var callbacks = new Set();
	        changeListeners.set(self, callbacks);
	
	        return callbacks;
	    }
	
	    /**
	     * The changeListeners listening for
	     * pre commit property changes.
	     *
	     * @return Set
	     */
	    function getPreCommitListeners() {
	        var self = this;
	        if (preCommitListeners.has(self)) {
	            return preCommitListeners.get(self);
	        }
	        var callbacks = new Set();
	        preCommitListeners.set(self, callbacks);
	
	        return callbacks;
	    }
	    /**
	     * Adds a function as a change listener.
	     * The callback will be provided
	     *
	     * @param {function} callback The callback that is notified of property changes.
	     */
	    function addChangeListener(callback) {
	        getChangeListeners.call(this).add(callback);
	    }
	
	    /**
	     * Removes a callback that has been previously added
	     *
	     * @param {function} callback The callback to remove
	     */
	    function removeChangeListener(callback) {
	        getChangeListeners.call(this).delete(callback);
	    }
	
	    /**
	     * Adds a function as a change listener.
	     * The callback will be provided
	     *
	     * @param {function} callback The callback that is notified of property changes.
	     */
	    function addPreCommitListener(callback) {
	        getPreCommitListeners.call(this).add(callback);
	    }
	
	    /**
	     * Removes a callback that has been previously added
	     *
	     * @param {function} callback The callback to remove
	     */
	    function removePreCommitListener(callback) {
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
	
	        changes[propertyName] = { oldValue: oldValue, newValue: newValue };
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
	            addChangeListener: { value: addChangeListener },
	            removeChangeListener: { value: removeChangeListener },
	            addPreCommitListener: { value: addPreCommitListener },
	            removePreCommitListener: { value: removePreCommitListener },
	            suspendNotifications: { value: false, writable: true }
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
	        source.changeListeners.forEach(function (callback) {
	            callback(source, changes);
	        });
	    }
	
	    var defineProperty = function defineProperty(obj, key, value) {
	        if (key in obj) {
	            Object.defineProperty(obj, key, {
	                value: value,
	                enumerable: true,
	                configurable: true,
	                writable: true
	            });
	        } else {
	            obj[key] = value;
	        }
	
	        return obj;
	    };
	
	    var activeBindings = new WeakMap();
	
	    function createGetter(property) {
	
	        return function () {
	            var self = this;
	            return getPropertyValues(self)[property];
	        };
	    }
	
	    function createSetter(property, descriptor) {
	
	        return function (newValue) {
	            var self = this;
	            var suspendNotifications = self.suspendNotifications;
	            var value = getPropertyValues(self)[property];
	            // Honor an existing setter if any
	            if (typeof descriptor.set === 'function') {
	                descriptor.set.call(self, newValue);
	                // Mutations? Casts?
	                if (descriptor.get) {
	                    value = descriptor.get.call(self);
	                }
	            }
	            var oldValue = value;
	            if (value === newValue || notifyPreCommit(self, defineProperty({}, property, { oldValue: oldValue, newValue: newValue }))) {
	                return;
	            }
	            value = newValue;
	            if (suspendNotifications === false && !getChangeListeners.call(self).values().next().done) {
	                queueNotification(self, property, oldValue, newValue);
	            }
	            getPropertyValues(self)[property] = value;
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
	        source.preCommitListeners.forEach(function (preCommitCallback) {
	            canceled = preCommitCallback(source, changes, canceled) === false || canceled;
	        });
	        return canceled;
	    }
	
	    /**
	     * Structures the prototype to define a bindable property
	     * on the first write when "this" is an instance of the
	     * class or prototype.
	     *
	     * @param {String} property The name of the property to bind
	     */
	    function bindable(property) {
	        return function (constructor) {
	            // Mixin
	            var prototype = constructor.prototype;
	            if (!activeBindings.has(prototype)) {
	                mixinNotifier(prototype);
	                activeBindings.set(prototype, true);
	            }
	
	            var descriptor = Object.getOwnPropertyDescriptor(prototype, property) || {};
	            // already bound - nothing to do
	            if (activeBindings.has(descriptor.get)) {
	                return;
	            }
	
	            Object.defineProperty(prototype, property, {
	                get: descriptor.get || createGetter(property),
	                set: createSetter(property, descriptor),
	                enumerable: descriptor.enumerable
	            });
	        };
	    }
	
	    exports.bindable = bindable;
	    exports.queueNotification = queueNotification;

	    Object.defineProperty(exports, '__esModule', { value: true });
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var allShipTypes = exports.allShipTypes = [];
	var totalCells = exports.totalCells = 0;
	
	var ShipTypeEnum = exports.ShipTypeEnum = function () {
	    function ShipTypeEnum(size, name, maxAllowed) {
	        _classCallCheck(this, ShipTypeEnum);
	
	        if (Object.isFrozen(ShipTypeEnum)) {
	            throw new Error('The ShipTypeEnum cannot be constructed');
	        }
	        Object.assign(this, { size: size, name: name, maxAllowed: maxAllowed });
	        Object.freeze(this);
	        allShipTypes.push(this);
	        exports.totalCells = totalCells += size;
	    }
	
	    _createClass(ShipTypeEnum, [{
	        key: 'toString',
	        value: function toString() {
	            return this.name;
	        }
	    }]);
	
	    return ShipTypeEnum;
	}();
	
	ShipTypeEnum.CORVETE = new ShipTypeEnum(2, 'Corvette', 1);
	ShipTypeEnum.FRIGATE = new ShipTypeEnum(3, 'Frigate', 2);
	ShipTypeEnum.DESTROYER = new ShipTypeEnum(4, 'Destroyer', 1);
	ShipTypeEnum.CARRIER = new ShipTypeEnum(5, 'Carrier', 1);
	
	Object.freeze(ShipTypeEnum);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _dec3, _class;
	
	var _bindProperty = __webpack_require__(37);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ShipModel = (_dec = (0, _bindProperty.bindable)('hits'), _dec2 = (0, _bindProperty.bindable)('direction'), _dec3 = (0, _bindProperty.bindable)('occupiedCells'), _dec(_class = _dec2(_class = _dec3(_class = function () {
	    function ShipModel(_ref) {
	        var _ref$hits = _ref.hits,
	            hits = _ref$hits === undefined ? [] : _ref$hits,
	            type = _ref.type,
	            _ref$direction = _ref.direction,
	            direction = _ref$direction === undefined ? 0 : _ref$direction,
	            occupiedCells = _ref.occupiedCells;
	
	        _classCallCheck(this, ShipModel);
	
	        Object.assign(this, { hits: hits, type: type, direction: direction, occupiedCells: occupiedCells });
	    }
	
	    _createClass(ShipModel, [{
	        key: 'toString',
	        value: function toString() {
	            return '' + this.type;
	        }
	    }]);
	
	    return ShipModel;
	}()) || _class) || _class) || _class);
	exports.default = ShipModel;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var animateBoard = exports.animateBoard = function animateBoard(boardElement, cellSize, colCt) {
	    cellSize = cellSize | 0;
	    colCt = colCt | 0;
	    var paths = boardElement.querySelectorAll('.cell');
	    var len = ~~paths.length;
	    var delay = 250;
	    var row = 0;
	
	    var _loop = function _loop(i) {
	        var path = paths[i];
	        var x = +(i % colCt * cellSize);
	        var y = +(row * cellSize);
	        setTimeout(function () {
	            path.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	        }, i % row * delay);
	
	        if (!path.nextSibling) {
	            row++;
	        }
	    };
	
	    for (var i = 0; i < len; i++) {
	        _loop(i);
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=battleship.bundle.js.map