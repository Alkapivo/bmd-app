import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface content {
  image: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  currentSection = 'home';
  heading: string = "BMD sp. z o. o.";
  sub_heading: string = "To, czym się zajmujemy";
  content: string = "Projektowanie, nadzorowanie, wykonawstwo obiektów inżynierii komunikacyjnej.";
  contentData: content[] = [
    {
      image: 'assets/layout/images/hero-one-6-slider1.jpg',
    },
    {
      image: 'assets/layout/images/hero-one-6-slider2.jpg',
    },
    {
      image: 'assets/layout/images/hero-one-6-slider3.jpg',
    }
  ];

  /**
   * owl carousel slider
   */
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

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (navbar !== null) {
        navbar.classList.add('nav-sticky');
      }
    }
    else {
      if (navbar !== null) {
        navbar.classList.remove('nav-sticky');
      }
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav !== null) {
      nav.classList.toggle('show');
    }
  }

}
