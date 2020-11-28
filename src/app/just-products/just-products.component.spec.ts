import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustProductsComponent } from './just-products.component';

describe('JustProductsComponent', () => {
  let component: JustProductsComponent;
  let fixture: ComponentFixture<JustProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
