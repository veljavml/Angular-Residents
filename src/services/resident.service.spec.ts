import { TestBed } from '@angular/core/testing';

import { ResidentService } from './resident.service';

describe('ResidentService', () => {
  let service: ResidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
