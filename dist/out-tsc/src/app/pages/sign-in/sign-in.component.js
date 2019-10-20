"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var sign_in_service_1 = require("../../shared/services/sign-in.service");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(signInService, router) {
        this.signInService = signInService;
        this.router = router;
        this.showPassType = 'password';
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signInForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, this.emailValidator]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    SignInComponent.prototype.emailValidator = function (control) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regEx.test(String(control.value).toLowerCase())) {
            return null;
        }
        else {
            return { 'email': true };
        }
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        var data = Object.assign(this.signInForm.value, { osType: 3 });
        this.signInService.signIn(data).subscribe(function (user) {
            if (user.success == true) {
                localStorage.setItem('token', user.data.authToken);
                localStorage.setItem('success', user.success);
                _this.router.navigate(['content']);
            }
            else {
                _this.wrongAccsess = user.message;
            }
        });
    };
    SignInComponent.prototype.showPass = function () {
        if (this.showPassType == 'password')
            this.showPassType = 'text';
        else
            this.showPassType = 'password';
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        __metadata("design:paramtypes", [sign_in_service_1.SignInService, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map