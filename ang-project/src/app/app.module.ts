import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LittleComponentComponent } from './little-component/little-component.component';
import { InlineComponent } from './inline/inline.component';
import { WebNevComponent } from './web-nev/web-nev.component';
import { WebInfoComponent } from './web-info/web-info.component';
import { WebFooterComponent } from './web-footer/web-footer.component';

@NgModule({
  declarations: [AppComponent, LittleComponentComponent, InlineComponent, WebNevComponent, WebInfoComponent, WebFooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
