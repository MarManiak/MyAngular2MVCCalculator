import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Calculator } from './app.component';
//import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
//      AppComponent,
      Calculator],
  bootstrap: [ Calculator ]
})
export class AppModule { }
