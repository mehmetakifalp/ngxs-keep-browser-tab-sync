import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { MyAddress } from '../store/actions/my-address.action';
import { Address } from '../store/models/address';
import { ToastAction } from '../store/actions/toast.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyAddressState } from '../store/states/my-address.state';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit {


  addressForm: FormGroup;

  get isAddressFormValid(): boolean {
    return this.addressForm.status === 'VALID';
  }

  @Select(MyAddressState.getAdress)
  address$: any[];

  

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit() {

    this.addressForm = this.fb.group({
      addressName: ['', Validators.required],
      street: ['', Validators.required],
      apartmentNumber: [null, Validators.required],
      area: ['', Validators.required],
      postCode: ['', Validators.required],
      authorizedPerson: ['', Validators.required]
    })

  }


  submit(data: Address){
    this.store.dispatch(new MyAddress(data));
    



    const toastMsg = {"description":"DESCRIIPT","title":"TITLE",code:409}
    this.store.dispatch(new ToastAction(toastMsg));
  }

  /*

  onSubmit(){
    if (this.isAddressFormValid) {
      this.store.dispatch(new MyAddress());
    }
  }

  */

}
