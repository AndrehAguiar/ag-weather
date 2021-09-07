import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { configReducer, IConfigState } from "./config/config.reducer";
import { IRouterState } from "./router/router.reducer";

export interface IAppState {
    router: RouterReducerState<IRouterState>,
    config: IConfigState
}

export const reducers: ActionReducerMap<IAppState> = {
    router: routerReducer,
    config: configReducer,
}