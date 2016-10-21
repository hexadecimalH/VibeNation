import { Component, OnInit } from '@angular/core';
import { DataService} from '../lastFm/data.service'

declare var changeSong: any;

import 'YTapi.js';

@Component({
    moduleId: module.id,
    selector: 'playlist',
    templateUrl: 'playlist.component.html',
    styleUrls:['playlist.style.css']
})
export class PlaylistComponent implements OnInit {
    private playlist:any[];
    constructor(private service:DataService) { }

    playSong(url:string){
        new changeSong(url);
    }
    deleteSong(url:string,i:number){
        console.log(this.playlist[i]);

        //this.service.deleteSong(url).subscribe(res => console.log(res),
          //                                      err => console.log(err));
    }
    ngOnInit() {
        this.service.getList().subscribe(res => this.playlist = res,
                                        err => console.log(err));
     }
}