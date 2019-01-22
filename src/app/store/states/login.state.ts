import { Action, Selector, State, Store } from '@ngxs/store';
import { Login, Logout } from  '../actions/login.action'

const defaults = {
  loginForm: {
  }
};

@State({
  name: "LoginState",
  defaults: defaults,
})
export class LoginState{
  constructor(private store: Store) {}

  @Action(Login)
  login({getState, patchState}){
    console.warn("Login");
  }


  @Action(Logout)
  Logout({getState, patchState}){
    console.warn("Logout");
    localStorage.clear();
  }
}