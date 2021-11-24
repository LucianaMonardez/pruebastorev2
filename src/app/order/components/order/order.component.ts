import { groupedProduct } from './../../../product.model';
import { Product } from 'src/app/product.model';
import { Observable } from 'rxjs';
import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit, Pipe, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() product: groupedProduct | undefined;


  products$: Observable<Product[]>;
  cardValid: Observable<boolean>;
  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
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
    this.cartService.addCart(product);
  }
  removeFromCart(productId: String) {
    this.cartService.removeItems(productId);
  }

  /**
   * Quita un producto especifico del carrito.
   */
  remove(productId: String) {
    this.cartService.removeFromCartbyProduct(productId);
  }

  /**
   * Precio total de todos los productos.
   */
  total(): number {
    let total: number = 0;

    this.products$.subscribe((products) => {
      products.forEach((product) => {
        total = total + product.price;
      });
    });

    return total;
  }

  duplicatedProducts(producto: Product): number {
    let count: number = 0;
    // for (let i = 0; i < product.lenght; i++) {
    //   if(product.id === product[i].id){
    //     count++;
    //   }
    // }
    this.products$.subscribe((products) => {
      products.forEach((product) => {
        if(product.id === producto.id){
        count++;
          }
      });
    });
    return count;
    }


}
