import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductComponent } from './product/components/product/product.component';
//import { CartComponent } from './cart/cart.component';
//import { ContactComponent } from './contact/contact.component';
//import { DemoComponent } from './demo/demo.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import { NgSvgIconModule } from 'ng-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    //ProductComponent,
    //CartComponent,
    //ProductsComponent,
    //ContactComponent,
    // DemoComponent,
    // PageNotFoundComponent,
    //ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    // NgSvgIconModule.forRoot({})
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// NgSvgIconModule.forRoot({
//   defaultColor: '#000',
//   defaultSize: 50,
//   defaultViewBox: '0 0 24 24'
// })
