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
var signIn_service_1 = require('../signIn/signIn.service');
var ForgotenPassComponent = (function () {
    function ForgotenPassComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    ForgotenPassComponent.prototype.passMatch = function () {
        this.password == this.rePassword ? this.matching = false : this.matching = true;
    };
    ForgotenPassComponent.prototype.submitPass = function () {
        this.service.submitNewPass(this.password).subscribe(function (res) { return console.log(res.text()); }, function (error) { return console.log(); });
    };
    ForgotenPassComponent.prototype.ngOnInit = function () {
        var obj;
        this.route.params.forEach(function (param) {
            obj = param;
        });
        this.id = obj.secureId;
    };
    ForgotenPassComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'password',
            templateUrl: 'forgoten-pass.component.html',
            styleUrls: ['forgoten-pass.style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, signIn_service_1.SignService])
    ], ForgotenPassComponent);
    return ForgotenPassComponent;
}());
exports.ForgotenPassComponent = ForgotenPassComponent;
//# sourceMappingURL=forgoten-pass.component.js.map