import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DetailsPage } from './containers/details/details.page';
import { DetailsGuardService } from './services/details.guard.service';
import { DetailsEffects } from './state/details.effects';
import { detailsReducer } from './state/details.reducer';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';

@NgModule({
  declarations: [
    DetailsPage,
    DailyWeatherComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    EffectsModule.forFeature([DetailsEffects]),
    StoreModule.forFeature('details', detailsReducer),
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuardService] },
    ]),
  ],
  providers: [
    DetailsGuardService,
  ],
})
export class DetailsModule { }
