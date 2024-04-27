import { TestBed } from '@angular/core/testing';

import { PatientServiveService } from './patient-servive.service';

describe('PatientServiveService', () => {
  let service: PatientServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
