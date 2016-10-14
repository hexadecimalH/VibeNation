import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    public artist:string;
    public artistObj:any;
    constructor() { }

    setArtist(name:string){
        this.artist = name;
    }
    getArtist(){
        return this.artist;
    }
}