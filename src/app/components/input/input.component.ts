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

  @Input() type:string = "text";
  @Input() name:string = "";
  @Input() id:string = "";
  @Input() isDisabled:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
