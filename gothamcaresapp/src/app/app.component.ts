import { Component } from '@angular/core';
import { OutletserviceService } from './outletservice.service';

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
