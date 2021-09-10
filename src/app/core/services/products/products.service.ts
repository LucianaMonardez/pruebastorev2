import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Product } from './../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
//get all
  getAllProducts(){
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products/');
  }
//get by id
  getProduct(id: string){
  return this.http.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`);
  }
  //post product
  createProduct(product: Product){
    return this.http.post(`http://platzi-store.herokuapp.com/products/`, product);
  }
  //update product by id
  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`http://platzi-store.herokuapp.com/products/${id}`,changes);
  }
  //delete by id
  deleteProduct(id: string){
    return this.http.delete(`http://platzi-store.herokuapp.com/products/${id}`);
  }
}
