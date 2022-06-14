import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


 /**
  * Example of usage:
  * <example-url>http://localhost:4200/buttons</example-url>
  * <example-url>/buttons</example-url>
  * 
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
/**
 * reverse l affichage label et icone . Example usage:
 * 
 * default (false)
 * @example
 * <app-buttons class="btn-primary" 
 *      [text]="'Suivant'"  
 *      [reverse]="true">
 * </app-buttons>
 */
@Input() reverse:boolean = false;

  constructor() { }
  ngOnInit(): void {
  }


}
