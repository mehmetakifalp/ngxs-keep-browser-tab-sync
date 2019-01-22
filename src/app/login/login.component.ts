import { Component,OnInit } from '@angular/core';
import { Observable, fromEvent} from 'rxjs';
import {debounceTime, delay} from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { Login, Logout } from '../store/actions/login.action'
enum STATUS{
  login='LOGIN',
  logout='LOGOUT'
}
@Component({
  selector: 'app-my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  status: string = 'LOGIN';

  source$: Observable<Event>;

   constructor(private store: Store) {}

  ngOnInit(){
    this.init();
  }

  dispatcher(actionName:string){
    if(actionName === STATUS.login){
      this.status = STATUS.logout;
      this.store.dispatch(new Login());
    } else {
       this.status = STATUS.login;
       this.store.dispatch(new Logout());
    }
    localStorage.setItem("ACTION_NAME", actionName);
  }


  init(){
    this.source$ = fromEvent(window, 'storage');
    this.source$.pipe(delay(500)).subscribe(
      ldata => {
        let action = localStorage.getItem('ACTION_NAME');
        if(action){
          if(action === STATUS.login){
            this.store.dispatch(new Logout());
            this.status = STATUS.logout;
          } else {
            this.store.dispatch(new Login());
            this.status = STATUS.login;
          }
        } else {
          console.log("Nothing added yet");
        }
      }
    );
  }
}
