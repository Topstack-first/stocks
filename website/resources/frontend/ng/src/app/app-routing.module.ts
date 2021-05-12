import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';

const appRoutes: Routes = [
	{
		path: 'stock',
		loadChildren: () => import('./views/stock/stock.module').then(m => m.StockModule),
	},
    { path: '', component: SigninComponent },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },
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
