import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCategory, SERVICE_CATEGORIES, ServiceItem } from 'src/app/data/services-data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceId: '',
    stylist: ''
  };

  submitted = false;

  timeSlots: string[] = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
    '10:00 PM'
  ];

  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;

  constructor(private route: ActivatedRoute, private location:Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['serviceId'];
      if (id) {
        this.booking.serviceId = id;
      }
    });
  }

  getSelectedService(): ServiceItem | null {
    for (let category of this.serviceCategories) {
      const found = category.services.find(service => service.serviceId == +this.booking.serviceId);
      if (found) return found;
    }
    return null;
  }

  submitBooking() {
    const selectedService = this.getSelectedService();

    const payload = {
      ...this.booking,
      service: selectedService ? selectedService.name : '',
      duration: selectedService ? selectedService.duration : '',
      stylist: this.booking.stylist  // <-- Include stylist in the payload
    };

    console.log('Booking Payload:', payload);

    // TODO: Call your API here using HttpClient
    this.submitted = true;
  }

     goBack(): void {
    this.location.back();
  }
}
