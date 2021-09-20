
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from './../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductsFormsComponent } from './componentes/products-forms/products-forms.component';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './componentes/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
import { ProductListComponent } from './componentes/product-list/product-list.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { DashboardComponent } from './componentes/dashboard/dashboard.component';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatMenuModule } from '@angular/material/menu';
import { ProductsListComponent } from './componentes/products-list/products-list.component';

import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FormProductComponent } from './componentes/form-product/form-product.component';
import { ProductEditComponent } from './componentes/product-edit/product-edit.component';


@NgModule({
  declarations: [ ProductsFormsComponent, NavComponent, ProductListComponent, DashboardComponent, ProductsListComponent, FormProductComponent, ProductEditComponent ],
  imports: [
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule

  ]
})
export class AdminModule { }
