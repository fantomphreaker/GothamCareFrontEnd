import { TestBed } from '@angular/core/testing';

import { EditdeleteoutletserviceService } from './editdeleteoutletservice.service';

describe('EditdeleteoutletserviceService', () => {
  let service: EditdeleteoutletserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditdeleteoutletserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
