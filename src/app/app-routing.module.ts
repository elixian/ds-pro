import { DropdownViewComponent } from './layouts/dropdown-view/dropdown-view.component';
import { StateViewComponent } from './layouts/state-view/state-view.component';
import { RadiobuttonViewComponent } from './layouts/radiobutton-view/radiobutton-view.component';
import { InputViewComponent } from './layouts/input-view/input-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonViewComponent } from './layouts/button-view/button-view.component';
import { CheckboxViewComponent } from './layouts/checkbox-view/checkbox-view.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonViewComponent },
  { path: 'checkbox', component: CheckboxViewComponent },
  { path: 'inputs', component: InputViewComponent },
  { path: 'radio-button', component: RadiobuttonViewComponent },
  { path: 'state', component: StateViewComponent },
  { path: 'drop-down', component: DropdownViewComponent },
];
/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
