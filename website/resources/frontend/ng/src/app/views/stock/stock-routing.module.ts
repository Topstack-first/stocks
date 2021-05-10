import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
  {
		path: '',
		component:StockComponent
	},
  {
		path: 'solicitud',
		component:SolicitudComponent
	},
  {
		path: 'profile',
		component:EditProfileComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
