import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackBookingService {

  //encode the email properly because @ in URL can sometimes create issues.
  //  private ownerEmail = encodeURIComponent('lashmap.beautystudio@gmail.com');
     private ownerEmail = encodeURIComponent('rohitsharma2605555@gmail.com');

   // REST API URL
    private url = `https://rsbusinesstech-backend.onrender.com/booking/trackBooking/${this.ownerEmail}`;
  //  private url = `http://127.0.0.1:8080/booking/trackBooking/${this.ownerEmail}`;
  
    //Dependency Injection of HttpClient(Constrcutor DI).
    constructor(private httpClient: HttpClient) { }
  
    //calling Rest-API to send email.
    trackBooking(){
      return this.httpClient.get<string>(this.url);
    }
}
