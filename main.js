(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-biker-geo></app-biker-geo>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kick';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _biker_geo_biker_geo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./biker-geo/biker-geo.component */ "./src/app/biker-geo/biker-geo.component.ts");
/* harmony import */ var _biker_info_biker_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./biker-info/biker-info.component */ "./src/app/biker-info/biker-info.component.ts");
/* harmony import */ var _bike_go_bike_go_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bike-go/bike-go.component */ "./src/app/bike-go/bike-go.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _biker_geo_biker_geo_component__WEBPACK_IMPORTED_MODULE_5__["BikerGeoComponent"],
                _biker_info_biker_info_component__WEBPACK_IMPORTED_MODULE_6__["BikerInfoComponent"],
                _bike_go_bike_go_component__WEBPACK_IMPORTED_MODULE_7__["BikeGoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bike-go/bike-go.component.html":
/*!************************************************!*\
  !*** ./src/app/bike-go/bike-go.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart\">\n  <div class=\"blocks\">\n    <br>\n    <br>\n    <br>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\"><br>\n        <img class=\"star\" src=\"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55b29856219239.59a58ab6ca0a1.gif\" class=\"stick animated slideInLeft\"\n          alt=\"\">\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"blocks\">\n          <br>\n          <br></div>\n        <form>\n          <fieldset class=\"uk-fieldset\">\n            <legend class=\"uk-legend\">Trip looking board</legend>\n            <div class=\"uk-margin\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Source\">\n            </div>\n            <div class=\"uk-margin\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Destination\">\n            </div>\n            <div class=\"uk-margin\">\n              <input class=\"uk-input\" type=\"number\" placeholder=\"Days looking for\">\n            </div>\n            <div class=\"uk-margin\">\n              <label for=\"\">KM about to drive</label>\n              <input class=\"uk-range\" type=\"range\" value=\"1\" min=\"0\" max=\"100\" step=\"1\">\n            </div>\n            <button class=\"btnair\">Hire vehicle  \n              <i *ngIf=\"role=='single'\" uk-tooltip=\"title:Single;pos:left;\" class=\"fas fa-biking animated bounceIn\"></i>\n              <i *ngIf=\"role=='married'\" uk-tooltip=\"title:Married;pos:left;\" class=\"fas fa-motorcycle animated bounceIn\"></i>\n              <i *ngIf=\"role=='couple'\" uk-tooltip=\"title:Couple;pos:left;\" class=\"fas fa-bicycle animated bounceIn\"></i>\n            </button>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"setset  animated bounceIn\">\n  <i *ngIf=\"role=='single'\" uk-tooltip=\"title:Single;pos:left;\" class=\"fas fa-biking animated bounceIn\"></i>\n  <i *ngIf=\"role=='married'\" uk-tooltip=\"title:Married;pos:left;\" class=\"fas fa-motorcycle animated bounceIn\"></i>\n  <i *ngIf=\"role=='couple'\" uk-tooltip=\"title:Couple;pos:left;\" class=\"fas fa-bicycle animated bounceIn\"></i>\n</div>\n<div class=\"setset2  animated bounceIn\">\n  <i *ngIf=\"gender=='male'\" uk-tooltip=\"title:Male;pos:left;\" class=\"fas fa-male animated bounceIn\"></i>\n  <i *ngIf=\"gender=='female'\" uk-tooltip=\"title:Female;pos:left;\" class=\"fas fa-female animated bounceIn\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/bike-go/bike-go.component.scss":
/*!************************************************!*\
  !*** ./src/app/bike-go/bike-go.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart {\n  background-color: #e0e0e0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: block; }\n\n.star {\n  width: 75%;\n  margin: auto;\n  display: block;\n  -webkit-transform: translate(0%, 20%);\n          transform: translate(0%, 20%); }\n\n.back {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 10px;\n  font-size: 20px;\n  color: white; }\n\n.setset {\n  position: fixed;\n  top: 45px;\n  right: 0;\n  margin: 13px; }\n\n.setset i {\n    font-size: 24px;\n    color: white;\n    border: 1px white;\n    display: -webkit-box;\n    display: flex;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1.5px 1.5px whitesmoke; }\n\n.setset2 {\n  position: fixed;\n  top: 90px;\n  right: 10px;\n  margin: 13px; }\n\n.setset2 i {\n    font-size: 24px;\n    color: white;\n    border: 1px white;\n    display: -webkit-box;\n    display: flex;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1.5px 1.5px whitesmoke; }\n\n@media (max-width: 768px) {\n  .blocks {\n    display: none; } }\n\n.btnair {\n  width: 50%;\n  padding: 5px;\n  background-color: white;\n  border: 0;\n  margin: auto;\n  color: #e0e0e0;\n  display: block;\n  border-radius: 5px;\n  border: 1px solid white; }\n\n.btnair i {\n    font-weight: bold;\n    float: right;\n    padding: 5px; }\n\n.btnair:hover {\n  background-color: #e0e0e0;\n  color: black;\n  border: 1px solid black;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  outline: none;\n  box-shadow: none; }\n\n.btnair:hover i {\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlrZS1nby9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGtpY2svc3JjXFxhcHBcXGJpa2UtZ29cXGJpa2UtZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixlQUFjO0VBQ2Qsc0NBQTZCO1VBQTdCLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxTQUFRO0VBQ1IsYUFBWSxFQVdiOztBQWZEO0lBTUksZ0JBQWU7SUFDZixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLHFCQUFhO0lBQWIsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQiwyQ0FBMEMsRUFDM0M7O0FBRUg7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxZQUFXO0VBQ1gsYUFBWSxFQVdiOztBQWZEO0lBTUksZ0JBQWU7SUFDZixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLHFCQUFhO0lBQWIsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQiwyQ0FBMEMsRUFDM0M7O0FBRUg7RUFDRTtJQUNFLGNBQWEsRUFDZCxFQUFBOztBQUdIO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsVUFBUztFQUNULGFBQVk7RUFFWixlQUFjO0VBQ2QsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFNeEI7O0FBaEJEO0lBWUksa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixhQUFZLEVBQ2I7O0FBRUg7RUFDRSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixvREFBMkM7RUFBM0MsNENBQTJDO0VBQzNDLGNBQWE7RUFDYixpQkFBZ0IsRUFJakI7O0FBVkQ7SUFRSSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9iaWtlLWdvL2Jpa2UtZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc3RhciB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDIwJSk7XHJcbn1cclxuLmJhY2sge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2V0c2V0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMTNweDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEuNXB4IDEuNXB4IHdoaXRlc21va2U7XHJcbiAgfVxyXG59XHJcbi5zZXRzZXQyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA5MHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbjogMTNweDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEuNXB4IDEuNXB4IHdoaXRlc21va2U7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5ibG9ja3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5idG5haXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbi8vICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG4uYnRuYWlyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bike-go/bike-go.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bike-go/bike-go.component.ts ***!
  \**********************************************/
/*! exports provided: BikeGoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeGoComponent", function() { return BikeGoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BikeGoComponent = /** @class */ (function () {
    function BikeGoComponent() {
    }
    BikeGoComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem("role") !== undefined) {
            this.role = window.localStorage.getItem("role");
        }
        if (window.localStorage.getItem("gender") !== undefined) {
            this.gender = window.localStorage.getItem("gender");
        }
        console.log(this.gender, this.role);
    };
    BikeGoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-bike-go",
            template: __webpack_require__(/*! ./bike-go.component.html */ "./src/app/bike-go/bike-go.component.html"),
            styles: [__webpack_require__(/*! ./bike-go.component.scss */ "./src/app/bike-go/bike-go.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BikeGoComponent);
    return BikeGoComponent;
}());



/***/ }),

