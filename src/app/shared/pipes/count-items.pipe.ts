import { Product } from 'src/app/product.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'countItems'
})
export class CountItemsPipe implements PipeTransform {

  transform(value: number, product: Product, products: Product[]): number {
    // return this.duplicatedProducts(product, products)
    return null;
  }

  // duplicatedProducts(product: Product, products: Product []): number {
  //   let count: number = 0;
  //   for (let i = 0; i < products.length; i++) {
  //     if(product.id === products[i].id){
  //       count++;
  //     }
  //   }
  //   return count;
  //   }

}
