import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../lastFm/lastFm.service'
import {Router} from '@angular/router'
import {Album,Song} from '../index'
@Component({
    moduleId: module.id,
    selector: 'discover',
    templateUrl: 'discover.component.html',
    styleUrls:['discover.style.css']
})
export class DiscoverComponent implements OnInit {
    private data:any[];
    public albums:Album[] ;
    public tracks:Song[];


    constructor(private fmService:LastFmService,
                private router:Router) { }
    
    loadAlbums(){
       this.fmService.getDiscoverAlbums()
                      .subscribe(result =>  this.albums = this.getFewElements(6,result),
                                error=> console.log(error));
        
    }
    loadTracks(){
        this.fmService.getDiscoverTracks()
                      .subscribe(result =>  this.tracks = this.getFewTracks(12,result),
                                error=> console.log(error));
    }
    redirect(artist:string){
        this.router.navigate(['artist',artist]);
        localStorage.setItem('artist',artist);
    }
    ngOnInit() {
        this.loadAlbums();
        this.loadTracks();
        
     }
     getFewElements(num:number, arr:any[]){
         let array:Album[] = [];
         for(let i =0; i < num; i++){
             let stringAr:string[] = [];
             let al = new Album();

             al.AlbumName = arr[i].AlbumName;
             al.ArtistName = arr[i].ArtistName;
             stringAr.push(arr[i]["ImgString"][0], arr[i]["ImgString"][1], arr[i]["ImgString"][2])
             al.ImgString= stringAr;
             array.push(al);
         }
         return array;
     }
     getFewTracks(num:number, arr:any[]){
         let array:Song[] = [];
         for(let i =0; i < num; i++){
             let stringAr:string[] = [];
             let al = new Song();

             al.Artist = arr[i].Artist;
             al.SongName = arr[i].SongName;
             stringAr.push(arr[i]["ImageURL"][0],arr[i]["ImageURL"][1],arr[i]["ImageURL"][2])
             al.ImgString = stringAr;

             array.push(al);
         }
         return array;
     }
    returnBG(str:string){
        return "url("+str+")";
    }

}