import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',

  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

@Input() isDisabled:boolean = false;
@Input() text:string = "default text";
@Input() ico:boolean = false;
@Output() btnClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
}
