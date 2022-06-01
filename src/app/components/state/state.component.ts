import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
@Input() label:string='';

 iconeClass:string="";
 statelabel="";

  constructor() {
    
    

   }

  ngOnInit(): void {
    this.statelabel = this.getValueEnum().toUpperCase();
    this.iconeClass = `var(--c-state-${this.label})`
  }

   getValueEnum(){
    let index = Object.keys(IconeClass).indexOf(this.label);
    return Object.values(IconeClass)[index]

  }
}
enum IconeClass{
  declared= "DÉCLARÉE",
  revised= "CORIGÉE",
  neutralized= "NEUTRALISÉE",
  disputed= "CONTESTÉE",
  fixed= "SAISIE",
}