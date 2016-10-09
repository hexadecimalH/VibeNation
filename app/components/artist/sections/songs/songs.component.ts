import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'songs',
    templateUrl: 'songs.component.html',
    styleUrls:['songs.style.css','../../artist.style.css']
})
export class SongsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}