import { Component, OnInit } from '@angular/core';
/**
 * Events Component is a part of the home page's nav bar.
 * It renders the page with paragraphs about the events hosted by the organisation.
 * It has provision to navigate to outlets component as its routing is implemented on the page as a hyperlink.
 
 */

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
