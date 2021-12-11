import { Component, OnInit } from '@angular/core';

interface list {
	icon: string;
	title: string;
	content: string;
}

@Component({
	selector: 'app-showcase',
	templateUrl: './showcase.component.html',
	styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

	heading: string = 'Nasze Realizacje';
	content: string = 'TEKST DOLNY';
	__serviceList: list[] = [
		{
			icon: 'alert-octagon',
			title: 'Awesome Support',
			content: "Some quick example text to build on the card title and make up the bulk of the card's content platform."
		},
		{
			icon: 'droplet',
			title: 'Dynamic Growth',
			content: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
		},
		{
			icon: 'minimize',
			title: 'Branding Identity',
			content: "Separated they live in Bookmarksgrove right at the coast of the Semantics, and large language ocean neary."
		},
		{
			icon: 'message-circle',
			title: 'Solutions Business',
			content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World."
		},
		{
			icon: 'copy',
			title: 'Digital Design',
			content: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
		},
		{
			icon: 'shield',
			title: 'Goal Business',
			content: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia."
		}
	];

	serviceList = [
		{
			"id": "1",
			"content": "Budowa ścieżek rowerowych oraz punktu turystycznego nad Zatoką Zakliczyńską",
			"purchaser": "Gmina Siepraw ",
			"date": "11.2020 - aktualnie"
		},
		{
			"id": "2",
			"content": "Budowa parkingu w systemie Park&Ride na terenie Gminy Wieliczka w pobliżu przystanku kolejowego w Węgrzcach Wielkich i budowa dróg dla rowerów o łacznej długości 1830 m w gminie Wieliczka ",
			"purchaser": "Gmina Wieliczka ",
			"date": "12.2020 - aktualnie"
		},
		{
			"id": "3",
			"content": "Budowa ścieżki pieszo rowerowej w m. Borzęta ",
			"purchaser": "Gmina Myślenice ",
			"date": "05.2021-10.2021"
		},
		{
			"id": "4",
			"content": "Miejska Góra w Starym Sączu - ścieżka w koronach drzew ",
			"purchaser": "Gmina Stary Sącz",
			"date": "09.2019 - 10.2021"
		},
		{
			"id": "5",
			"content": "Rozbiórka i budowa mostu w ciągu drogi leśnej nr 10 na potoku Kamienica Zabrzeska w Leśnictwie Mogielica",
			"purchaser": "Nadleśnictwo Limanowa ",
			"date": "01.2021 - 11.2021"
		},
		{
			"id": "6",
			"content": "Budowa mostu przez rzekę Jeleśnia Woda w miejscowości Chyżne w ciągu drogi krajowej nr 7- most graniczny w km 763 + 710",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "05.2019 - aktualne"
		},
		{
			"id": "7",
			"content": "Zagospodarowanie terenu rekreacyjnego Nakła wraz z budową tras wielofunkcyjnych w tym kładki pieszo-rowerowej przez rzekę Poprad",
			"purchaser": "Miasto i Gmina Piwniczna - Zdrój ",
			"date": "09.2018-09.2020"
		},
		{
			"id": "8",
			"content": "Zaprojektowanie i wykonie remontu wiaduktów nad ul. Krakowską w m. Rząska DK 7 km 668+077",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "05.2019 - 11.2020"
		},
		{
			"id": "9",
			"content": "Zaprojektowanie i budowa trzech mostów w miejscowości Nowa Wieś w ciągu drogi krajowej nr 75 z podziałem na części: Część 3: Zaprojektowanie i budowa mostu na potoku Łosie w miejscowości Nowa Wieś w km 88+866 drogi krajowej nr 75",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "06.2018-10.2020"
		},
		{
			"id": "10",
			"content": "Zaprojektowanie i budowa wiaduktu w miejscowości Węgrzce w ciągu drogi krajowej nr 7 w km 657+208",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "08.2017-12.2018"
		},
		{
			"id": "11",
			"content": "Zaprojektowanie i budowa dwóch mostów w miejscowości Biertowice w/c drogi krajowej nr 52 w km 68+578 oraz w km 69+822.",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "05.2017-07.2019"
		},
		{
			"id": "12",
			"content": "Ochrona bioróżnorodności poprzez podglądanie środowiska przyrodniczego w widłach Dunajca i Popradu - ochrona środowiska ",
			"purchaser": "Gmina Stary Sącz",
			"date": "03.2017-05.2018"
		},
		{
			"id": "13",
			"content": "Budowa mostu na potoku Rodna Kąty w m. Ropa w km 164+569 w ciągu drogi krajowej nr 28",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "04.2017-05.2018"
		},
		{
			"id": "14",
			"content": "Rozbiórka i budowa nowego mostu na rzece Kamienica Nawojowska w m. Nowa Wieś w km 89+304 w/c drogi krajowej nr 75 wraz z budową i rozbiórką drogi tymczasowej",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "04.2016-11.2016"
		},
		{
			"id": "15",
			"content": "Budowa mostu na potoku Homerka w miejscowości Frycowa w km 75+050 w/c drogi krajowej nr 75 wraz z budową i rozbiórką drogi tymczasowej",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "04.2016-06.2017"
		},
		{
			"id": "16",
			"content": "Przebudowa mostu w m. Kuków na potoku Kocońka w ciągu DW nr 946 odc. 020 km 2+293 wraz z dojazdami",
			"purchaser": "Zarząd Dróg Wojewódzkich w Krakowie ",
			"date": "05.2017-11.2017"
		},
		{
			"id": "17",
			"content": "Zaprojektownie i wykonanie osłon wychwytujących odłamki skalne na odcinku drogi krajowej nr 87 od km: 25+500 do 26+900  msc. Piwniczna",
			"purchaser": "Generalna Dyrekcja Dróg Krajowych i Autostrad Oddział w Krakowie ",
			"date": "06.2016-12.2016"
		},
		{
			"id": "18",
			"content": "Remont mostu w ciągu drogi gminnej Smroków - most - Orłów na rzece Szreniawa w miejscowości Smroków i Orłów",
			"purchaser": "Urząd Miejski w Słomnikach",
			"date": "03.2016-05.2016"
		},
		{
			"id": "19",
			"content": "Remont mostu w ciągu drogi gminnej nr 601781K na rzece Szreniawa w miejscowości Miłocice",
			"purchaser": "Urząd Miejski w Słomnikach",
			"date": "03.2016-07.2016"
		},
		{
			"id": "20",
			"content": "Modernizacja odcinków dróg wojewódzkich - odbudowa korpusu DW 971 w m. Żegiestów ",
			"purchaser": "Zarząd Dróg Wojewódzkich w Krakowie ",
			"date": "09.2015-11.2015"
		},
		{
			"id": "21",
			"content": "Stabilizacja osuwiska we wsi Popardowa - przysiółek Poprdowa Wyżna wraz z odbudową korpusu drogi gminnej Frycowa - Popardowa Wyżna w km 1+850 do 2+040",
			"purchaser": "Urząd Gminy Nawojowa ",
			"date": "04.2015-07.2015"
		},
		{
			"id": "22",
			"content": "Odbudowa drogi gminnej Obidza I - Obidza II nr 291705K w miejscowości Obidza w km 0+316 - 2 +053 wraz z odbudową przepustów w km 0+326, 0+803, 1+182, 1+581, 1+645, 1+725, 2+049",
			"purchaser": "Urząd Gminy Łącko",
			"date": "05.2015-09.2015"
		},
		{
			"id": "23",
			"content": "Przebudowa obiektów inżynierskich w ciągach dróg wojewódzkich - Odbudowa przepustu w m. Niesułowice w ciągu DW 791 odc. 170 km 0+409 - zaprojektuj i wybuduj ",
			"purchaser": "Zarząd Dróg Wojewódzkich w Krakowie ",
			"date": "07.2015-09.2015"
		},
		{
			"id": "24",
			"content": "Odbudowa mostu w formie przepustu w ciągu drogi powiatowej nr 1561K Sienna - Siedlce w km 3+187 w m. Jelna i umocnień przy obiekcie ",
			"purchaser": "Powiatowy Zarząd Dróg w Nowym Sączu",
			"date": "05.2015-12.2015"
		}
	];

	imgObject: Array<object> = [
		{
		  image: 'https://via.placeholder.com/600.png/09f/fff',
		  thumbImage: 'https://via.placeholder.com/1200.png/09f/fff',
		  title: 'Slider 1',
		  alt: 'Hello World 1',
		}, {
		  image: 'https://via.placeholder.com/600.png/021/fff',
		  thumbImage: 'https://via.placeholder.com/1200.png/021/fff',
		  title: 'Slider 2',
		  alt: 'Hello World 2'
		}, {
		  image: 'https://via.placeholder.com/600.png/321/fff',
		  thumbImage: 'https://via.placeholder.com/1200.png/321/fff',
		  title: 'Slider 3',
		  alt: 'Hello World 3'
		}, {
		  image: 'https://via.placeholder.com/600.png/422/fff',
		  thumbImage: 'https://via.placeholder.com/1200.png/422/fff',
		  title: 'Slider 4',
		  alt: 'Hello World 4'
		}, {
		  image: 'https://via.placeholder.com/600.png/654/fff',
		  thumbImage: 'https://via.placeholder.com/1200.png/654/fff',
		  title: 'Slider 5',
		  alt: 'Hello World 5'
		}
	];


	constructor() { }

	ngOnInit(): void {
	}

}
