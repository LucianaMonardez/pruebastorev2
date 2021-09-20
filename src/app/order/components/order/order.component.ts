
import { Observable } from 'rxjs';
import { CartService } from './../../../core/services/cart.service';
import { Product } from './../../../product.model';
import { Component, OnInit, Pipe } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  products$: Observable<Product[]>;
  cardValid: Observable<boolean>;
  constructor(
    private cartServise: CartService
  ) {
     this.products$ = this.cartServise.cart$;
     this.cardValid = this.cartEmpty();
   }


  ngOnInit(): void {
  }

  cartEmpty(): Observable<boolean> {
    return this.products$.pipe(
      map((products) => {
        if (products.length === 0) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
  addProductCart(product: Product): any {
    this.cartServise.addCart(product);
  }

  // deleteProductCart(product: string): any {
  //   this.cartServise.deleteProductCart(product);
  // }



}
