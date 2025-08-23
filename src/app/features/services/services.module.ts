import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { ServicesRoutingModule } from './service-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule
  ]
})
export class ServicesModule { }
