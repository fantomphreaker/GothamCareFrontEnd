import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DeleteoutletserviceService } from '../deleteoutletservice.service';
import { OutletserviceService } from '../outletservice.service';

@Component({
  selector: 'app-deleteoutlet',
  templateUrl: './deleteoutlet.component.html',
  styleUrls: ['./deleteoutlet.component.css']
})
export class DeleteoutletComponent implements OnInit {

  constructor(private deleteoutletservice: DeleteoutletserviceService, private fb: FormBuilder, private outletservice: OutletserviceService) { }
  outletdata = [];

  deleteoutletform = this.fb.group({
    id:['']
  });

  onSubmit(){
    console.log(this.deleteoutletform.value);
    this.deleteoutletservice.deleteData(this.deleteoutletform.value);
  }

  ngOnInit(): void {
    this.outletservice.getData().subscribe((data) => {
      this.outletdata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.outletdata);
    }

    );
  }
  

}
