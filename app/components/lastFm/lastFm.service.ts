import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

import {Album,Song} from '../index'

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LastFmService {
    public uri:string = "http://localhost:57730/api/";
    constructor(private http:Http) { }

    public getDiscoverAlbums(){
        return this.http.get(this.uri+"GetTopAlbums")
                        .map((response:Response) => response.json());
    }

    public getDiscoverTracks(){
        return this.http.get(this.uri+"GetTopTracks")
                        .map((response:Response) => response.json());
    }
    public getArtist(name:string){
        return this.http.get(this.uri+"GetArtist/"+name)
                        .map((response:Response) => response.json());
    }
}