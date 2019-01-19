import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { Address } from '../models/address';
import { MyAddress } from '../actions/my-address.action';
import { HttpClient } from '@angular/common/http';
import { UpdateFormValue, UpdateFormDirty } from '@ngxs/form-plugin';
export class MyAddressStateModel{
    address: Address[];
    addresForm: any;
}
const defaults = { address: [{
    addressName:" ",
    street:"",
    apartmentNumber:1,
    area:"",
    postCode:"",
    authorizedPerson:"",
}],
addresForm: {
  model: undefined,
  dirty:false,
  status: '',
  errors: {}
}
}
@State<MyAddressStateModel>({
    name:"MyAddressState",
    defaults:defaults
})
export class MyAddressState{
    constructor(private http: HttpClient, private store: Store){

    }
  
    @Selector()
    static getAdress(state: MyAddressStateModel){
      return state.address;
    }

    @Action(MyAddress)
    add({getState, patchState}: StateContext<MyAddressStateModel>){
      const state = getState();
      localStorage.setItem("ActionName", "ToastAction");
      alert(localStorage.getItem("ActionName"));
      this.clearForm('MyAddressState.addressForm', defaults.addresForm.model);
    }

    clearForm(path: string, value: any) {
        this.store.dispatch(new UpdateFormValue({ value, path }));
        this.store.dispatch(new UpdateFormDirty({ dirty: false, path }));
      }
}