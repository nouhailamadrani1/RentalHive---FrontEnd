import { TestBed } from '@angular/core/testing';

import { RentalRequestServiceService } from './rental-request-service.service';

describe('RentalRequestServiceService', () => {
  let service: RentalRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
