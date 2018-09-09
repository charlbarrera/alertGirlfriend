import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MaterialModule } from './material/material.module';
import { ButtonAlertComponent } from './components/button-alert/button-alert.component';
import { PageSuccessComponent } from './components/page-success/page-success.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonAlertComponent,
    PageSuccessComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
