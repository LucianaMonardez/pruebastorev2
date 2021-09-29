import { Product } from 'src/app/product.model';
import { GroupProductsPipe } from './../shared/pipes/group-products.pipe';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';




@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MaterialModule,




  ]
})
export class OrderModule { }
