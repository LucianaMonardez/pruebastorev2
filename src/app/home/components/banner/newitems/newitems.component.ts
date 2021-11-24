import { CartService } from './../../../../core/services/cart.service';
import { Product } from 'src/app/product.model';
import { Component, OnInit, Input,
  Output,
  EventEmitter, } from '@angular/core';
@Component({
  selector: 'app-newitems',
  templateUrl: './newitems.component.html',
  styleUrls: ['./newitems.component.scss']
})
export class NewitemsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
