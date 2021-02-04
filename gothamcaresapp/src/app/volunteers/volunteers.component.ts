import { Component, OnInit } from '@angular/core';
import {VolunteerserviceService} from '../volunteerservice.service';


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  constructor(private volunteerservice: VolunteerserviceService) { }
  
  onSubmit(data){
    this.volunteerservice.postData(data);
    console.warn(data);
  }

  ngOnInit(): void {

    
  }

}
