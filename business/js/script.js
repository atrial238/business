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
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/app.js":
/*!************************!*\
  !*** ./#src/js/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/header */ "./#src/js/files/header.js");
/* harmony import */ var _files_imageToBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/imageToBackground */ "./#src/js/files/imageToBackground.js");
/* harmony import */ var _files_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/tabs */ "./#src/js/files/tabs.js");
/* harmony import */ var _files_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/map */ "./#src/js/files/map.js");
/* harmony import */ var _files_isSupportWebp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/isSupportWebp */ "./#src/js/files/isSupportWebp.js");






window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	Object(_files_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
	Object(_files_imageToBackground__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_files_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
	Object(_files_map__WEBPACK_IMPORTED_MODULE_3__["default"])();
	Object(_files_isSupportWebp__WEBPACK_IMPORTED_MODULE_4__["default"])();
});


/***/ }),

/***/ "./#src/js/files/header.js":
/*!*********************************!*\
  !*** ./#src/js/files/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function header (){

	const nav = document.querySelector('.header__nav-mob'),
			burger = document.querySelector('.burger-menu'),
			menu = document.querySelector('.header__nav-mob'),
			scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`;

	let headerHieght  = document.querySelector('.header').offsetHeight;

	nav.style.top = `${headerHieght - 5}px`;

	window.addEventListener('resize', () => {
		headerHieght  = document.querySelector('.header').offsetHeight;
		nav.style.top = `${headerHieght - 5}px`;
	});
	
	burger.addEventListener('click', () => {
		
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		window.document.body.classList.toggle('_lock');
		
		if(window.document.body.classList.contains('_lock')){
		
			window.document.body.style.marginRight = scrollWidth;
		}else{
			window.document.body.style.marginRight = '';
		}
		
	});
	
	burger.addEventListener('Touch', (e) => {
		e.preventDefault();   
	})
}
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./#src/js/files/imageToBackground.js":
/*!********************************************!*\
  !*** ./#src/js/files/imageToBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isIE */ "./#src/js/files/isIE.js");


function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(Object(_isIE__WEBPACK_IMPORTED_MODULE_0__["default"])()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}else if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){
			
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			ibg[i].querySelector('img').style.width = '0px';
			ibg[i].querySelector('img').style.height = '0px';
		}	
	}
}
/* harmony default export */ __webpack_exports__["default"] = (ibg); 


/***/ }),

/***/ "./#src/js/files/isIE.js":
/*!*******************************!*\
  !*** ./#src/js/files/isIE.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isIE() {
	var ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
/* harmony default export */ __webpack_exports__["default"] = (isIE);

/***/ }),

/***/ "./#src/js/files/isSupportWebp.js":
/*!****************************************!*\
  !*** ./#src/js/files/isSupportWebp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function testWebp () {
	function test(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	test(function (support) {
	
		if (support == true) {
			document.querySelector('body').classList.add('_webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (testWebp);

/***/ }),

/***/ "./#src/js/files/map.js":
/*!******************************!*\
  !*** ./#src/js/files/map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function initMap(){

	const location = {lat: 55.184986, lng:13.850078},
			options =  {
				center: location,
				zoom: 3,
				title: "Click to zoom",
				styles: [
					{
						 "featureType": "all",
						 "stylers": [
							  {
									"saturation": 0
							  },
							  {
									"hue": "#9fcfeb"
							  }
						 ]
					},
					{
						 "featureType": "road",
						 "stylers": [
							  {
									"saturation": -70
							  }
						 ]
					},
					{
						 "featureType": "transit",
						 "stylers": [
							  {
									"visibility": "off"
							  }
						 ]
					},
					{
						 "featureType": "poi",
						 "stylers": [
							  {
									"visibility": "off"
							  }
						 ]
					},
					{
						 "featureType": "water",
						 "stylers": [
							  {
									"visibility": "simplified"
							  },
							  {
									"saturation": -60
							  }
						 ]
					}
			  ]
			},
			locationMarks = [
				[67.13315829831872, 20.651644170040505],
				[59.90963724895858, 10.759728777773935],
				[52.52514143848111, 13.369403348567861],
				[41.901193885970194, 12.50115127436904],
				[40.40675956935116, -3.6895582819890094]
			],
			urlMarks = '../img/icons/mapMark.svg',
			map = new google.maps.Map(document.getElementById('map'), options);

	

	locationMarks.forEach(locationMark => {
	
		const marker = new google.maps.Marker(
			{
				position: new google.maps.LatLng(locationMark[0], locationMark[1]),
				map: map,
				title: "Click to zoom",
				icon: {
					url: urlMarks
				}
			}
		);

		marker.addListener("click", () => {
			let currentZoom = map.getZoom(),
				targetZoom = 12;
				
			let idIntervalZoom = setInterval( () => {

				if(currentZoom < targetZoom){
					map.setZoom(++currentZoom);
				}else{
					clearInterval(idIntervalZoom);
				}

			}, 80);
		
			// let targetPosition = marker.getPosition(),
			// 	targetPositionLat = targetPosition.lat(),
			// 	positionLat = '',
			// 	positionLng = '',

			// 	idIntervalMove = setInterval( () => {

			// 		positionLat = targetPosition.lat() + 0.1;
			// 		positionLng = targetPosition.lng() + 0.1;

			// 		if(positionLat >= targetPositionLat ){
			// 			map.setCenter({lat: positionLat, lng: positionLng} );
			// 		}else{
			// 			clearInterval(idIntervalMove);
			// 			map.setCenter(marker.getPosition());
			// 		}
					

			// 	}, 300);

			map.setCenter(marker.getPosition());
		 });
	});
// 	console.log(targetPos.lng())
// console.log(targetPos.lat())
		
}
	
/* harmony default export */ __webpack_exports__["default"] = (initMap);





/***/ }),

/***/ "./#src/js/files/tabs.js":
/*!*******************************!*\
  !*** ./#src/js/files/tabs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs() {

	const tabs = document.querySelectorAll('.nav__item'),
			contents  = document.querySelectorAll('.news');
	
	tabs.forEach(tab => {
		tab.addEventListener('click', (e) => {

			tabs.forEach(tab => {
				tab.classList.remove('_active');
			});
			e.target.classList.add('_active');

			new Promise((resolve) => {

				contents.forEach(content => {
					content.classList.add('fadeOut');
					content.classList.remove('fadeIn');
				});

				const idInter = setInterval(() => {

					contents.forEach(content => {

						if(+getComputedStyle(content).opacity === 0){
							contents.forEach(content => {
								content.style.display = 'none';
							});

							clearInterval(idInter);
							resolve(true);
						}
					});
				},10);
			})
			.then(() => {
				contents.forEach(content => {
							
					const contentSubtitle = content.querySelector('.news__subtitle');

					if(contentSubtitle.textContent === tab.textContent) {
	
						content.style.display = 'flex';
						content.classList.remove('fadeOut');
						content.classList.add('fadeIn');
						
					}else if(tab.textContent === 'All'){
	
						contents.forEach(content => {
							content.style.display = 'flex';
							content.classList.remove('fadeOut');
							content.classList.add('fadeIn');
						});
					}
				});
			});
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map