/***/ "./src/app/biker-geo/biker-geo.component.html":
/*!****************************************************!*\
  !*** ./src/app/biker-geo/biker-geo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"air\" *ngIf=\"!go && good\">\n  <div class=\"container\">\n    <img src=\"./assets/1.gif\" alt=\"\" class=\"stick animated slideInLeft\">\n    <br>\n    <button class=\"btnair\" (click)=\"setGeo()\">Setup your Location\n  <i *ngIf=\"!loader\" class=\"fas fa-street-view\"></i>\n  <i *ngIf=\"loader\" class=\"far rotloader fa-compass\"></i>\n  </button>\n    <br/>\n    <div *ngIf=\"positionInfo.length > 0\" class=\"alert text-center alert-primary   \">\n      {{positionInfo}} <i style=\"float: right;  font-size: 20px;\" (click)=\"go = true\"  class=\"far fa-arrow-alt-circle-right\"></i>\n    </div>\n  </div>\n</div>\n<app-biker-info *ngIf=\"go\"></app-biker-info>\n\n<div class=\"setset animated bounceIn\">\n  <i class=\"fas fa-street-view  animated bounceIn\" [title]=\"positionInfo\" uk-tooltip=\"title:Position;pos:left;\" *ngIf=\"positionInfo.length > 0\"></i>\n</div>\n<i *ngIf=\"go\" (click)=\"good = true\" (click)=\"go = false\" class=\"fas fa-arrow-left back\"></i>\n"

/***/ }),

