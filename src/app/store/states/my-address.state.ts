import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Address } from '../models/address';
import { MyAddress } from '../actions/my-address.action';
import { HttpClient } from '@angular/common/http';
export class MyAddressStateModel{
    address: Address[];
    addresForm: any;
}
@State<MyAddressStateModel>({
    name:"MyAddressState",
    defaults:{ address: [{
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
})
export class MyAddressState{
    constructor(private http: HttpClient){

    }
  
    @Selector()
    static getAdress(state: MyAddressStateModel){
      return state.address;
    }

    @Action(MyAddress)
    add({getState, patchState}: StateContext<MyAddressStateModel>){
      const state = getState();
    }
}