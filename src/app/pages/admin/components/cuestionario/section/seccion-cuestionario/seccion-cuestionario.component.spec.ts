import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCuestionarioComponent } from './seccion-cuestionario.component';

describe('SeccionCuestionarioComponent', () => {
  let component: SeccionCuestionarioComponent;
  let fixture: ComponentFixture<SeccionCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
