import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsforyouComponent } from './itemsforyou.component';

describe('ItemsforyouComponent', () => {
  let component: ItemsforyouComponent;
  let fixture: ComponentFixture<ItemsforyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsforyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
