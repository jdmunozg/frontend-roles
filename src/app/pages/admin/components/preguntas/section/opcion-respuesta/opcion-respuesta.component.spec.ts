import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionRespuestaComponent } from './opcion-respuesta.component';

describe('OpcionRespuestaComponent', () => {
  let component: OpcionRespuestaComponent;
  let fixture: ComponentFixture<OpcionRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionRespuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
