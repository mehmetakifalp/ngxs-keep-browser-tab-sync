import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService{



    getToken(){

    }

    setToken(token: string) : Observable<string>{
        return;
    }

    remoteToken(){

    }

}