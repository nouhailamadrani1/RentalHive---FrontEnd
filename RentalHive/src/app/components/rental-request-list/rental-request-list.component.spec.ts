import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalRequestListComponent } from './rental-request-list.component';

describe('RentalRequestListComponent', () => {
  let component: RentalRequestListComponent;
  let fixture: ComponentFixture<RentalRequestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalRequestListComponent]
    });
    fixture = TestBed.createComponent(RentalRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
