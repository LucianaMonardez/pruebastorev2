import { MaterialModule } from './../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { NewitemsComponent } from './components/banner/newitems/newitems.component';


import { SharedModule } from './../shared/shared.module';

import { BannerComponent } from './components/banner/banner/banner.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/banner/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

import { PopularpokemonsComponent } from './components/banner/popularpokemons/popularpokemons.component';
import { CategoriesComponent } from './components/banner/categories/categories.component';




@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    CategoriesComponent,
    PopularpokemonsComponent,
    NewitemsComponent,


    // HeaderComponent,
    // FooterComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatCardModule,
    MaterialModule
  ]
})
export class HomeModule {}
