import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icones',
  templateUrl: './icones.component.html',
  styleUrls: ['./icones.component.scss']
})
export class IconesComponent implements OnInit {

@Input() nameIcone:string= ''
  constructor() { }

  ngOnInit(): void {
  }

}


