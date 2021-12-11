
import { allIcons } from 'angular-feather/icons';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { StyleSwitcherComponent } from './style-switcher/style-switcher.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    StyleSwitcherComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    PagesModule,
    SharedModule,
    NgbModule,
    FeatherModule.pick(allIcons),

    BrowserModule,
    BrowserAnimationsModule,

    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
