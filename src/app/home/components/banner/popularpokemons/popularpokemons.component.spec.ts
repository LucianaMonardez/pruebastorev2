import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpokemonsComponent } from './popularpokemons.component';

describe('PopularpokemonsComponent', () => {
  let component: PopularpokemonsComponent;
  let fixture: ComponentFixture<PopularpokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularpokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularpokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
