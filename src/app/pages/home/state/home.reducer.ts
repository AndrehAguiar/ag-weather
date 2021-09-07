import { Action, createReducer, on } from "@ngrx/store"
import * as fromHomeActions from "./home.actions"

export interface IHomeState{
    entity: any;
    loading: boolean;
    error: boolean;
}

export const homeInitialState: IHomeState = {
    entity: undefined,
    loading: false,
    error: false,
}

const reducer = createReducer(
    homeInitialState,
    on(fromHomeActions.loadCurrentWeather, state => ({
        ...state,
        loading:true,
        error:false,
    })),
    on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
        ...state,
        entity,
        loading:false,
    })),
    on(fromHomeActions.loadCurrentWeatherFailed, state => ({
        ...state,
        loading: false,
        error: true,
    })),
);

export function homeReducer(state: IHomeState | undefined, action: Action): IHomeState {
    return reducer(state, action);
}