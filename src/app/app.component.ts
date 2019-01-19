import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Keep Sync Multiple Tabs App';



  ngOnInit(){
    const source = fromEvent(window, 'storage');

    source.subscribe(
      data => {
        console.log(data);
      }
    );

    

  }
}
