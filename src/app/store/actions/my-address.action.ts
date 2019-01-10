import { Address } from '../models/address';

export class MyAddress {
    static readonly type = '[myAddress] get All';
    constructor(public address:Address) {}
  }