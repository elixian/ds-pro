import { ButtonsComponent } from './components/buttons/buttons.component';
import { Component } from '@angular/core';

/**
 * @ignore
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ds-RCI';
  private hasIcone:boolean = false;

  log(v:any){
    console.log(v)
  }
  toggleHasIcone(elem:any){
    elem.hidden = !elem.hidden;
  }
  getHasIcone(elem:any):boolean{
    return elem.hidden;
  }

  toggleReverse(elem:ButtonsComponent){
    elem.reverse = !elem.reverse;
  }
  getIsReverse(elem:ButtonsComponent):boolean{
    return elem.reverse;
  }
  
}
