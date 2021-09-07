import { Action, createReducer, on } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

import * as fromHomeActions from '../../home/state/home.actions';
import * as fromBookmarkActions from './bookmarks.actions';

export interface BookmarksState {
    list: Array<Bookmark>;
};

export const bookmarkInitialState: BookmarksState = {
    list: new Array<Bookmark>(),
};

const reducer = createReducer(
    bookmarkInitialState,
    on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
        ...state,
        list: toogleBookmark(state.list, entity),
    })),
    on(fromBookmarkActions.removeBookmark, (state, { id }) => ({
        ...state,
        list: state.list.filter(bookmark => bookmark.id),
    })),
);

export function bookmarkReducer(state: BookmarksState | undefined, action: Action){
    return reducer(state, action);
};

function toogleBookmark(list: Array<Bookmark>, entity: Bookmark): Array<Bookmark> {
    if(!!list.find(bookmark => bookmark.id)){
        return list.filter(bookmark => bookmark.id !== entity.id);
    }
    return [...list, entity];
}