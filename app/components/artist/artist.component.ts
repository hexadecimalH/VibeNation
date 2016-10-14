import { Component, OnInit , HostListener} from '@angular/core';
import { LastFmService } from '../lastFm/lastFm.service'
import { Router, ActivatedRoute, Params} from '@angular/router'
import { DataService} from '../lastFm/data.service'

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls:['artist.style.css'],
    providers:[DataService]
})
export class ArtistComponent implements OnInit {
    private artist:string;
    private Bio:string;
    private ImgStrings:string[];
    private arti:string;
    private songs:any[];
    private similar:any[];
    private activePage:boolean[] = [true,false,false,false,false];

    constructor(private router:Router,
                private route: ActivatedRoute,
                private fmService:LastFmService,
                private data:DataService) { }
            
    getArtistInfo(artist:string){
        this.fmService.getArtist(artist)
                            .subscribe(result =>  { this.Bio = result.Bio; this.songs = result.TopTracks; this.similar=result.Similar; this.ImgStrings = result.ImgString; console.log(result)},
                                        error => console.log("error"))
    }
    getArtistName():any{
        return this.route.params.forEach((param:Params)=> {
                        return param})
    }
    changePage(num:number){
        this.activePage = [false,false,false,false,false]
        this.activePage[num] = true;
        console.log(this.activePage[num])
    }
    ngOnInit() { 
        this.artist = localStorage.getItem('artist');
        this.getArtistInfo(this.artist)
        
    }
}