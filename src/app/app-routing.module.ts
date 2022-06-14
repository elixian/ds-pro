import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButonsComponent } from './pages/butons/butons.component';


const routes: Routes = [
  { path: 'butons', component: ButonsComponent },
];
/**
 * @ignore
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
