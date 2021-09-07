import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IHomeState } from "./home.reducer";

export interface IAppState {
    feature: IHomeState;
  }

export const selectHomeState = createFeatureSelector<IHomeState>('home');

export const selectCurrentWeather = createSelector(
  selectHomeState,
  (homeState: IHomeState) => homeState.entity,
);

export const selectCurrentWeatherLoading = createSelector(
  selectHomeState,
  (homeState: IHomeState) => homeState.loading,
);

export const selectCurrentWeatherError = createSelector(
  selectHomeState,
  (homeState: IHomeState) => homeState.error,
);