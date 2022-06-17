import { Component, OnInit } from '@angular/core';


/**
 * @ignore
 */
@Component({
  selector: 'dropdown-view',
  templateUrl: './dropdown-view.component.html',
  styleUrls: ['./dropdown-view.component.scss']
})
export class DropdownViewComponent implements OnInit {

  fakeData = [
    {value: 'SvelteJs', label:'SvelteJs'},
    {value: 'Vuejs', label:'Vuejs'},
    {value: 'Angular', label:'Angular'},
    {value: 'ReactJs', label:'ReactJs'},
    {value: 'Sharepoint', label:'Sharepoint'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
