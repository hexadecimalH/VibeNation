import { Component, OnInit } from '@angular/core';


declare const FB: any;

@Component({
    moduleId: module.id,
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls:['footer.style.css']
})
export class FooterComponent implements OnInit {
    private loadAPI:Promise<any>;
    constructor() { }

    ytCredentials(){
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });
        
     }
     public loadScript() {
        let node = document.createElement('script');
        node.src = "YTapi.js";
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    ngOnInit() { 
        this.ytCredentials();
    }
}