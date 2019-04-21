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

/***/ "./src/app/addcustomer/form.component.css":
/*!************************************************!*\
  !*** ./src/app/addcustomer/form.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#name{\n  text-align: center;\n}\n\n#form{\n  margin-top: 10px;\n}\n\n#submit{\n  margin-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkY3VzdG9tZXIvZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRkY3VzdG9tZXIvZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hbWV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvcm17XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNzdWJtaXR7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/addcustomer/form.component.html":
/*!*************************************************!*\
  !*** ./src/app/addcustomer/form.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div id=\"name\">\n    <h3><span class=\"glyphicon glyphicon-user\"></span>CustomerService</h3>\n  </div>\n\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\" id=\"form\">\n    <form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmitForm()\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Gender</label>\n        <div class=\"radio-inline\">\n          <label><input type=\"radio\" name=\"gender\" value=\"Male\" formControlName=\"gender\" checked>Male</label>\n        </div>\n        <div class=\"radio-inline\">\n          <label><input type=\"radio\" name=\"gender\" value=\"Female\" formControlName=\"gender\">Female</label>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"address\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>City</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>State</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"state\">\n      </div>\n      <div class=\"form-group\">\n        <label>Order</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"order\">\n      </div>\n      <div id=\"buttons\">\n        <div class=\"col-md-4\">\n          <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n        </div>\n\n        <div class=\"col-md-4\">\n\n        </div>\n\n        <div class=\"col-md-4\">\n          <button class=\"btn btn-default\" routerLink=\"\">Cancel</button>\n          <button class=\"btn btn-primary\" type=\"submit\" id=\"submit\" [disabled]=\"customerForm.invalid\">{{updateButton}}</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/addcustomer/form.component.ts":
/*!***********************************************!*\
  !*** ./src/app/addcustomer/form.component.ts ***!
  \***********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/userService */ "./src/app/services/userService.ts");






