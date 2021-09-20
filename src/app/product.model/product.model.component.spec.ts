import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.ModelComponent } from './product.model.component';

describe('Product.ModelComponent', () => {
  let component: Product.ModelComponent;
  let fixture: ComponentFixture<Product.ModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product.ModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product.ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
