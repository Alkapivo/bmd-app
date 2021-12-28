import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Form submition
	submit?: boolean;

	constructor() { }

	heading: string = "Kontakt";
	contact: string = "TEKST DOLNY";

	ngOnInit(): void {
	}
/*
	sendEmail(message) {
		var email = message.emailId;
		var subject = message.subject;
		var emailBody = 'Hi '+message.from;
		document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
	}*/

}
