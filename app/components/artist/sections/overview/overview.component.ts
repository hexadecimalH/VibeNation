import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import {LastFmService} from '../../../lastFm/lastFm.service'
import {DataService} from '../../../lastFm/data.service'
// import {provideStore,Store} from '@ngrx/store';
// import {currentArtist} from '../../../../reducers/currentArtist'
// import {visibilityFilter} from '../../../../reducers/visibilityFilter'
// import {instrumentStore,Devtools} from '@ngrx/devtools'
// import { AppState } from '../../../../reducers/state'

@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html',
    styleUrls:['overview.style.css',"../../artist.style.css"]
})
export class OverviewComponent implements OnInit {
    private name:any;
    private artist:any;
    private Bio:string;
    private arti:string;
    private songs:any[];
    private similar:any[];
    constructor(private router:Router,
                private route: ActivatedRoute,
                private fmService:LastFmService,
                private data:DataService) {
                    
                }
            
    getArtistName(){
        this.route.params.forEach((param:Params)=> {
                      this.name = param})
    }
    getArtist(name:string){
        return this.fmService.getArtistInfo(name)
                            .subscribe(result => { this.Bio = result.Bio; this.songs = result.TopTracks; this.similar=result.Similar},
                                        error => console.log("error"));
    }
    ngOnInit() { 
        this.getArtistName();
        var forHttp = this.name.artist.replace(" ","%20")
        this.getArtist(forHttp);

        
    }
}