import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() { }
    logIn(uniqueKey:string){
        localStorage.setItem("user",uniqueKey);
    }
    logOut(){
        localStorage.removeItem("user");
    }
    isLogedIn(){
        return localStorage.getItem("user") ? true : false;
    }
}