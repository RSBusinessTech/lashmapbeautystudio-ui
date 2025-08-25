import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule
  ]
})
export class BookingModule { }
