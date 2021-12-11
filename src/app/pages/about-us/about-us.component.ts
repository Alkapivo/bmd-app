import { Component, OnInit } from '@angular/core';

interface list {
	icon?: string;
	title: string;
	content?: string;
}

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {

	constructor() { }

	heading: string = "Our Services";
	content: string = "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.";
	serviceList = [
		{
			"title": "Usługi projektowe związane z opracowaniem dokumentacji technicznej dla budowy dróg, mostów, wiaduktów, przepustów itp"
		},
		{
			"title": "Pełnienie funkcji inspektora nadzoru, kierownika budowy"
		},
		{
			"title": "Realizacja robót ziemnych"
		},
		{
			"title": "Usługi sprzętowe"
		},
		{
			"title": "Konstrukcja dróg, chodników, parkingów"
		},
		{
			"title": "Budowa mostów, wiaduktów, przepustów"
		},
		{
			"title": "Budowa konstrukcji oporowych"
		},
		{
			"title": "Wykonywanie budowli hydrotechnicznych"
		},
		{
			"title": "Montaż urządzeń bezpieczeństwa ruchu"
		},
		{
			"title": "Wykonywanie obiektów kubaturowych"
		},
		{
			"title": "Wykonywanie obiektów małej architektury"
		}
	];

	ngOnInit(): void {}
}
