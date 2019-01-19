import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Store } from '@ngxs/store';
import { ToastAction } from './store/actions/toast.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Keep Sync Multiple Tabs App';


  constructor(private store: Store){}

  ngOnInit(){
 

  }

  ngAfterContentInit() {
    let source = fromEvent(window, 'storage');

    source.subscribe(
      data => {
        console.log(data);
        const toastMsg = {"description":"DESCRIIPT","title":"TITLE",code:409}
        this.store.dispatch(new ToastAction(toastMsg));
      }
    );

  }
}