var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, users, router, route) {
        this.formBuilder = formBuilder;
        this.users = users;
        this.router = router;
        this.route = route;
    }
    FormComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem("user")) != null) {
            this.authenticatedUser = JSON.parse(localStorage.getItem("user"));
            this.customerService = this.authenticatedUser.customers;
            this.index = this.route.snapshot.params.id;
            this.initForm();
            if (this.route.snapshot.params.id) {
                this.update = true;
                this.updateButton = 'Update';
                this.customerForm.controls.firstName.setValue(this.customerService[this.index].firstName);
                this.customerForm.controls.lastName.setValue(this.customerService[this.index].lastName);
                this.customerForm.controls.gender.setValue(this.customerService[this.index].gender);
                this.customerForm.controls.email.setValue(this.customerService[this.index].email);
                this.customerForm.controls.address.setValue(this.customerService[this.index].address);
                this.customerForm.controls.city.setValue(this.customerService[this.index].city);
                this.customerForm.controls.state.setValue(this.customerService[this.index].state);
                this.customerForm.controls.order.setValue(this.customerService[this.index].order);
            }
            else {
                this.update = false;
                this.updateButton = 'Add';
            }
        }
        else {
            this.router.navigateByUrl('');
        }
    };
    FormComponent.prototype.initForm = function () {
        this.customerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            order: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]]
        });
    };
    FormComponent.prototype.onSubmitForm = function () {
        var formValue = this.customerForm.value;
        var newCustomer = new _models_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"](formValue.firstName, formValue.lastName, formValue.gender, formValue.email, formValue.address, formValue.city, formValue.state, formValue.order);
        if (this.update == false) {
            this.users.updateUser(newCustomer, -1);
        }
        else {
            var i = this.route.snapshot.params.id;
            this.users.updateUser(newCustomer, i);
        }
        this.router.navigate(['main']);
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcustomer',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/addcustomer/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/addcustomer/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_userService__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FormComponent);
    return FormComponent;
}());



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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _addcustomer_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcustomer/form.component */ "./src/app/addcustomer/form.component.ts");







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'form', component: _addcustomer_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"] },
    { path: 'form/:id', component: _addcustomer_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"] }
];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _addcustomer_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcustomer/form.component */ "./src/app/addcustomer/form.component.ts");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/userService */ "./src/app/services/userService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _addcustomer_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [
                _services_userService__WEBPACK_IMPORTED_MODULE_7__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\" style=\"text-align: center\">\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" style=\"display: none\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\n      <strong>Warning!</strong> some areas are empties or the identifiers are wrong !!\n    </div>\n    <h2 style=\"font-weight: bold\">{{title}}</h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n      <div class=\"form-group\" style=\"text-align: center\">\n        <label><h3 style=\"font-weight: bold\">Username:</h3></label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" id=\"username\">\n      </div>\n      <div class=\"form-group\" style=\"text-align: center\">\n        <label><h3 style=\"font-weight: bold\">Password:</h3></label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"loginForm.invalid\">{{signInButton}}</button>\n    </form>\n    <!--<div><h3>{{error}}</h3></div>-->\n  </div>\n  <div class=\"col-md-3\"></div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/userService */ "./src/app/services/userService.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, http, users) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.users = users;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
        if (location.href.toString().includes('users')) {
            this.title = "New User";
            this.signInButton = "add";
        }
        else {
            this.title = "Authentication";
            this.signInButton = 'sign In';
        }
    };
    LoginComponent.prototype.initForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogin = function () {
        if (location.href.toString().includes('users')) {
            this.users.addUser(new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"](this.loginForm.value.username, this.loginForm.value.password, []));
            this.loginForm.controls.username.setValue('');
            this.loginForm.controls.password.setValue('');
        }
        else {
            this.users.login(this.loginForm.value.username, this.loginForm.value.password);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_userService__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fitler {\n  margin-top: 40px;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n#addButton {\n  text-align: center;\n}\n\n#table{\n  margin-top: 50px;\n  font-size: 18px;\n}\n\n.arrow{\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaXRsZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdGFibGV7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmFycm93e1xuICBmb250LXNpemU6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div style=\"text-align: center\">\n    <h2><span class=\"glyphicon glyphicon-user\"></span> Customers</h2>\n  </div>\n\n  <div>\n    <button class=\"btn btn-primary\" (click)=\"logout()\">Logout</button>\n  </div>\n\n  <div id=\"fitler\">\n    Filter : <input type=\"text\" [(ngModel)]=\"filter\" (input)=\"applicateFilter()\">\n  </div>\n\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\" id=\"addButton\">\n    <button class=\"btn btn-default\" (click)=\"navigateToForm(-1)\">Add New CustomerService</button>\n  </div>\n\n  <div class=\"container-fluid\" id=\"table\">\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <th></th>\n        <th>Firstname\n          <button class=\"btn btn-default\" (click)=\"sortByFirstName()\" [innerHTML]=\"firstNameButton\"></button>\n        </th>\n        <th>Lastname\n          <button class=\"btn btn-default\" (click)=\"sortByLastName()\" [innerHTML]=\"lastNameButton\"></button>\n        </th>\n        <th>Address\n          <button class=\"btn btn-default\" (click)=\"sortByAddress()\" [innerHTML]=\"addressButton\"></button>\n        </th>\n        <th>City\n          <button class=\"btn btn-default\" (click)=\"sortByCity()\" [innerHTML]=\"cityButton\"></button>\n        </th>\n        <th>State\n          <button class=\"btn btn-default\" (click)=\"sortByState()\" [innerHTML]=\"stateButton\"></button>\n        </th>\n        <th>Order Total\n          <button class=\"btn btn-default\" (click)=\"sortByOrder()\" [innerHTML]=\"orderButton\"></button>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let x of customersTmp;let i = index\" (click)=\"navigateToForm(i)\">\n        <td><span class=\"glyphicon glyphicon-user\"></span></td>\n        <td>{{x.firstName}}</td>\n        <td>{{x.lastName}}</td>\n        <td>{{x.address}}</td>\n        <td>{{x.city}}</td>\n        <td>{{x.state}}</td>\n        <td>${{x.order}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MainComponent = /** @class */ (function () {
    function MainComponent(router) {
        this.router = router;
        this.filter = '';
        this.authenticatedUser = JSON.parse(localStorage.getItem("user"));
        this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    }
    MainComponent.prototype.navigateToForm = function (i) {
        if (i == -1)
            this.router.navigateByUrl('/form');
        else
            this.router.navigateByUrl('/form/' + i);
    };
    MainComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem("user")) != null) {
            this.customers = this.authenticatedUser.customers;
            this.customersTmp = this.authenticatedUser.customers;
        }
        else {
            this.router.navigateByUrl('');
        }
    };
    MainComponent.prototype.logout = function () {
        localStorage.setItem('user', null);
        this.router.navigateByUrl('');
    };
    MainComponent.prototype.sortByFirstName = function () {
        this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        if (this.firstNameButton.includes('glyphicon-option-horizontal') || this.firstNameButton.includes('top')) {
            this.firstNameButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0); });
        }
        else {
            this.firstNameButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.firstName < b.firstName) ? 1 : ((b.firstName < a.firstName) ? -1 : 0); });
        }
    };
    MainComponent.prototype.sortByLastName = function () {
        this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        if (this.lastNameButton.includes('glyphicon-option-horizontal') || this.lastNameButton.includes('top')) {
            this.lastNameButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0); });
        }
        else {
            this.lastNameButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.lastName < b.lastName) ? 1 : ((b.lastName < a.lastName) ? -1 : 0); });
        }
    };
    MainComponent.prototype.sortByAddress = function () {
        this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        if (this.addressButton.includes('horizontal') || this.addressButton.includes('top')) {
            this.addressButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.address > b.address) ? 1 : ((b.address > a.address) ? -1 : 0); });
        }
        else {
            this.addressButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.address < b.address) ? 1 : ((b.address < a.address) ? -1 : 0); });
        }
    };
    MainComponent.prototype.sortByCity = function () {
        this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        if (this.cityButton.includes('horizontal') || this.cityButton.includes('top')) {
            this.cityButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0); });
        }
        else {
            this.cityButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.city < b.city) ? 1 : ((b.city < a.city) ? -1 : 0); });
        }
    };
    MainComponent.prototype.sortByState = function () {
        this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        if (this.stateButton.includes('horizontal') || this.stateButton.includes('top')) {
            this.stateButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0); });
        }
        else {
            this.stateButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.state < b.state) ? 1 : ((b.state < a.state) ? -1 : 0); });
        }
    };
    MainComponent.prototype.sortByOrder = function () {
        this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
        if (this.orderButton.includes('horizontal') || this.orderButton.includes('top')) {
            this.orderButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0); });
        }
        else {
            this.orderButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
            this.customersTmp = this.customersTmp
                .sort(function (a, b) { return (a.order < b.order) ? 1 : ((b.order < a.order) ? -1 : 0); });
        }
    };
    MainComponent.prototype.applicateFilter = function () {
        var _this = this;
        this.customersTmp = this.customers;
        this.customersTmp = this.customersTmp.filter(function (s) { return _this.contains(s, _this.filter); });
    };
    MainComponent.prototype.contains = function (customer, sequence) {
        return customer.firstName.includes(sequence) ||
            customer.lastName.includes(sequence) ||
            customer.gender.includes(sequence) ||
            customer.email.includes(sequence) ||
            customer.address.includes(sequence) ||
            customer.city.includes(sequence) ||
            customer.state.includes(sequence) ||
            customer.order.includes(sequence);
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, gender, email, address, city, state, order) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.order = order;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(login, password, customers) {
        this.login = login;
        this.password = password;
        this.customers = customers;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/userService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/userService.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path = 'api/users';
        this.users = [];
    }
    UserService.prototype.emitUserSubject = function () {
        this.userSubject.next(this.users.slice());
    };
    UserService.prototype.login = function (login, password) {
        var _this = this;
        this.http.get(this.path + '/' + login + '/' + password)
            .subscribe(function (response) {
            if (response.login) {
                localStorage.setItem('user', JSON.stringify(response));
                if (response.login == 'admin')
                    _this.router.navigateByUrl('users');
                else
                    _this.router.navigateByUrl('main');
            }
            else {
                alert("bas credentials");
            }
        }, function (error) {
            alert('fail');
        });
    };
    UserService.prototype.getFromServer = function () {
        var _this = this;
        this.http.get(this.path)
            .subscribe(function (response) {
            _this.users = response;
            _this.emitUserSubject();
        }, function (error) {
            alert('fail');
        });
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        this.http
            .post(this.path, user)
            .subscribe(function () {
            _this.users.push(user);
            _this.emitUserSubject();
        }, function (error) {
            alert('fail: ' + error);
        });
    };
    UserService.prototype.deleteUser = function (i) {
        var _this = this;
        this.http
            .delete(this.path + '/' + this.users[i].login)
            .subscribe(function () {
            delete _this.users[i];
            _this.emitUserSubject();
        }, function (error) {
            alert('fail: ' + error);
        });
    };
    UserService.prototype.updateUser = function (customer, index) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem("user"));
        if (index == -1) {
            user.customers.push(customer);
        }
        else {
            user.customers[index] = customer;
        }
        localStorage.setItem('user', JSON.stringify(user));
        this.http
            .put(this.path, user)
            .subscribe(function () {
            _this.users[index] = user;
            _this.emitUserSubject();
        }, function (error) {
            alert('fail: ' + error);
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Users</h1>\n<br>\n<span class=\"col-md-6\" style=\"text-align: center\">\n  <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Add User</button>\n</span>\n<span class=\"col-md-6\" style=\"text-align: center\">\n  <button class=\"btn btn-primary\" (click)=\"logout()\">Logout</button>\n</span>\n<br>\n<br>\n\n<div class=\"panel-group\" id=\"accordion\">\n  <div class=\"panel panel-default\" *ngFor=\"let x of accounts;let i = index\" id=\"{{i}}\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        User :\n        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{x.login}}\">{{x.login}}</a>\n        <button *ngIf=\"x.login!='admin'\" style=\"margin-left: 15px\" class=\"btn btn-danger\" (click)=\"deleteUser(i)\">Delete</button>\n      </h3>\n    </div>\n    <div *ngIf=\"x.login!='admin'\" id=\"{{x.login}}\" class=\"panel-collapse collapse in\">\n      <div class=\"panel-body\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th></th>\n            <th>Firstname</th>\n            <th>Lastname</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>State</th>\n            <th>Order Total</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let y of x.customers\">\n            <td><span class=\"glyphicon glyphicon-user\"></span></td>\n            <td>{{y.firstName}}</td>\n            <td>{{y.lastName}}</td>\n            <td>{{y.address}}</td>\n            <td>{{y.city}}</td>\n            <td>{{y.state}}</td>\n            <td>${{y.order}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">New User</h4>\n      </div>\n      <div class=\"modal-body\">\n        <app-login></app-login>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/userService */ "./src/app/services/userService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(users, router) {
        this.users = users;
        this.router = router;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem("user")) != null && JSON.parse(localStorage.getItem("user")).login == 'admin') {
            this.users.getFromServer();
            this.userSubscription = this.users.userSubject.subscribe(function (users) {
                _this.accounts = users;
            });
            this.users.emitUserSubject();
        }
        else {
            this.router.navigateByUrl('');
        }
    };
    UsersComponent.prototype.logout = function () {
        localStorage.setItem('user', null);
        this.router.navigateByUrl('');
    };
    UsersComponent.prototype.deleteUser = function (index) {
        location.reload();
        delete this.accounts[index];
        this.users.deleteUser(index);
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_userService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersComponent);
    return UsersComponent;
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

module.exports = __webpack_require__(/*! /home/mhz/IdeaProjects/CustomerManager/src/main/resources/frontend/CustomerManager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map