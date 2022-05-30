import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
 * Display arrow icon. Example usage:
 * 
 * default (false)
 * @example
 * <app-buttons class="btn-primary" 
 *      [text]="'Suivant'"  
 *      [ico]="true">
 * </app-buttons>
 */
@Input() ico:boolean = false;



  constructor() { }

  ngOnInit(): void {
  }
}
