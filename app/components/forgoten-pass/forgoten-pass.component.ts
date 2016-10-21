import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { SignService } from '../signIn/signIn.service';

@Component({
    moduleId: module.id,
    selector: 'password',
    templateUrl: 'forgoten-pass.component.html',
    styleUrls:['forgoten-pass.style.css']
})
export class ForgotenPassComponent implements OnInit {
    private id:any;
    private password:string;
    private rePassword:string;
    private matching:boolean;
    constructor(private router:Router,
                private route: ActivatedRoute,
                private service:SignService) { }
    

    passMatch(){
        this.password == this.rePassword ? this.matching = false: this.matching = true; 
    }
    submitPass(){
        this.service.submitNewPass(this.password).subscribe(res => console.log(res.text()),
                                                            error => console.log());
    }
    ngOnInit() { 
        var obj:any;
        this.route.params.forEach((param:Params)=> {
                        obj   = param})
        this.id = obj.secureId;
    }
}