import { createReducer, on } from "@ngrx/store";
import { Units } from "../../models/units.enum";
import * as fromConfigActions from './config.actions';

export interface IConfigState {
    unit: Units;
}

export const configInitialState: IConfigState = {
    unit: Units.Metric,
}

export const configReducer = createReducer(
    configInitialState,
    on(fromConfigActions.updateUnit, (state, { unit }) =>({
        ...state,
        unit,
    })),
)