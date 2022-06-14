import { RadiobuttonViewComponent } from './layouts/radiobutton-view/radiobutton-view.component';
import { InputViewComponent } from './layouts/input-view/input-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonViewComponent } from './layouts/button-view/button-view.component';
import { CheckboxViewComponent } from './layouts/checkbox-view/checkbox-view.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonViewComponent },
  { path: 'checkbox', component: CheckboxViewComponent },
  { path: 'imputs', component: InputViewComponent },
  { path: 'radio-button', component: RadiobuttonViewComponent },
];
/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
