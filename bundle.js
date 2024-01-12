/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}
.grid-container {
    display: grid;
    grid-template-areas: 'header header header header'
                         'nav main main main'
                         'footer footer footer footer';
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 80px 1fr 35px;
    min-height: 100vh;
    color: rgb(255, 255, 255);
}
.header {
    grid-area: header;
    display: flex;
    background: rgb(40, 5, 71);
    align-items: center;
    gap: 37%;
    padding-bottom: 15px;
}
img[alt="menu"] {
    display: none;
}
.home-menu {
    display: flex;
    gap: 10px;
    margin-left: 12px;
}
.nav {
    grid-area: nav;
    background: rgba(73, 116, 9, 0.9);
    padding-bottom: 10px;
}

.nu {
    width: 5px;
    height: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 5px;
    background: #b7ff03;
    color: black;
    border-radius: 50%;
}
.main {
    grid-area: main;
    background: rgba(73, 116, 9, 0.7);
    box-shadow: inset 3px 3px 8px 2px rgba(0, 0, 0, 0.978);
    padding: 14px;
}
.empty-list-placeholder {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 100%;
}

.todoEl {
    background: rgba(0, 0, 0, 0.5);
    border-left:  20px solid rgb(3, 22, 79);
    border-right: 20px solid rgb(3, 22, 79);
    border-radius: 10px;
    height: 40px;
    display: flex;
    padding: 3px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    text-decoration-line: line-through;
    text-decoration-line: none;
    color: darkblue;
    width: 100%;
    gap: 10px;
}
.todoEl > div:nth-child(2) {
    display: flex;
    gap: 5px;
    margin-right: 10px;
    align-items: center;
}
.todoEl > div:first-child {
    display: flex;
    gap: 3px;
    align-items: center;
    margin-left: 5px;
}
.add-list {
    width: 80px;
    height: 30px;
    background: rgb(190, 12, 196);
    border-radius: 5px;
}
#menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    width: 100%;
    cursor: pointer;
}
#menu li {
    border: 2px solid rgba(49, 62, 4, 0.805);
    margin-top: 10px;
    background: rgb(23, 36, 3);
    padding: 10px;
    width: 90%;
    border-radius: 20px 3px;
    font-size: 130%;
    text-align: center;
}
#menu li:hover {
    box-shadow: 2px 2px 2px 2px black;
}
#proj {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
    border: 2px solid rgba(49, 62, 4, 0.805);
    margin-top: 10px;
    border-radius: 20px 3px;
    padding: 10px;
    background: rgb(10, 4, 101);
    font-size: 110%;
}
#name {
    display: flex;
    justify-content: space-between;
}
/*project creation styling*/
.new-project-dialog, .expand {
    position: absolute;
    min-width: 25%;
    min-height: 25%;
    top: 30%;
    left: 30%;
    flex-direction: column;
    color: white;
    background: #190350;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
}
.expand {
    min-width: 60%;
    max-height: 75vh;
    word-wrap: break-word;
    gap: 20px;
    top: 14%;
    left: 20%;
    padding: 20px;
}
.expand h2 {
    color: rgb(255, 0, 212);
    margin-bottom: 10px;
}
.new-project-dialog::backdrop, .task-info-pop::backdrop, .notes-dialog::backdrop, .expand::backdrop {
    background: rgba(23, 19, 26, 0.9);
}
.new-project-dialog div {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    gap: 15px;
}
.new-project-dialog div input {
    width: 150px;
    height: 27px;
    align-self: center;
    padding: 10px;
    font-size: 17px;
    border: 2px solid green;
    background: rgb(77, 9, 172, 0.6);
    color: white;
}
#create, .task-info-pop #add-task, .notes-dialog button, #close-exp {
    align-self: flex-end;
    width: 80px;
    height: 30px;
    background: rgb(190, 12, 196);
    border-radius: 5px;
    font-weight: 1000;
}
.blur {
    filter: blur(3px);
}

.expandBtn {
    width: 30%;
    font-size: 10px;
    height: 20px;
    background: rgb(190, 12, 196);
    color: white;
    border-radius: 5px;
}

.task-info-pop {
    position: absolute;
    min-width: 36%;
    min-height: 58%;
    top: 28%;
    left: 30%;
    color: rgb(255, 255, 255);
    background: #190350;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 20px;
    align-items: center;
}
.task-info-pop input {
    height: 27px;
    padding-left: 10px;
    font-weight: 900;
}

#task-name, #priority, #des, #due-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    font-size: 15px;
}

.notes-dialog {
    display: none;
    position: absolute;
    flex-direction: column;
    top: 19%;
    min-width: 39%;
    top: 28%;
    left: 30%;
    justify-content: flex-start;
    gap: 14px;
    border-radius: 10px;
    padding: 20px;
    background: rgb(4, 11, 116);
}
.notes-dialog input {
    color: #160464;
    align-self: center;
    height: 30px;
    font-weight: 1000;
    padding-left: 10px;
    font-size: 20px;
}
.notes-dialog textarea {
    resize: none;
    background: rgba(30, 26, 29, 0.6);
    color: white;
    border: none;
    padding: 10px;
}

.note-item {
    display: flex;
    flex-direction: column;
    background: rgb(4, 11, 116);
    padding: 10px;
    border-radius: 20px;
    gap: 15px;
    align-items: center;
    color: #ffffff;
    font-size: 13px;
}
.new-project-dialog, .expand, .task-info-pop,.note-item, .notes-dialog {
    border: 5px groove blueviolet;
    border-top: 15px groove blueviolet;
    border-bottom: 15px groove blueviolet;
}
.added {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: flex-start;
}
.para {
    width: 230px;
    white-space: normal;
    overflow: visible;
    word-wrap: break-word;
    align-self: flex-end;
}
.added-project {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    width: 80%;
    margin-top: 9px;
    background: rgb(23, 36, 3,0.9);
    border: 2px solid rgb(0, 0, 0);
    padding: 6px;
    font-size: 75%;
    border-radius: 5px;
}
.added-project div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
}
#fol-name {
    display: flex;
    gap: 5px;
    align-items: center;
}

