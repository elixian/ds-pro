import { Component, Input, OnInit } from '@angular/core';



 /**
  * Example of usage:
  * <example-url>/radio-button</example-url>
  * 
  */
@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

 /**
 * Liste  d'objets {name : foo, value : bar}. Example usage:
 * 
 * default [{name : 'foo', value : 'bar'}]
 * @example
 *<app-radio-button class="flex p-0"
 *  [dataInputs]="[{name : 'Nuxt', value:'nux-1'},{name : 'SvelteJS', value:'angular-1'}]">
 * </app-radio-button>
 */
  @Input() dataInputs:Iinputs[]=[{name : 'foo', value : 'bar'}];

/**
 * nom du groupename. Example usage:
 * 
 * default ('default')
 * @example
 *<app-radio-button class="flex p-0"
 *  [groupName]="'frameworkjs'">
 * </app-radio-button>
 */
  @Input() groupName : String = 'default';
 

  constructor() { }
  ngOnInit(): void {
    if(this.dataInputs.length === 0){
      throw new Error("dataInputs property required (Iinputs[])");
    }

  }

}

interface Iinputs {
  name :String,
  value: String
}