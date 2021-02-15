import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditdeleteoutletserviceService } from '../services/editdeleteoutletservice.service';
import { OutletserviceService } from '../services/outletservice.service';

/**
 * This component is to modify the outlet data stored in the database through the API.
 * This component after loading, the page is rendered with a form where the new values of the selected outlet can be entered. 
 * After submission, the form data is taken and is sent to the API as API requests.
 * Members:
 * outletdata - Array which stored the outlets, each element is an outlet object.
 * modifyoutletform - The form data is stored in this.
 * fb - An instance of FormBuilder which is used to create the reactive form.
 * outletservice - Instance of Outletserviceservice which is used to fetch outlet data from the api as soon as the component is loaded.
 * editdeleteoutletservice - Instance of EditdeleteoutletserviceService which is used to make API to perform PUT operation on an Outlet.
 */

@Component({
  selector: 'app-editdeleteoutlet',
  templateUrl: './editdeleteoutlet.component.html',
  styleUrls: ['./editdeleteoutlet.component.css']
})
export class EditdeleteoutletComponent implements OnInit {

  constructor(private fb: FormBuilder, private outletservice: OutletserviceService, private editdeleteoutletservice: EditdeleteoutletserviceService) { }
  public outletdata = [];

  modifyoutletform = this.fb.group({
    id:[''],
    outletName : [''],
    streetName : [''],
    landmark : [''],
    totalAvailableFoodPackets : [''],
    foodType: [''],
    requiredNoOfVolunteers : [''],
    date : ['']
  });
  
  onSubmit(){
    if(this.modifyoutletform.value.foodType == "both")
    {
      this.modifyoutletform.value.foodType = 0;
    }else if(this.modifyoutletform.value.foodType == "veg"){
      this.modifyoutletform.value.foodType = 1;
    }else{
      this.modifyoutletform.value.foodType = 2;
    }
    console.log(this.modifyoutletform.value);
   
    //console.log(this.modifyoutletform.value);
    this.editdeleteoutletservice.patchData(this.modifyoutletform.value, this.modifyoutletform.value.id);
  }

  ngOnInit(): void {
    this.outletservice.getData().subscribe((data) => {
      this.outletdata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.outletdata);
    }

    );
  }

}
