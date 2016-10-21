import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

import {Album,Song} from '../index'

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    public artist:string;
    public artistObj:any;
    public uri:string = "http://localhost:57730/api/";
    constructor(private http:Http) { }

    setArtist(name:string){
        this.artist = name;
    }
    getArtist(){
        return this.artist;
    }
    addSong(obj:any){
        var par =localStorage.getItem("user");
        var url = this.uri + "AddToPlaylist/"+par.replace(/"/g, "");
        let body = JSON.stringify(obj);
        let header = new Headers({"Content-Type":"application/json"});
        let options = new RequestOptions({headers:header})
        return this.http.post(url,body,options);
    }
    deleteSong(str:string){//not impolemented yet in WEB API
        var url = this.uri + "DeleteSong/";
        let body = JSON.stringify(str);
        let header = new Headers({"Content-Type":"application/json"});
        let options = new RequestOptions({headers:header})
        return this.http.post(url,body,options);
    }
    getList(){
        var par = localStorage.getItem("user");
        var url = this.uri + "GetPlaylist/"+par.replace(/"/g, "");

        return this.http.get(url).map((response:Response) => response.json());
    }
    searchArtist(str:string){//not impolemented yet in WEB API
        var url = this.uri + "Search/"+str;

        return this.http.get(url).map((response:Response) => response.json());
    }
}