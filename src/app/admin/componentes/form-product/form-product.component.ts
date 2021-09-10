import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private FormBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.FormBuilder.group({
      id: ['',[Validators.required]],
      tittle: ['',[Validators.required]],
      price: [0,[Validators.required]],
      image: '',
      description: ['',[Validators.required]]
    })
  }

}
