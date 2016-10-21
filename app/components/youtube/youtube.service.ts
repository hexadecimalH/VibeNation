import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

import {Album,Song} from '../index'

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class YouTubeService {
    public uri:string = "http://localhost:57730/api/";
    constructor(private http:Http) { }

    getArtistVideoId(obj:any){
        var url = this.uri + "GetYTid/"
        let body = JSON.stringify(obj);
        let header = new Headers({"Content-Type":"application/json"});
        let options = new RequestOptions({headers:header})
        return this.http.post(url,body,options);
    }

}