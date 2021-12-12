import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const URL_HOME = 'home';
export const URL_ABOUT_US = 'about-us';
export const URL_SHOWCASE = 'showcase';
export const URL_CONTACT = 'contact';

const routes: Routes = [
	{
		path: '', 
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) 
	},
	{
		path: '404', 
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {

	
}
