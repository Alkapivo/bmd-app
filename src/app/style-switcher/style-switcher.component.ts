import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-switcher',
  templateUrl: './style-switcher.component.html',
  styleUrls: ['./style-switcher.component.scss']
})
export class StyleSwitcherComponent implements OnInit {

  isVisible = false;
  cur_year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

      /**
   * Onclick color change
   * @param theme theme color
   */
       setTheme(theme: any) {
        const navbar = document.getElementById('color-opt');
        if (navbar !== null) {
          navbar.setAttribute('href', 'assets/layout/css/colors/' + theme + '.css');
        }
      }
    
      toggleSwitcher() {
        this.isVisible = !this.isVisible;
      }
}
