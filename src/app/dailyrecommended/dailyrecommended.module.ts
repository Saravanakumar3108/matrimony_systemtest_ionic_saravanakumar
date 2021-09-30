import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyrecommendedPageRoutingModule } from './dailyrecommended-routing.module';

import { DailyrecommendedPage } from './dailyrecommended.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyrecommendedPageRoutingModule,
    TranslateModule
  ],
  declarations: [DailyrecommendedPage]
})
export class DailyrecommendedPageModule {}
