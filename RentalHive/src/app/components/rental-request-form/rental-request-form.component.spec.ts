import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalRequestFormComponent } from './rental-request-form.component';

describe('RentalRequestFormComponent', () => {
  let component: RentalRequestFormComponent;
  let fixture: ComponentFixture<RentalRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalRequestFormComponent]
    });
    fixture = TestBed.createComponent(RentalRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
