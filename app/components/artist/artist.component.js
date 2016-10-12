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
var lastFm_service_1 = require('../lastFm/lastFm.service');
var router_1 = require('@angular/router');
var ArtistComponent = (function () {
    function ArtistComponent(router, route, fmService) {
        this.router = router;
        this.route = route;
        this.fmService = fmService;
    }
    ArtistComponent.prototype.getArtist = function (artist) {
        this.fmService.getArtist(artist)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log("error"); });
    };
    ArtistComponent.prototype.getArtistName = function () {
        this.route.params.forEach(function (param) {
            console.log(param);
        });
    };
    ArtistComponent.prototype.ngOnInit = function () {
        this.getArtistName();
    };
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.component.html',
            styleUrls: ['artist.style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, lastFm_service_1.LastFmService])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map