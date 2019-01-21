import { Address } from '../models/address';

export class MyAddress {
    static readonly type = '[myAddress] get All';
    constructor(public myAddress:Address) {}
  }


  export class UpdateLocalStorage {


    static readonly type = '[UpdateLocalStorage] update Local storage';
    
    constructor(public readonly payload: string){}
  }
