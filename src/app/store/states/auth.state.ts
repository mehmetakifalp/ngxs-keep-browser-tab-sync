import { State, Selector } from "@ngxs/store";
import { AuthModel } from '../models/auth';

@State(AuthModel)({
    name: 'auth'
})
export class AuthState{
    @Selector()
    static token(state: AuthModel) {return state.token;}

    constructor(private authService: AuthService){}
}