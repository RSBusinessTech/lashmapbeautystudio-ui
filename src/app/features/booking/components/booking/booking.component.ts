import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCategory, SERVICE_CATEGORIES, ServiceItem } from 'src/app/data/services-data';

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
    serviceId: ''
  };

  submitted = false;

  timeSlots: string[] = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00PM'
  ];

  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;

  constructor(private route: ActivatedRoute) {}

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
      duration: selectedService ? selectedService.duration : ''
    };

    console.log('Booking Payload:', payload);

    // TODO: Call your API here using HttpClient
    this.submitted = true;
  }
}
