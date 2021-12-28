import { AboutUsComponent } from './about-us/about-us.component';
import { allIcons } from 'angular-feather/icons';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CountToModule } from 'angular-count-to';
import { FeatherModule } from 'angular-feather';
import { HomeComponent } from './home/home.component';
import { NgbAccordionModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PagesRoutingModule } from './pages-routing.module';
import { ScrollspyDirective } from './scrollspy.directive';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SharedModule } from '../shared/shared.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
	declarations: [
		ScrollspyDirective,
		HomeComponent,
		AboutUsComponent,
		ShowcaseComponent,
		ContactComponent,
	],
	imports: [
		CarouselModule,
		CommonModule,
		CountToModule,
		FeatherModule.pick(allIcons),
		NgbAccordionModule,
		NgbAccordionModule,
		NgbRatingModule,
		NgxYoutubePlayerModule,
    	PagesRoutingModule,
		ScrollToModule.forRoot(),
		SharedModule, ///@todo REMOVE
		NgImageSliderModule,
	],
	exports: [
		ScrollspyDirective,
		HomeComponent,
		AboutUsComponent,
		ShowcaseComponent,
		ContactComponent,
	]
})
export class PagesModule { }
