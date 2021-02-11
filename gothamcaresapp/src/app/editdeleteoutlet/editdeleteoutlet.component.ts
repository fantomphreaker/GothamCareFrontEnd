import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditdeleteoutletserviceService } from '../editdeleteoutletservice.service';
import { OutletserviceService } from '../outletservice.service';

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
