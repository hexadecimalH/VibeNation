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
var data_service_1 = require('../lastFm/data.service');
//  import { TrackScrollDirective } from '../../directives/track-scroll.directive'
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(router, auth, service) {
        this.router = router;
        this.auth = auth;
        this.service = service;
        this.isActive = false;
    }
    HeaderComponent.prototype.scrollDown = function (event) {
        var offset = document.body.scrollTop;
        this.isActive = offset > 200 ? true : false;
    };
    HeaderComponent.prototype.getStyle = function () {
        return this.isActive ? "#2d2d2d" : "";
    };
    HeaderComponent.prototype.logOut = function () {
        this.auth.logOut();
        this.router.navigate([""]);
    };
    HeaderComponent.prototype.search = function () {
        var _this = this;
        this.service.searchArtist(this.keyString).subscribe(function (res) { _this.artist = res; console.log(res); }, function (err) { return console.log(err); });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HeaderComponent.prototype, "scrollDown", null);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.style.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, data_service_1.DataService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map