import { TestBed } from '@angular/core/testing';

import { RespuestaSeccionService } from './respuesta-seccion.service';

describe('RespuestaSeccionService', () => {
  let service: RespuestaSeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaSeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
