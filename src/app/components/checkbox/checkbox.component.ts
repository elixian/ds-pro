import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.components.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() idInput:String='default';
  @Input() val : String = 'default';
  @Input() labelInnerText : String = 'default';
  @Input() isDisabled : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
