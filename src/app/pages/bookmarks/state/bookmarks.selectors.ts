import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookmarksState } from "./bookmarks.reducer";

export const selectBookmarksState = createFeatureSelector<BookmarksState>('bookmarks')

export const selectBookmarksList = createSelector(
    selectBookmarksState,
    (bookmarkState: BookmarksState) => bookmarkState.list,
)