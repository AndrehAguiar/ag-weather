import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducer";

export interface AppState {
    feature: HomeState;
  }

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectHomeText = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.text
    
);