/***/ "./src/app/biker-geo/biker-geo.component.scss":
/*!****************************************************!*\
  !*** ./src/app/biker-geo/biker-geo.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".air {\n  background-color: #00bbfe;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: block; }\n\n.stick {\n  width: 50%;\n  margin: auto;\n  display: block; }\n\n.btnair {\n  width: 50%;\n  padding: 5px;\n  background-color: white;\n  border: 0;\n  margin: auto;\n  font-size: 28px;\n  color: #00bbfe;\n  display: block;\n  border-radius: 5px;\n  border: 1px solid white; }\n\n.btnair i {\n    font-weight: bold;\n    float: right;\n    padding: 5px; }\n\n.btnair:hover {\n  background-color: #00bbfe;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  outline: none;\n  box-shadow: none; }\n\n.btnair:hover i {\n    font-weight: bold; }\n\n.rotloader {\n  -webkit-animation: rotate 1s infinite;\n          animation: rotate 1s infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.posinfo {\n  -webkit-transform: translate(50%, 10%);\n          transform: translate(50%, 10%);\n  width: 50%;\n  background-color: white;\n  border: 1px solid #00bbfe;\n  margin: auto;\n  display: block;\n  margin: 10px 0px; }\n\n.posinfo i {\n    float: right;\n    color: black;\n    padding: 5px 0px;\n    font-weight: bold;\n    color: #00bbfe;\n    cursor: pointer;\n    -webkit-animation: blink 1s infinite;\n            animation: blink 1s infinite; }\n\n.posinfo:hover {\n  background-color: #00bbfe;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  outline: none;\n  box-shadow: none; }\n\n.posinfo:hover i {\n    color: white;\n    font-weight: bold; }\n\n@-webkit-keyframes blink {\n  from {\n    color: #01579b; }\n  to {\n    color: #00bbfe; } }\n\n@keyframes blink {\n  from {\n    color: #01579b; }\n  to {\n    color: #00bbfe; } }\n\n@media (max-width: 768px) {\n  .stick {\n    width: 100%; }\n  .posinfo {\n    width: 75%; } }\n\n.setset {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 15px; }\n\n.setset i {\n    font-size: 24px;\n    color: white;\n    border: 1px white;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1.5px 1.5px whitesmoke; }\n\n.back {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 10px;\n  font-size: 20px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlrZXItZ2VvL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxca2ljay9zcmNcXGFwcFxcYmlrZXItZ2VvXFxiaWtlci1nZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixVQUFTO0VBQ1QsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsd0JBQXVCLEVBTXhCOztBQWhCRDtJQVlJLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osYUFBWSxFQUNiOztBQUVIO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUMzQyxjQUFhO0VBQ2IsaUJBQWdCLEVBSWpCOztBQVZEO0lBUUksa0JBQWlCLEVBQ2xCOztBQUVIO0VBQ0Usc0NBQTZCO1VBQTdCLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRSx1Q0FBOEI7VUFBOUIsK0JBQThCO0VBQzlCLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixlQUFjO0VBQ2QsaUJBQWdCLEVBVWpCOztBQWpCRDtJQVNJLGFBQVk7SUFDWixhQUFZO0lBQ1osaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQixlQUFjO0lBQ2QsZ0JBQWU7SUFDZixxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBQzdCOztBQUVIO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUMzQyxjQUFhO0VBQ2IsaUJBQWdCLEVBS2pCOztBQVhEO0lBUUksYUFBWTtJQUNaLGtCQUFpQixFQUNsQjs7QUFFSDtFQUNFO0lBQ0UsZUFBYyxFQUFBO0VBRWhCO0lBQ0UsZUFBYyxFQUFBLEVBQUE7O0FBTGxCO0VBQ0U7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFDRSxlQUFjLEVBQUEsRUFBQTs7QUFHbEI7RUFDRTtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0UsV0FBVSxFQUNYLEVBQUE7O0FBRUg7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixTQUFRO0VBQ1IsYUFBWSxFQVViOztBQWREO0lBTUksZ0JBQWU7SUFDZixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQiwyQ0FBMEMsRUFDM0M7O0FBRUg7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYmlrZXItZ2VvL2Jpa2VyLWdlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5haXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJiZmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnN0aWNrIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnRuYWlyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogIzAwYmJmZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgaSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuLmJ0bmFpcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmJmZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuLnJvdGxvYWRlciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbi5wb3NpbmZvIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwJSk7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiYmZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIGkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMGJiZmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xyXG4gIH1cclxufVxyXG4ucG9zaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmJmZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgZnJvbSB7XHJcbiAgICBjb2xvcjogIzAxNTc5YjtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgY29sb3I6ICMwMGJiZmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zdGljayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBvc2luZm8ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbn1cclxuLnNldHNldCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEuNXB4IDEuNXB4IHdoaXRlc21va2U7XHJcbiAgfVxyXG59XHJcbi5iYWNrIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/biker-geo/biker-geo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/biker-geo/biker-geo.component.ts ***!
  \**************************************************/
