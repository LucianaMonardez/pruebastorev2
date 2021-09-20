import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.scss']
})
export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

export interface GroupedProduct extends Product {
  count: number;
}