#proj-menu > div {
    display: flex;
    flex-direction: column;
    align-items: end;
}
.footer {
    grid-area: footer;
    background-color: rgba(0, 0, 0, 0.9);
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 610px) {
    .grid-container {
        grid-template-areas: 'header header header header'
                             'main main main main'
                             'footer footer footer footer';
    }
    .nav {
        transform: translateX(-100%);
        position: absolute;
        top: 11%;
        min-height: 89%;
        width: 100%;
        background: rgba(73, 116, 9);
        z-index: 1;
    }
    img[alt="menu"] {
        display: block;
        color: rgb(255, 255, 0,0.7);
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Courier New', Courier, monospace;\n}\n.grid-container {\n    display: grid;\n    grid-template-areas: 'header header header header'\n                         'nav main main main'\n                         'footer footer footer footer';\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 80px 1fr 35px;\n    min-height: 100vh;\n    color: rgb(255, 255, 255);\n}\n.header {\n    grid-area: header;\n    display: flex;\n    background: rgb(40, 5, 71);\n    align-items: center;\n    gap: 37%;\n    padding-bottom: 15px;\n}\nimg[alt=\"menu\"] {\n    display: none;\n}\n.home-menu {\n    display: flex;\n    gap: 10px;\n    margin-left: 12px;\n}\n.nav {\n    grid-area: nav;\n    background: rgba(73, 116, 9, 0.9);\n    padding-bottom: 10px;\n}\n\n.nu {\n    width: 5px;\n    height: 10px;\n    padding-left: 5px;\n    padding-right: 5px;\n    margin-left: 5px;\n    background: #b7ff03;\n    color: black;\n    border-radius: 50%;\n}\n.main {\n    grid-area: main;\n    background: rgba(73, 116, 9, 0.7);\n    box-shadow: inset 3px 3px 8px 2px rgba(0, 0, 0, 0.978);\n    padding: 14px;\n}\n.empty-list-placeholder {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    height: 100%;\n}\n\n.todoEl {\n    background: rgba(0, 0, 0, 0.5);\n    border-left:  20px solid rgb(3, 22, 79);\n    border-right: 20px solid rgb(3, 22, 79);\n    border-radius: 10px;\n    height: 40px;\n    display: flex;\n    padding: 3px;\n    margin-bottom: 10px;\n    align-items: center;\n    justify-content: space-between;\n    text-decoration-line: line-through;\n    text-decoration-line: none;\n    color: darkblue;\n    width: 100%;\n    gap: 10px;\n}\n.todoEl > div:nth-child(2) {\n    display: flex;\n    gap: 5px;\n    margin-right: 10px;\n    align-items: center;\n}\n.todoEl > div:first-child {\n    display: flex;\n    gap: 3px;\n    align-items: center;\n    margin-left: 5px;\n}\n.add-list {\n    width: 80px;\n    height: 30px;\n    background: rgb(190, 12, 196);\n    border-radius: 5px;\n}\n#menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    list-style-type: none;\n    width: 100%;\n    cursor: pointer;\n}\n#menu li {\n    border: 2px solid rgba(49, 62, 4, 0.805);\n    margin-top: 10px;\n    background: rgb(23, 36, 3);\n    padding: 10px;\n    width: 90%;\n    border-radius: 20px 3px;\n    font-size: 130%;\n    text-align: center;\n}\n#menu li:hover {\n    box-shadow: 2px 2px 2px 2px black;\n}\n#proj {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 90%;\n    border: 2px solid rgba(49, 62, 4, 0.805);\n    margin-top: 10px;\n    border-radius: 20px 3px;\n    padding: 10px;\n    background: rgb(10, 4, 101);\n    font-size: 110%;\n}\n#name {\n    display: flex;\n    justify-content: space-between;\n}\n/*project creation styling*/\n.new-project-dialog, .expand {\n    position: absolute;\n    min-width: 25%;\n    min-height: 25%;\n    top: 30%;\n    left: 30%;\n    flex-direction: column;\n    color: white;\n    background: #190350;\n    justify-content: space-between;\n    padding: 10px;\n    border-radius: 10px;\n}\n.expand {\n    min-width: 60%;\n    max-height: 75vh;\n    word-wrap: break-word;\n    gap: 20px;\n    top: 14%;\n    left: 20%;\n    padding: 20px;\n}\n.expand h2 {\n    color: rgb(255, 0, 212);\n    margin-bottom: 10px;\n}\n.new-project-dialog::backdrop, .task-info-pop::backdrop, .notes-dialog::backdrop, .expand::backdrop {\n    background: rgba(23, 19, 26, 0.9);\n}\n.new-project-dialog div {\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    gap: 15px;\n}\n.new-project-dialog div input {\n    width: 150px;\n    height: 27px;\n    align-self: center;\n    padding: 10px;\n    font-size: 17px;\n    border: 2px solid green;\n    background: rgb(77, 9, 172, 0.6);\n    color: white;\n}\n#create, .task-info-pop #add-task, .notes-dialog button, #close-exp {\n    align-self: flex-end;\n    width: 80px;\n    height: 30px;\n    background: rgb(190, 12, 196);\n    border-radius: 5px;\n    font-weight: 1000;\n}\n.blur {\n    filter: blur(3px);\n}\n\n.expandBtn {\n    width: 30%;\n    font-size: 10px;\n    height: 20px;\n    background: rgb(190, 12, 196);\n    color: white;\n    border-radius: 5px;\n}\n\n.task-info-pop {\n    position: absolute;\n    min-width: 36%;\n    min-height: 58%;\n    top: 28%;\n    left: 30%;\n    color: rgb(255, 255, 255);\n    background: #190350;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n    padding: 20px;\n    align-items: center;\n}\n.task-info-pop input {\n    height: 27px;\n    padding-left: 10px;\n    font-weight: 900;\n}\n\n#task-name, #priority, #des, #due-date {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    justify-content: space-between;\n    font-size: 15px;\n}\n\n.notes-dialog {\n    display: none;\n    position: absolute;\n    flex-direction: column;\n    top: 19%;\n    min-width: 39%;\n    top: 28%;\n    left: 30%;\n    justify-content: flex-start;\n    gap: 14px;\n    border-radius: 10px;\n    padding: 20px;\n    background: rgb(4, 11, 116);\n}\n.notes-dialog input {\n    color: #160464;\n    align-self: center;\n    height: 30px;\n    font-weight: 1000;\n    padding-left: 10px;\n    font-size: 20px;\n}\n.notes-dialog textarea {\n    resize: none;\n    background: rgba(30, 26, 29, 0.6);\n    color: white;\n    border: none;\n    padding: 10px;\n}\n\n.note-item {\n    display: flex;\n    flex-direction: column;\n    background: rgb(4, 11, 116);\n    padding: 10px;\n    border-radius: 20px;\n    gap: 15px;\n    align-items: center;\n    color: #ffffff;\n    font-size: 13px;\n}\n.new-project-dialog, .expand, .task-info-pop,.note-item, .notes-dialog {\n    border: 5px groove blueviolet;\n    border-top: 15px groove blueviolet;\n    border-bottom: 15px groove blueviolet;\n}\n.added {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n    justify-content: flex-start;\n}\n.para {\n    width: 230px;\n    white-space: normal;\n    overflow: visible;\n    word-wrap: break-word;\n    align-self: flex-end;\n}\n.added-project {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    width: 80%;\n    margin-top: 9px;\n    background: rgb(23, 36, 3,0.9);\n    border: 2px solid rgb(0, 0, 0);\n    padding: 6px;\n    font-size: 75%;\n    border-radius: 5px;\n}\n.added-project div {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 120px;\n}\n#fol-name {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n#proj-menu > div {\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n}\n.footer {\n    grid-area: footer;\n    background-color: rgba(0, 0, 0, 0.9);\n    color: rgb(255, 255, 255);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n@media screen and (max-width: 610px) {\n    .grid-container {\n        grid-template-areas: 'header header header header'\n                             'main main main main'\n                             'footer footer footer footer';\n    }\n    .nav {\n        transform: translateX(-100%);\n        position: absolute;\n        top: 11%;\n        min-height: 89%;\n        width: 100%;\n        background: rgba(73, 116, 9);\n        z-index: 1;\n    }\n    img[alt=\"menu\"] {\n        display: block;\n        color: rgb(255, 255, 0,0.7);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/collapse.png":
/*!*********************************!*\
  !*** ./src/assets/collapse.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07293bb5d28d0dc27e75.png";

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa5818c492d4d0badf79.png";

/***/ }),

/***/ "./src/assets/edit.png":
/*!*****************************!*\
  !*** ./src/assets/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bde2aed63b7b478a562.png";

/***/ }),

/***/ "./src/assets/folder.png":
/*!*******************************!*\
  !*** ./src/assets/folder.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "777219fa3414e64e159c.png";

/***/ }),

/***/ "./src/assets/home.png":
/*!*****************************!*\
  !*** ./src/assets/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b576d56d31eec49934bd.png";

/***/ }),

/***/ "./src/assets/menu.png":
/*!*****************************!*\
  !*** ./src/assets/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f68ece0a73b275699ce.png";

/***/ }),

/***/ "./src/assets/todo.jpg":
/*!*****************************!*\
  !*** ./src/assets/todo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "955917cb0aa2875e2dd9.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _assets_collapse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/collapse.png */ "./src/assets/collapse.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/delete.png */ "./src/assets/delete.png");
/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/edit.png */ "./src/assets/edit.png");
/* harmony import */ var _assets_folder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/folder.png */ "./src/assets/folder.png");
/* harmony import */ var _assets_home_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/home.png */ "./src/assets/home.png");
/* harmony import */ var _assets_menu_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/menu.png */ "./src/assets/menu.png");
/* harmony import */ var _assets_todo_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/todo.jpg */ "./src/assets/todo.jpg");









