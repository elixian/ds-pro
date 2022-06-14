import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonViewComponent } from './layouts/button-view/button-view.component';
import { CheckboxViewComponent } from './layouts/checkbox-view/checkbox-view.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonViewComponent },
  { path: 'checkbox', component: CheckboxViewComponent },
];
/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
