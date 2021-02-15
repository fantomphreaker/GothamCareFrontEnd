import { Component, OnInit } from '@angular/core';
import { OutletserviceService} from '../outletservice.service';
/**
 * On loading of this component, the information about the outlets are shown in tabular form.
 * This component is loaded after clicking the 'SHOW ALL OUTLETS' link shown in the events component. 
 * Value of each row of the table is a value fetched from the database after the api call.
 * Mambers:
 * 1. outletdata - An array that stores the list of all outlets fetched from the database. Each element of outletdata will be an outlet object.
 * 2. foodType - A string array which assigns its elements as per the value of the foodType fetched from the db, and is shown in the table under Food Type. The foodType of the original object is an enum which consists of values 0, 1 and 2 to represent the food types, Both veg and non-veg, Veg and Non-veg. The corresponding string value is shown for the corresponding foodType enum value. So only the text value is shown in the table.
 * 3. outletservice - An Outletserviceservice instance to make API calls. 
 * 
 */

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
  
  


}
