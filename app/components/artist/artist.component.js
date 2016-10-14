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
var data_service_1 = require('../lastFm/data.service');
var ArtistComponent = (function () {
    function ArtistComponent(router, route, fmService, data) {
        this.router = router;
        this.route = route;
        this.fmService = fmService;
        this.data = data;
        this.activePage = [true, false, false, false, false];
    }
    ArtistComponent.prototype.getArtistInfo = function (artist) {
        var _this = this;
        this.fmService.getArtist(artist)
            .subscribe(function (result) { _this.Bio = result.Bio; _this.songs = result.TopTracks; _this.similar = result.Similar; _this.ImgStrings = result.ImgString; console.log(result); }, function (error) { return console.log("error"); });
    };
    ArtistComponent.prototype.getArtistName = function () {
        return this.route.params.forEach(function (param) {
            return param;
        });
    };
    ArtistComponent.prototype.changePage = function (num) {
        this.activePage = [false, false, false, false, false];
        this.activePage[num] = true;
        console.log(this.activePage[num]);
    };
    ArtistComponent.prototype.ngOnInit = function () {
        this.artist = localStorage.getItem('artist');
        this.getArtistInfo(this.artist);
    };
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.component.html',
            styleUrls: ['artist.style.css'],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, lastFm_service_1.LastFmService, data_service_1.DataService])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map