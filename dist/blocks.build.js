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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_arrow_banner__ = __webpack_require__(/*! ./block/arrow-banner */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_articles_avatar__ = __webpack_require__(/*! ./block/articles-avatar */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_articles_condensed__ = __webpack_require__(/*! ./block/articles-condensed */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_authors_extract__ = __webpack_require__(/*! ./block/authors-extract */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_banner_basic__ = __webpack_require__(/*! ./block/banner-basic */ 6);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2svYXJyb3ctYmFubmVyJztcbmltcG9ydCAnLi9ibG9jay9hcnRpY2xlcy1hdmF0YXInO1xuaW1wb3J0ICcuL2Jsb2NrL2FydGljbGVzLWNvbmRlbnNlZCc7XG5pbXBvcnQgJy4vYmxvY2svYXV0aG9ycy1leHRyYWN0JztcbmltcG9ydCAnLi9ibG9jay9iYW5uZXItYmFzaWMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** ./src/block/arrow-banner.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(/*! ../settings */ 2);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar TextControl = wp.components.TextControl;\n\nvar BlockTitle = __('Banner Arrow');\n\n\nregisterBlockType('bonseo/block-bs-arrow-banner', {\n\ttitle: BlockTitle,\n\ticon: __WEBPACK_IMPORTED_MODULE_0__settings__[\"b\" /* Icons */].down,\n\tcategory: 'bonseo-blocks',\n\tkeywords: __WEBPACK_IMPORTED_MODULE_0__settings__[\"a\" /* CoreKeywords */],\n\tedit: function edit(_ref) {\n\t\tvar posts = _ref.posts,\n\t\t    className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\tBlockTitle\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Título del banner'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__content',\n\t\t\t\tlabel: __('Frase del banner'),\n\t\t\t\tvalue: attributes.content,\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__cta',\n\t\t\t\tlabel: __('CTA'),\n\t\t\t\tvalue: attributes.cta,\n\t\t\t\tonChange: function onChange(cta) {\n\t\t\t\t\treturn setAttributes({ cta: cta });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__url',\n\t\t\t\tlabel: __('Url o Email(mailto:)'),\n\t\t\t\tvalue: attributes.url,\n\t\t\t\tonChange: function onChange(url) {\n\t\t\t\t\treturn setAttributes({ url: url });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9hcnJvdy1iYW5uZXIuanM/YTA4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIFRleHRDb250cm9sID0gd3AuY29tcG9uZW50cy5UZXh0Q29udHJvbDtcblxudmFyIEJsb2NrVGl0bGUgPSBfXygnQmFubmVyIEFycm93Jyk7XG5pbXBvcnQgeyBDb3JlS2V5d29yZHMsIEljb25zIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYm9uc2VvL2Jsb2NrLWJzLWFycm93LWJhbm5lcicsIHtcblx0dGl0bGU6IEJsb2NrVGl0bGUsXG5cdGljb246IEljb25zLmRvd24sXG5cdGNhdGVnb3J5OiAnYm9uc2VvLWJsb2NrcycsXG5cdGtleXdvcmRzOiBDb3JlS2V5d29yZHMsXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBwb3N0cyA9IF9yZWYucG9zdHMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2gyJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0QmxvY2tUaXRsZVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3RpdGxlJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdUw610dWxvIGRlbCBiYW5uZXInKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0aXRsZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHRpdGxlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX2NvbnRlbnQnLFxuXHRcdFx0XHRsYWJlbDogX18oJ0ZyYXNlIGRlbCBiYW5uZXInKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fY3RhJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdDVEEnKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY3RhLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY3RhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjdGE6IGN0YSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX191cmwnLFxuXHRcdFx0XHRsYWJlbDogX18oJ1VybCBvIEVtYWlsKG1haWx0bzopJyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnVybCxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHVybCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdXJsOiB1cmwgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYXJyb3ctYmFubmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: CoreKeywords, Icons */
/*! exports used: CoreKeywords, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CoreKeywords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return Icons; });\nvar __ = wp.i18n.__;\n\nvar CoreKeywords = [__('BonSeo'), __('BS'), __('CORE')];\n\nvar Icons = {\n\tquote: 'editor-quote',\n\tworld: 'admin-site',\n\twriter: 'welcome-write-blog',\n\tpile: 'images-alt',\n\tdown: 'arrow-down-alt2',\n\tminus: 'minus'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy5qcz9iZDkyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187XG5cbmV4cG9ydCB2YXIgQ29yZUtleXdvcmRzID0gW19fKCdCb25TZW8nKSwgX18oJ0JTJyksIF9fKCdDT1JFJyldO1xuXG5leHBvcnQgdmFyIEljb25zID0ge1xuXHRxdW90ZTogJ2VkaXRvci1xdW90ZScsXG5cdHdvcmxkOiAnYWRtaW4tc2l0ZScsXG5cdHdyaXRlcjogJ3dlbGNvbWUtd3JpdGUtYmxvZycsXG5cdHBpbGU6ICdpbWFnZXMtYWx0Jyxcblx0ZG93bjogJ2Fycm93LWRvd24tYWx0MicsXG5cdG1pbnVzOiAnbWludXMnXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NldHRpbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/block/articles-avatar.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(/*! ../settings */ 2);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar withSelect = wp.data.withSelect;\n\nvar BlockTitle = __('Avatar Articles');\n\n\nregisterBlockType('bonseo/block-bs-articles-avatar', {\n\ttitle: BlockTitle,\n\ticon: __WEBPACK_IMPORTED_MODULE_0__settings__[\"b\" /* Icons */].writer,\n\tcategory: 'bonseo-blocks',\n\tkeywords: __WEBPACK_IMPORTED_MODULE_0__settings__[\"a\" /* CoreKeywords */],\n\n\tedit: withSelect(function (select) {\n\t\tvar _select = select('core'),\n\t\t    getEntityRecords = _select.getEntityRecords,\n\t\t    getPostTypes = _select.getPostTypes;\n\n\t\tvar query = { per_page: -1, hide_empty: true };\n\t\treturn {\n\t\t\tcategories: getEntityRecords('taxonomy', 'category', query),\n\t\t\ttypes: getPostTypes(),\n\t\t\tbrands: wp.apiRequest('/bonseo/v1/brand')\n\t\t};\n\t})(function (props) {\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\tif (!props.categories) {\n\t\t\treturn \"Loading...\";\n\t\t}\n\n\t\tif (props.categories.length === 0) {\n\t\t\treturn \"No categories\";\n\t\t}\n\t\tvar categories = [''].concat(props.categories);\n\t\tvar types = [''].concat(props.types);\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\tBlockTitle\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Elige título:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__max-entries',\n\t\t\t\tlabel: __('Cuántas entradas:'),\n\t\t\t\ttype: 'number',\n\t\t\t\tvalue: attributes.max_entries,\n\t\t\t\tonChange: function onChange(max_entries) {\n\t\t\t\t\treturn setAttributes({ max_entries: max_entries });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'categor\\xEDa',\n\t\t\t\tclassName: className + '__select',\n\t\t\t\tvalue: attributes.category,\n\t\t\t\toptions: categories.map(function (category) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: category.name,\n\t\t\t\t\t\tvalue: category.id\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(category) {\n\t\t\t\t\treturn setAttributes({ category: category });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'Tipo de Post',\n\t\t\t\tclassName: className + '__type',\n\t\t\t\tvalue: attributes.type,\n\t\t\t\toptions: types.map(function (type) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: type.name,\n\t\t\t\t\t\tvalue: type.slug\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(type) {\n\t\t\t\t\treturn setAttributes({ type: type });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9hcnRpY2xlcy1hdmF0YXIuanM/NTNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbCxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sO1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cbnZhciBCbG9ja1RpdGxlID0gX18oJ0F2YXRhciBBcnRpY2xlcycpO1xuaW1wb3J0IHsgQ29yZUtleXdvcmRzLCBJY29ucyB9IGZyb20gJy4uL3NldHRpbmdzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2JvbnNlby9ibG9jay1icy1hcnRpY2xlcy1hdmF0YXInLCB7XG5cdHRpdGxlOiBCbG9ja1RpdGxlLFxuXHRpY29uOiBJY29ucy53cml0ZXIsXG5cdGNhdGVnb3J5OiAnYm9uc2VvLWJsb2NrcycsXG5cdGtleXdvcmRzOiBDb3JlS2V5d29yZHMsXG5cblx0ZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdFx0dmFyIF9zZWxlY3QgPSBzZWxlY3QoJ2NvcmUnKSxcblx0XHQgICAgZ2V0RW50aXR5UmVjb3JkcyA9IF9zZWxlY3QuZ2V0RW50aXR5UmVjb3Jkcyxcblx0XHQgICAgZ2V0UG9zdFR5cGVzID0gX3NlbGVjdC5nZXRQb3N0VHlwZXM7XG5cblx0XHR2YXIgcXVlcnkgPSB7IHBlcl9wYWdlOiAtMSwgaGlkZV9lbXB0eTogdHJ1ZSB9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRjYXRlZ29yaWVzOiBnZXRFbnRpdHlSZWNvcmRzKCd0YXhvbm9teScsICdjYXRlZ29yeScsIHF1ZXJ5KSxcblx0XHRcdHR5cGVzOiBnZXRQb3N0VHlwZXMoKSxcblx0XHRcdGJyYW5kczogd3AuYXBpUmVxdWVzdCgnL2JvbnNlby92MS9icmFuZCcpXG5cdFx0fTtcblx0fSkoZnVuY3Rpb24gKHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZDtcblxuXHRcdGlmICghcHJvcHMuY2F0ZWdvcmllcykge1xuXHRcdFx0cmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuXHRcdH1cblxuXHRcdGlmIChwcm9wcy5jYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFwiTm8gY2F0ZWdvcmllc1wiO1xuXHRcdH1cblx0XHR2YXIgY2F0ZWdvcmllcyA9IFsnJ10uY29uY2F0KHByb3BzLmNhdGVnb3JpZXMpO1xuXHRcdHZhciB0eXBlcyA9IFsnJ10uY29uY2F0KHByb3BzLnR5cGVzKTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdEJsb2NrVGl0bGVcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX190aXRsZScsXG5cdFx0XHRcdGxhYmVsOiBfXygnRWxpZ2UgdMOtdHVsbzonKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0aXRsZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHRpdGxlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX21heC1lbnRyaWVzJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdDdcOhbnRhcyBlbnRyYWRhczonKSxcblx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLm1heF9lbnRyaWVzLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobWF4X2VudHJpZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IG1heF9lbnRyaWVzOiBtYXhfZW50cmllcyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRsYWJlbDogJ2NhdGVnb3JcXHhFRGEnLFxuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3NlbGVjdCcsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmNhdGVnb3J5LFxuXHRcdFx0XHRvcHRpb25zOiBjYXRlZ29yaWVzLm1hcChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0bGFiZWw6IGNhdGVnb3J5Lm5hbWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogY2F0ZWdvcnkuaWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNhdGVnb3J5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjYXRlZ29yeTogY2F0ZWdvcnkgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0bGFiZWw6ICdUaXBvIGRlIFBvc3QnLFxuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3R5cGUnLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy50eXBlLFxuXHRcdFx0XHRvcHRpb25zOiB0eXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0bGFiZWw6IHR5cGUubmFtZSxcblx0XHRcdFx0XHRcdHZhbHVlOiB0eXBlLnNsdWdcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHR5cGU6IHR5cGUgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSksXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2FydGljbGVzLWF2YXRhci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./src/block/articles-condensed.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(/*! ../settings */ 2);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar withSelect = wp.data.withSelect;\n\nvar BlockTitle = __('Articles Condensed');\n\n\nregisterBlockType('bonseo/block-bs-articles-condensed', {\n\ttitle: BlockTitle,\n\ticon: __WEBPACK_IMPORTED_MODULE_0__settings__[\"b\" /* Icons */].pile,\n\tcategory: 'bonseo-blocks',\n\tkeywords: __WEBPACK_IMPORTED_MODULE_0__settings__[\"a\" /* CoreKeywords */],\n\tedit: withSelect(function (select) {\n\t\tvar _select = select('core'),\n\t\t    getPostTypes = _select.getPostTypes;\n\n\t\treturn {\n\t\t\ttypes: getPostTypes()\n\t\t};\n\t})(function (props) {\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tvar types = props.types;\n\t\tif (!props.types) {\n\t\t\treturn \"Loading...\";\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\tBlockTitle\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Elige título:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__max_entries',\n\t\t\t\tlabel: __('Cuántas entradas:'),\n\t\t\t\ttype: 'number',\n\t\t\t\tvalue: attributes.max_entries,\n\t\t\t\tonChange: function onChange(max_entries) {\n\t\t\t\t\treturn setAttributes({ max_entries: max_entries });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'Tipo de Post',\n\t\t\t\tclassName: className + '__type',\n\t\t\t\tvalue: attributes.type,\n\t\t\t\toptions: types.map(function (type) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: type.name,\n\t\t\t\t\t\tvalue: type.slug\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(type) {\n\t\t\t\t\treturn setAttributes({ type: type });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9hcnRpY2xlcy1jb25kZW5zZWQuanM/Yjg1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbCxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sO1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cbnZhciBCbG9ja1RpdGxlID0gX18oJ0FydGljbGVzIENvbmRlbnNlZCcpO1xuaW1wb3J0IHsgQ29yZUtleXdvcmRzLCBJY29ucyB9IGZyb20gJy4uL3NldHRpbmdzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2JvbnNlby9ibG9jay1icy1hcnRpY2xlcy1jb25kZW5zZWQnLCB7XG5cdHRpdGxlOiBCbG9ja1RpdGxlLFxuXHRpY29uOiBJY29ucy5waWxlLFxuXHRjYXRlZ29yeTogJ2JvbnNlby1ibG9ja3MnLFxuXHRrZXl3b3JkczogQ29yZUtleXdvcmRzLFxuXHRlZGl0OiB3aXRoU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QpIHtcblx0XHR2YXIgX3NlbGVjdCA9IHNlbGVjdCgnY29yZScpLFxuXHRcdCAgICBnZXRQb3N0VHlwZXMgPSBfc2VsZWN0LmdldFBvc3RUeXBlcztcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlczogZ2V0UG9zdFR5cGVzKClcblx0XHR9O1xuXHR9KShmdW5jdGlvbiAocHJvcHMpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblx0XHR2YXIgdHlwZXMgPSBwcm9wcy50eXBlcztcblx0XHRpZiAoIXByb3BzLnR5cGVzKSB7XG5cdFx0XHRyZXR1cm4gXCJMb2FkaW5nLi4uXCI7XG5cdFx0fVxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdEJsb2NrVGl0bGVcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX190aXRsZScsXG5cdFx0XHRcdGxhYmVsOiBfXygnRWxpZ2UgdMOtdHVsbzonKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0aXRsZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHRpdGxlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX21heF9lbnRyaWVzJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdDdcOhbnRhcyBlbnRyYWRhczonKSxcblx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLm1heF9lbnRyaWVzLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobWF4X2VudHJpZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IG1heF9lbnRyaWVzOiBtYXhfZW50cmllcyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRsYWJlbDogJ1RpcG8gZGUgUG9zdCcsXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fdHlwZScsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnR5cGUsXG5cdFx0XHRcdG9wdGlvbnM6IHR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRsYWJlbDogdHlwZS5uYW1lLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHR5cGUuc2x1Z1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdHlwZTogdHlwZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9KSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYXJ0aWNsZXMtY29uZGVuc2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/block/authors-extract.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(/*! ../settings */ 2);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar withSelect = wp.data.withSelect;\n\nvar BlockTitle = __('Authors Extract');\n\n\nregisterBlockType('bonseo/block-bs-authors-extract', {\n\ttitle: BlockTitle,\n\ticon: __WEBPACK_IMPORTED_MODULE_0__settings__[\"b\" /* Icons */].quote,\n\tcategory: 'bonseo-blocks',\n\tkeywords: __WEBPACK_IMPORTED_MODULE_0__settings__[\"a\" /* CoreKeywords */],\n\tedit: withSelect(function (select) {\n\t\tvar _select = select('core'),\n\t\t    getPostTypes = _select.getPostTypes;\n\n\t\treturn {\n\t\t\ttypes: getPostTypes()\n\t\t};\n\t})(function (props) {\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tvar types = props.types;\n\t\tif (!props.types) {\n\t\t\treturn \"Loading...\";\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\tBlockTitle\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Elige título:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__max_entries',\n\t\t\t\tlabel: __('Cuántas entradas:'),\n\t\t\t\ttype: 'number',\n\t\t\t\tvalue: attributes.max_entries,\n\t\t\t\tonChange: function onChange(max_entries) {\n\t\t\t\t\treturn setAttributes({ max_entries: max_entries });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'Tipo de Post',\n\t\t\t\tclassName: className + '__type',\n\t\t\t\tvalue: attributes.type,\n\t\t\t\toptions: types.map(function (type) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: type.name,\n\t\t\t\t\t\tvalue: type.slug\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(type) {\n\t\t\t\t\treturn setAttributes({ type: type });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9hdXRob3JzLWV4dHJhY3QuanM/NWYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbCxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sO1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cbnZhciBCbG9ja1RpdGxlID0gX18oJ0F1dGhvcnMgRXh0cmFjdCcpO1xuaW1wb3J0IHsgQ29yZUtleXdvcmRzLCBJY29ucyB9IGZyb20gJy4uL3NldHRpbmdzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2JvbnNlby9ibG9jay1icy1hdXRob3JzLWV4dHJhY3QnLCB7XG5cdHRpdGxlOiBCbG9ja1RpdGxlLFxuXHRpY29uOiBJY29ucy5xdW90ZSxcblx0Y2F0ZWdvcnk6ICdib25zZW8tYmxvY2tzJyxcblx0a2V5d29yZHM6IENvcmVLZXl3b3Jkcyxcblx0ZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdFx0dmFyIF9zZWxlY3QgPSBzZWxlY3QoJ2NvcmUnKSxcblx0XHQgICAgZ2V0UG9zdFR5cGVzID0gX3NlbGVjdC5nZXRQb3N0VHlwZXM7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZXM6IGdldFBvc3RUeXBlcygpXG5cdFx0fTtcblx0fSkoZnVuY3Rpb24gKHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIHR5cGVzID0gcHJvcHMudHlwZXM7XG5cdFx0aWYgKCFwcm9wcy50eXBlcykge1xuXHRcdFx0cmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuXHRcdH1cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDInLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRCbG9ja1RpdGxlXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fdGl0bGUnLFxuXHRcdFx0XHRsYWJlbDogX18oJ0VsaWdlIHTDrXR1bG86JyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodGl0bGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB0aXRsZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX19tYXhfZW50cmllcycsXG5cdFx0XHRcdGxhYmVsOiBfXygnQ3XDoW50YXMgZW50cmFkYXM6JyksXG5cdFx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5tYXhfZW50cmllcyxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG1heF9lbnRyaWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBtYXhfZW50cmllczogbWF4X2VudHJpZXMgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0bGFiZWw6ICdUaXBvIGRlIFBvc3QnLFxuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3R5cGUnLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy50eXBlLFxuXHRcdFx0XHRvcHRpb25zOiB0eXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0bGFiZWw6IHR5cGUubmFtZSxcblx0XHRcdFx0XHRcdHZhbHVlOiB0eXBlLnNsdWdcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHR5cGU6IHR5cGUgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSksXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2F1dGhvcnMtZXh0cmFjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** ./src/block/banner-basic.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(/*! ../settings */ 2);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar TextControl = wp.components.TextControl;\n\nvar BlockTitle = __('Banner Basic');\n\nregisterBlockType('bonseo/block-bs-banner-basic', {\n\ttitle: BlockTitle,\n\ticon: __WEBPACK_IMPORTED_MODULE_0__settings__[\"b\" /* Icons */].minus,\n\tcategory: 'bonseo-blocks',\n\tkeywords: __WEBPACK_IMPORTED_MODULE_0__settings__[\"a\" /* CoreKeywords */],\n\tedit: function edit(_ref) {\n\t\tvar posts = _ref.posts,\n\t\t    className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t' ',\n\t\t\t\tBlockTitle,\n\t\t\t\t' '\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Título del banner'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__content',\n\t\t\t\tlabel: __('Frase del banner'),\n\t\t\t\tvalue: attributes.content,\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__cta',\n\t\t\t\tlabel: __('CTA'),\n\t\t\t\tvalue: attributes.cta,\n\t\t\t\tonChange: function onChange(cta) {\n\t\t\t\t\treturn setAttributes({ cta: cta });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__url',\n\t\t\t\tlabel: __('Url o Email(mailto:)'),\n\t\t\t\tvalue: attributes.url,\n\t\t\t\tonChange: function onChange(url) {\n\t\t\t\t\treturn setAttributes({ url: url });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9iYW5uZXItYmFzaWMuanM/ZDcxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIFRleHRDb250cm9sID0gd3AuY29tcG9uZW50cy5UZXh0Q29udHJvbDtcblxudmFyIEJsb2NrVGl0bGUgPSBfXygnQmFubmVyIEJhc2ljJyk7XG5pbXBvcnQgeyBDb3JlS2V5d29yZHMsIEljb25zIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2JvbnNlby9ibG9jay1icy1iYW5uZXItYmFzaWMnLCB7XG5cdHRpdGxlOiBCbG9ja1RpdGxlLFxuXHRpY29uOiBJY29ucy5taW51cyxcblx0Y2F0ZWdvcnk6ICdib25zZW8tYmxvY2tzJyxcblx0a2V5d29yZHM6IENvcmVLZXl3b3Jkcyxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIHBvc3RzID0gX3JlZi5wb3N0cyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnaDInLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnICcsXG5cdFx0XHRcdEJsb2NrVGl0bGUsXG5cdFx0XHRcdCcgJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3RpdGxlJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdUw610dWxvIGRlbCBiYW5uZXInKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0aXRsZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHRpdGxlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX2NvbnRlbnQnLFxuXHRcdFx0XHRsYWJlbDogX18oJ0ZyYXNlIGRlbCBiYW5uZXInKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fY3RhJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdDVEEnKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY3RhLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY3RhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjdGE6IGN0YSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX191cmwnLFxuXHRcdFx0XHRsYWJlbDogX18oJ1VybCBvIEVtYWlsKG1haWx0bzopJyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnVybCxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHVybCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdXJsOiB1cmwgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmFubmVyLWJhc2ljLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);