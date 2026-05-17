import { Component, OnInit } from '@angular/core';
import { TrackBookingService } from 'src/app/services/track-booking.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 menuOpen = false;  // Add this to toggle mobile menu class

constructor(private trackBookingService: TrackBookingService) { }

  ngOnInit() {
  }

   bookAppointment() {
    // Open Fresha immediately.
    window.open(
      'https://www.fresha.com/a/lashmap-beauty-studio-melbourne-level-10-1-elizabeth-st-jj0y3knw',
      '_blank'
    );

    // Call backend API in background
    this.trackBookingService.trackBooking()
      .subscribe({
        next: (response) => {
          console.log('Tracking success', response);
        },
        error: (error) => {
          console.error('Tracking failed', error);
        }
      });

  }
}
