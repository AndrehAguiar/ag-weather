import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HomePage } from './containers/home/home.page';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';



@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ]
})
export class HomeModule { }
