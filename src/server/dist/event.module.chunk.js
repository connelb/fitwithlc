webpackJsonp(["event.module"],{

/***/ "../../../../../src/client/app/core/expand-collapse.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expandCollapse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

/*
  Component declaration:
    @Component({
      selector: 'app-anim',
      animations: [expandCollapse],
      templateUrl: './anim.component.html',
      styleUrls: ['./anim.component.scss']
    })
  Template:
    <div *ngIf="show" [@expandCollapse]>
*/
var expandCollapse = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('expandCollapse', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        'overflow-y': 'hidden',
        'height': '*'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        'height': '0',
        'overflow-y': 'hidden'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms ease-out')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms ease-in'))
]);


/***/ }),

/***/ "../../../../../src/client/app/core/models/rsvp.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvpModel; });
var RsvpModel = (function () {
    function RsvpModel(userId, name, eventId, attending, guests, comments, _id) {
        this.userId = userId;
        this.name = name;
        this.eventId = eventId;
        this.attending = attending;
        this.guests = guests;
        this.comments = comments;
        this._id = _id;
    }
    return RsvpModel;
}());



/***/ }),

/***/ "../../../../../src/client/app/pages/event/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\r\n  <h2 class=\"card-title text-center\">Event Details</h2>\r\n</div>\r\n\r\n<ul class=\"list-group list-group-flush\">\r\n  <li class=\"list-group-item\">\r\n    <strong>When:</strong>{{utils.eventDatesTimes(event.startDatetime, event.endDatetime)}}\r\n  </li>\r\n  <li class=\"list-group-item\">\r\n    <strong>Where:</strong>{{event.location}} (<a href=\"https://www.google.com/maps/dir//{{event.location}}\" target=\"_blank\">get directions</a>)\r\n  </li>\r\n</ul>\r\n\r\n<p\r\n  *ngIf=\"event.description\"\r\n  class=\"card-block lead\"\r\n  [innerHTML]=\"event.description\"></p>\r\n\r\n<div *ngIf=\"auth.isAdmin\" class=\"card-footer text-right small\">\r\n  <a [routerLink]=\"['/admin/event/update', event._id]\">Edit</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/pages/event/event-detail/event-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/pages/event/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_service__ = __webpack_require__("../../../../../src/client/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_event_model__ = __webpack_require__("../../../../../src/client/app/core/models/event.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailComponent = (function () {
    function EventDetailComponent(utils, auth) {
        this.utils = utils;
        this.auth = auth;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_event_model__["a" /* EventModel */])
    ], EventDetailComponent.prototype, "event", void 0);
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-detail',
            template: __webpack_require__("../../../../../src/client/app/pages/event/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/pages/event/event-detail/event-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/pages/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n<ng-template [ngIf]=\"utils.isLoaded(loading)\">\r\n  <h1 class=\"text-center\">{{pageTitle}}</h1>\r\n  <!-- Event -->\r\n  <ng-template [ngIf]=\"event\">\r\n    <!-- Event is over -->\r\n    <p *ngIf=\"eventPast\" class=\"alert alert-danger\">\r\n      <strong>This event is over.</strong>\r\n    </p>\r\n\r\n    <div class=\"card\">\r\n      <!-- Event tab navigation -->\r\n      <div class=\"card-header\">\r\n        <ul class=\"nav nav-tabs card-header-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [routerLink]=\"[]\"\r\n              [queryParams]=\"{tab: 'details'}\"\r\n              [ngClass]=\"{'active': utils.tabIs(tab, 'details')}\">Details</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [routerLink]=\"[]\"\r\n              [queryParams]=\"{tab: 'rsvp'}\"\r\n              [ngClass]=\"{'active': utils.tabIs(tab, 'rsvp')}\">RSVP</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- Event detail tab -->\r\n      <app-event-detail\r\n        *ngIf=\"utils.tabIs(tab, 'details')\"\r\n        [event]=\"event\"></app-event-detail>\r\n\r\n      <!-- Event RSVP tab -->\r\n      <app-rsvp\r\n        *ngIf=\"utils.tabIs(tab, 'rsvp')\"\r\n        [eventId]=\"event._id\"\r\n        [eventPast]=\"eventPast\"></app-rsvp>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Error loading events -->\r\n  <p *ngIf=\"error\" class=\"alert alert-danger\">\r\n    <strong>Oops!</strong> There was an error retrieving information for this event.\r\n  </p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/pages/event/event.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/pages/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("../../../../../src/client/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_service__ = __webpack_require__("../../../../../src/client/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventComponent = (function () {
    function EventComponent(route, auth, api, utils, title) {
        this.route = route;
        this.auth = auth;
        this.api = api;
        this.utils = utils;
        this.title = title;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set event ID from route params and subscribe
        this.routeSub = this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this._getEvent();
        });
        // Subscribe to query params to watch for tab changes
        this.tabSub = this.route.queryParams
            .subscribe(function (queryParams) {
            _this.tab = queryParams['tab'] || 'details';
        });
    };
    EventComponent.prototype._getEvent = function () {
        var _this = this;
        this.loading = true;
        // GET event by ID
        this.eventSub = this.api
            .getEventById$(this.id)
            .subscribe(function (res) {
            console.log('res from _getEvent', res);
            _this.event = res;
            _this._setPageTitle(_this.event.title);
            _this.loading = false;
            _this.eventPast = _this.utils.eventPast(_this.event.endDatetime);
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
            _this._setPageTitle('Event Details');
        });
    };
    EventComponent.prototype._setPageTitle = function (title) {
        this.pageTitle = title;
        this.title.setTitle(title);
    };
    EventComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.tabSub.unsubscribe();
        this.eventSub.unsubscribe();
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("../../../../../src/client/app/pages/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/pages/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__core_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/pages/event/event.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("../../../../../src/client/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_routes__ = __webpack_require__("../../../../../src/client/app/pages/event/event.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_component__ = __webpack_require__("../../../../../src/client/app/pages/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/client/app/pages/event/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rsvp_rsvp_component__ = __webpack_require__("../../../../../src/client/app/pages/event/rsvp/rsvp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rsvp_rsvp_form_rsvp_form_component__ = __webpack_require__("../../../../../src/client/app/pages/event/rsvp/rsvp-form/rsvp-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EventModule = (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EVENT_ROUTES */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rsvp_rsvp_component__["a" /* RsvpComponent */],
                __WEBPACK_IMPORTED_MODULE_8__rsvp_rsvp_form_rsvp_form_component__["a" /* RsvpFormComponent */]
            ]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "../../../../../src/client/app/pages/event/event.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EVENT_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_component__ = __webpack_require__("../../../../../src/client/app/pages/event/event.component.ts");

var EVENT_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__event_component__["a" /* EventComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/client/app/pages/event/rsvp/rsvp-form/rsvp-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #rsvpForm=\"ngForm\">\r\n  <!-- Name -->\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input\r\n      id=\"name\"\r\n      name=\"name\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      minlength=\"3\"\r\n      maxlength=\"24\"\r\n      #name=\"ngModel\"\r\n      [(ngModel)]=\"formRsvp.name\"\r\n      required>\r\n    <div\r\n      *ngIf=\"name.errors && name.dirty\"\r\n      class=\"small text-danger formErrors\">\r\n      <div [hidden]=\"!name.errors.required\">\r\n        Name is <strong>required</strong>.\r\n      </div>\r\n      <div [hidden]=\"!name.errors.minlength\">\r\n        Name must be 3 characters or more.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Attending -->\r\n  <div class=\"form-group\">\r\n    <label class=\"label-inline-group\">Will you be attending?</label>\r\n    <div class=\"form-check form-check-inline\">\r\n      <label class=\"form-check-label\">\r\n        <input\r\n          id=\"attending-yes\"\r\n          name=\"attending\"\r\n          type=\"radio\"\r\n          class=\"form-check-input\"\r\n          (change)=\"changeAttendanceSetGuests()\"\r\n          [value]=\"true\"\r\n          [(ngModel)]=\"formRsvp.attending\"\r\n          required> Yes\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check form-check-inline\">\r\n      <label class=\"form-check-label\">\r\n        <input\r\n          id=\"attending-no\"\r\n          name=\"attending\"\r\n          type=\"radio\"\r\n          class=\"form-check-input\"\r\n          (change)=\"changeAttendanceSetGuests()\"\r\n          [value]=\"false\"\r\n          [(ngModel)]=\"formRsvp.attending\"\r\n          required> No\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Guests -->\r\n  <div *ngIf=\"formRsvp.attending\" class=\"formGuests form-group row\">\r\n    <label for=\"guests\" class=\"col-12\">Additional Guests:</label>\r\n    <input\r\n      id=\"guests\"\r\n      name=\"guests\"\r\n      type=\"number\"\r\n      class=\"form-control col-sm-12 col-md-3\"\r\n      maxlength=\"1\"\r\n      [pattern]=\"GUESTS_REGEX\"\r\n      step=\"1\"\r\n      min=\"0\"\r\n      max=\"9\"\r\n      #guests=\"ngModel\"\r\n      [(ngModel)]=\"formRsvp.guests\">\r\n    <div\r\n      *ngIf=\"guests.errors && guests.dirty\"\r\n      class=\"col-12 small text-danger formErrors\">\r\n      <div [hidden]=\"!guests.errors.pattern\">\r\n        Additional Guests must be an integer from <strong>0-9</strong>.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Comments -->\r\n  <div class=\"form-group\">\r\n    <label for=\"comments\">Comments:</label>\r\n    <textarea\r\n      id=\"comments\"\r\n      name=\"comments\"\r\n      class=\"form-control\"\r\n      rows=\"2\"\r\n      maxlength=\"300\"\r\n      [(ngModel)]=\"formRsvp.comments\"></textarea>\r\n  </div>\r\n\r\n  <!-- Submit -->\r\n  <div class=\"form-group\">\r\n    <button\r\n      type=\"submit\"\r\n      class=\"btn btn-primary\"\r\n      [disabled]=\"!rsvpForm.form.valid || submitting\">Submit RSVP</button>\r\n    <app-submitting *ngIf=\"submitting\"></app-submitting>\r\n\r\n    <!-- API submission error -->\r\n    <p *ngIf=\"error\" class=\"mt-3 alert alert-danger\">\r\n      <strong>Error:</strong> There was a problem submitting your response. Please try again.\r\n    </p>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/pages/event/rsvp/rsvp-form/rsvp-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------\r\n RSVP FORM COMPONENT\r\n--------------------*/\n:host {\n  display: block;\n  margin-top: 20px; }\n\n.formGuests.row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.formGuests label,\n.formGuests .formErrors.col-12 {\n  padding-left: 0;\n  padding-right: 0; }\n\n.label-inline-group {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/pages/event/rsvp/rsvp-form/rsvp-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvpFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("../../../../../src/client/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_rsvp_model__ = __webpack_require__("../../../../../src/client/app/core/models/rsvp.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_forms_formUtils_factory__ = __webpack_require__("../../../../../src/client/app/core/forms/formUtils.factory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RsvpFormComponent = (function () {
    function RsvpFormComponent(auth, api) {
        this.auth = auth;
        this.api = api;
        this.submitRsvp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.GUESTS_REGEX = __WEBPACK_IMPORTED_MODULE_4__core_forms_formUtils_factory__["b" /* GUESTS_REGEX */];
    }
    RsvpFormComponent.prototype.ngOnInit = function () {
        this.isEdit = !!this.rsvp;
        this._setFormRsvp();
    };
    RsvpFormComponent.prototype._setFormRsvp = function () {
        if (!this.isEdit) {
            // If creating a new RSVP,
            // create new RsvpModel with default data
            this.formRsvp = new __WEBPACK_IMPORTED_MODULE_3__core_models_rsvp_model__["a" /* RsvpModel */](this.auth.userProfile.sub, this.auth.userProfile.name, this.eventId, null, 0);
        }
        else {
            // If editing an existing RSVP,
            // create new RsvpModel from existing data
            this.formRsvp = new __WEBPACK_IMPORTED_MODULE_3__core_models_rsvp_model__["a" /* RsvpModel */](this.rsvp.userId, this.rsvp.name, this.rsvp.eventId, this.rsvp.attending, this.rsvp.guests, this.rsvp.comments, this.rsvp._id);
        }
    };
    RsvpFormComponent.prototype.changeAttendanceSetGuests = function () {
        // If attendance changed to no, set guests: 0
        if (!this.formRsvp.attending) {
            this.formRsvp.guests = 0;
        }
    };
    RsvpFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        if (!this.isEdit) {
            this.submitRsvpSub = this.api
                .postRsvp$(this.formRsvp)
                .subscribe(function (data) { return _this._handleSubmitSuccess(data); }, function (err) { return _this._handleSubmitError(err); });
        }
        else {
            this.submitRsvpSub = this.api
                .editRsvp$(this.rsvp._id, this.formRsvp)
                .subscribe(function (data) { return _this._handleSubmitSuccess(data); }, function (err) { return _this._handleSubmitError(err); });
        }
    };
    RsvpFormComponent.prototype._handleSubmitSuccess = function (res) {
        var eventObj = {
            isEdit: this.isEdit,
            rsvp: res
        };
        this.submitRsvp.emit(eventObj);
        this.error = false;
        this.submitting = false;
    };
    RsvpFormComponent.prototype._handleSubmitError = function (err) {
        var eventObj = {
            isEdit: this.isEdit,
            error: err
        };
        this.submitRsvp.emit(eventObj);
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    RsvpFormComponent.prototype.ngOnDestroy = function () {
        if (this.submitRsvpSub) {
            this.submitRsvpSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RsvpFormComponent.prototype, "eventId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_rsvp_model__["a" /* RsvpModel */])
    ], RsvpFormComponent.prototype, "rsvp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], RsvpFormComponent.prototype, "submitRsvp", void 0);
    RsvpFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rsvp-form',
            template: __webpack_require__("../../../../../src/client/app/pages/event/rsvp/rsvp-form/rsvp-form.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/pages/event/rsvp/rsvp-form/rsvp-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */]])
    ], RsvpFormComponent);
    return RsvpFormComponent;
}());



/***/ }),

/***/ "../../../../../src/client/app/pages/event/rsvp/rsvp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\r\n  <h2 class=\"card-title text-center\">RSVP</h2>\r\n  <app-loading *ngIf=\"loading\"></app-loading>\r\n</div>\r\n\r\n<!-- Event is over -->\r\n<p *ngIf=\"eventPast\" class=\"card-block lead\">\r\n  You cannot RSVP to an event that has already ended.\r\n</p>\r\n\r\n<ng-template [ngIf]=\"utils.isLoaded(loading)\">\r\n  <ng-template [ngIf]=\"!eventPast && rsvps\">\r\n\r\n    <!-- User has RSVPed -->\r\n    <ng-template [ngIf]=\"userRsvp\">\r\n      <p class=\"card-block lead\">You responded to this event with the following information:</p>\r\n\r\n      <ul *ngIf=\"!showEditForm\" class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n          <strong>Name:</strong>{{userRsvp.name}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <strong>Attending:</strong>{{utils.booleanToText(userRsvp.attending)}}\r\n        </li>\r\n        <li *ngIf=\"userRsvp.attending && userRsvp.guests\" class=\"list-group-item\">\r\n          <strong>Additional Guests:</strong>{{userRsvp.guests}}\r\n        </li>\r\n        <li *ngIf=\"userRsvp.comments\" class=\"list-group-item\">\r\n          <strong>Comments:</strong><span [innerHTML]=\"userRsvp.comments\"></span>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"card-block\">\r\n        <button\r\n          class=\"btn btn-info\"\r\n          [ngClass]=\"{'btn-info': !showEditForm, 'btn-warning': showEditForm}\"\r\n          (click)=\"toggleEditForm()\">{{editBtnText}}</button>\r\n\r\n        <app-rsvp-form\r\n          *ngIf=\"showEditForm\"\r\n          [eventId]=\"eventId\"\r\n          [rsvp]=\"userRsvp\"\r\n          (submitRsvp)=\"onSubmitRsvp($event)\"></app-rsvp-form>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <!-- No RSVP yet -->\r\n    <div *ngIf=\"!userRsvp\" class=\"card-block\">\r\n      <p class=\"lead\">Fill out the form below to respond:</p>\r\n\r\n      <app-rsvp-form\r\n        [eventId]=\"eventId\"\r\n        (submitRsvp)=\"onSubmitRsvp($event)\"></app-rsvp-form>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- All RSVPs -->\r\n  <div class=\"card-block text-right\">\r\n    <button (click)=\"toggleShowRsvps()\" class=\"btn btn-link btn-sm\">{{showRsvpsText}}</button>\r\n  </div>\r\n\r\n  <section class=\"allRsvps\" *ngIf=\"showAllRsvps\" [@expandCollapse]>\r\n    <div class=\"card-block\">\r\n      <h3 class=\"card-title text-center\">All RSVPs</h3>\r\n      <p *ngIf=\"!rsvps.length\" class=\"lead\">There are currently no RSVPs for this event.</p>\r\n    </div>\r\n\r\n    <ul *ngIf=\"rsvps.length\" class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item list-group-item-success justify-content-between\">\r\n        <strong>Attending</strong>\r\n        <span class=\"badge badge-success badge-pill\">{{totalAttending}}</span>\r\n      </li>\r\n      <li\r\n        *ngFor=\"let rsvp of fs.filter(rsvps, 'attending', true)\"\r\n        class=\"list-group-item small\">\r\n        {{rsvp.name}} {{utils.showPlusOnes(rsvp.guests)}}\r\n        <p *ngIf=\"auth.isAdmin && rsvp.comments\" class=\"d-flex w-100\">\r\n          <em [innerHTML]=\"rsvp.comments\"></em>\r\n        </p>\r\n      </li>\r\n      <li class=\"list-group-item list-group-item-danger justify-content-between\">\r\n        <strong>Not Attending</strong>\r\n        <span class=\"badge badge-danger badge-pill\">{{fs.filter(rsvps, 'attending', false).length}}</span>\r\n      </li>\r\n      <li\r\n        *ngFor=\"let rsvp of fs.filter(rsvps, 'attending', false)\"\r\n        class=\"list-group-item small\">\r\n        {{rsvp.name}}\r\n        <p *ngIf=\"auth.isAdmin && rsvp.comments\" class=\"d-flex w-100\">\r\n          <em [innerHTML]=\"rsvp.comments\"></em>\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n\r\n  <!-- Error loading RSVPs -->\r\n  <div *ngIf=\"error\" class=\"card-block\">\r\n    <p class=\"alert alert-danger\">\r\n      <strong>Oops!</strong> There was an error retrieving RSVPs for this event.\r\n    </p>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Footer showing # of total attending guests -->\r\n<div class=\"card-footer text-right\">\r\n  <small *ngIf=\"totalAttending >= 0\" class=\"text-muted\">{{utils.displayCount(totalAttending)}} {{footerTense}}</small>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/client/app/pages/event/rsvp/rsvp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------\r\n    RSVP COMPONENT\r\n--------------------*/\n.list-group-item p:last-child {\n  margin-bottom: 0; }\n\n.card-block.lead {\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/pages/event/rsvp/rsvp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_expand_collapse_animation__ = __webpack_require__("../../../../../src/client/app/core/expand-collapse.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("../../../../../src/client/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_service__ = __webpack_require__("../../../../../src/client/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_filter_sort_service__ = __webpack_require__("../../../../../src/client/app/core/filter-sort.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RsvpComponent = (function () {
    function RsvpComponent(auth, api, utils, fs) {
        this.auth = auth;
        this.api = api;
        this.utils = utils;
        this.fs = fs;
        this.showAllRsvps = false;
        this.showRsvpsText = 'View All RSVPs';
    }
    RsvpComponent.prototype.ngOnInit = function () {
        this.footerTense = !this.eventPast ? 'plan to attend this event.' : 'attended this event.';
        this._getRSVPs();
        this.toggleEditForm(false);
    };
    RsvpComponent.prototype._getRSVPs = function () {
        var _this = this;
        this.loading = true;
        // Get RSVPs by event ID
        this.rsvpsSub = this.api
            .getRsvpsByEventId$(this.eventId)
            .subscribe(function (res) {
            _this.rsvps = res;
            _this._updateRsvpState();
            _this.loading = false;
        }, function (err) {
            console.error(err);
            _this.loading = false;
            _this.error = true;
        });
    };
    RsvpComponent.prototype.toggleEditForm = function (setVal) {
        this.showEditForm = setVal !== undefined ? setVal : !this.showEditForm;
        this.editBtnText = this.showEditForm ? 'Cancel Edit' : 'Edit My RSVP';
    };
    RsvpComponent.prototype.toggleShowRsvps = function () {
        this.showAllRsvps = !this.showAllRsvps;
        this.showRsvpsText = this.showAllRsvps ? 'Hide RSVPs' : 'Show All RSVPs';
    };
    RsvpComponent.prototype.onSubmitRsvp = function (e) {
        if (e.rsvp) {
            this.userRsvp = e.rsvp;
            this._updateRsvpState(true);
            this.toggleEditForm(false);
        }
    };
    RsvpComponent.prototype._updateRsvpState = function (changed) {
        var _this = this;
        // If RSVP matching user ID is already
        // in RSVP array, set as initial RSVP
        var _initialUserRsvp = this.rsvps.filter(function (rsvp) {
            return rsvp.userId === _this.auth.userProfile.sub;
        })[0];
        // If user has not RSVPed before and has made
        // a change, push new RSVP to local RSVPs store
        if (!_initialUserRsvp && this.userRsvp && changed) {
            this.rsvps.push(this.userRsvp);
        }
        this._setUserRsvpGetAttending(changed);
    };
    RsvpComponent.prototype._setUserRsvpGetAttending = function (changed) {
        var _this = this;
        // Iterate over RSVPs to get/set user's RSVP
        // and get total number of attending guests
        var guests = 0;
        var rsvpArr = this.rsvps.map(function (rsvp) {
            // If user has an existing RSVP
            if (rsvp.userId === _this.auth.userProfile.sub) {
                if (changed) {
                    // If user edited their RSVP, set with updated data
                    rsvp = _this.userRsvp;
                }
                else {
                    // If no changes were made, set userRsvp property
                    // (This applies on ngOnInit)
                    _this.userRsvp = rsvp;
                }
            }
            // Count total number of attendees
            // + additional guests
            if (rsvp.attending) {
                guests++;
                if (rsvp.guests) {
                    guests += rsvp.guests;
                }
            }
            return rsvp;
        });
        this.rsvps = rsvpArr;
        this.totalAttending = guests;
    };
    RsvpComponent.prototype.ngOnDestroy = function () {
        this.rsvpsSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RsvpComponent.prototype, "eventId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RsvpComponent.prototype, "eventPast", void 0);
    RsvpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rsvp',
            animations: [__WEBPACK_IMPORTED_MODULE_1__core_expand_collapse_animation__["a" /* expandCollapse */]],
            template: __webpack_require__("../../../../../src/client/app/pages/event/rsvp/rsvp.component.html"),
            styles: [__webpack_require__("../../../../../src/client/app/pages/event/rsvp/rsvp.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__core_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_5__core_filter_sort_service__["a" /* FilterSortService */]])
    ], RsvpComponent);
    return RsvpComponent;
}());



/***/ })

});
//# sourceMappingURL=event.module.chunk.js.map