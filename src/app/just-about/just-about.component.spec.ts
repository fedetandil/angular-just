import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAboutComponent } from './just-about.component';

describe('JustAboutComponent', () => {
  let component: JustAboutComponent;
  let fixture: ComponentFixture<JustAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
