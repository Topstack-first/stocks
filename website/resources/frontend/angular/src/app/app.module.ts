import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {LayoutModule} from '@angular/cdk/layout';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';
import { PersonalComponent } from './personal/personal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DetailItemComponent } from './detail/detail-item/detail-item.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';
@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent,
    DetailComponent,
    HistoryComponent,
    PersonalComponent,
    DetailItemComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
