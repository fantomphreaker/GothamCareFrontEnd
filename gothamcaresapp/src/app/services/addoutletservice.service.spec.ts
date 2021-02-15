import { TestBed } from '@angular/core/testing';

import { AddoutletserviceService } from './addoutletservice.service';

describe('AddoutletserviceService', () => {
  let service: AddoutletserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddoutletserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
