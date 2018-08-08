import { TestBed, inject } from '@angular/core/testing';

import { ApiHitService } from './api-hit.service';

describe('ApiHitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHitService]
    });
  });

  it('should be created', inject([ApiHitService], (service: ApiHitService) => {
    expect(service).toBeTruthy();
  }));
});
