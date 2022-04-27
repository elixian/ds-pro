import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PrismComponent } from './shared/components/prism/prism.component';


import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-scss';
import { CheckboxComponent } from './components/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    ButtonsComponent,
    HeaderComponent,
    PrismComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PrismComponent
  ]
})
export class AppModule { }
