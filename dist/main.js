/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    font: 20px Montserrat, sans-serif;\\r\\n    line-height: 1.8;\\r\\n    color: #f5f6f7;\\r\\n}\\r\\nfooter {\\r\\n    padding: 20px;\\r\\n    font-size: 15px;\\r\\n}\\r\\n.about {\\r\\n    font-family: \\\"Verdana\\\", serif;\\r\\n    font-size: 18px;\\r\\n    line-height: 26px;\\r\\n}\\r\\n.col-centered {\\r\\n    display: inline-block;\\r\\n    float: none !important;\\r\\n    /* reset the text-align */\\r\\n    /* inline-block space fix */\\r\\n    margin-right: -4px;\\r\\n}\\r\\n#files a,\\r\\n#files a:active {\\r\\n    font-size: 1.5em !important;\\r\\n    color: white !important;\\r\\n    text-decoration: none !important;\\r\\n}\\r\\n#files a:hover {\\r\\n    font-weight: bold;\\r\\n}\\r\\n.tittleNote {\\r\\n    font-style: italic;\\r\\n}\\r\\n.linkItem {\\r\\n    color: #828485;\\r\\n    font-size: 25px;\\r\\n}\\r\\n.lastName {\\r\\n    color: #c2c2c2;\\r\\n    text-shadow: 0 0 0 #4a4b4c;\\r\\n}\\r\\n\\r\\n.center-block {\\r\\n    float: none !important;\\r\\n}\\r\\n.tittleSection {\\r\\n    margin: 50px auto 20px;\\r\\n}\\r\\n.projectImg {\\r\\n    margin: 0 auto;\\r\\n    border: 0 solid;\\r\\n    max-width: 100%;\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n    max-height: 250px;\\r\\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */\\r\\n    filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */\\r\\n    -webkit-transition: filter 0.3s linear;\\r\\n    -moz-transition: filter 0.3s linear;\\r\\n    -o-transition: filter 0.3s linear;\\r\\n    transition: filter 0.3s linear, box-shadow 0.3s linear, transform 0.25s ease;\\r\\n}\\r\\n/* Disable grayscale on hover */\\r\\n.projectImg:hover {\\r\\n    transform: scale(1.02);\\r\\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n    -webkit-filter: grayscale(0);\\r\\n    filter: none;\\r\\n}\\r\\n.container-fluid {\\r\\n    font-size: 15px;\\r\\n    padding-top: 30px;\\r\\n    padding-bottom: 70px;\\r\\n}\\r\\n.btn {\\r\\n    background-color: #909090;\\r\\n    color: #fff;\\r\\n    font-size: 15px;\\r\\n    margin: 5px !important;\\r\\n    border-style: dashed !important;\\r\\n}\\r\\n.glyphicon {\\r\\n    padding-right: 5px;\\r\\n}\\r\\n.bg-1 {\\r\\n    background-color: #c1d7d7;\\r\\n    color: #ffffff;\\r\\n}\\r\\n.bg-2 {\\r\\n    background-color: #828485;\\r\\n    color: #ffffff;\\r\\n}\\r\\n.bg-3 {\\r\\n    background-color: #c1d7d7;\\r\\n    color: #ffffff;\\r\\n}\\r\\n.bg-4 {\\r\\n    background-color: #ffffff;\\r\\n    color: #555555;\\r\\n}\\r\\n.bg-5 {\\r\\n    background-color: #2f2f2f;\\r\\n    color: #ffffff;\\r\\n}\\r\\n.navbar {\\r\\n    background-color: white;\\r\\n    padding: 2px 0;\\r\\n    border: 0;\\r\\n    border-radius: 0;\\r\\n    margin-bottom: 0;\\r\\n    font-size: 12px;\\r\\n    letter-spacing: 5px;\\r\\n    box-shadow: 0 0 25px #d1d1d1;\\r\\n}\\r\\n.navbar-default .navbar-nav > li > a {\\r\\n    color: #777;\\r\\n    transition: color 0.3s linear;\\r\\n}\\r\\n.navbar-nav li a:hover {\\r\\n    color: #b2cbdb !important;\\r\\n}\\r\\n.navbar-default .navbar-nav > .active > a,\\r\\n.navbar-default .navbar-nav > .active > a:hover,\\r\\n.navbar-default .navbar-nav > .active > a:focus {\\r\\n    color: #fef9ff !important;\\r\\n    text-shadow: 0 0 15px #fafdff;\\r\\n    background: rgb(193, 215, 215) none !important;\\r\\n}\\r\\n.projectContainer {\\r\\n    margin-bottom: 2em;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://reliktus.github.io/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://reliktus.github.io/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://reliktus.github.io/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/_index */ \"./src/js/_index.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\r\n\r\n\n\n//# sourceURL=webpack://reliktus.github.io/./src/app.js?");

