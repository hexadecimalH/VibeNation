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
var youtube_service_1 = require('../youtube/youtube.service');
var router_1 = require('@angular/router');
var data_service_1 = require('../lastFm/data.service');
require('YTapi.js');
var ArtistComponent = (function () {
    function ArtistComponent(router, route, fmService, data, ytService) {
        this.router = router;
        this.route = route;
        this.fmService = fmService;
        this.data = data;
        this.ytService = ytService;
        this.activePage = [true, false, false, false, false];
    }
    ArtistComponent.prototype.getArtistInfo = function (artist) {
        return this.fmService.getArtist(artist);
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
    ArtistComponent.prototype.reduceData = function (n, data) {
        var array = [];
        for (var i = 0; i < n; i++) {
            array.push(data[i]);
        }
        return array;
    };
    ArtistComponent.prototype.playSong = function (item) {
        var _this = this;
        this.ytService.getArtistVideoId({ "Artist": item.Artist, "SongName": item.SongName })
            .subscribe(function (res) { console.log(res["_body"]); _this.play(res["_body"]); }, function (err) { return console.log(err); });
    };
    ArtistComponent.prototype.play = function (id) {
        new changeSong(id);
    };
    ArtistComponent.prototype.addToPlaylist = function (item) {
        console.log(item);
        this.data.addSong({ "Artist": item.Artist, "SongName": item.SongName }).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    ArtistComponent.prototype.navigateTo = function (name) {
        localStorage.setItem('artist', name);
        this.router.navigate(['artist', name]);
        this.ngOnInit();
    };
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artist = localStorage.getItem('artist');
        this.getArtistInfo(this.artist).subscribe(function (result) {
            _this.bio = result.Bio.toString();
            _this.songs = _this.reduceData(15, result.TopTracks);
            _this.similar = _this.reduceData(4, result.Similar);
            _this.img = result.ImgString[2];
            _this.albumsSide = _this.reduceData(3, result.Albums);
            _this.similarWide = result.Similar;
            _this.albums = result.Albums;
            _this.topTracks = result.TopTracks;
            console.log(result);
        }, function (error) { return console.log("Error"); });
    };
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.component.html',
            styleUrls: ['artist.style.css'],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, lastFm_service_1.LastFmService, data_service_1.DataService, youtube_service_1.YouTubeService])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map