class Todo {
    constructor(title, descrTodo, dueDate, priority) {
        this.title = title;
        this.descrTodo = descrTodo;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class NoteList {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
const menuImg = document.querySelector('#menuImg');
menuImg.src = _assets_menu_png__WEBPACK_IMPORTED_MODULE_6__
const nav = document.querySelector('.nav')
menuImg.addEventListener('click', ()=>{
        nav.style.transition = 'all 1s'
        if (nav.style.transform === 'translateX(0%)') {
            nav.style.transform = 'translateX(-100%)';
            menuImg.src = _assets_menu_png__WEBPACK_IMPORTED_MODULE_6__
        } else  {
            nav.style.transform = 'translateX(0%)';
            menuImg.src = _assets_collapse_png__WEBPACK_IMPORTED_MODULE_1__
        }
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 610) {
        nav.style.transform = 'translateX(0%)'
    }else if (window.innerWidth<=610) {
        nav.style.transform = 'translateX(-100%)'
        menuImg.src=_assets_menu_png__WEBPACK_IMPORTED_MODULE_6__
    }
})

const proDialog = document.querySelector('.new-project-dialog');
const taskInfoPop = document.querySelector('.task-info-pop');
const projectName = document.querySelector('#proj-name');
const createBtn = document.querySelector('#create');

const add = document.querySelector('#add');
add.addEventListener('click', ()=>{
    proDialog.showModal();
    proDialog.style.display = 'flex';
    createBtn.textContent = (projectName.value === '') ? 'Close' : 'Create'
})

const projMenu = document.querySelector('#proj-menu');
const todoLists =  document.querySelector(".main");

function removeEl(ev) {
    delete arrOfList[ev.target.parentElement.parentElement.title]
    names.splice(names.indexOf(ev.target.parentElement.parentElement.title),1)
    ev.target.parentElement.remove();
}

let names = [];
let arrOfList = {};
const createProjectFolder = (name) => {
    if (+projectName.value===0) {
        alert('You can\'t leave the feild empty or space dozen')
    } else {
        const project = document.createElement('div');
        project.innerHTML = `
            <div class="added-project">
                <div id="fol-name">
                    <img src=${_assets_folder_png__WEBPACK_IMPORTED_MODULE_4__} width="15px" alt="folder">
                    <div class="proj-name">${name}</div>
                </div>
                <img src=${_assets_delete_png__WEBPACK_IMPORTED_MODULE_2__} width="15px" class="del-folder">
            </div>
        `
        project.classList.add('user-project', 'bg')
        project.firstElementChild.classList.add('fc');
        project.title = name
        names.push(name)
        projMenu.appendChild(project);
        
        arrOfList[name] = [];
        let arrOfFol = Array.from(projMenu.children)
        arrOfFol.forEach(pf=>{
            pf.addEventListener('click', ()=>{
                embed(pf.firstElementChild)
                tabFocus=pf.title;
                simulation=[]
                reRender(simulation, arrOfList[tabFocus])
                evaluate(arrOfList[tabFocus], taskInfoPop)
            })
        })
        closeDialoge(proDialog)
        projectName.value = '';
    }
    const delImgArr = Array.from(document.querySelectorAll('.del-folder'));
    delImgArr.forEach(im => im.addEventListener('click', e=>removeEl(e))) 
}

function closeDialoge(theDialog) {
    theDialog.close()
    theDialog.style.display = 'none';
}

projectName.addEventListener('input', ()=>{
    (projectName.value !== '') ? createBtn.textContent = 'Create' : createBtn.textContent = 'Close'
})

createBtn.addEventListener('click', ()=>{
    (createBtn.textContent === 'Close') ? closeDialoge(proDialog) : 
     (names.includes(projectName.value)) ? alert(`'${projectName.value}' is being used`) : createProjectFolder(projectName.value)
})

const allListLength = document.querySelector('.one')
const todayListLength = document.querySelector('.two')
const weekListLength = document.querySelector('.three')
const noteListLength = document.querySelector('.four')
const homeImg = document.querySelector('#home-tab-img');

document.querySelector('#demo').src = _assets_todo_jpg__WEBPACK_IMPORTED_MODULE_7__

homeImg.src=_assets_home_png__WEBPACK_IMPORTED_MODULE_5__
homeImg.addEventListener('click', ()=>{
    todoLists.innerHTML = ` <div class="home" style="width: 100%; height: 100%;" >
                                <img src=${_assets_todo_jpg__WEBPACK_IMPORTED_MODULE_7__} width="100%" height="100%" alt="todo">
                            </div> `
})

const forToday = document.querySelector('#today');
const inWeek = document.querySelector('#in-week');
const allTodos = document.querySelector('#all-todos');
const notes = document.querySelector('#notes');
const priorityEl = document.querySelector('#priority')

let pri;
priorityEl.addEventListener('change', ()=>{
    pri = priorityEl.value;
    (mode==='create') ? SwapFlipBtnNames('Add Task') : SwapFlipBtnNames('Edit')
})

const addTask = document.querySelector('#add-task')
const taskName = document.querySelector('#task')
const dueDate = document.querySelector('#date')
const descrTodoInp = document.querySelector('#description');

let mode; // either create or edit
function enablePop(popUpType) {
    let addListEltsArr = Array.from(document.querySelectorAll('.add-list'))
    addListEltsArr.forEach(ad=>{
        ad.addEventListener('click', (e)=>{
            mode='create'
            SwapFlipBtnNames('Add Task')
            if (tabFocus==='All') {
                e.target.textContent = 'Nope here'
            }
            else {
                popUpType.showModal()
                popUpType.style.display = 'flex';
            }
        })
    })
}

function enableForEdit(popUpType) {
    popUpType.showModal()
    popUpType.style.display = 'flex';
}

let ToDolistDisplay = `
     <div class="empty-list-placeholder">
         <div style="width: 100%" id="empty">Empty List!</div>
         <button class="add-list">Add One</button>
     </div>
`
let updatedList = `
        <div class="added" style="width: 100%" id="list"></div>
        <button class="add-list">Add One</button>
`
let noteSimu = [];
let simulation = [];

let weekToDoList = [];
let todayToDoList = [];
let notesList = []; 
let all = [];

function evaluate(todoType, popUpType) {
    if (todoType.length===0)  {
        todoLists.innerHTML = ToDolistDisplay;
        enablePop(popUpType);
    } else {
        if (todoLists.firstElementChild.className==='home') {
            todoLists.innerHTML = ToDolistDisplay;
        }
        document.querySelector('.empty-list-placeholder').innerHTML = updatedList;
        todoType.forEach(l=>{
            document.querySelector('#list').appendChild(l);
            enablePop(popUpType)
        })
    }
}

let tabFocus;
inWeek.addEventListener('click',()=>{
    embed(inWeek)
    tabFocus = 'week';
    simulation = []
    reRender(simulation, weekToDoList)
    evaluate(weekToDoList, taskInfoPop);
});

forToday.addEventListener('click', ()=>{
    embed(forToday)
    tabFocus = 'today';
    simulation=[]
    reRender(simulation, todayToDoList)
    evaluate(todayToDoList,taskInfoPop)
});

// notes thing
const notesDialog = document.querySelector('.notes-dialog');
const addNote = document.querySelector('#add-note');
const noteTitle = document.querySelector('#title');
const noteDes = document.querySelector('#note-desc');
notes.addEventListener('click',()=> {
    tabFocus = 'note'
    embed(notes)
    todoLists.innerHTML = ToDolistDisplay
    enablePop(notesDialog)
    evaluate(notesList, notesDialog)
    noteSimu=[]
    reRender(noteSimu, notesList)
})

function SwapFlipBtnNames(name) {
    Array.from(document.querySelectorAll('.fields')).forEach(fl=>{
        fl.addEventListener('input', ()=>{
            addTask.textContent = (taskName.value!=='' && descrTodoInp.value!=='' && dueDate.value!=='') ? `${name}` : 'Close'
        })
    })
    priorityEl.addEventListener('change', ()=>{
        addTask.textContent = (mode==='editing') ?  'Edit' :
        (mode==='create' && (taskName.value!=='' && descrTodoInp.value!=='' && dueDate.value!=='')) ? 'Add Task' : 'Close'
    })
}

let taskItem; // implication for where the editing is happening 
addTask.addEventListener('click', ()=>{
    if ((taskName.value=== '') || (descrTodoInp.value==='') || dueDate.value==='' || (pri==='')) {
        closeDialoge(taskInfoPop)
    }
    else {
        (mode==='create') ? createTodoEl() : showEdited(taskItem)
        all = weekToDoList.concat(todayToDoList)
        enumSelfProArr()
        setLength()
        Array.from(document.querySelectorAll('.fields')).forEach(fl=>{fl.value = ''})
        addTask.textContent = 'Close'
        closeDialoge(taskInfoPop)
    }
})

Array.from(document.querySelectorAll('.note-fields')).forEach(nf=>{
    nf.addEventListener('input', ()=>{
        addNote.textContent = (noteTitle.value!== '' && noteDes.value!=='') ? 'Add' : 'Close'
    })
})

function enumSelfProArr() {
    let objArr = Object.values(arrOfList);
    objArr.forEach(oa=>{
        all = all.concat(oa)
    })
}

addNote.addEventListener('click', ()=>{
    if (noteTitle.value==='' || noteDes.value==='') {
        closeDialoge(notesDialog)
    }
    else {
        closeDialoge(notesDialog)
        createNote()
        setLength()
        Array.from(document.querySelectorAll('.note-fields')).forEach(nf=>{nf.value=''})
        addNote.textContent='Close'
    }
})

const createNote = () =>{
    let noteListObj = new NoteList(noteTitle.value,noteDes.value);
    const noteCont = document.createElement('div');
    noteCont.classList.add('note-item')
    noteCont.innerHTML = `
        <img style="width: 18px; align-self: flex-end; margin-bottom: -20px" src=${_assets_delete_png__WEBPACK_IMPORTED_MODULE_2__} class='delete-note' alt="delete-note">
        <h2 contenteditable style="color: rgb(255, 153, 0)" class="ttl">${noteListObj.title}</h2>
        <p class="para" contenteditable>${noteListObj.description}</p>
    `
    notesList.push(noteCont);
    document.querySelector('.empty-list-placeholder').innerHTML = updatedList;
    noteSimu.push(noteCont);
    document.querySelector('#list').classList.add('added')
    noteSimu.forEach(el=>document.querySelector('#list').appendChild(el))
    enablePop(notesDialog)
    enableNoteDelete()
}

const expDia = document.querySelector('.expand');
const createTodoEl = () => {
    const todoObj = new Todo(taskName.value, descrTodoInp.value, dueDate.value, pri)
    const todoEl = document.createElement('div');
    todoEl.classList.add('todoEl')
    todoEl.innerHTML = `
    <div>
        <input class="checkbox" style='width: 25px; height: 25px;accent-color: green' type="checkbox" name="isDone">
        <div class="title">${todoObj.title}</div>
    </div>
    <div>
        <button class="expandBtn">Expand</button>
        <span class="due-date">${todoObj.dueDate}</span>
        <span style='display: none'>${todoObj.descrTodo}</span>
        <img src=${_assets_edit_png__WEBPACK_IMPORTED_MODULE_3__} title='Edit' alt="edit" width="18px" class="edit-todo-item">
        <img src=${_assets_delete_png__WEBPACK_IMPORTED_MODULE_2__} alt="delete"  title='Delete' width="18px" class="del-todo-item" >
    </div>
    `
    todoEl.style.background = (pri==='High') ? 'rgb(0, 255, 0, .4)' : (pri==='Medium') ? 'rgb(255, 255, 0, .4)' : 'rgb(255, 0, 0, .4)';
    (tabFocus==='today') ? todayToDoList.push(todoEl) : (tabFocus==='week') ? weekToDoList.push(todoEl) : arrOfList[tabFocus] ? arrOfList[tabFocus].push(todoEl) : undefined;

    document.querySelector('.empty-list-placeholder').innerHTML = updatedList;
    simulation.push(todoEl);
    simulation.forEach(el=>document.querySelector('#list').appendChild(el))
    
    enablePop(taskInfoPop)
    enableTodoDetail()
    enableTodoDelete()
    enableCheck()
    enableEditing()
}

function enableNoteDelete() {
    const delNoteArr = Array.from(document.querySelectorAll(".delete-note"));
    delNoteArr.forEach(dna=>{
        dna.addEventListener('click', ()=>{
            dna.parentElement.remove()
            notesList = Array.from(document.querySelector('#list').children)
            evaluate(notesList, notesDialog)
            setLength()
            noteSimu=[]
            reRender(noteSimu, notesList)
        })
    })
}

function enableTodoDelete() {
    const delTodoItemList = Array.from(document.querySelectorAll('.del-todo-item'));
    delTodoItemList.forEach(dti=>{
        dti.addEventListener('click', (e)=>{
            let lists = document.querySelector('#list');
            dti.parentElement.parentElement.remove()
            if (tabFocus==='week') {
                weekToDoList = Array.from(lists.children)
                simulation=[]
                reRender(simulation, weekToDoList)
                evaluate(weekToDoList, taskInfoPop);
            } else if (tabFocus==='today') {
                todayToDoList = Array.from(lists.children)
                simulation=[]
                reRender(simulation, todayToDoList)
                evaluate(todayToDoList, taskInfoPop);
            } else {
                arrOfList[tabFocus] = Array.from(lists.children)
                simulation=[]
                reRender(simulation, arrOfList[tabFocus])
                evaluate(arrOfList[tabFocus], taskInfoPop);
            }
            all = weekToDoList.concat(todayToDoList)
            enumSelfProArr()
            setLength()
        })
    })
}

function enableTodoDetail() {
    const expaBtn = Array.from(document.querySelectorAll('.expandBtn'));
    expaBtn.forEach(ex=>{
        ex.addEventListener('click', ()=>{
            expDia.showModal()
            expDia.style.display = 'flex'
            todoTask.textContent= ex.parentElement.parentElement.firstElementChild.children[1].textContent
            dateDes.textContent = ex.nextElementSibling.textContent;
            descr.textContent = ex.nextElementSibling.nextElementSibling.textContent;
            detectPriorty(ex)
        })
    })
}

function enableCheck(){
    const checkboxes = Array.from(document.querySelectorAll('.checkbox'))
    checkboxes.forEach(cbx=>{
        cbx.addEventListener('change', (e)=>{
            (e.target.checked) ? cbx.parentElement.parentElement.classList.add('blur') : cbx.parentElement.parentElement.classList.remove('blur')
        })
    })
}

function enableEditing() {
    const editImgs = Array.from(document.querySelectorAll('.edit-todo-item'))
    editImgs.forEach(ei=>{
        ei.addEventListener('click', ()=>{
            mode='editing';
            taskItem = ei;
            taskName.value = ei.parentElement.parentElement.firstElementChild.children[1].textContent
            descrTodoInp.value = ei.parentElement.children[2].textContent
            dueDate.value = ei.parentElement.children[1].textContent
            detectPriorty(ei)
            enableForEdit(taskInfoPop)
            SwapFlipBtnNames('Edit')
        })
    })
}

function detectPriorty(ele) {
    if (ele.parentElement.parentElement.style.background==='rgba(0, 255, 0, 0.4)') {
        prio.innerHTML=`This Task Got <span style='color: rgba(0, 255, 0)'> Higher</span> Priority`
        priorityEl.value = 'High'
    }
    else if (ele.parentElement.parentElement.style.background==='rgba(255, 255, 0, 0.4)') {
        prio.innerHTML=`This Task Got <span style='color: rgba(255, 255, 0)'> Medium </span> Priority`
        priorityEl.value = 'Medium'
    }
    else  {
        prio.innerHTML=`This Task Got <span style='color: rgba(255, 0, 0)'> Low </span> Priority`
        priorityEl.value = 'Low'
    }
}

function showEdited(ts) {
    ts.parentElement.parentElement.firstElementChild.children[1].textContent = taskName.value
    ts.parentElement.children[2].textContent = descrTodoInp.value
    ts.parentElement.children[1].textContent = dueDate.value
    ts.parentElement.parentElement.style.background = (pri==='High') ? 'rgb(0, 255, 0, .4)' : (pri==='Medium') ? 'rgb(255, 255, 0, .4)' : 'rgb(255, 0, 0, .4)'
}

const todoTask = document.querySelector('.todo-task')
const dateDes = document.querySelector('.dates')
const descr = document.querySelector('.descr')
const prio = document.querySelector('.prio');

document.querySelector('#close-exp').addEventListener('click', ()=>closeDialoge(expDia))

allTodos.addEventListener('click', ()=>{
    embed(allTodos)
    tabFocus = 'All'
    evaluate(all,taskInfoPop)
})

function reRender(disp, arr) {
    arr.forEach(a=>{
        disp.push(a)
    })
}

function setLength () {
    weekListLength.textContent = weekToDoList.length
    todayListLength.textContent = todayToDoList.length
    noteListLength.textContent = notesList.length
    allListLength.textContent = all.length;
}

function createBg(focusType) {
    focusType.style.background = 'rgb(190, 12, 196)'
}

function removeBg(...arg) {
    arg.forEach(a=>{
        a.style.background = 'rgb(23, 36, 3)'
    })
}

function embed(ele) {
    let arrBgEl = Array.from(document.getElementsByClassName('fc'))
    createBg(ele);
    arrBgEl.splice(arrBgEl.indexOf(ele),1)
    removeBg(...arrBgEl)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFB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O0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ25hdiBtYWluIG1haW4gbWFpbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyJztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgMzVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDUsIDcxKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzclO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuaW1nW2FsdD1cIm1lbnVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uaG9tZS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5uYXYge1xuICAgIGdyaWQtYXJlYTogbmF2O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzMsIDExNiwgOSwgMC45KTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm51IHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjYjdmZjAzO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbiB7XG4gICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzMsIDExNiwgOSwgMC43KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjk3OCk7XG4gICAgcGFkZGluZzogMTRweDtcbn1cbi5lbXB0eS1saXN0LXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9kb0VsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyLWxlZnQ6ICAyMHB4IHNvbGlkIHJnYigzLCAyMiwgNzkpO1xuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2IoMywgMjIsIDc5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gICAgY29sb3I6IGRhcmtibHVlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMTBweDtcbn1cbi50b2RvRWwgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG9FbCA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uYWRkLWxpc3Qge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkwLCAxMiwgMTk2KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtZW51IGxpIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDQ5LCA2MiwgNCwgMC44MDUpO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggM3B4O1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbWVudSBsaTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IGJsYWNrO1xufVxuI3Byb2oge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDQ5LCA2MiwgNCwgMC44MDUpO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAzcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAsIDQsIDEwMSk7XG4gICAgZm9udC1zaXplOiAxMTAlO1xufVxuI25hbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLypwcm9qZWN0IGNyZWF0aW9uIHN0eWxpbmcqL1xuLm5ldy1wcm9qZWN0LWRpYWxvZywgLmV4cGFuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogMjUlO1xuICAgIG1pbi1oZWlnaHQ6IDI1JTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzE5MDM1MDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmV4cGFuZCB7XG4gICAgbWluLXdpZHRoOiA2MCU7XG4gICAgbWF4LWhlaWdodDogNzV2aDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHRvcDogMTQlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmV4cGFuZCBoMiB7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDIxMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5uZXctcHJvamVjdC1kaWFsb2c6OmJhY2tkcm9wLCAudGFzay1pbmZvLXBvcDo6YmFja2Ryb3AsIC5ub3Rlcy1kaWFsb2c6OmJhY2tkcm9wLCAuZXhwYW5kOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMywgMTksIDI2LCAwLjkpO1xufVxuLm5ldy1wcm9qZWN0LWRpYWxvZyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZ2FwOiAxNXB4O1xufVxuLm5ldy1wcm9qZWN0LWRpYWxvZyBkaXYgaW5wdXQge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgIGJhY2tncm91bmQ6IHJnYig3NywgOSwgMTcyLCAwLjYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjcmVhdGUsIC50YXNrLWluZm8tcG9wICNhZGQtdGFzaywgLm5vdGVzLWRpYWxvZyBidXR0b24sICNjbG9zZS1leHAge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkwLCAxMiwgMTk2KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59XG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5leHBhbmRCdG4ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkwLCAxMiwgMTk2KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFzay1pbmZvLXBvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogMzYlO1xuICAgIG1pbi1oZWlnaHQ6IDU4JTtcbiAgICB0b3A6IDI4JTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kOiAjMTkwMzUwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhc2staW5mby1wb3AgaW5wdXQge1xuICAgIGhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI3Rhc2stbmFtZSwgI3ByaW9yaXR5LCAjZGVzLCAjZHVlLWRhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubm90ZXMtZGlhbG9nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogMTklO1xuICAgIG1pbi13aWR0aDogMzklO1xuICAgIHRvcDogMjglO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgMTEsIDExNik7XG59XG4ubm90ZXMtZGlhbG9nIGlucHV0IHtcbiAgICBjb2xvcjogIzE2MDQ2NDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ubm90ZXMtZGlhbG9nIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMjYsIDI5LCAwLjYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5vdGUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6IHJnYig0LCAxMSwgMTE2KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLm5ldy1wcm9qZWN0LWRpYWxvZywgLmV4cGFuZCwgLnRhc2staW5mby1wb3AsLm5vdGUtaXRlbSwgLm5vdGVzLWRpYWxvZyB7XG4gICAgYm9yZGVyOiA1cHggZ3Jvb3ZlIGJsdWV2aW9sZXQ7XG4gICAgYm9yZGVyLXRvcDogMTVweCBncm9vdmUgYmx1ZXZpb2xldDtcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IGdyb292ZSBibHVldmlvbGV0O1xufVxuLmFkZGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucGFyYSB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLmFkZGVkLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMywwLjkpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZGVkLXByb2plY3QgZGl2IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cbiNmb2wtbmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJvai1tZW51ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbi5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21haW4gbWFpbiBtYWluIG1haW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXInO1xuICAgIH1cbiAgICAubmF2IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDExJTtcbiAgICAgICAgbWluLWhlaWdodDogODklO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3MywgMTE2LCA5KTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgaW1nW2FsdD1cIm1lbnVcIl0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMCwwLjcpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJ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SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtJQUNmLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJO1FBQ0k7OzBEQUVrRDtJQUN0RDtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsZUFBZTtRQUNmLFdBQVc7UUFDWCw0QkFBNEI7UUFDNUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsMkJBQTJCO0lBQy9CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ25hdiBtYWluIG1haW4gbWFpbidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgMzVweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDQwLCA1LCA3MSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzclO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuaW1nW2FsdD1cXFwibWVudVxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmhvbWUtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcbi5uYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg3MywgMTE2LCA5LCAwLjkpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm51IHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjYjdmZjAzO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzMsIDExNiwgOSwgMC43KTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDNweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC45NzgpO1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbn1cXG4uZW1wdHktbGlzdC1wbGFjZWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udG9kb0VsIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItbGVmdDogIDIwcHggc29saWQgcmdiKDMsIDIyLCA3OSk7XFxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCByZ2IoMywgMjIsIDc5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLnRvZG9FbCA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb0VsID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5hZGQtbGlzdCB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTAsIDEyLCAxOTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbWVudSBsaSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNDksIDYyLCA0LCAwLjgwNSk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMywgMzYsIDMpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDNweDtcXG4gICAgZm9udC1zaXplOiAxMzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNtZW51IGxpOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG4jcHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg0OSwgNjIsIDQsIDAuODA1KTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAzcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMCwgNCwgMTAxKTtcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbn1cXG4jbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLypwcm9qZWN0IGNyZWF0aW9uIHN0eWxpbmcqL1xcbi5uZXctcHJvamVjdC1kaWFsb2csIC5leHBhbmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1pbi13aWR0aDogMjUlO1xcbiAgICBtaW4taGVpZ2h0OiAyNSU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzE5MDM1MDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZXhwYW5kIHtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IDc1dmg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0b3A6IDE0JTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uZXhwYW5kIGgyIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDIxMik7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5uZXctcHJvamVjdC1kaWFsb2c6OmJhY2tkcm9wLCAudGFzay1pbmZvLXBvcDo6YmFja2Ryb3AsIC5ub3Rlcy1kaWFsb2c6OmJhY2tkcm9wLCAuZXhwYW5kOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsIDE5LCAyNiwgMC45KTtcXG59XFxuLm5ldy1wcm9qZWN0LWRpYWxvZyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLm5ldy1wcm9qZWN0LWRpYWxvZyBkaXYgaW5wdXQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzcsIDksIDE3MiwgMC42KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlLCAudGFzay1pbmZvLXBvcCAjYWRkLXRhc2ssIC5ub3Rlcy1kaWFsb2cgYnV0dG9uLCAjY2xvc2UtZXhwIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTAsIDEyLCAxOTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4uZXhwYW5kQnRuIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTAsIDEyLCAxOTYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2staW5mby1wb3Age1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1pbi13aWR0aDogMzYlO1xcbiAgICBtaW4taGVpZ2h0OiA1OCU7XFxuICAgIHRvcDogMjglO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJhY2tncm91bmQ6ICMxOTAzNTA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2staW5mby1wb3AgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI3Rhc2stbmFtZSwgI3ByaW9yaXR5LCAjZGVzLCAjZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ubm90ZXMtZGlhbG9nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0b3A6IDE5JTtcXG4gICAgbWluLXdpZHRoOiAzOSU7XFxuICAgIHRvcDogMjglO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgMTEsIDExNik7XFxufVxcbi5ub3Rlcy1kaWFsb2cgaW5wdXQge1xcbiAgICBjb2xvcjogIzE2MDQ2NDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm5vdGVzLWRpYWxvZyB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMjYsIDI5LCAwLjYpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5vdGUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig0LCAxMSwgMTE2KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubmV3LXByb2plY3QtZGlhbG9nLCAuZXhwYW5kLCAudGFzay1pbmZvLXBvcCwubm90ZS1pdGVtLCAubm90ZXMtZGlhbG9nIHtcXG4gICAgYm9yZGVyOiA1cHggZ3Jvb3ZlIGJsdWV2aW9sZXQ7XFxuICAgIGJvcmRlci10b3A6IDE1cHggZ3Jvb3ZlIGJsdWV2aW9sZXQ7XFxuICAgIGJvcmRlci1ib3R0b206IDE1cHggZ3Jvb3ZlIGJsdWV2aW9sZXQ7XFxufVxcbi5hZGRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLnBhcmEge1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4uYWRkZWQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi10b3A6IDlweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAzNiwgMywwLjkpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmFkZGVkLXByb2plY3QgZGl2IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMTIwcHg7XFxufVxcbiNmb2wtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvai1tZW51ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgICAuZ3JpZC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYWluIG1haW4gbWFpbiBtYWluJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuICAgIH1cXG4gICAgLm5hdiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMSU7XFxuICAgICAgICBtaW4taGVpZ2h0OiA4OSU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzMsIDExNiwgOSk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuICAgIGltZ1thbHQ9XFxcIm1lbnVcXFwiXSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDAsMC43KTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBjb2xsYXBzZSBmcm9tICcuL2Fzc2V0cy9jb2xsYXBzZS5wbmcnO1xuaW1wb3J0IGRlbGUgZnJvbSAnLi9hc3NldHMvZGVsZXRlLnBuZyc7XG5pbXBvcnQgZWRpdHQgZnJvbSAnLi9hc3NldHMvZWRpdC5wbmcnXG5pbXBvcnQgZm9sZGVyIGZyb20gJy4vYXNzZXRzL2ZvbGRlci5wbmcnXG5pbXBvcnQgaG9tZWUgZnJvbSAnLi9hc3NldHMvaG9tZS5wbmcnXG5pbXBvcnQgbWVudXUgZnJvbSAnLi9hc3NldHMvbWVudS5wbmcnXG5pbXBvcnQgdG9kb28gZnJvbSAnLi9hc3NldHMvdG9kby5qcGcnXG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjclRvZG8sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjclRvZG8gPSBkZXNjclRvZG87XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNsYXNzIE5vdGVMaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuY29uc3QgbWVudUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51SW1nJyk7XG5tZW51SW1nLnNyYyA9IG1lbnV1XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jylcbm1lbnVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBuYXYuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMXMnXG4gICAgICAgIGlmIChuYXYuc3R5bGUudHJhbnNmb3JtID09PSAndHJhbnNsYXRlWCgwJSknKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgICAgIG1lbnVJbWcuc3JjID0gbWVudXVcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICBuYXYuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCUpJztcbiAgICAgICAgICAgIG1lbnVJbWcuc3JjID0gY29sbGFwc2VcbiAgICAgICAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjEwKSB7XG4gICAgICAgIG5hdi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwJSknXG4gICAgfWVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoPD02MTApIHtcbiAgICAgICAgbmF2LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgICAgbWVudUltZy5zcmM9bWVudXVcbiAgICB9XG59KVxuXG5jb25zdCBwcm9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZGlhbG9nJyk7XG5jb25zdCB0YXNrSW5mb1BvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWluZm8tcG9wJyk7XG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLW5hbWUnKTtcbmNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUnKTtcblxuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xuYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwcm9EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgcHJvRGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gKHByb2plY3ROYW1lLnZhbHVlID09PSAnJykgPyAnQ2xvc2UnIDogJ0NyZWF0ZSdcbn0pXG5cbmNvbnN0IHByb2pNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otbWVudScpO1xuY29uc3QgdG9kb0xpc3RzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuZnVuY3Rpb24gcmVtb3ZlRWwoZXYpIHtcbiAgICBkZWxldGUgYXJyT2ZMaXN0W2V2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQudGl0bGVdXG4gICAgbmFtZXMuc3BsaWNlKG5hbWVzLmluZGV4T2YoZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50aXRsZSksMSlcbiAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbn1cblxubGV0IG5hbWVzID0gW107XG5sZXQgYXJyT2ZMaXN0ID0ge307XG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9sZGVyID0gKG5hbWUpID0+IHtcbiAgICBpZiAoK3Byb2plY3ROYW1lLnZhbHVlPT09MCkge1xuICAgICAgICBhbGVydCgnWW91IGNhblxcJ3QgbGVhdmUgdGhlIGZlaWxkIGVtcHR5IG9yIHNwYWNlIGRvemVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZGVkLXByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9sLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtmb2xkZXJ9IHdpZHRoPVwiMTVweFwiIGFsdD1cImZvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1uYW1lXCI+JHtuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7ZGVsZX0gd2lkdGg9XCIxNXB4XCIgY2xhc3M9XCJkZWwtZm9sZGVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3VzZXItcHJvamVjdCcsICdiZycpXG4gICAgICAgIHByb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZmMnKTtcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IG5hbWVcbiAgICAgICAgbmFtZXMucHVzaChuYW1lKVxuICAgICAgICBwcm9qTWVudS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgXG4gICAgICAgIGFyck9mTGlzdFtuYW1lXSA9IFtdO1xuICAgICAgICBsZXQgYXJyT2ZGb2wgPSBBcnJheS5mcm9tKHByb2pNZW51LmNoaWxkcmVuKVxuICAgICAgICBhcnJPZkZvbC5mb3JFYWNoKHBmPT57XG4gICAgICAgICAgICBwZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgZW1iZWQocGYuZmlyc3RFbGVtZW50Q2hpbGQpXG4gICAgICAgICAgICAgICAgdGFiRm9jdXM9cGYudGl0bGU7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbj1bXVxuICAgICAgICAgICAgICAgIHJlUmVuZGVyKHNpbXVsYXRpb24sIGFyck9mTGlzdFt0YWJGb2N1c10pXG4gICAgICAgICAgICAgICAgZXZhbHVhdGUoYXJyT2ZMaXN0W3RhYkZvY3VzXSwgdGFza0luZm9Qb3ApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBjbG9zZURpYWxvZ2UocHJvRGlhbG9nKVxuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBjb25zdCBkZWxJbWdBcnIgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtZm9sZGVyJykpO1xuICAgIGRlbEltZ0Fyci5mb3JFYWNoKGltID0+IGltLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+cmVtb3ZlRWwoZSkpKSBcbn1cblxuZnVuY3Rpb24gY2xvc2VEaWFsb2dlKHRoZURpYWxvZykge1xuICAgIHRoZURpYWxvZy5jbG9zZSgpXG4gICAgdGhlRGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbnByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCk9PntcbiAgICAocHJvamVjdE5hbWUudmFsdWUgIT09ICcnKSA/IGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUnIDogY3JlYXRlQnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xufSlcblxuY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAoY3JlYXRlQnRuLnRleHRDb250ZW50ID09PSAnQ2xvc2UnKSA/IGNsb3NlRGlhbG9nZShwcm9EaWFsb2cpIDogXG4gICAgIChuYW1lcy5pbmNsdWRlcyhwcm9qZWN0TmFtZS52YWx1ZSkpID8gYWxlcnQoYCcke3Byb2plY3ROYW1lLnZhbHVlfScgaXMgYmVpbmcgdXNlZGApIDogY3JlYXRlUHJvamVjdEZvbGRlcihwcm9qZWN0TmFtZS52YWx1ZSlcbn0pXG5cbmNvbnN0IGFsbExpc3RMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25lJylcbmNvbnN0IHRvZGF5TGlzdExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50d28nKVxuY29uc3Qgd2Vla0xpc3RMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhyZWUnKVxuY29uc3Qgbm90ZUxpc3RMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm91cicpXG5jb25zdCBob21lSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtdGFiLWltZycpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVtbycpLnNyYyA9IHRvZG9vXG5cbmhvbWVJbWcuc3JjPWhvbWVlXG5ob21lSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB0b2RvTGlzdHMuaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwiaG9tZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7dG9kb299IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBhbHQ9XCJ0b2RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IGBcbn0pXG5cbmNvbnN0IGZvclRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCBpbldlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW4td2VlaycpO1xuY29uc3QgYWxsVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRvZG9zJyk7XG5jb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuY29uc3QgcHJpb3JpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpXG5cbmxldCBwcmk7XG5wcmlvcml0eUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XG4gICAgcHJpID0gcHJpb3JpdHlFbC52YWx1ZTtcbiAgICAobW9kZT09PSdjcmVhdGUnKSA/IFN3YXBGbGlwQnRuTmFtZXMoJ0FkZCBUYXNrJykgOiBTd2FwRmxpcEJ0bk5hbWVzKCdFZGl0Jylcbn0pXG5cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKVxuY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpXG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKVxuY29uc3QgZGVzY3JUb2RvSW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cbmxldCBtb2RlOyAvLyBlaXRoZXIgY3JlYXRlIG9yIGVkaXRcbmZ1bmN0aW9uIGVuYWJsZVBvcChwb3BVcFR5cGUpIHtcbiAgICBsZXQgYWRkTGlzdEVsdHNBcnIgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtbGlzdCcpKVxuICAgIGFkZExpc3RFbHRzQXJyLmZvckVhY2goYWQ9PntcbiAgICAgICAgYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIG1vZGU9J2NyZWF0ZSdcbiAgICAgICAgICAgIFN3YXBGbGlwQnRuTmFtZXMoJ0FkZCBUYXNrJylcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cz09PSdBbGwnKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnTm9wZSBoZXJlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9wVXBUeXBlLnNob3dNb2RhbCgpXG4gICAgICAgICAgICAgICAgcG9wVXBUeXBlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZW5hYmxlRm9yRWRpdChwb3BVcFR5cGUpIHtcbiAgICBwb3BVcFR5cGUuc2hvd01vZGFsKClcbiAgICBwb3BVcFR5cGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cblxubGV0IFRvRG9saXN0RGlzcGxheSA9IGBcbiAgICAgPGRpdiBjbGFzcz1cImVtcHR5LWxpc3QtcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJVwiIGlkPVwiZW1wdHlcIj5FbXB0eSBMaXN0ITwvZGl2PlxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1saXN0XCI+QWRkIE9uZTwvYnV0dG9uPlxuICAgICA8L2Rpdj5cbmBcbmxldCB1cGRhdGVkTGlzdCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZGVkXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiIGlkPVwibGlzdFwiPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWxpc3RcIj5BZGQgT25lPC9idXR0b24+XG5gXG5sZXQgbm90ZVNpbXUgPSBbXTtcbmxldCBzaW11bGF0aW9uID0gW107XG5cbmxldCB3ZWVrVG9Eb0xpc3QgPSBbXTtcbmxldCB0b2RheVRvRG9MaXN0ID0gW107XG5sZXQgbm90ZXNMaXN0ID0gW107IFxubGV0IGFsbCA9IFtdO1xuXG5mdW5jdGlvbiBldmFsdWF0ZSh0b2RvVHlwZSwgcG9wVXBUeXBlKSB7XG4gICAgaWYgKHRvZG9UeXBlLmxlbmd0aD09PTApICB7XG4gICAgICAgIHRvZG9MaXN0cy5pbm5lckhUTUwgPSBUb0RvbGlzdERpc3BsYXk7XG4gICAgICAgIGVuYWJsZVBvcChwb3BVcFR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0b2RvTGlzdHMuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lPT09J2hvbWUnKSB7XG4gICAgICAgICAgICB0b2RvTGlzdHMuaW5uZXJIVE1MID0gVG9Eb2xpc3REaXNwbGF5O1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1saXN0LXBsYWNlaG9sZGVyJykuaW5uZXJIVE1MID0gdXBkYXRlZExpc3Q7XG4gICAgICAgIHRvZG9UeXBlLmZvckVhY2gobD0+e1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKS5hcHBlbmRDaGlsZChsKTtcbiAgICAgICAgICAgIGVuYWJsZVBvcChwb3BVcFR5cGUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5sZXQgdGFiRm9jdXM7XG5pbldlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgZW1iZWQoaW5XZWVrKVxuICAgIHRhYkZvY3VzID0gJ3dlZWsnO1xuICAgIHNpbXVsYXRpb24gPSBbXVxuICAgIHJlUmVuZGVyKHNpbXVsYXRpb24sIHdlZWtUb0RvTGlzdClcbiAgICBldmFsdWF0ZSh3ZWVrVG9Eb0xpc3QsIHRhc2tJbmZvUG9wKTtcbn0pO1xuXG5mb3JUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZW1iZWQoZm9yVG9kYXkpXG4gICAgdGFiRm9jdXMgPSAndG9kYXknO1xuICAgIHNpbXVsYXRpb249W11cbiAgICByZVJlbmRlcihzaW11bGF0aW9uLCB0b2RheVRvRG9MaXN0KVxuICAgIGV2YWx1YXRlKHRvZGF5VG9Eb0xpc3QsdGFza0luZm9Qb3ApXG59KTtcblxuLy8gbm90ZXMgdGhpbmdcbmNvbnN0IG5vdGVzRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWRpYWxvZycpO1xuY29uc3QgYWRkTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbm90ZScpO1xuY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCBub3RlRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtZGVzYycpO1xubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4ge1xuICAgIHRhYkZvY3VzID0gJ25vdGUnXG4gICAgZW1iZWQobm90ZXMpXG4gICAgdG9kb0xpc3RzLmlubmVySFRNTCA9IFRvRG9saXN0RGlzcGxheVxuICAgIGVuYWJsZVBvcChub3Rlc0RpYWxvZylcbiAgICBldmFsdWF0ZShub3Rlc0xpc3QsIG5vdGVzRGlhbG9nKVxuICAgIG5vdGVTaW11PVtdXG4gICAgcmVSZW5kZXIobm90ZVNpbXUsIG5vdGVzTGlzdClcbn0pXG5cbmZ1bmN0aW9uIFN3YXBGbGlwQnRuTmFtZXMobmFtZSkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkcycpKS5mb3JFYWNoKGZsPT57XG4gICAgICAgIGZsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCk9PntcbiAgICAgICAgICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAodGFza05hbWUudmFsdWUhPT0nJyAmJiBkZXNjclRvZG9JbnAudmFsdWUhPT0nJyAmJiBkdWVEYXRlLnZhbHVlIT09JycpID8gYCR7bmFtZX1gIDogJ0Nsb3NlJ1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgcHJpb3JpdHlFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+e1xuICAgICAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gKG1vZGU9PT0nZWRpdGluZycpID8gICdFZGl0JyA6XG4gICAgICAgIChtb2RlPT09J2NyZWF0ZScgJiYgKHRhc2tOYW1lLnZhbHVlIT09JycgJiYgZGVzY3JUb2RvSW5wLnZhbHVlIT09JycgJiYgZHVlRGF0ZS52YWx1ZSE9PScnKSkgPyAnQWRkIFRhc2snIDogJ0Nsb3NlJ1xuICAgIH0pXG59XG5cbmxldCB0YXNrSXRlbTsgLy8gaW1wbGljYXRpb24gZm9yIHdoZXJlIHRoZSBlZGl0aW5nIGlzIGhhcHBlbmluZyBcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGlmICgodGFza05hbWUudmFsdWU9PT0gJycpIHx8IChkZXNjclRvZG9JbnAudmFsdWU9PT0nJykgfHwgZHVlRGF0ZS52YWx1ZT09PScnIHx8IChwcmk9PT0nJykpIHtcbiAgICAgICAgY2xvc2VEaWFsb2dlKHRhc2tJbmZvUG9wKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgKG1vZGU9PT0nY3JlYXRlJykgPyBjcmVhdGVUb2RvRWwoKSA6IHNob3dFZGl0ZWQodGFza0l0ZW0pXG4gICAgICAgIGFsbCA9IHdlZWtUb0RvTGlzdC5jb25jYXQodG9kYXlUb0RvTGlzdClcbiAgICAgICAgZW51bVNlbGZQcm9BcnIoKVxuICAgICAgICBzZXRMZW5ndGgoKVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZHMnKSkuZm9yRWFjaChmbD0+e2ZsLnZhbHVlID0gJyd9KVxuICAgICAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xuICAgICAgICBjbG9zZURpYWxvZ2UodGFza0luZm9Qb3ApXG4gICAgfVxufSlcblxuQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZS1maWVsZHMnKSkuZm9yRWFjaChuZj0+e1xuICAgIG5mLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCk9PntcbiAgICAgICAgYWRkTm90ZS50ZXh0Q29udGVudCA9IChub3RlVGl0bGUudmFsdWUhPT0gJycgJiYgbm90ZURlcy52YWx1ZSE9PScnKSA/ICdBZGQnIDogJ0Nsb3NlJ1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBlbnVtU2VsZlByb0FycigpIHtcbiAgICBsZXQgb2JqQXJyID0gT2JqZWN0LnZhbHVlcyhhcnJPZkxpc3QpO1xuICAgIG9iakFyci5mb3JFYWNoKG9hPT57XG4gICAgICAgIGFsbCA9IGFsbC5jb25jYXQob2EpXG4gICAgfSlcbn1cblxuYWRkTm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgaWYgKG5vdGVUaXRsZS52YWx1ZT09PScnIHx8IG5vdGVEZXMudmFsdWU9PT0nJykge1xuICAgICAgICBjbG9zZURpYWxvZ2Uobm90ZXNEaWFsb2cpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjbG9zZURpYWxvZ2Uobm90ZXNEaWFsb2cpXG4gICAgICAgIGNyZWF0ZU5vdGUoKVxuICAgICAgICBzZXRMZW5ndGgoKVxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlLWZpZWxkcycpKS5mb3JFYWNoKG5mPT57bmYudmFsdWU9Jyd9KVxuICAgICAgICBhZGROb3RlLnRleHRDb250ZW50PSdDbG9zZSdcbiAgICB9XG59KVxuXG5jb25zdCBjcmVhdGVOb3RlID0gKCkgPT57XG4gICAgbGV0IG5vdGVMaXN0T2JqID0gbmV3IE5vdGVMaXN0KG5vdGVUaXRsZS52YWx1ZSxub3RlRGVzLnZhbHVlKTtcbiAgICBjb25zdCBub3RlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVDb250LmNsYXNzTGlzdC5hZGQoJ25vdGUtaXRlbScpXG4gICAgbm90ZUNvbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6IDE4cHg7IGFsaWduLXNlbGY6IGZsZXgtZW5kOyBtYXJnaW4tYm90dG9tOiAtMjBweFwiIHNyYz0ke2RlbGV9IGNsYXNzPSdkZWxldGUtbm90ZScgYWx0PVwiZGVsZXRlLW5vdGVcIj5cbiAgICAgICAgPGgyIGNvbnRlbnRlZGl0YWJsZSBzdHlsZT1cImNvbG9yOiByZ2IoMjU1LCAxNTMsIDApXCIgY2xhc3M9XCJ0dGxcIj4ke25vdGVMaXN0T2JqLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwicGFyYVwiIGNvbnRlbnRlZGl0YWJsZT4ke25vdGVMaXN0T2JqLmRlc2NyaXB0aW9ufTwvcD5cbiAgICBgXG4gICAgbm90ZXNMaXN0LnB1c2gobm90ZUNvbnQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1saXN0LXBsYWNlaG9sZGVyJykuaW5uZXJIVE1MID0gdXBkYXRlZExpc3Q7XG4gICAgbm90ZVNpbXUucHVzaChub3RlQ29udCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKS5jbGFzc0xpc3QuYWRkKCdhZGRlZCcpXG4gICAgbm90ZVNpbXUuZm9yRWFjaChlbD0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKS5hcHBlbmRDaGlsZChlbCkpXG4gICAgZW5hYmxlUG9wKG5vdGVzRGlhbG9nKVxuICAgIGVuYWJsZU5vdGVEZWxldGUoKVxufVxuXG5jb25zdCBleHBEaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kJyk7XG5jb25zdCBjcmVhdGVUb2RvRWwgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb09iaiA9IG5ldyBUb2RvKHRhc2tOYW1lLnZhbHVlLCBkZXNjclRvZG9JbnAudmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaSlcbiAgICBjb25zdCB0b2RvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRWwuY2xhc3NMaXN0LmFkZCgndG9kb0VsJylcbiAgICB0b2RvRWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNoZWNrYm94XCIgc3R5bGU9J3dpZHRoOiAyNXB4OyBoZWlnaHQ6IDI1cHg7YWNjZW50LWNvbG9yOiBncmVlbicgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImlzRG9uZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RvZG9PYmoudGl0bGV9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZEJ0blwiPkV4cGFuZDwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0b2RvT2JqLmR1ZURhdGV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT0nZGlzcGxheTogbm9uZSc+JHt0b2RvT2JqLmRlc2NyVG9kb308L3NwYW4+XG4gICAgICAgIDxpbWcgc3JjPSR7ZWRpdHR9IHRpdGxlPSdFZGl0JyBhbHQ9XCJlZGl0XCIgd2lkdGg9XCIxOHB4XCIgY2xhc3M9XCJlZGl0LXRvZG8taXRlbVwiPlxuICAgICAgICA8aW1nIHNyYz0ke2RlbGV9IGFsdD1cImRlbGV0ZVwiICB0aXRsZT0nRGVsZXRlJyB3aWR0aD1cIjE4cHhcIiBjbGFzcz1cImRlbC10b2RvLWl0ZW1cIiA+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHRvZG9FbC5zdHlsZS5iYWNrZ3JvdW5kID0gKHByaT09PSdIaWdoJykgPyAncmdiKDAsIDI1NSwgMCwgLjQpJyA6IChwcmk9PT0nTWVkaXVtJykgPyAncmdiKDI1NSwgMjU1LCAwLCAuNCknIDogJ3JnYigyNTUsIDAsIDAsIC40KSc7XG4gICAgKHRhYkZvY3VzPT09J3RvZGF5JykgPyB0b2RheVRvRG9MaXN0LnB1c2godG9kb0VsKSA6ICh0YWJGb2N1cz09PSd3ZWVrJykgPyB3ZWVrVG9Eb0xpc3QucHVzaCh0b2RvRWwpIDogYXJyT2ZMaXN0W3RhYkZvY3VzXSA/IGFyck9mTGlzdFt0YWJGb2N1c10ucHVzaCh0b2RvRWwpIDogdW5kZWZpbmVkO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5LWxpc3QtcGxhY2Vob2xkZXInKS5pbm5lckhUTUwgPSB1cGRhdGVkTGlzdDtcbiAgICBzaW11bGF0aW9uLnB1c2godG9kb0VsKTtcbiAgICBzaW11bGF0aW9uLmZvckVhY2goZWw9PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0JykuYXBwZW5kQ2hpbGQoZWwpKVxuICAgIFxuICAgIGVuYWJsZVBvcCh0YXNrSW5mb1BvcClcbiAgICBlbmFibGVUb2RvRGV0YWlsKClcbiAgICBlbmFibGVUb2RvRGVsZXRlKClcbiAgICBlbmFibGVDaGVjaygpXG4gICAgZW5hYmxlRWRpdGluZygpXG59XG5cbmZ1bmN0aW9uIGVuYWJsZU5vdGVEZWxldGUoKSB7XG4gICAgY29uc3QgZGVsTm90ZUFyciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtbm90ZVwiKSk7XG4gICAgZGVsTm90ZUFyci5mb3JFYWNoKGRuYT0+e1xuICAgICAgICBkbmEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgZG5hLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgIG5vdGVzTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKS5jaGlsZHJlbilcbiAgICAgICAgICAgIGV2YWx1YXRlKG5vdGVzTGlzdCwgbm90ZXNEaWFsb2cpXG4gICAgICAgICAgICBzZXRMZW5ndGgoKVxuICAgICAgICAgICAgbm90ZVNpbXU9W11cbiAgICAgICAgICAgIHJlUmVuZGVyKG5vdGVTaW11LCBub3Rlc0xpc3QpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZW5hYmxlVG9kb0RlbGV0ZSgpIHtcbiAgICBjb25zdCBkZWxUb2RvSXRlbUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdG9kby1pdGVtJykpO1xuICAgIGRlbFRvZG9JdGVtTGlzdC5mb3JFYWNoKGR0aT0+e1xuICAgICAgICBkdGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIGxldCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Jyk7XG4gICAgICAgICAgICBkdGkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgICAgICBpZiAodGFiRm9jdXM9PT0nd2VlaycpIHtcbiAgICAgICAgICAgICAgICB3ZWVrVG9Eb0xpc3QgPSBBcnJheS5mcm9tKGxpc3RzLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb249W11cbiAgICAgICAgICAgICAgICByZVJlbmRlcihzaW11bGF0aW9uLCB3ZWVrVG9Eb0xpc3QpXG4gICAgICAgICAgICAgICAgZXZhbHVhdGUod2Vla1RvRG9MaXN0LCB0YXNrSW5mb1BvcCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhYkZvY3VzPT09J3RvZGF5Jykge1xuICAgICAgICAgICAgICAgIHRvZGF5VG9Eb0xpc3QgPSBBcnJheS5mcm9tKGxpc3RzLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb249W11cbiAgICAgICAgICAgICAgICByZVJlbmRlcihzaW11bGF0aW9uLCB0b2RheVRvRG9MaXN0KVxuICAgICAgICAgICAgICAgIGV2YWx1YXRlKHRvZGF5VG9Eb0xpc3QsIHRhc2tJbmZvUG9wKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyT2ZMaXN0W3RhYkZvY3VzXSA9IEFycmF5LmZyb20obGlzdHMuY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbj1bXVxuICAgICAgICAgICAgICAgIHJlUmVuZGVyKHNpbXVsYXRpb24sIGFyck9mTGlzdFt0YWJGb2N1c10pXG4gICAgICAgICAgICAgICAgZXZhbHVhdGUoYXJyT2ZMaXN0W3RhYkZvY3VzXSwgdGFza0luZm9Qb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsID0gd2Vla1RvRG9MaXN0LmNvbmNhdCh0b2RheVRvRG9MaXN0KVxuICAgICAgICAgICAgZW51bVNlbGZQcm9BcnIoKVxuICAgICAgICAgICAgc2V0TGVuZ3RoKClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlbmFibGVUb2RvRGV0YWlsKCkge1xuICAgIGNvbnN0IGV4cGFCdG4gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmRCdG4nKSk7XG4gICAgZXhwYUJ0bi5mb3JFYWNoKGV4PT57XG4gICAgICAgIGV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGV4cERpYS5zaG93TW9kYWwoKVxuICAgICAgICAgICAgZXhwRGlhLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgIHRvZG9UYXNrLnRleHRDb250ZW50PSBleC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcbiAgICAgICAgICAgIGRhdGVEZXMudGV4dENvbnRlbnQgPSBleC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBkZXNjci50ZXh0Q29udGVudCA9IGV4Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBkZXRlY3RQcmlvcnR5KGV4KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGVuYWJsZUNoZWNrKCl7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JykpXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKGNieD0+e1xuICAgICAgICBjYnguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT57XG4gICAgICAgICAgICAoZS50YXJnZXQuY2hlY2tlZCkgPyBjYngucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JsdXInKSA6IGNieC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZW5hYmxlRWRpdGluZygpIHtcbiAgICBjb25zdCBlZGl0SW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdG9kby1pdGVtJykpXG4gICAgZWRpdEltZ3MuZm9yRWFjaChlaT0+e1xuICAgICAgICBlaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBtb2RlPSdlZGl0aW5nJztcbiAgICAgICAgICAgIHRhc2tJdGVtID0gZWk7XG4gICAgICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IGVpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblsxXS50ZXh0Q29udGVudFxuICAgICAgICAgICAgZGVzY3JUb2RvSW5wLnZhbHVlID0gZWkucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS50ZXh0Q29udGVudFxuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IGVpLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnRcbiAgICAgICAgICAgIGRldGVjdFByaW9ydHkoZWkpXG4gICAgICAgICAgICBlbmFibGVGb3JFZGl0KHRhc2tJbmZvUG9wKVxuICAgICAgICAgICAgU3dhcEZsaXBCdG5OYW1lcygnRWRpdCcpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGV0ZWN0UHJpb3J0eShlbGUpIHtcbiAgICBpZiAoZWxlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kPT09J3JnYmEoMCwgMjU1LCAwLCAwLjQpJykge1xuICAgICAgICBwcmlvLmlubmVySFRNTD1gVGhpcyBUYXNrIEdvdCA8c3BhbiBzdHlsZT0nY29sb3I6IHJnYmEoMCwgMjU1LCAwKSc+IEhpZ2hlcjwvc3Bhbj4gUHJpb3JpdHlgXG4gICAgICAgIHByaW9yaXR5RWwudmFsdWUgPSAnSGlnaCdcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kPT09J3JnYmEoMjU1LCAyNTUsIDAsIDAuNCknKSB7XG4gICAgICAgIHByaW8uaW5uZXJIVE1MPWBUaGlzIFRhc2sgR290IDxzcGFuIHN0eWxlPSdjb2xvcjogcmdiYSgyNTUsIDI1NSwgMCknPiBNZWRpdW0gPC9zcGFuPiBQcmlvcml0eWBcbiAgICAgICAgcHJpb3JpdHlFbC52YWx1ZSA9ICdNZWRpdW0nXG4gICAgfVxuICAgIGVsc2UgIHtcbiAgICAgICAgcHJpby5pbm5lckhUTUw9YFRoaXMgVGFzayBHb3QgPHNwYW4gc3R5bGU9J2NvbG9yOiByZ2JhKDI1NSwgMCwgMCknPiBMb3cgPC9zcGFuPiBQcmlvcml0eWBcbiAgICAgICAgcHJpb3JpdHlFbC52YWx1ZSA9ICdMb3cnXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93RWRpdGVkKHRzKSB7XG4gICAgdHMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGFza05hbWUudmFsdWVcbiAgICB0cy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gZGVzY3JUb2RvSW5wLnZhbHVlXG4gICAgdHMucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IGR1ZURhdGUudmFsdWVcbiAgICB0cy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IChwcmk9PT0nSGlnaCcpID8gJ3JnYigwLCAyNTUsIDAsIC40KScgOiAocHJpPT09J01lZGl1bScpID8gJ3JnYigyNTUsIDI1NSwgMCwgLjQpJyA6ICdyZ2IoMjU1LCAwLCAwLCAuNCknXG59XG5cbmNvbnN0IHRvZG9UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGFzaycpXG5jb25zdCBkYXRlRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGVzJylcbmNvbnN0IGRlc2NyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyJylcbmNvbnN0IHByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbycpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZXhwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+Y2xvc2VEaWFsb2dlKGV4cERpYSkpXG5cbmFsbFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBlbWJlZChhbGxUb2RvcylcbiAgICB0YWJGb2N1cyA9ICdBbGwnXG4gICAgZXZhbHVhdGUoYWxsLHRhc2tJbmZvUG9wKVxufSlcblxuZnVuY3Rpb24gcmVSZW5kZXIoZGlzcCwgYXJyKSB7XG4gICAgYXJyLmZvckVhY2goYT0+e1xuICAgICAgICBkaXNwLnB1c2goYSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXRMZW5ndGggKCkge1xuICAgIHdlZWtMaXN0TGVuZ3RoLnRleHRDb250ZW50ID0gd2Vla1RvRG9MaXN0Lmxlbmd0aFxuICAgIHRvZGF5TGlzdExlbmd0aC50ZXh0Q29udGVudCA9IHRvZGF5VG9Eb0xpc3QubGVuZ3RoXG4gICAgbm90ZUxpc3RMZW5ndGgudGV4dENvbnRlbnQgPSBub3Rlc0xpc3QubGVuZ3RoXG4gICAgYWxsTGlzdExlbmd0aC50ZXh0Q29udGVudCA9IGFsbC5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJnKGZvY3VzVHlwZSkge1xuICAgIGZvY3VzVHlwZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOTAsIDEyLCAxOTYpJ1xufVxuXG5mdW5jdGlvbiByZW1vdmVCZyguLi5hcmcpIHtcbiAgICBhcmcuZm9yRWFjaChhPT57XG4gICAgICAgIGEuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjMsIDM2LCAzKSdcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlbWJlZChlbGUpIHtcbiAgICBsZXQgYXJyQmdFbCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmMnKSlcbiAgICBjcmVhdGVCZyhlbGUpO1xuICAgIGFyckJnRWwuc3BsaWNlKGFyckJnRWwuaW5kZXhPZihlbGUpLDEpXG4gICAgcmVtb3ZlQmcoLi4uYXJyQmdFbClcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=