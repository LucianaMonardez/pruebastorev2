import { ProductModule } from './../../../../../product/product.module';
import { GroupProductsPipe } from './../../../../../shared/pipes/group-products.pipe';
import { Product } from './../../../../../product.model';
import { ProductsService } from './../../../../../core/services/products/products.service';
import { CartService } from './../../../../../core/services/cart.service';
import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() product: groupProducts  | undefined;
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  addProduct(): void {
    if (this.product) {
      this.cartService.addCart(this.product);
    } else {
      console.warn('UNEXPECTED PRODUCT');
    }
  }

  removeProduct(): void {
    if (this.product) {
      this.cartService.removeCart(this.product.id);
    } else {
      console.warn('UNEXPECTED PRODUCT');
    }
  }

  deleteProduct(): void {
    if (this.product) {
      this.cartService.deleteProductCart(this.product.id);
    } else {
      console.warn('UNEXPECTED PRODUCT');
    }
  }

}
