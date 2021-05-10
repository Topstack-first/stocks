import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import {LayoutModule} from '@angular/cdk/layout';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';
import { PersonalComponent } from './personal/personal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DetailItemComponent } from './detail/detail-item/detail-item.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    StockComponent,
    BriefcaseComponent,
    DetailComponent,
    HistoryComponent,
    PersonalComponent,
    DetailItemComponent,
    HistoryItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    StockRoutingModule,
    LayoutModule,
    NgxChartsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [StockComponent]
})
export class StockModule { }
