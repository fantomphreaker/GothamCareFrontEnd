import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddoutletserviceService } from '../addoutletservice.service';
import { Validators } from '@angular/forms';

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
