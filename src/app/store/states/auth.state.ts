import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AuthModel } from '../models/auth';
import { AuthService } from '../service/auth.service';
import { Login } from '../actions/auth-action';

@State(AuthModel)({
    name: 'auth'
})
export class AuthState{
    @Selector()
    static token(state: AuthModel) {return state.token;}

    constructor(private authService: AuthService){}


    @Action(Login)
    Login({patchState } : StateContext<AuthModel>, {payload} : Login){
        return this.authService.setToken(payload).pipe(tap((result: {token: string}) => {
            patchState({token, username: payload.username})
        }))
    }
}