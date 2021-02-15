import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DeleteoutletserviceService } from '../services/deleteoutletservice.service';
import { OutletserviceService } from '../services/outletservice.service';

/**
 * The delete outlet operation is implemented through this component.
 * On loading the component, the component renders the page to show a form which shows the lists out outlets as a dropdown list fromw which the outlet to be deleted can be selected easily.
 * On submitting the form, the selected outlet to be deleted is passed as an API request through DeleteoutletserviceService.
 * Members:
 *  outletdata - Array which is initialised as soon as the component is loaded. It stores list of all outlets.
 * deleteoutletform - the form data is stored here.
 * fb - instance of FormBuilder which is used build the reactive form on the page.
 * outletservice - Instance of OutletserviceService which fetches the list of all outlets and stores it in the outletdata array.
 * deleteoutletservice - Instance of DeleteoutletserviceService through which the API calls to delete the outlet from the database is done.
 */

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
