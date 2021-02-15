import { Component, OnInit } from '@angular/core';
/**
 * Component is a part of the home page. 
 * It contains some text and and Image which will render in the form of a showcase area in the homepage.
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
