import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { MyAddress } from '../store/actions/my-address.action';
import { Address } from '../store/models/address';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }


  submit(data: Address){
    this.store.dispatch(new MyAddress(data));
  }

}
