import { Component, OnInit } from '@angular/core';
import { OutletserviceService } from '../services/outletservice.service';
import {VolunteerserviceService} from '../services/volunteerservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

/**
 * This component is loaded when the 'Yes, I'm Interested' button is clicked in the outlets component as this component is routed to it.
 * On loading of this component, the page is rendered as a form which takes the volunteer's data.
 * The form has Name, Address, Phonenumber as textboxes and the outlet at which the person is volunteering can be selected from a dropdown list of outlets.
 * The form can be submitted only if the volunteer fills all the fields. 
 * Members:
 * outletdata - Array which stores the list of all outlets fetched from the api. Each element of the array is an Outlet object.
 * volunteerForm - The form data is stored in this member. 
 * fb - instance of FormBuilder which is used to build the volunteer registration form.
 * volunteerservice - Instance of VolunteerserviceService which is used to make API calls to perfrom CRUD on volunteers data in the db.
 * outletservice - Instance of OutletserviceService which is used to make API calls to perfrom CRUD on Outlets data in the db. This instance is used to fetch the outlet data through API calls as soon as the component is loaded.
 * onSubmit() - A method that gets involked when the form is submitted and in turn uses the volunteerservice instance to POST the form data. 
 */


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  public outletdata = [];
  constructor(private fb: FormBuilder, private volunteerservice: VolunteerserviceService, private outletservice: OutletserviceService) { }
    
  
    volunteerForm = this.fb.group({
      volunteerName : ['', Validators.required],
      volunteerAddress : ['', Validators.required],
      volunteerPhoneNumber: ['', Validators.required],
      outletID : ['',Validators.required],
    });
  
  onSubmit(){
    // console.log(data.outletID);
    // console.log(this.outletdata);
    // data.outlet = this.outletdata.filter(x => x.id===data.outletID);
    
    console.warn(this.volunteerForm.value);
    this.volunteerservice.postData(this.volunteerForm.value);
  }

  

  ngOnInit(): void {

    

      this.outletservice.getData().subscribe((data) => {
        this.outletdata = Array.from(Object.keys(data), k=>data[k]);
        console.log(this.outletdata);
      }
  
      );
     
    
  }

}
