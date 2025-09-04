import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingRequest } from '../models/BookingRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //URL of Rest-API to be called to send email for booking appointment.
   private url = "https://rsbusinesstech-backend.onrender.com/booking/sendBookingEmailLashMapBeautyStudio";
  //  private url = "http://127.0.0.1:8080/booking/sendBookingEmailLashMapBeautyStudio";

  //Dependency Injection of HttpClient(Constrcutor DI).
  constructor(private httpClient: HttpClient) { }

  //calling Rest-API to send email.
  sendEmail(request: BookingRequest): Observable<string>{
    return this.httpClient.post(this.url, request, { responseType: 'text' });
  }
}
