
import { Component, OnInit , NgModule, HostListener} from '@angular/core';
import { AuthService } from '../signIn/auth.service'
//  import { TrackScrollDirective } from '../../directives/track-scroll.directive'
import { Router } from '@angular/router'
@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls:['header.style.css'],
    
})
export class HeaderComponent implements OnInit {
    private isActive:boolean = false;
    @HostListener('window:scroll', ['$event']) 
    scrollDown(event:any) {
        let offset = document.body.scrollTop;
        this.isActive = offset > 200 ?  true : false; 
    }
    getStyle(){
        return this.isActive ? "#2d2d2d" : ""; 
    }
    private loadScrollScript:Promise<any>;

    constructor(private router:Router,
                private auth:AuthService) { }

    ngOnInit() { 
        
    }
}