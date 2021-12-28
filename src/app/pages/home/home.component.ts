import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { URL_ABOUT_US } from 'src/app/app-routing.module';

interface content {
	image: string;
}


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	currentSection = 'home';

	ABOUT_US = URL_ABOUT_US;
	heading: string = "BMD sp. z o. o.";
	sub_heading: string = "To, czym się zajmujemy";
	content: string = "Projektowanie, nadzorowanie, wykonawstwo obiektów inżynierii komunikacyjnej.";
	contentData: content[] = [
		{
			image: 'assets/images/100100.jpg',
		},
		{
			image: 'assets/images/100101.jpg',
		},
		{
			image: 'assets/images/100102.jpg',
		},
		{
			image: 'assets/images/100103.jpg',
		},
		{
			image: 'assets/images/100104.jpg',
		},
		{
			image: 'assets/images/100105.jpg',
		},
		{
			image: 'assets/images/100106.jpg',
		},
		{
			image: 'assets/images/100107.jpg',
		}
	];
	portfolioList = [
		{
			image: 'assets/layout/images/counter-img-1.png',
			title: 'Projects Done',
			count: 2570
		},
		{
			image: 'assets/layout/images/counter-img-2.png',
			title: 'Awards Wins',
			count: 300
		},
		{
			image: 'assets/layout/images/counter-img-3.png',
			title: 'Happy Clients',
			count: 4500
		},
		{
			image: 'assets/layout/images/counter-img-4.png',
			title: 'Country',
			count: 270
		}
	];
	customOptions: OwlOptions = {
		margin: 10,
		loop: true,
		items: 1,
		mouseDrag: true,
		autoWidth: true,
		autoplay: true,
		touchDrag: false,
		pullDrag: false,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1.5
			},
			600: {
				items: 1.5
			},
			900: {
				items: 1.5
			}
		},
		nav: false
	}

	constructor() { }


	ngOnInit(): void {
	}

}
