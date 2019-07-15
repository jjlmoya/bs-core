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
        /******/ 	return __webpack_require__(__webpack_require__.s = "./atom-script/apps.js");
        /******/ })
/************************************************************************/
/******/ ({

        /***/ "./atom-script/apps.js":
        /*!*****************************!*\
          !*** ./atom-script/apps.js ***!
          \*****************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/index */ \"./atom-script/state/index.js\");\n/* harmony import */ var _slider_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider/index */ \"./atom-script/slider/index.js\");\n/* harmony import */ var _slider_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tracking_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracking/index */ \"./atom-script/tracking/index.js\");\n/* harmony import */ var _social_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social/index */ \"./atom-script/social/index.js\");\n/* harmony import */ var _theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/index */ \"./atom-script/theme/index.js\");\n/* harmony import */ var _utils_exitIntent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/exitIntent */ \"./atom-script/utils/exitIntent.js\");\n/* harmony import */ var _utils_exitIntent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_exitIntent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _image_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/replace */ \"./atom-script/image/replace.js\");\n/* harmony import */ var _image_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_image_replace__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _heading_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading/anchor */ \"./atom-script/heading/anchor.js\");\n/* harmony import */ var _tooltip_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltip/index */ \"./atom-script/tooltip/index.js\");\n/* harmony import */ var _splash_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./splash/index */ \"./atom-script/splash/index.js\");\n/* harmony import */ var _splash_index__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_splash_index__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./atom-script/apps.js?");

                /***/ }),

        /***/ "./atom-script/config/index.js":
        /*!*************************************!*\
          !*** ./atom-script/config/index.js ***!
          \*************************************/
        /*! exports provided: Themes */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Themes\", function() { return Themes; });\nlet Themes = [\n    'aviator',\n    'blueberry',\n    'cake',\n    'caribbean',\n    'clouds',\n    'celeste',\n    'diable',\n    'eevee',\n    'forest',\n    'graylord',\n    'kino',\n    'lavandula',\n    'lemon',\n    'lime-sports',\n    'lollipop',\n    'mint',\n    'nature',\n    'paradise-orange',\n    'purple-skies',\n    'reverse-sky',\n    'sky',\n    'spring-melody',\n    'strawberry',\n    'wood',\n];\n\n\n\n//# sourceURL=webpack:///./atom-script/config/index.js?");

                /***/ }),

        /***/ "./atom-script/heading/anchor.js":
        /*!***************************************!*\
          !*** ./atom-script/heading/anchor.js ***!
          \***************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/misc */ \"./atom-script/utils/misc.js\");\n\n\nconst locators = {\n    container: 'bs_anchor_container'\n};\n\nconst renderAnchors = (elements, prepend) => {\n    fillContainer(document.getElementsByClassName(locators.container), elements, prepend);\n};\n\nconst fillContainer = (containers, elements, prepend) => {\n    [...containers].forEach((container) => {\n        let settings = container.dataset;\n        container.innerHTML = [...elements].map((element) => {\n            let slug = Object(_utils_misc__WEBPACK_IMPORTED_MODULE_0__[\"stringToSlug\"])(element.innerText),\n                html = element.innerHTML;\n            element.id = slug;\n            element.innerHTML = prepend + html;\n            return anchorLink(slug, html, settings.linkClass);\n        }).join(' ');\n\n    });\n};\n\nconst anchorLink = (id, html, linkClass) => {\n    return `<a class=\"${linkClass}\" href=\"#${id}\">${html}</a>`;\n};\n\nconst getHeadingElements = selectors => document.querySelectorAll(selectors);\n\n(() => {\n    let selector = '.bs_anchor h2',\n        prepend = '<span class=\"a-text--shadow a-text--uppercase a-pad--x-5\"></span>';\n    var elements = getHeadingElements(selector);\n    renderAnchors(elements, prepend);\n})();\n\n//# sourceURL=webpack:///./atom-script/heading/anchor.js?");

                /***/ }),

        /***/ "./atom-script/image/replace.js":
        /*!**************************************!*\
          !*** ./atom-script/image/replace.js ***!
          \**************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    image: '.bs_image_replace'\n};\n\nconst replaceImage = (target, element) => {\n    document.querySelector(target).src = element.src;\n};\n\nconst onImageClick = e => {\n    const element = e.target,\n        targetClass = element.dataset.target;\n    if (targetClass) {\n        replaceImage(targetClass, element);\n    }\n};\nconst bindReplace = (elements) => {\n    elements.forEach((element) => {\n        element.addEventListener('click', onImageClick);\n    });\n};\n\n(() => {\n    bindReplace(document.querySelectorAll(locators.image));\n})();\n\n\n\n//# sourceURL=webpack:///./atom-script/image/replace.js?");

                /***/ }),

        /***/ "./atom-script/slider/index.js":
        /*!*************************************!*\
          !*** ./atom-script/slider/index.js ***!
          \*************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    parent: '.bs_slider',\n    content: '.bs_slider_content',\n    slide: '.bs_slide',\n    button: '.bs_slider_button',\n};\n\nconst onScroll = (slider, slideClass) => {\n    let slides = slider.querySelectorAll(slideClass),\n        buttons = getSliderButtons(slider) || [],\n        activeIndex = getActiveSlider(slides, slider);\n    removeActiveClass(locators.slide);\n    slides[activeIndex].classList.add('is-active');\n    if (buttons.length > 0) {\n        removeActiveClass(locators.button);\n        buttons[activeIndex].classList.add('is-active');\n    }\n};\n\nconst bindScrollEvents = () => {\n    let sliders = document.querySelectorAll(locators.content),\n        slideClass = locators.slide;\n    sliders.forEach(function (slider) {\n        slider.addEventListener('scroll', function (e) {\n            onScroll(e.target, slideClass);\n        });\n        onScroll(slider, slideClass);\n    });\n};\n\nconst removeActiveClass = locator => {\n    const element = document.querySelector(locator + '.is-active');\n    if (!!element) {\n        element.classList.remove('is-active');\n    }\n};\n\nconst getSliderButtons = target => {\n    const parent = target.closest(locators.parent);\n    if (!!parent) {\n        return parent.querySelectorAll(locators.button);\n    }\n};\n\nconst getActiveSlider = (slides, parent) => {\n    const slidesLength = slides.length,\n        scrolled = parent.scrollLeft,\n        totalScroll = parent.scrollWidth,\n        slideWidth = totalScroll / slidesLength;\n    return Math.floor(scrolled / (slideWidth - (slideWidth / 10)));\n};\n\n(() => {\n    bindScrollEvents(locators.trigger);\n})();\n\n\n//# sourceURL=webpack:///./atom-script/slider/index.js?");

                /***/ }),

        /***/ "./atom-script/social/index.js":
        /*!*************************************!*\
          !*** ./atom-script/social/index.js ***!
          \*************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _networks_facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./networks/facebook */ \"./atom-script/social/networks/facebook.js\");\n/* harmony import */ var _networks_twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networks/twitter */ \"./atom-script/social/networks/twitter.js\");\n/* harmony import */ var _networks_linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networks/linkedin */ \"./atom-script/social/networks/linkedin.js\");\n/* harmony import */ var _networks_whatsapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networks/whatsapp */ \"./atom-script/social/networks/whatsapp.js\");\n\n\n\n\n\nconst locators = {\n    init: 'bs_social_media',\n    data: {\n        name: 'social',\n        via: 'via',\n        text: 'shareText',\n        url: 'shareLink',\n        hashtags: 'hashtags'\n    }\n};\n\nconst redirectToSocialMedia = (baseUrl, data) => {\n    window.open(baseUrl + paramsToArray(data).join('&'));\n};\n\nconst social = {\n    mappers: {\n        twitter: _networks_twitter__WEBPACK_IMPORTED_MODULE_1__[\"Twitter\"].data,\n        facebook: _networks_facebook__WEBPACK_IMPORTED_MODULE_0__[\"Facebook\"].data,\n        linkedin: _networks_linkedin__WEBPACK_IMPORTED_MODULE_2__[\"Linkedin\"].data,\n        whatsapp: _networks_whatsapp__WEBPACK_IMPORTED_MODULE_3__[\"Whatsapp\"].data\n    },\n    action: {\n        twitter: _networks_twitter__WEBPACK_IMPORTED_MODULE_1__[\"Twitter\"].url,\n        facebook: _networks_facebook__WEBPACK_IMPORTED_MODULE_0__[\"Facebook\"].url,\n        linkedin: _networks_linkedin__WEBPACK_IMPORTED_MODULE_2__[\"Linkedin\"].url,\n        whatsapp: _networks_whatsapp__WEBPACK_IMPORTED_MODULE_3__[\"Whatsapp\"].url\n    }\n};\n\nconst paramsToArray = data => {\n    let params = [];\n    for (let value in data) {\n        if (data && data[value]) {\n            params.push(value + '=' + encodeURIComponent(data[value]));\n        }\n    }\n    return params;\n};\n\n\nconst addSocialListener = () => {\n    [... document.getElementsByClassName(locators.init)].forEach(e => {\n        bindListener(e);\n    });\n};\n\nconst bindListener = elementAction => {\n    elementAction.addEventListener('click', function (event) {\n        let element = event.target.closest('.' + locators.init),\n            elementData = element.dataset,\n            network = elementData.social,\n            params = getParamsByNetwork(getFilledElement(element, elementData), network);\n        if (social.action[network]) {\n\n            social.action[network](params, redirectToSocialMedia);\n        }\n    });\n};\n\nconst getFilledElement = (element, elementData) => {\n    let socialTarget = elementData.target,\n        targetById = document.getElementById(socialTarget),\n        target = !!targetById ? targetById : document.querySelector('.' + socialTarget);\n    return !!target ? target : element;\n};\n\nconst getParamsByNetwork = (element, network) => {\n    let socialMap = locators.data,\n        dataset = element.dataset,\n        settings = ({\n            network: network,\n            text: dataset[socialMap.text],\n            link: dataset[socialMap.url],\n            hashtags: dataset[socialMap.hashtags],\n            via: dataset[socialMap.via]\n        });\n    return social.mappers[network](settings);\n};\n(() => {\n    addSocialListener();\n})();\n\n//# sourceURL=webpack:///./atom-script/social/index.js?");

                /***/ }),

        /***/ "./atom-script/social/networks/facebook.js":
        /*!*************************************************!*\
          !*** ./atom-script/social/networks/facebook.js ***!
          \*************************************************/
        /*! exports provided: Facebook */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Facebook\", function() { return Facebook; });\nconst FacebookData = data => {\n    return {\n        u: data.link,\n        quote: data.text,\n        hashtags: data.hashtags\n    };\n};\n\nconst FacebookUrl = (params, redirect) => {\n    return redirect('https://www.facebook.com/sharer/sharer.php?', params);\n};\n\nlet Facebook = {\n    data: FacebookData,\n    url: FacebookUrl\n};\n\n//# sourceURL=webpack:///./atom-script/social/networks/facebook.js?");

                /***/ }),

        /***/ "./atom-script/social/networks/linkedin.js":
        /*!*************************************************!*\
          !*** ./atom-script/social/networks/linkedin.js ***!
          \*************************************************/
        /*! exports provided: Linkedin */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Linkedin\", function() { return Linkedin; });\nconst LinkedinData = data => {\n    return {\n        url: data.link,\n        mini: true,\n        title: data.title,\n        summary: data.text,\n        source: data.link\n    };\n};\n\nconst LinkedinUrl = (params, redirect) => {\n    return redirect('https://www.linkedin.com/shareArticle?', params);\n};\n\nlet Linkedin = {\n    data: LinkedinData,\n    url: LinkedinUrl\n};\n\n//# sourceURL=webpack:///./atom-script/social/networks/linkedin.js?");

                /***/ }),

        /***/ "./atom-script/social/networks/twitter.js":
        /*!************************************************!*\
          !*** ./atom-script/social/networks/twitter.js ***!
          \************************************************/
        /*! exports provided: Twitter */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Twitter\", function() { return Twitter; });\nconst TwitterData = data => {\n    return {\n        url: data.link,\n        text: data.text,\n        hashtags: data.hashtags,\n        via: data.via\n    };\n};\n\nconst TwitterUrl = (params, redirect) => {\n    return redirect('https://twitter.com/intent/tweet?', params);\n};\n\nlet Twitter = {\n    data: TwitterData,\n    url: TwitterUrl\n};\n\n//# sourceURL=webpack:///./atom-script/social/networks/twitter.js?");

                /***/ }),

        /***/ "./atom-script/social/networks/whatsapp.js":
        /*!*************************************************!*\
          !*** ./atom-script/social/networks/whatsapp.js ***!
          \*************************************************/
        /*! exports provided: Whatsapp */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Whatsapp\", function() { return Whatsapp; });\nconst WhatsappData = data => {\n    return {\n        text: data.link\n    };\n};\n\nlet WhatsappUrl = (params, redirect) => {\n    return redirect('whatsapp://send?', params);\n};\n\nlet Whatsapp = {\n    data: WhatsappData,\n    url: WhatsappUrl\n};\n\n//# sourceURL=webpack:///./atom-script/social/networks/whatsapp.js?");

                /***/ }),

        /***/ "./atom-script/splash/index.js":
        /*!*************************************!*\
          !*** ./atom-script/splash/index.js ***!
          \*************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    trigger: 'bs_splash_screen',\n    activeClass: 'is-loaded'\n};\n\nconst removeSplashScreen = () => {\n    [...document.getElementsByClassName(locators.trigger)].forEach(e => {\n        e.classList.add(locators.activeClass);\n    });\n};\n\n(() => {\n    setTimeout(removeSplashScreen, 10);\n})();\n\n//# sourceURL=webpack:///./atom-script/splash/index.js?");

                /***/ }),

        /***/ "./atom-script/state/active.js":
        /*!*************************************!*\
          !*** ./atom-script/state/active.js ***!
          \*************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    trigger: '.bs_state',\n    activeClass: 'is-active',\n    eventClick: 'click'\n};\n\n\nconst bindToggleElement = (element, component, state, closeClass) => {\n    if (element.length > 0) {\n        element[0].addEventListener(locators.eventClick, function (e) {\n            if (state || !closeClass || e.target.classList.contains(closeClass)) {\n                document.body.classList.remove('overflow-blocked');\n                component.classList.toggle(locators.activeClass, state);\n            }\n        });\n    }\n};\n\nconst bindClose = (closeElement, component) => {\n    if (closeElement) {\n        bindToggleElement(document.getElementsByClassName(closeElement), component, false, closeElement);\n    }\n};\n\nconst bindActive = (activeElement, component) => {\n    if (activeElement) {\n        bindToggleElement(document.getElementsByClassName(activeElement), component, true);\n    }\n};\n\nconst addActiveClass = (component) => {\n    component.classList.add(locators.activeClass);\n};\n\nconst bindDelay = (timeout, component) => {\n    if (timeout) {\n        setTimeout(function () {\n            addActiveClass(component);\n        }, timeout);\n    }\n};\n\nconst extractData = dataset => {\n    return {\n        close: dataset.close,\n        delay: dataset.delay,\n        active: dataset.active\n    };\n};\n\nconst bindEvents = (settings, component) => {\n    bindClose(settings.close, component);\n    bindDelay(settings.delay, component);\n    bindActive(settings.active, component);\n};\n\n(() => {\n    document.querySelectorAll(locators.trigger).forEach((element) => {\n        bindEvents(extractData(element.dataset), element);\n    });\n})();\n\n\n//# sourceURL=webpack:///./atom-script/state/active.js?");

                /***/ }),

        /***/ "./atom-script/state/index.js":
        /*!************************************!*\
          !*** ./atom-script/state/index.js ***!
          \************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active */ \"./atom-script/state/active.js\");\n/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_active__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport */ \"./atom-script/state/viewport.js\");\n/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_viewport__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./atom-script/state/index.js?");

                /***/ }),

        /***/ "./atom-script/state/viewport.js":
        /*!***************************************!*\
          !*** ./atom-script/state/viewport.js ***!
          \***************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    trigger: '.bs_viewport',\n    partialClass: 'is-visible',\n    fullClass: 'is-all-visible',\n    loaded: 'is-loaded'\n};\n\nconst model = {\n    elements: [],\n    offset: {\n        y: window.pageYOffset,\n        x: window.pageaXOffset,\n        height: window.innerHeight,\n        width: window.innerWidth\n    }\n};\n\n\nconst isElementOnPartialViewPort = el => {\n    var top = el.offsetTop,\n        left = el.offsetLeft,\n        width = el.offsetWidth,\n        height = el.offsetHeight;\n\n    while (el.offsetParent) {\n        el = el.offsetParent;\n        top += el.offsetTop;\n        left += el.offsetLeft;\n    }\n    return (\n        top < (window.pageYOffset + window.innerHeight) &&\n        left < (window.pageXOffset + window.innerWidth) &&\n        (top + height) > window.pageYOffset &&\n        (left + width) > window.pageXOffset\n    );\n};\n\nconst isElementOnViewPort = el => {\n    let top = el.offsetTop,\n        left = el.offsetLeft,\n        width = el.offsetWidth,\n        height = el.offsetHeight;\n\n    while (el.offsetParent) {\n        el = el.offsetParent;\n        top += el.offsetTop;\n        left += el.offsetLeft;\n    }\n\n    return (\n        top >= window.pageYOffset &&\n        left >= window.pageXOffset &&\n        (top + height) <= (window.pageYOffset + window.innerHeight) &&\n        (left + width) <= (window.pageXOffset + window.innerWidth)\n    );\n};\n\n\nconst checkElementsOnViewPort = (elements) => {\n    let isVisible, isFullVisible;\n    elements.forEach((element) => {\n        isVisible = isElementOnPartialViewPort(element);\n        isFullVisible = isElementOnViewPort(element);\n        element.classList\n            .toggle(locators.partialClass, isVisible);\n        element.classList\n            .toggle(locators.fullClass, isFullVisible);\n        if (isVisible) {\n            element.classList\n                .add(locators.loaded);\n        }\n    });\n};\n\nconst bindEvents = () => {\n    bindScroll();\n};\n\nconst bindScroll = () => {\n    document.addEventListener('scroll', () => {\n        checkElementsOnViewPort(model.elements);\n    }, {passive: true});\n    checkElementsOnViewPort(model.elements);\n};\n\n(() => {\n    model.elements = document.querySelectorAll(locators.trigger);\n    if (model.elements.length === 0) {\n        return;\n    }\n    bindEvents();\n})();\n\n\n//# sourceURL=webpack:///./atom-script/state/viewport.js?");

                /***/ }),

        /***/ "./atom-script/theme/color.js":
        /*!************************************!*\
          !*** ./atom-script/theme/color.js ***!
          \************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    trigger: 'bs_color_replace',\n    styleTarget: 'backgroundColor'\n};\n\nconst RGBToHex = orig => {\n    if (!orig.replace) {\n        return '';\n    }\n    var rgb = orig.replace(/\\s/g, '').match(/^rgba?\\((\\d+),(\\d+),(\\d+)/i);\n    return (rgb && rgb.length === 4) ? \"#\" +\n        (\"0\" + parseInt(rgb[1], 10).toString(16)).slice(-2) +\n        (\"0\" + parseInt(rgb[2], 10).toString(16)).slice(-2) +\n        (\"0\" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;\n};\n\nconst replaceColors = elements => {\n    elements.forEach(element => {\n        element.innerHTML = `\n            <span class='a-color--replaced'>\n                ${RGBToHex(window.getComputedStyle(element)[locators.styleTarget]).toUpperCase()}\n            </span>`;\n    });\n};\n\n(() => {\n    replaceColors([... document.getElementsByClassName(locators.trigger)]);\n})();\n\n//# sourceURL=webpack:///./atom-script/theme/color.js?");

                /***/ }),

        /***/ "./atom-script/theme/index.js":
        /*!************************************!*\
          !*** ./atom-script/theme/index.js ***!
          \************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./atom-script/theme/storage.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./atom-script/theme/color.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_color__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selector */ \"./atom-script/theme/selector.js\");\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selector__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./atom-script/theme/index.js?");

                /***/ }),

        /***/ "./atom-script/theme/selector.js":
        /*!***************************************!*\
          !*** ./atom-script/theme/selector.js ***!
          \***************************************/
        /*! no static exports found */
        /***/ (function(module, exports, __webpack_require__) {

                eval("const locators = {\n    trigger: 'bs_theme',\n    button: 'bs_theme_button'\n};\n\nconst model = [];\n\nconst renderControl = themes => {\n    let renderElements = themes.map((theme) => {\n        return `<div class=\"ml-theme-selector__item ${theme} a-bg ${locators.button} u-pointer u-layer-2\" \n                        data-theme=\"${theme}\"></div>`;\n    }).join('');\n    return `<div class=\"ml-theme-selector l-position--absolute l-flex\">${renderElements}</div>`;\n};\nconst getThemes = next => {\n    next(\n        __webpack_require__(/*! ../config/index */ \"./atom-script/config/index.js\").Themes);\n};\n\nconst removeThemes = element => {\n    model.themes.forEach((theme) => {\n        element.classList.remove(theme);\n    });\n};\nconst actionTheme = e => {\n    var parent = e.target.closest('.' + locators.trigger);\n    removeThemes(parent);\n    parent.classList.add(e.target.dataset.theme);\n};\nconst bindActionToItem = element => {\n    element.addEventListener('click', (e) => {\n        actionTheme(e);\n    });\n};\n\nconst addColorThemeAction = () => {\n    [... document.querySelectorAll('.' + locators.button)].forEach((element) => {\n        bindActionToItem(element);\n    });\n};\n(() => {\n    let elements = document.getElementsByClassName(locators.trigger);\n    if (!elements || elements.length === 0) return;\n    getThemes((themes) => {\n        let html = renderControl(themes);\n        model.themes = themes;\n        [...elements].forEach((element) => {\n            element.classList.add('l-position');\n            let wrapper = document.createElement('div').innerHTML = element.innerHTML + html;\n            element.innerHTML = wrapper;\n        });\n        addColorThemeAction();\n    });\n})();\n\n//# sourceURL=webpack:///./atom-script/theme/selector.js?");

                /***/ }),

        /***/ "./atom-script/theme/storage.js":
        /*!**************************************!*\
          !*** ./atom-script/theme/storage.js ***!
          \**************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index */ \"./atom-script/config/index.js\");\n/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/misc */ \"./atom-script/utils/misc.js\");\n\n\n\nconst model = {\n    storageKey: 'bonseo_theme',\n    themes: _config_index__WEBPACK_IMPORTED_MODULE_0__[\"Themes\"]\n};\n\nconst getLocalBrand = () => localStorage.getItem(model.storageKey);\nconst removeActiveThemes = element => {\n    if (element.className) {\n        model.themes.forEach(function (theme) {\n            element.classList.remove(theme);\n        });\n    }\n};\n\n(() => {\n    const parameters = Object(_utils_misc__WEBPACK_IMPORTED_MODULE_1__[\"searchToObject\"])(window.location.search),\n        brand = parameters.brand || getLocalBrand();\n    if (brand) {\n        removeActiveThemes(document.body);\n        document.body.classList.add(brand);\n    }\n})();\n\n\n\n//# sourceURL=webpack:///./atom-script/theme/storage.js?");

                /***/ }),

        /***/ "./atom-script/tooltip/index.js":
        /*!**************************************!*\
          !*** ./atom-script/tooltip/index.js ***!
          \**************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./atom-script/tooltip/templates/index.js\");\n\n\nconst locators = {\n    trigger: '.bs_tooltip',\n    tooltip: '.bs_tooltip_content'\n};\n\nconst getTooltipTemplate = (content, template) => {\n    try {\n        return _templates__WEBPACK_IMPORTED_MODULE_0__[\"tooltipTemplates\"][template ? template : 'default'](content);\n    } catch (e) {\n        console.error(`Error: Template \"${template}\" not found`);\n        return _templates__WEBPACK_IMPORTED_MODULE_0__[\"tooltipTemplates\"]['default'](content);\n    }\n};\n\nconst openTooltip = (settings, target) => {\n    target.insertAdjacentHTML('beforeend', getTooltipTemplate(settings.content, settings.template));\n};\n\nconst closeTooltip = (tooltip) => {\n    if (tooltip) {\n        tooltip.remove();\n    }\n};\n\nconst onClickBody = event => {\n    const tooltip = document.querySelector(locators.tooltip),\n        isClickInside = event.target.closest(locators.tooltip),\n        clickedElement = event.target,\n        triggerElement = document.querySelector(locators.trigger);\n    if (tooltip && !isClickInside && clickedElement !== triggerElement) {\n        closeTooltip(tooltip);\n        document.removeEventListener('click', onClickBody);\n    }\n};\n\nconst getSettings = el => el.dataset;\n\nconst onMouseOut = event => {\n    closeTooltip(document.querySelector(locators.tooltip));\n    event.target.removeEventListener('mouseout', onMouseOut);\n};\nconst triggerTooltip = (event) => {\n    const tooltip = document.querySelector(locators.tooltip),\n        isClickEvent = event.type === 'click',\n        isHoverEvent = event.type === 'mouseover',\n        target = event.target;\n\n    closeTooltip(tooltip);\n    openTooltip(getSettings(target), event.target);\n\n    if (isClickEvent) {\n        document.addEventListener('click', onClickBody);\n    }\n    if (isHoverEvent) {\n        target.addEventListener('mouseout', function () {\n            closeTooltip(document.querySelector(locators.tooltip));\n        });\n    }\n\n};\n\nconst bindEvents = (elements) => {\n    elements.forEach((el) => {\n        const settings = getSettings(el);\n        if (settings.mode === 'click') {\n            el.addEventListener('click', triggerTooltip);\n        }\n        if (settings.mode === 'hover') {\n            el.addEventListener('mouseover', triggerTooltip);\n        }\n    });\n};\n\n(() => {\n    bindEvents([...document.querySelectorAll(locators.trigger)]);\n})();\n\n//# sourceURL=webpack:///./atom-script/tooltip/index.js?");

                /***/ }),

        /***/ "./atom-script/tooltip/templates/default.js":
        /*!**************************************************!*\
          !*** ./atom-script/tooltip/templates/default.js ***!
          \**************************************************/
        /*! exports provided: DefaultTemplate */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultTemplate\", function() { return DefaultTemplate; });\nlet DefaultTemplate = content => `\n        <div class=\"a-tooltip bs_tooltip_content\">\n            ${content}\n        </div>\n`;\n\n\n\n//# sourceURL=webpack:///./atom-script/tooltip/templates/default.js?");

                /***/ }),

        /***/ "./atom-script/tooltip/templates/full.js":
        /*!***********************************************!*\
          !*** ./atom-script/tooltip/templates/full.js ***!
          \***********************************************/
        /*! exports provided: FullTemplate */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FullTemplate\", function() { return FullTemplate; });\nlet FullTemplate = content => `\n        <div class=\"a-tooltip a-tooltip--full bs_tooltip_content\">\n            ${content}\n        </div>\n`;\n\n\n\n//# sourceURL=webpack:///./atom-script/tooltip/templates/full.js?");

                /***/ }),

        /***/ "./atom-script/tooltip/templates/index.js":
        /*!************************************************!*\
          !*** ./atom-script/tooltip/templates/index.js ***!
          \************************************************/
        /*! exports provided: tooltipTemplates */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tooltipTemplates\", function() { return tooltipTemplates; });\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ \"./atom-script/tooltip/templates/default.js\");\n/* harmony import */ var _full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full */ \"./atom-script/tooltip/templates/full.js\");\n\n\n\nconst tooltipTemplates = {\n    \"default\": _default__WEBPACK_IMPORTED_MODULE_0__[\"DefaultTemplate\"],\n    \"full\": _full__WEBPACK_IMPORTED_MODULE_1__[\"FullTemplate\"]\n};\n\n//# sourceURL=webpack:///./atom-script/tooltip/templates/index.js?");

                /***/ }),

        /***/ "./atom-script/tracking/index.js":
        /*!***************************************!*\
          !*** ./atom-script/tracking/index.js ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\nconst model = {\n    acc: 0,\n    stepsInSeconds: 30,\n    scroll: {\n        scroll25: false,\n        scroll50: false,\n        scroll75: false,\n        scroll100: false\n    }\n};\n\nconst trackEvent = (eventLabel, eventAction, eventCategory, eventValue) => {\n    if (window.location.href.indexOf('://localhost') > -1) {\n        console.log('Analytics -> %o', {\n            eventLabel: eventLabel,\n            eventAction: eventAction,\n            eventCategory: eventCategory,\n            eventValue: eventValue\n        });\n    }\n    if (window.ga) {\n        ga('send', {\n            hitType: 'event',\n            eventCategory: eventCategory,\n            eventAction: eventAction,\n            eventLabel: eventLabel,\n            eventValue: eventValue\n        });\n    }\n    if (window.gtag) {\n        gtag('event', eventAction, {\n            'event_category': eventCategory,\n            'event_label': eventLabel,\n            'event_value': eventValue\n        });\n    }\n};\n\nconst timeEvent = sessionTime => {\n    trackEvent(window.location.href, 'Reading', 'Session Time', sessionTime);\n};\n\nconst scrollDepthEvent = percent => {\n    if (!model.scroll['scroll' + percent]) {\n        trackEvent(window.location.href, 'scrolled ' + percent, 'Scroll', percent);\n        model.scroll['scroll' + percent] = true;\n    }\n};\n\nconst getScrollPercent = () => {\n    let h = document.documentElement,\n        b = document.body,\n        st = 'scrollTop',\n        sh = 'scrollHeight';\n    return Math.round((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100);\n};\n\nconst scrollDepthEventListener = () => {\n    document.addEventListener('scroll', () => {\n        let percent = getScrollPercent();\n        if (percent % 25 === 0 && percent !== 0) {\n            scrollDepthEvent(percent);\n        }\n    });\n};\n\nconst bindClickEvents = () => {\n    document.addEventListener('click', e => {\n        if (e.target.matches('a, button')) {\n            trackEvent(window.location.href, 'Click: ' + e.target.innerText, 'Click Event', model.acc);\n        }\n    });\n};\n\n(() => {\n    setInterval(() => {\n        model.acc += model.stepsInSeconds;\n        timeEvent(model.acc);\n    }, model.stepsInSeconds * 1000);\n    scrollDepthEventListener();\n    bindClickEvents();\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({trackEvent});\n\n//# sourceURL=webpack:///./atom-script/tracking/index.js?");

                /***/ }),

        /***/ "./atom-script/utils/exitIntent.js":
        /*!*****************************************!*\
          !*** ./atom-script/utils/exitIntent.js ***!
          \*****************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

                eval("const locators = {\n    trigger: 'bs_exit_intent'\n};\nconst model = {\n    localStorage: 'budget-exit-intent',\n    dayInMilisec: 24 * 60 * 60 * 1000\n};\n\nconst isMouseOutside = (e) => {\n    return e.clientY < 0;\n};\n\nconst getShowedDay = () => {\n    let registeredDate = localStorage.getItem(model.localStorage);\n    registeredDate = registeredDate ?\n        new Date(parseInt(registeredDate)) : new Date(0);\n    return registeredDate;\n};\n\nconst isDateOldEnough = (today, register, maxDays) => (today.getTime() - register.getTime()) / (model.dayInMilisec * maxDays) > 1;\n\nconst modalRulesPass = settings => isDateOldEnough(new Date(), getShowedDay(), settings.every);\n\nconst onMouseLeave = (event, settings) => {\n    if (isMouseOutside(event) &&\n        modalRulesPass(settings)) {\n        localStorage.setItem(model.localStorage, new Date().getTime());\n        setTimeout(() => {\n            document.getElementsByClassName(settings.popup)[0].classList.add('is-active');\n            document.body.classList.add('overflow-blocked');\n        }, settings.exitDelay);\n\n    }\n};\nconst triggerExitIntent = element => {\n\n    document.addEventListener(\"mouseleave\", (event) => {\n        onMouseLeave(event, element.dataset);\n    }, false);\n};\n\n(() => {\n    let elements = [...document.getElementsByClassName(locators.trigger)].slice(0, 1);\n    if (elements.length > 0) {\n        triggerExitIntent();\n    }\n})();\n\n\nmodule.exports = {};\n\n//# sourceURL=webpack:///./atom-script/utils/exitIntent.js?");

                /***/ }),

        /***/ "./atom-script/utils/misc.js":
        /*!***********************************!*\
          !*** ./atom-script/utils/misc.js ***!
          \***********************************/
        /*! exports provided: searchToObject, stringToSlug, isMobile */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchToObject\", function() { return searchToObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToSlug\", function() { return stringToSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\nconst isMobile = () => {\n    let check = false;\n    ((a) => {\n        if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i\n                .test(a.substr(0, 4)))\n            check = true;\n    })(navigator.userAgent || navigator.vendor || window.opera);\n    return check;\n};\n\nconst stringToSlug = str => {\n    str = str.replace(/^\\s+|\\s+$/g, ''); // trim\n    str = str.toLowerCase();\n    let from = \"àáäâèéëêìíïîòóöôùúüûñç·/_,:;\";\n    let to = \"aaaaeeeeiiiioooouuuunc------\";\n    for (var i = 0, l = from.length; i < l; i++) {\n        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));\n    }\n    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars\n        .replace(/\\s+/g, '-') // collapse whitespace and replace by -\n        .replace(/-+/g, '-'); // collapse dashes\n    return str;\n};\n\nconst searchToObject = () => {\n    let pairs = window.location.search.substring(1).split(\"&\"),\n        obj = {},\n        pair,\n        i;\n    for (i in pairs) {\n        if (pairs[i] === \"\") continue;\n        pair = pairs[i].split(\"=\");\n        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);\n    }\n    return obj;\n};\n\n\n\n//# sourceURL=webpack:///./atom-script/utils/misc.js?");

                /***/ })

        /******/ });