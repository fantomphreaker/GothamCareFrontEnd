import { Component, OnInit } from '@angular/core';
import { OutletserviceService} from '../outletservice.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})
export class OutletsComponent implements OnInit {
  public outletdata = [];
  constructor(private outletservice: OutletserviceService) { }
  public foodType = ["Both", "Veg", "Non-Veg"];

  

  ngOnInit(): void {
      
      this.outletservice.getData().subscribe((data) => {
      this.outletdata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.outletdata);
    }

    );
    
    
  }
  
  public get getOutlets(){
    return this.outletdata;
  }


}
