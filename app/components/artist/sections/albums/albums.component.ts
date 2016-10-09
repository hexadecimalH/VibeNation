import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'albums',
    templateUrl: 'albums.component.html',
    styleUrls:['albums.style.css','../../artist.style.css']
})
export class AlbumsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}