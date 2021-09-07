import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import * as fromBookmarksActions from '../../state/bookmarks.actions';
import { IBookmarksState } from '../../state/bookmarks.reducer';
import { ICityTypeaheadItem } from 'src/app/shared/models/city-typeahead-item.model';
import * as fromBookmarksSelectors from '../../state/bookmarks.selectors';


@Component({
  selector: 'ag-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit, OnDestroy {

  bookmarks$!: Observable<Array<Bookmark>>;
  searchTypeaheadControl = new FormControl(undefined);

  private componentDestroyed$ = new Subject();

  constructor(private store: Store<IBookmarksState>) { }

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));

    this.searchTypeaheadControl.valueChanges.pipe(takeUntil(this.componentDestroyed$))
    .subscribe((value: ICityTypeaheadItem) => this.store.dispatch(fromBookmarksActions.toggleBookmarkById({ id: value.geonameid })));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  removeBookmark(id: number): void {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }))
  }

}
