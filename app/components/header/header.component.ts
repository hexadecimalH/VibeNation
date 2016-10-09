
import { Component, OnInit ,Directive, NgModule} from '@angular/core';
import { AuthService } from '../signIn/auth.service'
// import { TrackScrollDirective } from '../../directives/track-scroll.directive'
import { Router } from '@angular/router'
@Component({
    moduleId: module.id,
    // directives:[],
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls:['header.style.css'],
    
})
export class HeaderComponent implements OnInit {
    constructor(private router:Router,
                private auth:AuthService) { }
    ngOnInit() { }
}