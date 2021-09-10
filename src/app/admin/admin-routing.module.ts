import { FormProductComponent } from './componentes/form-product/form-product.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { NavComponent } from './componentes/nav/nav.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormsComponent } from './componentes/products-forms/products-forms.component';
import { ProductsListComponent } from './componentes/products-list/products-list.component';



const routes: Routes = [

 {
  path: '',
  component:NavComponent,
  children: [
    {
      path: 'create',
      component:ProductsFormsComponent
    },
    {
      path: 'inventory',
      component:ProductListComponent
    },
    {
      path: 'dashboard',
      component:DashboardComponent
    },
    {
      path: 'products',
      component:ProductsListComponent
    },
    {
      path: 'products/create',
      component:FormProductComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