/***/ }),

/***/ "./src/js/_index.js":
/*!**************************!*\
  !*** ./src/js/_index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imageStyler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageStyler */ \"./src/js/imageStyler.js\");\n/* harmony import */ var _skillsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skillsList */ \"./src/js/skillsList.js\");\n/* harmony import */ var _projectsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsList */ \"./src/js/projectsList.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function (event) {\r\n    (0,_skillsList__WEBPACK_IMPORTED_MODULE_1__.skillsList)();\r\n    (0,_imageStyler__WEBPACK_IMPORTED_MODULE_0__.imgStyler)();\r\n    (0,_projectsList__WEBPACK_IMPORTED_MODULE_2__.projectList)();\r\n});\r\n\n\n//# sourceURL=webpack://reliktus.github.io/./src/js/_index.js?");

/***/ }),

/***/ "./src/js/imageStyler.js":
/*!*******************************!*\
  !*** ./src/js/imageStyler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imgStyler\": () => (/* binding */ imgStyler)\n/* harmony export */ });\nfunction imgStyler() {\r\n    let images = document.querySelectorAll(\".projectImg\");\r\n    let follow = document.querySelectorAll(\".follow\");\r\n    images.forEach(image => image.classList.add(\"img-responsive img-rounded\"))\r\n    follow.forEach(el => {\r\n        el.classList.add(\"btn btn-default btn-lg\");\r\n    })\r\n}\n\n//# sourceURL=webpack://reliktus.github.io/./src/js/imageStyler.js?");

/***/ }),

