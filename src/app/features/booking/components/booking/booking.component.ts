import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCategory, SERVICE_CATEGORIES, ServiceItem } from 'src/app/data/services-data';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { BookingRequest } from '../../models/BookingRequest';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  submitted = false;
  submittedBooking: BookingRequest | null = null; // ✅ DECLARE THIS

  timeSlots: string[] = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
    '10:00 PM'
  ];

  serviceCategories: ServiceCategory[] = SERVICE_CATEGORIES;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      serviceId: ['', Validators.required],
      stylist: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['serviceId'];
      if (id) {
        this.bookingForm.patchValue({ serviceId: id });
      }
    });
  }

  getSelectedService(): ServiceItem | null {
    const serviceId = this.bookingForm.get('serviceId') ? this.bookingForm.get('serviceId')!.value : null;

    for (let category of this.serviceCategories) {
      const found = category.services.find(service => service.serviceId == +serviceId);
      if (found) return found;
    }
    return null;
  }

  getSelectedServiceDisplay(service: ServiceItem): string {
  let priceText = '';

  if (service.juniorPrice && service.seniorPrice) {
    priceText = `Junior: ${service.juniorPrice} / Senior: ${service.seniorPrice}`;
  } else if (service.juniorPrice) {
    priceText = `Price: ${service.juniorPrice}`;
  }
  return `${service.name} - ${priceText} (${service.duration})`;
}


 onSubmit(): void {
  console.log("Submit clicked");

  if (this.bookingForm.valid) {
    const bookingRequest: BookingRequest = this.bookingForm.value;

    // Serivce Details:
    const selectedService = this.getSelectedService();
    if (selectedService) { 
      bookingRequest.serviceName = this.getSelectedServiceDisplay(selectedService); // This is the complete text like seen in dropdown
    } else {
      bookingRequest.serviceName = ''; // fallback if not found
    }

    this.bookingService.sendEmail(bookingRequest).subscribe({
      next: (res) => {
        console.log('Booking email sent', res);
        this.submittedBooking = { ...bookingRequest }; // Save booking details
        this.submitted = true;
        this.bookingForm.reset();
      },
      error: (err) => {
        console.error('Failed to send booking email', err);
        alert('Failed to book appointment. Please try again later.');
      }
    });
  } else {
    alert('Please fill all required fields correctly.');
  }
 }

 

}
