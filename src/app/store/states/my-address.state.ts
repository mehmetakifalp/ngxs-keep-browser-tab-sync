import { State, Selector } from "@ngxs/store";
import { Address } from '../models/address';
import { HttpClient } from 'selenium-webdriver/http';
export class MyAddressStateModel{
    address: Address[];
    addresForm: any;
}
@State<MyAddressStateModel>({
    name:"my-address",
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
    }]
})
export class MyAddressState{
    constructor(private http: HttpClient){

    }
  
    @Selector()
    static getAdress(state: MyAddressStateModel){
      return state.address;
    }
}