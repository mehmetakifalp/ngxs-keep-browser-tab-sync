import { Injectable } from "@angular/core";
import { Observable, of, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService{



    getToken(){

    }

    setToken(token: string) : Observable<any>{
        return localStorage.setItem("token", token);
    }

    remoteToken(){

    }

}