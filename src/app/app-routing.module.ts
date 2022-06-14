
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonViewComponent } from './layouts/button-view/button-view.component';


const routes: Routes = [
  { path: 'buttons', component: ButtonViewComponent },
];
/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
