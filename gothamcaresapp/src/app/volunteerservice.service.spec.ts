import { TestBed } from '@angular/core/testing';

import { VolunteerserviceService } from './volunteerservice.service';

describe('VolunteerserviceService', () => {
  let service: VolunteerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
