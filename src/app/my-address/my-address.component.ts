import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { MyAddress } from '../store/actions/my-address.action';
import { Address } from '../store/models/address';
import { ToastAction } from '../store/actions/toast.action';
import { FormGroup } from '@angular/forms';
import { MyAddressState } from '../store/states/my-address.state';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {


  addressForm: FormGroup;

  @Select(MyAddressState.getAdress)
  address$: any[];

  constructor(private store: Store) { }

  ngOnInit() {
  }


  submit(data: Address){
    this.store.dispatch(new MyAddress(data));
    const toastMsg = {"description":"DESCRIIPT","title":"TITLE",code:409}
    this.store.dispatch(new ToastAction(toastMsg));
  }

}
