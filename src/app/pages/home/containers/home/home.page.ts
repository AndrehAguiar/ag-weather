import { DomPortalOutlet, PortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';
import * as fromBookmarksSelectors from '../../../bookmarks/state/bookmarks.selectors';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';


@Component({
  selector: 'ag-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  cityWeather$!: Observable<CityWeather>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;
  
  bookmarksList$!: Observable<Array<Bookmark>>;
  isCurrentFavorite$!: Observable<boolean>;
  
  cityWeather!: CityWeather;
  searchControl!: FormControl;
  text!: string;

  private componentDestroyed$ = new Subject();
  private portalOutlet!: PortalOutlet;

  constructor(private store: Store,
              private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) { }

  ngOnInit(): void
  {
    this.searchControl = new FormControl('', Validators.required);

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));

    this.cityWeather$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.cityWeather = value);

    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));

    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

    this.bookmarksList$ = this.store.pipe(
      select(fromBookmarksSelectors.selectBookmarksList)
    );

    this.isCurrentFavorite$ = combineLatest([this.cityWeather$, this.bookmarksList$])
    .pipe(
      map(([current, bookmarksList]) => {
        if(!!current){          
          return bookmarksList.some(bookmark => bookmark.id === current.city.id)
        }
        return false;
      })
    );
    this.setupPortal();
  }
  ngOnDestroy(){
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromHomeActions.clearHomeState());
    this.portalOutlet.detach();
  }

  doSearch = () => {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
  }

  onToggleBookmark(){
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id!;
    bookmark.name = this.cityWeather.city.name!;
    bookmark.country = this.cityWeather.city.country!;
    bookmark.coord = this.cityWeather.city.coord!;
    this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));

  }

  private setupPortal() {
    const el = document.querySelector('#navbar-portal-outlet');
    this.portalOutlet = new DomPortalOutlet(
      el!,
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );
    //this.portalOutlet.attach(new ComponentPortal(UnitSelectorComponent));
  }
}