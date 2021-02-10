import { Component, OnInit } from '@angular/core';
import { OutletserviceService } from '../outletservice.service';
import {VolunteerserviceService} from '../volunteerservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';



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
      outletID : [''],
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
