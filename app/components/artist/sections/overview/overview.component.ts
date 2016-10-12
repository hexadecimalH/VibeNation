import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
@Component({
    moduleId: module.id,
    selector: 'overview',
    templateUrl: 'overview.component.html',
    styleUrls:['overview.style.css',"../../artist.style.css"]
})
export class OverviewComponent implements OnInit {
    constructor(private router:Router,
                private route: ActivatedRoute) { }

    getArtistName(){
        this.route.params.forEach((param:Params)=> {
                        console.log(param)})
    }
    ngOnInit() { 
        this.getArtistName();
    }
}