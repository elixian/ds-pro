import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() name:String ="default";
  @Input() id:String = "default";
  @Input() listOptions:Array<Options>= [{value:'default',label:'default'}];

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