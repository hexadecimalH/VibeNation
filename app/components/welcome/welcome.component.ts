import { Component, OnInit ,NgZone} from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../index';
import { SignService } from '../signIn/signIn.service';
import { AuthService } from '../signIn/auth.service';

declare const FB: any;

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls:['welcome.style.css']
})

export class WelcomeComponent implements OnInit {   
    private user:User;
    private eMail:string;
    private password:string;
    private secPassword:string;
    private loadAPI:Promise<any>;
    private matching:boolean;
    private isSet:boolean = true;
    private message:string = "";
    private messageIn:string = "";

    constructor(private service:SignService,
                private auth:AuthService,
                private router:Router) { }
    sendMail(){
        if(this.eMail == null || this.eMail == undefined){
            this.messageIn ="Please enter valid mail ";
            return;
        }
        this.service.makeRequestForNewPass(this.eMail).subscribe(res => this.router.navigate(["forgtenPass",res.text().replace(/"/g, "")]) ,
                                                                error =>this.messageIn ="Please enter valid mail ");
        
    }
     buttonPressed($event:any){
            $event.target.childNodes[0].data == "Sign Up" ? this.isSet = true :  this.isSet = false;
     }
     signIn(){
         this.user = new User(this.eMail,this.password);
         this.service.signIn(this.user).subscribe(
            res=> this.handleSignInResponse(res.text()),
            error=>this.messageIn = "Wrong Password Please enter correct one " 
        );
     }
     handleSignInResponse(res:string){
        this.auth.logIn(res);
        this.router.navigate(["discover"]);
     }
     signUp(){
         this.user = new User(this.eMail,this.password);
         this.service.signUp(this.user).subscribe(
            res=> this.handleResponse(res.text()),
            error=>this.message = "Account on this e-mail already exists " 
         )
     }
     handleResponse(res:any){
         console.log(res);
         if(res == "Already exists"){
            this.message = "Account on this e-mail already exists "; 
            return
         }
         this.auth.logIn(res);
         this.router.navigate(['discover'])
     }
     passMatch(){
         console.log(this.password +" " + this.secPassword);
         this.matching = this.password == this.secPassword ? false : true;
         console.log(this.matching);
     }
     logInUsingFb(){
            FB.login();
     }
     fbCredentials(){
          this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
        
     }
     public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = "fbApi.js";
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    ngOnInit() { 
        this.fbCredentials();


    }
}