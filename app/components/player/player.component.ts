import { Component, OnInit } from '@angular/core';

declare var stopVideo: any;
declare var playVideo: any;
declare var setVolume:any;


@Component({
    moduleId: module.id,
    selector: 'player',
    templateUrl: 'player.component.html',
    styleUrls:['player.style.css']
})
export class PlayerComponent implements OnInit {
    public tone:number;
    constructor() { }
    changePic(event:any){
        event.target.src =="http://localhost:3000/app/components/img/play.png" ? event.target.src = "http://localhost:3000/app/components/img/playW.png":  event.target.src = "http://localhost:3000/app/components/img/play.png";
    }
    changePaus(event:any){
        event.target.src =="http://localhost:3000/app/components/img/pause.png" ? event.target.src = "http://localhost:3000/app/components/img/pauseW.png":  event.target.src = "http://localhost:3000/app/components/img/pause.png";
    }
    pause(){
        new stopVideo();
    }
    play(){
        new playVideo();
    }
    ajustPlayer(){
        new setVolume(this.tone);
    }
    ngOnInit() { }
}