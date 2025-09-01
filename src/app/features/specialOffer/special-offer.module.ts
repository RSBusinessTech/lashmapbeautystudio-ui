import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { SpecialOfferRoutingModule } from './special-offer-routing.module';



@NgModule({
  declarations: [SpecialOfferComponent],
  imports: [
    CommonModule,
    SpecialOfferRoutingModule   // <--- Import routing module here!
  ]
})
export class SpecialOfferModule { }
