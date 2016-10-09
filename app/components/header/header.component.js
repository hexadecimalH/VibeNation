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
var auth_service_1 = require('../signIn/auth.service');
// import { TrackScrollDirective } from '../../directives/track-scroll.directive'
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            // directives:[],
            selector: 'header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.style.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map