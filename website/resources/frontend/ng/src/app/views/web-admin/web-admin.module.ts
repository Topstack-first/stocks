import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAdminRoutingModule } from './web-admin-routing.module';
import { WebAdminComponent } from './web-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {LayoutModule} from '@angular/cdk/layout';
import { NewClientComponent } from './new-client/new-client.component';
import { NewBriefcaseComponent } from './new-briefcase/new-briefcase.component';
import { UpdatePlComponent } from './update-pl/update-pl.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [WebAdminComponent, NewClientComponent, NewBriefcaseComponent, UpdatePlComponent, NewTransactionComponent],
  imports: [
    CommonModule,
    LayoutModule,
    WebAdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WebAdminModule { }
