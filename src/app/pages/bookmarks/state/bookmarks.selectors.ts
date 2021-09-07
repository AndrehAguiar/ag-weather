import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBookmarksState } from "./bookmarks.reducer";

export const selectBookmarksState = createFeatureSelector<IBookmarksState>('bookmarks')

export const selectBookmarksList = createSelector(
    selectBookmarksState,
    (bookmarkState: IBookmarksState) => bookmarkState.list,
)