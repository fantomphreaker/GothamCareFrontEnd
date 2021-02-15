import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddoutletserviceService } from '../services/addoutletservice.service';
import { Validators } from '@angular/forms';

/**
 * The component is loaded when the 'Add New Outlet' button is pressed. The page is rendered with a reactive form in it which will take the data of an outlet as formdata.
 * The form takes Outlet Name, Street Name, Landmark, Total Available Food Packets, Food Type, Number of Volunteers, Date of openong as inputs. 
 * The outlet name can't be greater than 15 characters in length.
 * On Submitting the form, the component uses addoutletservice to carry out the http POST operation.
 * Members:
 * addoutletform - takes in the values of the formdata
 * fb - instance of the FormBuilder class.
 * addoutletservice - instance of AddoutletserviceService which has methods that sends Http POST requests to the API.
 */

@Component({
  selector: 'app-addoutlet',
  templateUrl: './addoutlet.component.html',
  styleUrls: ['./addoutlet.component.css']
})
export class AddoutletComponent implements OnInit {

  constructor(private fb: FormBuilder, private addoutletservice:AddoutletserviceService) { }

  addoutletform = this.fb.group({
    outletName : [''],
    streetName : [''],
    landmark : [''],
    totalAvailableFoodPackets : [''],
    foodType: [''],
    requiredNoOfVolunteers : [''],
    date : ['']

  });

  onSubmit(){
    if(this.addoutletform.value.foodType == "both")
    {
      this.addoutletform.value.foodType = 0;
    }else if(this.addoutletform.value.foodType == "veg"){
      this.addoutletform.value.foodType = 1;
    }else{
      this.addoutletform.value.foodType = 2;
    }
    console.log(this.addoutletform.value);
    this.addoutletservice.postData(this.addoutletform.value);
    // console.warn(data);
    
  }

  ngOnInit(): void {
  }

}
