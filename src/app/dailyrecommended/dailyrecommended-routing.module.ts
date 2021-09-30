import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyrecommendedPage } from './dailyrecommended.page';

const routes: Routes = [
  {
    path: '',
    component: DailyrecommendedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyrecommendedPageRoutingModule {}
