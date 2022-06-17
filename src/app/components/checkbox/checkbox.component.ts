import { Component, Input, OnInit } from '@angular/core';


 /**
  * Example of usage:
  * <example-url>/checkbox</example-url>
  * 
  */
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.components.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  /**
 * Add the ID. Example usage:
 * 
 * set to Default
 * @example
 * <app-checkbox 
 * [idInput]="'check_1'" 
 * [val]="'v1'" [labelInnerText]="'checkbox 1'"></app-checkbox>
 *
 */
  @Input()  idInput:String='default';

   /**
 * Défini la valeur ici v1
 * 
 * set to Default
 * @example
 * <app-checkbox 
 * [idInput]="'check_1'" 
 * [val]="'v1'" [labelInnerText]="'checkbox 1'"></app-checkbox>
 *
 */
  @Input() val : String = 'default';
  
  @Input() labelInnerText : String = 'default';
  @Input() isDisabled : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
