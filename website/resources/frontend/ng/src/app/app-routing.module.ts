import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('./views/stock/stock.module').then(m => m.StockModule),
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes),
	],
	exports: [RouterModule]
})

export class AppRoutingModule { }