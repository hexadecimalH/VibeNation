import { Component, OnInit , HostListener} from '@angular/core';
import { LastFmService } from '../lastFm/lastFm.service'
import { Router, ActivatedRoute, Params} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls:['artist.style.css']
})
export class ArtistComponent implements OnInit {
    constructor(private router:Router,
                private route: ActivatedRoute,
                private fmService:LastFmService) { }
            
    getArtist(artist:string){
        this.fmService.getArtist(artist)
                            .subscribe(result => console.log(result),
                                        error => console.log("error"))
    }
    getArtistName(){
        this.route.params.forEach((param:Params)=> {
                        console.log(param)})
    }
    ngOnInit() { 
        this.getArtistName();
    }
}