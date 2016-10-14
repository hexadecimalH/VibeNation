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
var lastFm_service_1 = require('../../../lastFm/lastFm.service');
var data_service_1 = require('../../../lastFm/data.service');
// import {provideStore,Store} from '@ngrx/store';
// import {currentArtist} from '../../../../reducers/currentArtist'
// import {visibilityFilter} from '../../../../reducers/visibilityFilter'
// import {instrumentStore,Devtools} from '@ngrx/devtools'
// import { AppState } from '../../../../reducers/state'
var OverviewComponent = (function () {
    function OverviewComponent(router, route, fmService, data) {
        this.router = router;
        this.route = route;
        this.fmService = fmService;
        this.data = data;
    }
    OverviewComponent.prototype.getArtistName = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.name = param;
        });
    };
    OverviewComponent.prototype.getArtist = function (name) {
        var _this = this;
        return this.fmService.getArtistInfo(name)
            .subscribe(function (result) { _this.Bio = result.Bio; _this.songs = result.TopTracks; _this.similar = result.Similar; }, function (error) { return console.log("error"); });
    };
    OverviewComponent.prototype.ngOnInit = function () {
        this.getArtistName();
        var forHttp = this.name.artist.replace(" ", "%20");
        this.getArtist(forHttp);
    };
    OverviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overview',
            templateUrl: 'overview.component.html',
            styleUrls: ['overview.style.css', "../../artist.style.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, lastFm_service_1.LastFmService, data_service_1.DataService])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map