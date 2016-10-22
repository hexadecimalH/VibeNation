
import { Component, OnInit , NgModule, HostListener} from '@angular/core';
import { AuthService } from '../signIn/auth.service'
import { DataService } from '../lastFm/data.service'

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
    private artist:any[];
    private keyString:string;

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
                private auth:AuthService,
                private service:DataService) { }
    logOut(){
        this.auth.logOut();
        this.router.navigate([""]);
    }
    search(){
        this.keyString == "" || this.keyString == null ? this.artist = [] : this.service.searchArtist(this.keyString).subscribe(res => {this.artist = res; console.log(res)},
                                                                                                                                err => console.log(err)); 
    }
    navigate(artist:string){
        this.artist= [];
        localStorage.setItem('artist',artist);
        this.router.navigate(['artist',artist]);
    }
    ngOnInit() { 
        
    }

}