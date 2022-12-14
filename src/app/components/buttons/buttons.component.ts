import { Component, OnInit, Input, Attribute } from '@angular/core';


 /**
  * Example of usage:
  * <example-url>/components/buttons</example-url>
  * 
  */
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',

  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  
/**
 * Disable button. Example usage:
 * 
 * default (false)
 * @example
 * <app-buttons class="btn-primary" 
 *      [isDisabled]="true" >
 * </app-buttons>
 */
@Input() isDisabled:boolean = false;
/**
 * Define text in button. Example usage:
 *
 * @example
 * <app-buttons class="btn-primary" 
 *      [text]="'Suivant'">
 * </app-buttons>
 */
@Input() text:string = "default text";


@Input() icon:string | undefined ;

/**
 * Define direction icone with attribute dir . Example usage:
 *
 * @example
 * <app-buttons class="btn-primary" 
 *      [text]="'Suivant'" dir="ltr">
 * </app-buttons>
 */
_dir:String | undefined;
  constructor(@Attribute('dir') public dir: string) { 
    this._dir= dir;
    
  }
  ngOnInit(): void {
  }


}