/***/ "./src/js/projectsList.js":
/*!********************************!*\
  !*** ./src/js/projectsList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\nfunction projectList() {\r\n    const target = document.querySelector('.js-projects-list');\r\n    let projectHTML = \"\";\r\n    let x;\r\n    const imgPath = '../assets/img/';\r\n    let projectsData = {\r\n        \"xero_lublin\": {\r\n            pname: \"Stamps SPA for Xero-Lublin\",\r\n            tec: \"[ JS + jQuery + php ]\",\r\n            plink: \"http://xerolublin.pl/stamps/\",\r\n            pimg: `${imgPath}stamps_order2.png`\r\n        },\r\n        \"chodzki\": {\r\n            pname: \"Webpage for CMCHODZKI\",\r\n            tec: \"[ CMS + GFX ]\",\r\n            plink: \"http://cmchodzki.pl\",\r\n            pimg: `${imgPath}chodzki.png`\r\n        },\r\n        \"weather\": {\r\n            pname: \"Simple weather app\",\r\n            tec: \"[ JS + jQuery + API + Bootstrap ]\",\r\n            plink: \"http://codepen.io/relikt/full/XMxGoW/\",\r\n            pimg: `${imgPath}weather_app_thumb.png`\r\n        },\r\n        \"fotobudka\": {\r\n            pname: \"Page for ILoveFotobudka.pl\",\r\n            tec: \"[ PHP, RWD, GFX ]\",\r\n            plink: \"http://ilovefotobudka.pl/\",\r\n            pimg: `${imgPath}foto_budka.png`\r\n        },\r\n        \"wiki\": {\r\n            pname: \"Wikipedia search\",\r\n            tec: \"[ JS + jQuery + API: ]\",\r\n            plink: \"http://codepen.io/relikt/full/NpoaaQ/\",\r\n            pimg: `${imgPath}wiki_codepen.png`\r\n        },\r\n        \"Random quote\": {\r\n            pname: \"Random quote\",\r\n            tec: \" [ JS + jQuery + API + Bootstrap ]\",\r\n            plink: \"http://codepen.io/relikt/full/xqjQOL/\",\r\n            pimg: `${imgPath}quote_app.png`\r\n        },\r\n        \"Twitch\": {\r\n            pname: \"Twitch preview\",\r\n            tec: \"[ JS + jQuery + API + Bootstrap ]\",\r\n            plink: \"http://codepen.io/relikt/full/dWawzm/\",\r\n            pimg: `${imgPath}twitch_app.png`\r\n        },\r\n        \"Algorithm scripting\": {\r\n            pname: \"Algorithms\",\r\n            tec: \"[ JS + jQuery ]\",\r\n            plink: \"https://codepen.io/relikt/full/BZQKyJ/\",\r\n            pimg: `${imgPath}algorithms.png`\r\n        },\r\n        \"Calculator\": {\r\n            pname: \"Calculator\",\r\n            tec: \"[ JS + jQuery ]\",\r\n            plink: \"https://codepen.io/relikt/full/qjKJbQ/\",\r\n            pimg: `${imgPath}calc.png`\r\n        }\r\n    };\r\n    for (x in projectsData) {\r\n        if (projectsData.hasOwnProperty(x)) {\r\n            projectHTML +=\r\n                \"<div class=\\\"wow zoomIn col-sm-4 col-centered projectContainer\\\" data-wow-delay=\\\"0.3s\\\">\" +\r\n                projectsData[x].pname +\r\n                \"<p>\" + projectsData[x].tec + \"</p>\" +\r\n                \"<a href=\\\"\" + projectsData[x].plink + \"\\\" target=\\\"_blank\\\">\" +\r\n                \"<img loading=lazy class=\\\"projectImg\\\" src=\\\"\" + projectsData[x].pimg + \"\\\" alt=\\\"\" + projectsData[x].pname + \"\\\" ></a>\" +\r\n                \"</div>\";\r\n        }\r\n    }\r\n    target.innerHTML = projectHTML;\r\n}\n\n//# sourceURL=webpack://reliktus.github.io/./src/js/projectsList.js?");

/***/ }),

/***/ "./src/js/skillsList.js":
/*!******************************!*\
  !*** ./src/js/skillsList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"skillsList\": () => (/* binding */ skillsList)\n/* harmony export */ });\nfunction skillsList() {\r\n    let target = document.querySelector('.js-skills-list');\r\n    let about = '<p><h5 style=\"font-size: 16px; line-height: 22px;\">' +\r\n        'Software Engineer with a passion for understanding things at a fundamental level.<br>' +\r\n        'Fascinated about Front-end development and JavaScript frameworks.</h5></p><br>';\r\n    let skillsArr = [\r\n        \"HTML5 + CSS 3\", \"JavaScript ES6\", \"jQuery\", 'TypeScript', 'Angular 4 + CLI', \"Sass / SCSS\", \"Webpack\", \"RWD: Bootstrap\", \"NPM\", \"PHP\", \"GIT\", 'XAMPP', \"Batch\", \"Core JAVA\", \"IDE: Intellij + Eclipse\", \"Active Directory\", \"VBA\"\r\n\r\n    ];\r\n    let me = '<div class=\"col-centered\"><img class=\"img-thumbnail img-responsive \" id=\"myFace\" width=\"200px\" src=\"img/me.jpg\"></div>';\r\n    let skillsHTML = \"<div style=\\'display: inline-block\\' >let skillsArray = [ </div> \";\r\n    for (let i = 0; i < skillsArr.length; i++) {\r\n        skillsHTML += \"<div style=\\'display: inline-block\\'>\\\"\" + skillsArr[i];\r\n        if (i < skillsArr.length - 1) {\r\n            skillsHTML += \"</b>\\\",</div> \";\r\n        } else {\r\n            skillsHTML += \"\\\" </b>];</div>\"\r\n        }\r\n    }\r\n    target ? (target.innerHTML = me + about + skillsHTML) : console.log(' not found in dom');\r\n}\n\n//# sourceURL=webpack://reliktus.github.io/./src/js/skillsList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;