import { Product } from 'src/app/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();


  constructor() { }

  addCart(product: Product){
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  // deleteProductCart(id: string): void {
  //   this.products = this.products.filter((p) => p.id !== id);
  //   this.cart.next(this.products);
  // }
  removeFromCartbyProduct(productId: String) {
    this.products = this.products.filter(product => product.id !== productId);
    this.cart.next(this.products);
  }

  removeItems(productId: String): void {
    let i: number = this.products.length - 1;
    let productFound: Boolean = false;
    let aux: Product[] = [];

    while (i >= 0) {
      if (!productFound && this.products[i].id === productId) {
        productFound = true;
      } else {
        aux.unshift(this.products[i]);
      }
      i--;
    }

    this.products = aux;
    this.cart.next(aux);
  }



}


