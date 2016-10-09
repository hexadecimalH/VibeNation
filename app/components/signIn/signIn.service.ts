import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import {User} from '../index'

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SignService {
    private baseUrl:string = "http://localhost:57730/api/";
    constructor(private http:Http,private rq:RequestOptions) { }
    signIn(user:User){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"UserSignIn",body,options);
    }

    signUp(user:User){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl+"UserCreate",body,options);
    }
}