import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './component/policy/policy.component';
import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule   // <--- Import routing module here!
  ]
})
export class PolicyModule { }
