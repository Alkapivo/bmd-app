import { Component, OnInit } from '@angular/core';

interface list {
	que: string;
	ans: string;
	link: string;
}

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.scss']
})
/**
 * Layout-2 FAQ component
 */
export class FaqComponent implements OnInit {

	constructor() { }

	heading: string = "FAQ's";
	content: string = "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.";
	faqList: list[] = [
		{
			que: 'What can i do for investigation?',
			ans: 'It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
			link: 'config-panel-one'
		},
		{
			que: 'How is your pellentesque Quisque eget ??',
			ans: 'Pityful a rethoric question ran over her cheek, then she continued her way.',
			link: 'config-panel-two'
		},
		{
			que: 'What is your opening hours?',
			ans: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
			link: 'config-panel-three'
		}
	];

	ngOnInit(): void {
	}

}
