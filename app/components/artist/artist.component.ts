import { Component, OnInit , HostListener} from '@angular/core';
import { Router} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls:['artist.style.css']
})
export class ArtistComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }
}