import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionariosUsuarioComponent } from './cuestionarios-usuario.component';

describe('CuestionariosUsuarioComponent', () => {
  let component: CuestionariosUsuarioComponent;
  let fixture: ComponentFixture<CuestionariosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionariosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionariosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
