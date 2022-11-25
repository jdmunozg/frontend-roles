import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCuestionariosComponent } from './tables-cuestionarios.component';

describe('TablesCuestionariosComponent', () => {
  let component: TablesCuestionariosComponent;
  let fixture: ComponentFixture<TablesCuestionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesCuestionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesCuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
