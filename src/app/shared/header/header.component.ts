import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 menuOpen = false;  // Add this to toggle mobile menu class

  constructor() { }

  ngOnInit() {
  }

}
