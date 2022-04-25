import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

 
  @Input() dataInputs:Iinputs[]=[];
  @Input() groupName : String = 'default';
 
  constructor() { }


  ngOnInit(): void {
    if(this.dataInputs.length ===0){
      throw new Error("dataInputs property required (Iinputs[])");
    }

  }

}


interface Iinputs {
  name :String,
  value: String
}