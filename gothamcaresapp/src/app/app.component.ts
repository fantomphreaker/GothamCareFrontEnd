import { getLocaleFirstDayOfWeek } from '@angular/common';
import { componentFactoryName } from '@angular/compiler';
import { Component, ɵwhenRendered } from '@angular/core';
import { OutletserviceService } from './outletservice.service';

/**  
  * This is the main or root component which is always loaded first.
  * All the other components are loaded after the loading of this component and the webpage is rendered. 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gothamcaresapp';
  public outletdata = [];

 
  constructor(private outletservice: OutletserviceService){}
  
  ngOnInit(){
    
   
    
  }
}