/*! exports provided: BikerGeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikerGeoComponent", function() { return BikerGeoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BikerGeoComponent = /** @class */ (function () {
    function BikerGeoComponent() {
        this.loader = false;
        this.go = false;
        this.good = true;
    }
    BikerGeoComponent.prototype.ngOnInit = function () { };
    BikerGeoComponent.prototype.setGeo = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.positionInfo =
                        "Your current position is (" +
                            "Latitude: " +
                            position.coords.latitude +
                            ", " +
                            "Longitude: " +
                            position.coords.longitude +
                            ")";
                });
            }
            else {
                alert("Sorry, your browser does not support HTML5 geolocation.");
            }
        }, 2000);
    };
    BikerGeoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-biker-geo",
            template: __webpack_require__(/*! ./biker-geo.component.html */ "./src/app/biker-geo/biker-geo.component.html"),
            styles: [__webpack_require__(/*! ./biker-geo.component.scss */ "./src/app/biker-geo/biker-geo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BikerGeoComponent);
    return BikerGeoComponent;
}());



/***/ }),

/***/ "./src/app/biker-info/biker-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/biker-info/biker-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"art\" *ngIf=\"!goo\">\n  <div class=\"container\">\n    <img src=\"./assets/2.gif\" class=\"stick animated slideInLeft\" alt=\"\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n      </div>\n      <div class=\"col-md-6\">\n        <span>Required vechile for</span>\n        <div class=\"btnp row\" role=\"group\" aria-label=\"Basic example\">\n          <button type=\"button\" (click)=\"set('role', 'single')\" (click)=\"role='single'\" class=\"col-md-4 btn btn-secondary\">Single<i class=\"fas fa-biking\"></i></button>\n          <button type=\"button\" (click)=\"set('role', 'married')\" (click)=\"role='married'\" class=\"col-md-4 btn btn-secondary\">Married<i class=\"fas fa-motorcycle\"></i></button>\n          <button type=\"button\" (click)=\"set('role', 'couple')\" (click)=\"role='couple'\" class=\"col-md-4 btn btn-secondary\">Couple<i class=\"fas fa-bicycle\"></i></button>\n        </div>\n        <span>Gender</span>\n        <div class=\"btnp row\" role=\"group\" aria-label=\"Basic example\">\n          <button type=\"button\" (click)=\"set('gender', 'male')\" (click)=\"gender='male'\" class=\"col-md-6 btn btn-secondary\">Male<i class=\"fas fa-male\"></i></button>\n          <button type=\"button\" (click)=\"set('gender', 'female')\" (click)=\"gender='female'\" class=\"col-md-6 btn btn-secondary\">Female<i class=\"fas fa-female\"></i></button>\n        </div>\n        <span>Data of birth</span>\n        <input type=\"date\" class=\"form-control\" placeholder=\"Date of birth\" uk-tooltip=\"title:Date of birth;pos:bottom\">\n        <br>\n        <button class=\"btnair\" uk-tooltip=\"title:Get ride;pos:bottom;\" (click)=\"goo =  true\">\n           <i *ngIf=\"gender=='male'\" uk-tooltip=\"title:Male;pos:left;\" style=\"float: left\" class=\"fas fa-male\"></i>\n           <i *ngIf=\"gender=='female'\" uk-tooltip=\"title:Female;pos:left;\" style=\"float: left\" class=\"fas fa-female\"></i>\n          Get ride\n          <i *ngIf=\"role=='single'\" uk-tooltip=\"title:Single;pos:right;\" class=\"fas fa-biking\"></i>\n          <i *ngIf=\"role=='married'\"  uk-tooltip=\"title:Married;pos:right;\" class=\"fas fa-motorcycle\"></i>\n          <i *ngIf=\"role=='couple'\"  uk-tooltip=\"title:Couple;pos:right;\" class=\"fas fa-bicycle\"></i>\n        </button>\n      </div>\n      <div class=\"col-md-3\">\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n<div class=\"setset \">\n  <i *ngIf=\"role=='single'\" uk-tooltip=\"title:Single;pos:left;\" class=\"fas fa-biking  animated bounceIn\"></i>\n  <i *ngIf=\"role=='married'\" uk-tooltip=\"title:Married;pos:left;\" class=\"fas fa-motorcycle  animated bounceIn\"></i>\n  <i *ngIf=\"role=='couple'\" uk-tooltip=\"title:Couple;pos:left;\" class=\"fas fa-bicycle  animated bounceIn\"></i>\n</div>\n<div class=\"setset2\">\n  <i *ngIf=\"gender=='male'\" uk-tooltip=\"title:Male;pos:left;\" class=\"fas fa-male  animated bounceIn\"></i>\n  <i *ngIf=\"gender=='female'\" uk-tooltip=\"title:Female;pos:left;\" class=\"fas fa-female  animated bounceIn\"></i>\n</div>\n<app-bike-go *ngIf=\"goo\"></app-bike-go>\n<i *ngIf=\"go\" (click)=\"goo = false\" class=\"fas fa-arrow-left back\"></i>\n"

