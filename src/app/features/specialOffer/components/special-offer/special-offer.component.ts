import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent implements OnInit {

  constructor(private router: Router, private location:Location) { }

  ngOnInit() {
  }

  bookAppointment(): void {
    // this.router.navigate(['/booking']);
    window.location.href = 'https://www.fresha.com/a/lashmap-beauty-studio-melbourne-level-10-1-elizabeth-st-jj0y3knw';
  }

   goBack(): void {
    this.location.back();
  }
}
