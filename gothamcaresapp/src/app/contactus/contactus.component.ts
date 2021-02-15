import { Component, OnInit } from '@angular/core';
/**
 * Component that loads when the CONTACT US link is clicked on the navbar. This component loads the page which shows the Contact details of the organization.
 */

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
