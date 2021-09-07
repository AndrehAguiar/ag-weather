import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IConfigState } from "./config.reducer";

export const selectConfigState = createFeatureSelector<IConfigState>('config');

export const selectUnitConfig = createSelector(
    selectConfigState,
    (configState: IConfigState) => configState.unit,
)