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
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {

		eval("(function () {\n    var initUtils = function () {\n        __webpack_require__(/*! ./utils/state */ \"./atom-script/utils/state.js\").init();\n        __webpack_require__(/*! ./utils/tracking */ \"./atom-script/utils/tracking.js\").basicEvents();\n        __webpack_require__(/*! ./utils/color */ \"./atom-script/utils/color.js\").init();\n        __webpack_require__(/*! ./utils/socialMedia */ \"./atom-script/utils/socialMedia.js\").init();\n        __webpack_require__(/*! ./utils/exitIntent */ \"./atom-script/utils/exitIntent.js\").init();\n    }, initServices = function () {\n        __webpack_require__(/*! ./service/heading */ \"./atom-script/service/heading.js\").init('.bs_anchor h2', '<span class=\"a-text--shadow a-text--uppercase\">#</span>');\n    };\n    initUtils();\n    initServices();\n})();\n\n\n\n//# sourceURL=webpack:///./atom-script/apps.js?");

		/***/ }),

	/***/ "./atom-script/service/heading.js":
	/*!****************************************!*\
      !*** ./atom-script/service/heading.js ***!
      \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		eval("module.exports = {\n    slugify: function(str) {\n        str = str.replace(/^\\s+|\\s+$/g, ''); // trim\n        str = str.toLowerCase();\n\n        // remove accents, swap ñ for n, etc\n        var from = \"ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;\";\n        var to   = \"AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------\";\n        for (var i=0, l=from.length ; i<l ; i++) {\n            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));\n        }\n\n        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars\n            .replace(/\\s+/g, '-') // collapse whitespace and replace by -\n            .replace(/-+/g, '-'); // collapse dashes\n\n        return str;\n    },\n    renderAnchors: function (elements, prepend) {\n        console.log(elements);\n        for (var i = 0; i < elements.length; i++) {\n            elements[i].id = this.slugify(elements[i].innerText);\n            elements[i].innerHTML = prepend + elements[i].innerHTML;\n        }\n    },\n    getHeadingElements: function (selector) {\n        return document.querySelectorAll(selector);\n    },\n    init: function (selector, prepend) {\n        var elements = this.getHeadingElements(selector);\n        this.renderAnchors(elements, prepend);\n    }\n};\n\n//# sourceURL=webpack:///./atom-script/service/heading.js?");

		/***/ }),

	/***/ "./atom-script/utils/color.js":
	/*!************************************!*\
      !*** ./atom-script/utils/color.js ***!
      \************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		eval("module.exports = {\n    locators: {\n        trigger: 'bs_color_replace',\n        styleTarget: 'backgroundColor'\n    },\n    RGBToHex: function (orig) {\n        if (!orig.replace) {\n            return '';\n        }\n        var rgb = orig.replace(/\\s/g, '').match(/^rgba?\\((\\d+),(\\d+),(\\d+)/i);\n        return (rgb && rgb.length === 4) ? \"#\" +\n            (\"0\" + parseInt(rgb[1], 10).toString(16)).slice(-2) +\n            (\"0\" + parseInt(rgb[2], 10).toString(16)).slice(-2) +\n            (\"0\" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;\n    },\n    replaceColors: function (elements) {\n        for (var i = 0; i < elements.length; i++) {\n                elements[i].innerHTML = \"<span class='a-color--replaced'>\" + this.RGBToHex(window.getComputedStyle(elements[i])[this.locators.styleTarget]).toUpperCase() + \"</span>\";\n        }\n    },\n    init: function () {\n        var elements = document.getElementsByClassName(this.locators.trigger);\n        if (elements.length > 0) {\n            this.replaceColors(elements);\n        }\n    },\n};\n\n//# sourceURL=webpack:///./atom-script/utils/color.js?");

		/***/ }),

	/***/ "./atom-script/utils/exitIntent.js":
	/*!*****************************************!*\
      !*** ./atom-script/utils/exitIntent.js ***!
      \*****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		eval("module.exports = {\n    locators: {\n        trigger: 'bs_exit_intent'\n    },\n    model: {\n        localStorage: 'budget-exit-intent',\n        dayInMilisec: 24 * 60 * 60 * 1000\n    },\n\n    isMouseOutside: function (e) {\n        return e.clientY < 0;\n    },\n\n    getShowedDay: function () {\n        var registeredDate = localStorage.getItem(this.model.localStorage);\n        console.log(typeof(registeredDate));\n        registeredDate = registeredDate ?\n            new Date(parseInt(registeredDate)) : new Date(0);\n        return registeredDate;\n    },\n\n    isDateOldEnough: function (today, register, maxDays) {\n        return (today.getTime() - register.getTime()) / (this.model.dayInMilisec * maxDays) > 1;\n    },\n    modalRulesPass: function (settings) {\n        return this.isDateOldEnough(new Date(), this.getShowedDay(), settings.every);\n    },\n    triggerExitIntent: function (element) {\n        var settings = element.dataset;\n        var that = this;\n        document.addEventListener(\"mouseleave\", function (event) {\n            if (that.isMouseOutside(event) &&\n                that.modalRulesPass(settings)) {\n                localStorage.setItem('budget-exit-intent', new Date().getTime());\n                setTimeout(function () {\n                    document.getElementsByClassName(settings.popup)[0].classList.add('is-active');\n                    document.body.classList.add('overflow-blocked');\n                }, settings.exitDelay);\n\n            }\n        }, false);\n    },\n    init: function () {\n        var elements = document.getElementsByClassName(this.locators.trigger);\n        if (elements.length > 0) {\n            this.triggerExitIntent(elements[0]);\n        }\n    },\n};\n\n//# sourceURL=webpack:///./atom-script/utils/exitIntent.js?");

		/***/ }),

	/***/ "./atom-script/utils/socialMedia.js":
	/*!******************************************!*\
      !*** ./atom-script/utils/socialMedia.js ***!
      \******************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		eval("module.exports = {\n    locators: {\n        social: {\n            init: 'bs_social_media',\n            data: {\n                name: 'social',\n                via: 'via',\n                text: 'shareText',\n                url: 'shareLink',\n                hashtags: 'hashtags'\n            }\n        }\n    },\n    social: {\n        mappers: {\n            twitter: function (data) {\n                return {\n                    url: data.link,\n                    text: data.text,\n                    hashtags: data.hashtags,\n                    via: data.via\n                };\n            },\n            facebook: function (data) {\n                return {\n                    u: data.link,\n                    quote: data.text,\n                    hashtags: data.hashtags\n                };\n            },\n            linkedin: function (data) {\n                return {\n                    url: data.link,\n                    mini: true,\n                    title: data.title,\n                    summary: data.text,\n                    source: data.link\n                };\n            },\n            whatsapp: function (data) {\n                return {\n                    text: data.link\n                };\n            },\n            google: function (data) {\n                return {\n                    text: data.text,\n                    url: data.link\n                };\n            }\n        },\n        action: {\n            paramsToArray: function (data) {\n                var params = [];\n                for (var value in data) {\n                    if (data && data[value]) {\n                        params.push(value + '=' + encodeURIComponent(data[value]));\n                    }\n                }\n                return params;\n            },\n            redirectToSocialMedia: function (baseUrl, data) {\n                window.open(baseUrl + this.paramsToArray(data).join('&'));\n            },\n            twitter: function (data) {\n                this.redirectToSocialMedia('https://twitter.com/share?', data);\n            },\n\n            facebook: function (data) {\n                this.redirectToSocialMedia('https://www.facebook.com/sharer/sharer.php?', data);\n            },\n\n            linkedin: function (data) {\n                this.redirectToSocialMedia('https://www.linkedin.com/shareArticle?', data);\n            },\n\n            whatsapp: function (data) {\n                this.redirectToSocialMedia('whatsapp://send?', data);\n            },\n\n            google: function (data) {\n                this.redirectToSocialMedia('https://plus.google.com/share?', data);\n            }\n        }\n    },\n\n    bindListener: function (elementAction) {\n        var that = this;\n        elementAction.addEventListener('click', function (event) {\n            var element = event.target.closest('.' + that.locators.social.init),\n                elementData = element.dataset,\n                network = elementData.social,\n                params = that.getParamsByNetwork(that.getFilledElement(element, elementData), network);\n            console.log('network %o', network);\n            if (that.social.action[network]) {\n                that.social.action[network](params);\n            }\n        });\n    },\n    addSocialListener: function () {\n        var elements = document.getElementsByClassName(this.locators.social.init);\n        for (var i = 0; i < elements.length; i++) {\n            this.bindListener(elements[i]);\n        }\n    },\n    getFilledElement: function (element, elementData) {\n        var socialTarget = elementData.target,\n            targetById = document.getElementById(socialTarget),\n            target = !!targetById ? targetById : document.querySelector('.' + socialTarget);\n        return !!target ? target : element;\n    },\n\n    getParamsByNetwork: function (element, network) {\n        var socialMap = this.locators.social.data,\n            dataset = element.dataset,\n            settings = ({\n                network: network,\n                text: dataset[socialMap.text],\n                link: dataset[socialMap.url],\n                hashtags: dataset[socialMap.hashtags],\n                via: dataset[socialMap.via]\n            });\n        console.log({socialMap: socialMap, settings: settings, dataset: dataset, mappers: this.social.mappers});\n        return this.social.mappers[network](settings);\n    },\n\n    init: function () {\n        this.addSocialListener();\n    }\n};\n\n//# sourceURL=webpack:///./atom-script/utils/socialMedia.js?");

		/***/ }),

	/***/ "./atom-script/utils/state.js":
	/*!************************************!*\
      !*** ./atom-script/utils/state.js ***!
      \************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		eval("var Status = Status || {};\nStatus.active = {\n    locators: {\n        trigger: '.bs_state',\n        activeClass: 'is-active',\n        eventClick: 'click'\n    },\n    bindToggleElement: function (element, component, state, closeClass) {\n        var that = this;\n        if (element.length > 0) {\n            element[0].addEventListener(this.locators.eventClick, function (e) {\n                if (state || !closeClass || e.target.classList.contains(closeClass)) {\n                    document.body.classList.remove('overflow-blocked');\n                    component.classList.toggle(that.locators.activeClass, state);\n                }\n            }, {passive: true});\n        }\n    },\n    bindClose: function (closeElement, component) {\n        if (closeElement) {\n            this.bindToggleElement(document.getElementsByClassName(closeElement), component, false, closeElement);\n        }\n\n    },\n    bindActive: function (activeElement, component) {\n        if (activeElement) {\n            this.bindToggleElement(document.getElementsByClassName(activeElement), component, true);\n        }\n    },\n    addActiveClass: function (component) {\n        component.classList.add(this.locators.activeClass);\n    },\n    bindDelay: function (timeout, component) {\n        var that = this;\n        if (timeout) {\n            setTimeout(function () {\n                that.addActiveClass(component);\n            }, timeout);\n        }\n    },\n    extractData: function (dataset) {\n        return {\n            close: dataset.close,\n            delay: dataset.delay,\n            active: dataset.active\n        };\n    },\n    bindEvents: function (settings, component) {\n        this.bindClose(settings.close, component);\n        this.bindDelay(settings.delay, component);\n        this.bindActive(settings.active, component);\n    },\n    init: function () {\n        var elementsToActive = document.querySelectorAll(this.locators.trigger);\n        for (var i = 0; i < elementsToActive.length; i++) {\n            this.bindEvents(this.extractData(elementsToActive[i].dataset), elementsToActive[i]);\n        }\n    }\n};\n\nStatus.viewPort = {\n    locators: {\n        trigger: '.bs_viewport',\n        partialClass: 'is-visible',\n        fullClass: 'is-all-visible',\n        loaded: 'is-loaded'\n    },\n\n    model: {\n        elements: [],\n        offset: {\n            y: window.pageYOffset,\n            x: window.pageXOffset,\n            height: window.innerHeight,\n            width: window.innerWidth\n        }\n    },\n\n    isElementOnPartialViewPort: function (el) {\n        var top = el.offsetTop;\n        var left = el.offsetLeft;\n        var width = el.offsetWidth;\n        var height = el.offsetHeight;\n\n        while (el.offsetParent) {\n            el = el.offsetParent;\n            top += el.offsetTop;\n            left += el.offsetLeft;\n        }\n\n        return (\n            top < (window.pageYOffset + window.innerHeight) &&\n            left < (window.pageXOffset + window.innerWidth) &&\n            (top + height) > window.pageYOffset &&\n            (left + width) > window.pageXOffset\n        );\n    },\n\n    isElementOnViewPort: function (el) {\n        var top = el.offsetTop;\n        var left = el.offsetLeft;\n        var width = el.offsetWidth;\n        var height = el.offsetHeight;\n\n        while (el.offsetParent) {\n            el = el.offsetParent;\n            top += el.offsetTop;\n            left += el.offsetLeft;\n        }\n\n        return (\n            top >= window.pageYOffset &&\n            left >= window.pageXOffset &&\n            (top + height) <= (window.pageYOffset + window.innerHeight) &&\n            (left + width) <= (window.pageXOffset + window.innerWidth)\n        );\n    },\n    checkElementsOnViewPort: function (elements) {\n        var isVisible, isFullVisible;\n        for (var i = 0; i < elements.length; i++) {\n            isVisible = this.isElementOnPartialViewPort(elements[i]);\n            isFullVisible = this.isElementOnViewPort(elements[i]);\n            elements[i].classList\n                .toggle(this.locators.partialClass, isVisible);\n            elements[i].classList\n                .toggle(this.locators.fullClass, isFullVisible);\n            if (isVisible) {\n                elements[i].classList\n                    .add(this.locators.loaded);\n            }\n\n        }\n    },\n    bindScroll: function () {\n        var that = this;\n        document.addEventListener('scroll', function () {\n            that.checkElementsOnViewPort(that.model.elements);\n        }, {passive: true});\n        that.checkElementsOnViewPort(that.model.elements);\n    },\n    bindEvents: function () {\n        this.bindScroll();\n    },\n    init: function () {\n        this.model.elements = document.querySelectorAll(this.locators.trigger);\n        if (this.model.elements.length === 0) {\n            return;\n        }\n        this.bindEvents();\n    }\n};\n\nStatus.init = function () {\n    this.active.init();\n    this.viewPort.init();\n};\n\nmodule.exports = Status;\n\n\n\n\n//# sourceURL=webpack:///./atom-script/utils/state.js?");

		/***/ }),

	/***/ "./atom-script/utils/tracking.js":
	/*!***************************************!*\
      !*** ./atom-script/utils/tracking.js ***!
      \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

		eval("module.exports = {\n    model: {\n        acc: 0,\n        stepsInSeconds: 30,\n        scroll: {\n            scroll25: false,\n            scroll50: false,\n            scroll75: false\n\n        }\n    },\n    trackEvent: function (eventLabel, eventAction, eventCategory, eventValue) {\n        if (window.location.href.indexOf('http://localhost') > -1) {\n            console.log('Analytics -> %o', {\n                eventLabel: eventLabel,\n                eventAction: eventAction,\n                eventCategory: eventCategory,\n                eventValue: eventValue\n            });\n        }\n        if (window.ga) {\n            ga('send', {\n                hitType: 'event',\n                eventCategory: eventCategory,\n                eventAction: eventAction,\n                eventLabel: eventLabel,\n                eventValue: eventValue\n            });\n        }\n        if (window.gtag) {\n            gtag('event', eventAction, {\n                'event_category': eventCategory,\n                'event_label': eventLabel,\n                'event_value': eventValue\n            });\n        }\n    },\n    timeEvent: function (sessionTime) {\n        this.trackEvent(window.location.href, 'Reading', 'Session Time', sessionTime);\n    },\n    scrollDepthEvent: function (percent) {\n        if (!this.model.scroll['scroll' + percent]) {\n            this.trackEvent(window.location.href, 'scrolled ' + percent, 'Scroll', percent);\n            this.model.scroll['scroll' + percent] = true;\n        }\n\n    },\n    getScrollPercent: function () {\n        var h = document.documentElement,\n            b = document.body,\n            st = 'scrollTop',\n            sh = 'scrollHeight';\n        return Math.round((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100);\n    },\n    scrollDepthEventListener: function () {\n        var that = this;\n        document.addEventListener('scroll', function () {\n            var percent = that.getScrollPercent();\n            if (percent % 25 === 0 && percent !== 0) {\n                that.scrollDepthEvent(percent);\n            }\n        });\n    },\n    bindClickEvents: function () {\n        var that = this;\n        document.addEventListener('click', function (e) {\n            if (e.target.matches('a, button')) {\n                that.trackEvent(window.location.href, 'button: ' + e.target.innerText, 'Click Event', that.model.acc);\n            }\n        });\n    },\n    basicEvents: function () {\n        var that = this;\n        setInterval(function () {\n            that.model.acc += that.model.stepsInSeconds;\n            that.timeEvent(that.model.acc);\n        }, this.model.stepsInSeconds * 1000);\n        this.scrollDepthEventListener();\n        this.bindClickEvents();\n    }\n};\n\n//# sourceURL=webpack:///./atom-script/utils/tracking.js?");

		/***/ })

	/******/ });
