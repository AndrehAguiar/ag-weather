import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsPage } from './containers/details/details.page';
import { DetailsGuardService } from './services/details.guard.service';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuardService] },
    ]),
  ],
  providers: [
    DetailsGuardService,
  ],
})
export class DetailsModule { }
