import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      //this.product = this.productsService.getProduct(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product =>{
      this.product= product;
    });
  }

  createProduct(){
    const newProduct: Product={
    id:'19',
    title:'Nuevo',
    image: 'assets/images/mug.jpg',
    price: 4000,
    description: 'Nuevo producto',
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product =>{
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product>={
      price: 5555,
      description: 'Editado',
      };
      this.productsService.updateProduct('2', updateProduct)
      .subscribe(product =>{
        console.log(product);
      });
  }

  deleteProduct(){
    this.productsService.deleteProduct('undefined')
      .subscribe(rta =>{
        console.log(rta);
      });
  }

}
