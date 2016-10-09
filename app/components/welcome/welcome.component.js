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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../index');
var signIn_service_1 = require('../signIn/signIn.service');
var auth_service_1 = require('../signIn/auth.service');
var WelcomeComponent = (function () {
    function WelcomeComponent(service, auth, router) {
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.isSet = true;
    }
    WelcomeComponent.prototype.buttonPressed = function ($event) {
        $event.target.childNodes[0].data == "Sign Up" ? this.isSet = true : this.isSet = false;
    };
    WelcomeComponent.prototype.signIn = function () {
        var _this = this;
        this.user = new index_1.User(this.eMail, this.password);
        this.service.signIn(this.user).subscribe(function (res) { return _this.auth.logIn(res.text()); }, function (error) { return console.log(error); });
    };
    WelcomeComponent.prototype.signUp = function () {
        this.user = new index_1.User(this.eMail, this.password);
        this.service.signUp(this.user).subscribe(function (res) { return console.log(res.text()); }, function (error) { return console.log(error); });
    };
    WelcomeComponent.prototype.passMatch = function () {
        console.log(this.password + " " + this.secPassword);
        this.matching = this.password == this.secPassword ? false : true;
        console.log(this.matching);
    };
    WelcomeComponent.prototype.logInUsingFb = function () {
        FB.login();
    };
    WelcomeComponent.prototype.fbCredentials = function () {
        var _this = this;
        this.loadAPI = new Promise(function (resolve) {
            console.log('resolving promise...');
            _this.loadScript();
        });
    };
    WelcomeComponent.prototype.loadScript = function () {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = "fbApi.js";
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        this.fbCredentials();
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'welcome',
            templateUrl: 'welcome.component.html',
            styleUrls: ['welcome.style.css']
        }), 
        __metadata('design:paramtypes', [signIn_service_1.SignService, auth_service_1.AuthService, router_1.Router])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map