import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRouterState } from "./router.reducer";

const selectRouterReducerState = createFeatureSelector<RouterReducerState<IRouterState>>('router');

export const selectRouterState = createSelector(
    selectRouterReducerState,
    (routerReducerState: RouterReducerState<IRouterState>) => (routerReducerState && routerReducerState.state)
);

export const selectQueryParams = createSelector(
    selectRouterState,
    (routerState: IRouterState) => (routerState && routerState.queryParams) || {},
);

export function selectRouterQueryParams(selectRouterQueryParams: any): import("rxjs").OperatorFunction<import("../app.reducer").IAppState, unknown> {
    throw new Error("Function not implemented.");
}
