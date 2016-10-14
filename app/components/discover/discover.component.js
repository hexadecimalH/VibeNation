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
var index_1 = require('../index');
var DiscoverComponent = (function () {
    function DiscoverComponent(fmService, router) {
        this.fmService = fmService;
        this.router = router;
    }
    DiscoverComponent.prototype.loadAlbums = function () {
        var _this = this;
        this.fmService.getDiscoverAlbums()
            .subscribe(function (result) { return _this.albums = _this.getFewElements(6, result); }, function (error) { return console.log(error); });
    };
    DiscoverComponent.prototype.loadTracks = function () {
        var _this = this;
        this.fmService.getDiscoverTracks()
            .subscribe(function (result) { return _this.tracks = _this.getFewTracks(12, result); }, function (error) { return console.log(error); });
    };
    DiscoverComponent.prototype.redirect = function (artist) {
        this.router.navigate(['artist', artist]);
        localStorage.setItem('artist', artist);
    };
    DiscoverComponent.prototype.ngOnInit = function () {
        this.loadAlbums();
        this.loadTracks();
    };
    DiscoverComponent.prototype.getFewElements = function (num, arr) {
        var array = [];
        for (var i = 0; i < num; i++) {
            var stringAr = [];
            var al = new index_1.Album();
            al.AlbumName = arr[i].AlbumName;
            al.ArtistName = arr[i].ArtistName;
            stringAr.push(arr[i]["ImgString"][0], arr[i]["ImgString"][1], arr[i]["ImgString"][2]);
            al.ImgString = stringAr;
            array.push(al);
        }
        return array;
    };
    DiscoverComponent.prototype.getFewTracks = function (num, arr) {
        var array = [];
        for (var i = 0; i < num; i++) {
            var stringAr = [];
            var al = new index_1.Song();
            al.Artist = arr[i].Artist;
            al.SongName = arr[i].SongName;
            stringAr.push(arr[i]["ImageURL"][0], arr[i]["ImageURL"][1], arr[i]["ImageURL"][2]);
            al.ImgString = stringAr;
            array.push(al);
        }
        return array;
    };
    DiscoverComponent.prototype.returnBG = function (str) {
        return "url(" + str + ")";
    };
    DiscoverComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'discover',
            templateUrl: 'discover.component.html',
            styleUrls: ['discover.style.css']
        }), 
        __metadata('design:paramtypes', [lastFm_service_1.LastFmService, router_1.Router])
    ], DiscoverComponent);
    return DiscoverComponent;
}());
exports.DiscoverComponent = DiscoverComponent;
//# sourceMappingURL=discover.component.js.map