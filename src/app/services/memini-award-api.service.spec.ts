import { TestBed } from '@angular/core/testing';

import { MeminiAwardApiService } from './memini-award-api.service';

describe('MeminiAwardApiService', () => {
  let service: MeminiAwardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeminiAwardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
