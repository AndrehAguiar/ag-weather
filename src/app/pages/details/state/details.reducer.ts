import { Action, createReducer, on } from "@ngrx/store";
import { CityDailyWeather } from "src/app/shared/models/weather.model";
import * as fromDetailsActions from './details.actions';


export interface IDetailsState {
    entity: CityDailyWeather | undefined;
    loading: boolean;
    error: boolean;
}

export const detailsInitialState: IDetailsState = {
    entity: undefined,
    loading: false,
    error: false,
}

const reducer = createReducer(
    detailsInitialState,
    on(fromDetailsActions.loadWeatherDetails, state => ({
        ...state,
        entity: undefined,
        loading: true,
        error: false,
    })),
    on(fromDetailsActions.loadWeatherDetailsSuccess, (state, { entity }) => ({
        ...state,
        entity,
        loading: false
    })),
    on(fromDetailsActions.loadWeatherDetailsFailed, state => ({
        ...state,
        loading: false,
        error: true,
    })),
);

export function detailsReducer(state: IDetailsState | undefined, action: Action): IDetailsState {
    return reducer(state, action);
}