import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL_HOME, URL_ABOUT_US, URL_SHOWCASE, URL_CONTACT } from '../app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: URL_HOME,
		component: HomeComponent
	},
	{
		path: URL_ABOUT_US,
		component: AboutUsComponent
	},
	{
		path: URL_SHOWCASE,
		component: ShowcaseComponent
	},
	{
		path: URL_CONTACT,
		component: ContactComponent
	},
	{
		path: 'index',
		component: IndexComponent
	}

];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class PagesRoutingModule { }
