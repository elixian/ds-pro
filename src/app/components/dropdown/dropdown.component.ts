import { Component, OnInit, Input } from '@angular/core';


 
 /**
  * Example of usage:
  * 
  * <example-url>/components/drop-down</example-url>
  * 
  */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() name:String ="default";
  @Input() id:String = "default";
  @Input() listOptions:Array<Options>= [{value:'default',label:'default'}];
  @Input() isDisabled:boolean=false;


  constructor() {
    
    console.log(this.listOptions);
   }

  ngOnInit(): void {
  }

}


interface Options{
  value :String;
  label : String;
}