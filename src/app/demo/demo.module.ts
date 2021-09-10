import { SharedModule } from './../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule {

}
