import { Component, OnInit } from '@angular/core';
import { ButtonsComponent } from 'src/app/components/buttons/buttons.component';
import { IconesComponent } from 'src/app/components/icones/icones.component';


/**
 * @ignore
 */
@Component({
  selector: 'button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.scss']
})
export class ButtonViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleHasIcone(elem:any){
    elem.hidden = !elem.hidden;
  }
  getHasIcone(elem:any):boolean{
    return elem.hidden;
  }


  changeIcone(elem:IconesComponent,type:string){
    elem.nameIcone = type
  }

}
