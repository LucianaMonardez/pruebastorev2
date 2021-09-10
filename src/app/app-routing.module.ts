import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';
import { AdminGuard } from './admin.guard';
//import { HomeComponent } from './home/components/banner/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//import { ProductsComponent } from './products/products.component';
//import { ContactComponent } from './contact/contact.component';
//import { DemoComponent } from './demo/demo.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        //component: HomeComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent
      // },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },

    ]

  },

  {
    path: 'demo',
    canActivate: [AdminGuard],
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
