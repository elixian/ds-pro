import { IconesComponent } from './components/icones/icones.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @ignore
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design RCI';
  public href: string = "";
  constructor(private router: Router){
    
  }

  ngOnInit(){
    this.href = this.router.url;
    console.log(this.router.url);
  }
  
  
}
