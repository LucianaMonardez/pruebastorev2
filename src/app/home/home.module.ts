import { SharedModule } from './../shared/shared.module';

import { BannerComponent } from './components/banner/banner/banner.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/banner/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    // HeaderComponent,
    // FooterComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {}