/***/ }),

/***/ "./src/app/biker-info/biker-info.component.scss":
/*!******************************************************!*\
  !*** ./src/app/biker-info/biker-info.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".art {\n  background-color: #ef7476;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: block; }\n\n.stick {\n  width: 50%;\n  margin: auto;\n  display: block; }\n\n.btnair {\n  width: 50%;\n  padding: 5px;\n  background-color: white;\n  border: 0;\n  margin: auto;\n  color: #ef7476;\n  display: block;\n  border-radius: 5px;\n  border: 1px solid white; }\n\n.btnair i {\n    font-weight: bold;\n    float: right;\n    padding: 5px; }\n\n.btnair:hover {\n  background-color: #ef7476;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  outline: none;\n  box-shadow: none; }\n\n.btnair:hover i {\n    font-weight: bold; }\n\n.rotloader {\n  -webkit-animation: rotate 1s infinite;\n          animation: rotate 1s infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.btn {\n  border: 1px solid #ef7476;\n  background-color: white;\n  border-radius: 0px;\n  color: #ef7476; }\n\n.btn i {\n    float: right;\n    padding: 5px; }\n\n.btn:hover {\n  border: 1px solid white;\n  background-color: #ef7476;\n  border-radius: 0px;\n  color: white; }\n\n.form-control {\n  border-radius: 0px;\n  border: 1px solid #ef7476;\n  background-color: white;\n  color: #ef7476; }\n\n@media (max-width: 768px) {\n  .stick {\n    width: 100%; }\n  .btn {\n    width: 80%;\n    margin: auto; } }\n\n.setset {\n  position: fixed;\n  top: 45px;\n  right: 0;\n  margin: 13px; }\n\n.setset i {\n    font-size: 24px;\n    color: white;\n    border: 1px white;\n    display: -webkit-box;\n    display: flex;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1.5px 1.5px whitesmoke; }\n\n.setset2 {\n  position: fixed;\n  top: 90px;\n  right: 10px;\n  margin: 13px; }\n\n.setset2 i {\n    font-size: 24px;\n    color: white;\n    border: 1px white;\n    display: -webkit-box;\n    display: flex;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 1.5px 1.5px whitesmoke; }\n\nspan {\n  padding: 5px;\n  color: white;\n  font-weight: bold; }\n\n.btnair {\n  width: 50%;\n  padding: 5px;\n  background-color: white;\n  border: 0;\n  margin: auto;\n  color: #ef7476;\n  display: block;\n  border-radius: 0px;\n  border: 1px solid white; }\n\n.btnair i {\n    font-weight: bold;\n    float: right;\n    padding: 5px; }\n\n.btnair:hover {\n  background-color: #ef7476;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  outline: none;\n  box-shadow: none; }\n\n.btnair:hover i {\n    font-weight: bold; }\n\n.rotloader {\n  -webkit-animation: rotate 1s infinite;\n          animation: rotate 1s infinite; }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlrZXItaW5mby9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGtpY2svc3JjXFxhcHBcXGJpa2VyLWluZm9cXGJpa2VyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixVQUFTO0VBQ1QsYUFBWTtFQUNaLGVBQWM7RUFDZCxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQU14Qjs7QUFmRDtJQVdJLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osYUFBWSxFQUNiOztBQUVIO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUMzQyxjQUFhO0VBQ2IsaUJBQWdCLEVBSWpCOztBQVZEO0lBUUksa0JBQWlCLEVBQ2xCOztBQUVIO0VBQ0Usc0NBQTZCO1VBQTdCLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRSwwQkFBeUI7RUFDekIsd0JBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQixlQUFjLEVBS2Y7O0FBVEQ7SUFNSSxhQUFZO0lBQ1osYUFBWSxFQUNiOztBQUVIO0VBQ0Usd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6Qix3QkFBdUI7RUFDdkIsZUFBYyxFQUNmOztBQUNEO0VBQ0U7SUFDRSxZQUFXLEVBQ1o7RUFDRDtJQUNFLFdBQVU7SUFDVixhQUFZLEVBQ2IsRUFBQTs7QUFFSDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixhQUFZLEVBV2I7O0FBZkQ7SUFNSSxnQkFBZTtJQUNmLGFBQVk7SUFDWixrQkFBaUI7SUFDakIscUJBQWE7SUFBYixjQUFhO0lBQ2IsZ0JBQWU7SUFDZixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLDJDQUEwQyxFQUMzQzs7QUFFSDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZLEVBV2I7O0FBZkQ7SUFNSSxnQkFBZTtJQUNmLGFBQVk7SUFDWixrQkFBaUI7SUFDakIscUJBQWE7SUFBYixjQUFhO0lBQ2IsZ0JBQWU7SUFDZixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLDJDQUEwQyxFQUMzQzs7QUFFSDtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsVUFBUztFQUVULGFBQVk7RUFDWixlQUFjO0VBQ2QsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFNeEI7O0FBaEJEO0lBWUksa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixhQUFZLEVBQ2I7O0FBRUg7RUFDRSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixvREFBMkM7RUFBM0MsNENBQTJDO0VBQzNDLGNBQWE7RUFDYixpQkFBZ0IsRUFJakI7O0FBVkQ7SUFRSSxrQkFBaUIsRUFDbEI7O0FBRUg7RUFDRSxzQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jpa2VyLWluZm8vYmlrZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjc0NzY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnN0aWNrIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnRuYWlyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGNvbG9yOiAjZWY3NDc2O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG4uYnRuYWlyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3NDc2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4ucm90bG9hZGVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmNzQ3NjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY29sb3I6ICNlZjc0NzY7XHJcbiAgaSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcbi5idG46aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjc0NzY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmNzQ3NjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogI2VmNzQ3NjtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc3RpY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuLnNldHNldCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDVweDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDEzcHg7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxLjVweCAxLjVweCB3aGl0ZXNtb2tlO1xyXG4gIH1cclxufVxyXG4uc2V0c2V0MiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogOTBweDtcclxuICByaWdodDogMTBweDtcclxuICBtYXJnaW46IDEzcHg7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxLjVweCAxLjVweCB3aGl0ZXNtb2tlO1xyXG4gIH1cclxufVxyXG5zcGFuIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG5haXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuLy8gICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGNvbG9yOiAjZWY3NDc2O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG4uYnRuYWlyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3NDc2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4ucm90bG9hZGVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/biker-info/biker-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/biker-info/biker-info.component.ts ***!
  \****************************************************/
/*! exports provided: BikerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikerInfoComponent", function() { return BikerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BikerInfoComponent = /** @class */ (function () {
    function BikerInfoComponent() {
        this.role = "";
        this.gender = "";
        this.goo = false;
    }
    BikerInfoComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem("role") !== undefined) {
            this.role = window.localStorage.getItem("role");
        }
        if (window.localStorage.getItem("gender") !== undefined) {
            this.gender = window.localStorage.getItem("gender");
        }
    };
    BikerInfoComponent.prototype.set = function (name, item) {
        window.localStorage.setItem(name, item);
    };
    BikerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-biker-info",
            template: __webpack_require__(/*! ./biker-info.component.html */ "./src/app/biker-info/biker-info.component.html"),
            styles: [__webpack_require__(/*! ./biker-info.component.scss */ "./src/app/biker-info/biker-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BikerInfoComponent);
    return BikerInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manomuth\Desktop\WorkFromHere\StartHere\application-workHere\kick\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map