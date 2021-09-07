import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IDetailsState } from "./details.reducer";

export const selectDetailsState = createFeatureSelector<IDetailsState>('details');

export const selectDetailsEntity = createSelector(
    selectDetailsState,
    (detailsState: IDetailsState) => detailsState.entity,
);

export const selectDetailsLoading = createSelector(
    selectDetailsState,
    (detailsState: IDetailsState) => detailsState.loading,
);

export const selectDetailsError = createSelector(
    selectDetailsState,
    (detailsState: IDetailsState) => detailsState.error,
);