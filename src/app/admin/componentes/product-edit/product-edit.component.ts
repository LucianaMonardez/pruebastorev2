import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private FormBuilder: FormBuilder,
    private ProductsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this.id= params.id;
      this.ProductsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
      });
    }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.ProductsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm(){
    this.form = this.FormBuilder.group({
      title: ['',[Validators.required]],
      price: [0,[Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['',[Validators.required]]
    })
  }

}
