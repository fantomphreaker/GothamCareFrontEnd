import { Component, OnInit } from '@angular/core';
import { OutletserviceService } from '../outletservice.service';

@Component({
  selector: 'app-adminviewoutlets',
  templateUrl: './adminviewoutlets.component.html',
  styleUrls: ['./adminviewoutlets.component.css']
})
export class AdminviewoutletsComponent implements OnInit {

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
  

}
