/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/twitter.svg":
/*!************************************!*\
  !*** ./src/assets/img/twitter.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../img/twitter.svg");

/***/ }),

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/media.sass":
/*!************************************!*\
  !*** ./src/assets/sass/media.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2/dist/js/select2.min */ "./node_modules/select2/dist/js/select2.min.js");
/* harmony import */ var select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/twitter.svg */ "./src/assets/img/twitter.svg");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sass/app.sass */ "./src/assets/sass/app.sass");
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sass/media.sass */ "./src/assets/sass/media.sass");
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__);
// JS






 // SCSS




/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// $(() => {
//     $(window).on('load', function () {
//         $('.preloader__wrp').fadeOut();
//     });
// });
$(document).ready(function () {
  var arrow_prev = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 5H2M2 5L5.5 1.5M2 5L5.5 8.5' stroke='#2A2A2A' stroke-width='2'/></svg>",
      arrow_next = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 5H9M9 5L5.5 1.5M9 5L5.5 8.5' stroke='#2A2A2A' stroke-width='2'/></svg>",
      arrow_next_white = "<svg width='11' height='10' viewBox='0 0 11 10' xmlns='http://www.w3.org/2000/svg'><path d='M0 5H9M9 5L5.5 1.5M9 5L5.5 8.5'  stroke-width='2'/></svg>",
      arrow_prev_white = "<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11 5H2M2 5L5.5 1.5M2 5L5.5 8.5' stroke-width='2'/></svg>"; // js-banner-slider

  $('.js-banner-slider').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: true,
    nav: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
    navContainerClass: 'slider-arrow__wrp',
    dotsClass: 'dots',
    dotClass: 'dots__item'
  }); // main product slider

  $('.js-product-slider').owlCarousel({
    loop: true,
    margin: 20,
    dotsData: true,
    nav: true,
    URLhashListener: true,
    dots: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
    navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
    dotsClass: 'dots-number',
    dotClass: 'dots-number__item',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  }); // main recommend slider

  $('.js-recommended-slider').owlCarousel({
    loop: true,
    margin: 18,
    dotsData: true,
    nav: true,
    URLhashListener: true,
    dots: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
    navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
    dotsClass: 'dots-number',
    dotClass: 'dots-number__item',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  }); // main news slider

  $('.js-news-slider').owlCarousel({
    items: 1,
    loop: true,
    dotsData: true,
    nav: true,
    URLhashListener: true,
    dots: true,
    navText: [arrow_prev, arrow_next_white],
    navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev news-arrow news-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next news-arrow news-arrow_next"],
    navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
    dotsClass: 'dots-number news__dots',
    dotClass: 'dots-number__item news__dots-item'
  }); //reviews slider

  $('.js-reviews-slider').owlCarousel({
    loop: true,
    margin: 20,
    dotsData: true,
    nav: true,
    URLhashListener: true,
    dots: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
    navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
    dotsClass: 'dots-number',
    dotClass: 'dots-number__item',
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });
  $('.js-works-slider').owlCarousel({
    items: 1,
    loop: true,
    dotsData: true,
    nav: true,
    URLhashListener: true,
    dots: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev products number-arrow number-arrow_prev", "slider-arrow slider-arrow_next products number-arrow number-arrow_next"],
    navContainerClass: 'slider-arrow__wrp number-arrow__wrp',
    dotsClass: 'dots-number',
    dotClass: 'dots-number__item'
  });
  $(".js-smalimg-slider").owlCarousel({
    items: 3,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    margin: 0,
    nav: true
  });
});
$(function () {
  $('.hamburger').on('click', function headerHambClick() {
    $(this).toggleClass('is-active');
    $('.mobile-menu').slideToggle().toggleClass('mobile-menu_open'); //     .removeClass('feed-open');
  });
});
$(function () {
  $('.js-open-footer-list').on('click', function openFooterMenu() {
    $(this).toggleClass('is-active');
    $(this).next('.footer__list').toggleClass('open');
  });
});
$('.js-select').select2({
  minimumResultsForSearch: -1,
  id: "id"
}); // input number

$(function () {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".input-number__btn_minus");
    var $quantityArrowPlus = $(".input-number__btn_plus");
    var $quantityNum = $(".input-number__input");
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});
$('[data-fancybox]').fancybox({
  btnTpl: {
    smallBtn: '<button type="button" data-fancybox-close class="modal-cart__close" title="{{CLOSE}}">' + 'Закрыть' + '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M1.42553 1.42553L21 21M1 20.5745L20.5745 1" stroke="#2A2A2A" stroke-width="2"/>' + '</svg>' + "</button>"
  }
});
$('#collapseExample').on('hidden.bs.collapse', function () {
  this.scrollIntoView();
}); //tabs

var tabs = document.querySelector(".tabs");
var tabsBtn = document.querySelectorAll(".tabs__btn");
var tabsContents = document.querySelectorAll(".tabs__content");

function displayCurrentTab(current) {
  for (var i = 0; i < tabsContents.length; i++) {
    tabsContents[i].style.display = current === i ? "block" : "none";
  }
}

displayCurrentTab(0);

if (null !== tabs) {
  tabs.addEventListener("click", function (event) {
    if (event.target.className === "tabs__btn") {
      for (var i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].classList.remove("is-active");
      }
    }

    if (event.target.className === "tabs__btn") {
      for (var _i = 0; _i < tabsBtn.length; _i++) {
        if (event.target === tabsBtn[_i]) {
          displayCurrentTab(_i);
          event.target.classList.add('is-active');
          break;
        }
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=app.b0d3b7dd60948ed92b82.js.map