import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [ProcessComponent, CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class ProcessModule { }
