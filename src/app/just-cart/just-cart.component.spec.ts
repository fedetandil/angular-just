import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustCartComponent } from './just-cart.component';

describe('JustCartComponent', () => {
  let component: JustCartComponent;
  let fixture: ComponentFixture<JustCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
