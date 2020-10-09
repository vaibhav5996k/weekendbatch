import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { LeftCompComponent } from './left-comp/left-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavCompComponent,
    MainCompComponent,
    LeftCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
