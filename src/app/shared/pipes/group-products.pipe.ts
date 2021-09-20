import { Product } from './../../product.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

  groupedProducts: any [] = [];

  transform(value: Product[]): any {
    value.forEach(product =>{
      if(this.groupedProducts.length==0){
        this.groupedProducts.push(Object.assign(product, {quanty: 1}))
      }
      else{
        let repeatedProduct = this.groupedProducts.findIndex(p => p.id = product.id);
        if(repeatedProduct == -1){
          this.groupedProducts.push(Object.assign(product, {quanty: 1}))
        }
        else{
          this.groupedProducts[repeatedProduct].quantity++;
          this.groupedProducts[repeatedProduct].amount =
            this.groupedProducts[repeatedProduct].quantity *
            this.groupedProducts[repeatedProduct].price;
        }
      }
    })
    return this.groupedProducts;
  }

}
