import { TestBed } from '@angular/core/testing';

import { DeleteoutletserviceService } from './deleteoutletservice.service';

describe('DeleteoutletserviceService', () => {
  let service: DeleteoutletserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteoutletserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
