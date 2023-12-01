import { TestBed } from '@angular/core/testing';

import { EstimateServiceService } from './estimate-service.service';

describe('EstimateServiceService', () => {
  let service: EstimateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
