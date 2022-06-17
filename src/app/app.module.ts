import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import { IconesComponent } from './components/icones/icones.component';
import { ContainerComponent } from './layouts/container/container.component';
import { ButtonViewComponent } from './layouts/button-view/button-view.component';
import { RadiobuttonViewComponent } from './layouts/radiobutton-view/radiobutton-view.component';
import { InputViewComponent } from './layouts/input-view/input-view.component';
import { StateComponent } from './components/state/state.component';
import { StateViewComponent } from './layouts/state-view/state-view.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownViewComponent } from './layouts/dropdown-view/dropdown-view.component';
import { CheckboxViewComponent } from './layouts/checkbox-view/checkbox-view.component';



/**
 * @ignore
 */

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    ButtonsComponent,
    HeaderComponent,
    
    CheckboxComponent,
          InputComponent,
          IconesComponent,
          ContainerComponent,
          ButtonViewComponent,
          RadiobuttonViewComponent,
          InputViewComponent,
          StateComponent,
          StateViewComponent,
          DropdownComponent,
          DropdownViewComponent,
          ButtonsComponent,
          CheckboxViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
      ]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppModule.injector = injector;
  }

  static injector: Injector;
 }
