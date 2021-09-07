import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { BookmarksState } from './state/bookmarks.reducer';

import * as fromBookmarksActions from '../bookmarks/state/bookmarks.actions'
import * as fromBookmarksSelectors from '../bookmarks/state/bookmarks.selectors'

@Component({
  selector: 'ag-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit, OnDestroy {

  bookmarks$!: Observable<Array<Bookmark>>;

  constructor(private store: Store<BookmarksState>) { }

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(
      select(fromBookmarksSelectors.selectBookmarksList)
    )
  }

  ngOnDestroy(): void {

  }

  removeBookmark(id: number): void {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }))
  }

}
