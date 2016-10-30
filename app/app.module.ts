import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { ClickMeComponent } from './click.component';
import { HeroForm } from './hero-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ClickMeComponent, HeroForm ],
  bootstrap:    [ AppComponent ]
})
	
export class AppModule { }