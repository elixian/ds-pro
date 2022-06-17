import { Component, Input, OnInit } from '@angular/core';


 /**
  * Example of usage:
  * <example-url>/inputs</example-url>
  * 
  */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

/**
 * Type input. Example usage:
 * 
 * default (text)
 * @example
 * <div class="flex items-center gap-2">
 *     <label for="">Saisie montant</label>
 *    <app-input class="w-28  block  data-currency" [type]="'number'"></app-input>
 * </div>
 */
  @Input() type:string = "text";
  @Input() name:string = "";
  @Input() id:string = "";
  @Input() isDisabled:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
