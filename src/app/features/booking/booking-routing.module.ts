import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent },                         // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Use forChild here only
  exports: [RouterModule]
})
export class BookingRoutingModule {}
