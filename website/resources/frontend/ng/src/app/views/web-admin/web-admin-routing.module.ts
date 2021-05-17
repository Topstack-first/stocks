import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBriefcaseComponent } from './new-briefcase/new-briefcase.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { UpdatePlComponent } from './update-pl/update-pl.component';
import { WebAdminComponent } from './web-admin.component';

const routes: Routes = [
    {
        path:'',
        component:WebAdminComponent
    },
    {
        path:'briefcase',
        component:NewBriefcaseComponent
    },
    {
        path:'client',
        component:NewClientComponent
    },
    {
        path:'transaction',
        component:NewTransactionComponent
    },
    {
        path:'updatepl',
        component:UpdatePlComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAdminRoutingModule { }
