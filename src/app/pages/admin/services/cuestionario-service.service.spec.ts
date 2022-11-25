import { TestBed } from '@angular/core/testing';

import { CuestionarioServiceService } from './cuestionario-service.service';

describe('CuestionarioServiceService', () => {
  let service: CuestionarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuestionarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
