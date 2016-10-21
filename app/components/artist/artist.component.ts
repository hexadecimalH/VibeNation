import { Component, OnInit , HostListener} from '@angular/core'
import { Artist } from '../models/artist'
import { LastFmService } from '../lastFm/lastFm.service'
import { YouTubeService } from '../youtube/youtube.service'
import { Router, ActivatedRoute, Params} from '@angular/router'
import { DataService} from '../lastFm/data.service'

declare var changeSong: any;

import 'YTapi.js';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls:['artist.style.css'],
    providers:[DataService]
})


export class ArtistComponent implements OnInit {
    private bio:string;
    private artist:string;
    private img:string;
    private arti:string;
    private albums:any[];
    private songs:any[];
    private similar:any[];
    private topTracks:any[];
    private similarWide:any[];
    private albumsSide:any[];
    private ArtistData:Artist; 

    private activePage:boolean[] = [true,false,false,false,false];

    constructor(private router:Router,
                private route: ActivatedRoute,
                private fmService:LastFmService,
                private data:DataService,
                private ytService:YouTubeService) { }
            
    getArtistInfo(artist:string){
        return this.fmService.getArtist(artist) 
                            
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
    reduceData(n:number,data:any[]):any[]{
        let array:any[] = [];
        for(let i = 0; i < n ; i++){

            array.push(data[i]);
        }
        return array;
    }
    playSong(item:any){
        this.ytService.getArtistVideoId({"Artist":item.Artist,"SongName":item.SongName})
                            .subscribe(res =>{console.log(res["_body"]); this.play(res["_body"])},
                                        err => console.log(err));
        
    }
    play(id:string){
        new changeSong(id); 
    }
    addToPlaylist(item:any){
        console.log(item);
        this.data.addSong({"Artist":item.Artist,"SongName":item.SongName}).subscribe(res => console.log(res),
                                                                                    err => console.log(err));
    }
    navigateTo(name:string){
        localStorage.setItem('artist',name);
        this.router.navigate(['artist',name]);
        this.ngOnInit();
    }
    ngOnInit() { 
        this.artist = localStorage.getItem('artist');
        this.getArtistInfo(this.artist).subscribe(result =>  {  this.bio = result.Bio.toString(); 
                                                                this.songs = this.reduceData(15,result.TopTracks); 
                                                                this.similar = this.reduceData(4,result.Similar);
                                                                this.img = result.ImgString[2];
                                                                this.albumsSide = this.reduceData(3,result.Albums);
                                                                this.similarWide = result.Similar;
                                                                this.albums = result.Albums;
                                                                this.topTracks = result.TopTracks;
                                                                console.log(result)}, error => console.log("Error")); 
        
    }
}