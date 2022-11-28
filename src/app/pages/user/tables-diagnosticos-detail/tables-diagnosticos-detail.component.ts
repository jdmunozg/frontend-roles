import { Component, Input, OnInit } from '@angular/core';
import { DiagnosticoRolIngenierosService } from 'src/app/services/diagnostico-rol-ingenieros.service';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-tables-diagnosticos-detail',
  templateUrl: './tables-diagnosticos-detail.component.html',
  styleUrls: ['./tables-diagnosticos-detail.component.css'],
})
export class TablesDiagnosticosDetailComponent implements OnInit {
  @Input() diagnosticoId: any;
  datos: any[] = [];
  puntajeSecciones: any[] = [];
  isLoading: boolean = false;
  constructor(
    private diagnosticoRolIngenierosService: DiagnosticoRolIngenierosService,
    private diagnosticoService: DiagnosticoService
  ) {}

  ngOnInit(): void {
    this.diagnosticoRolIngenierosService
      .getAllByDiagnosticoId(this.diagnosticoId)
      .subscribe((data: any) => {
        this.datos = data;
      });
    this.initPuntajeSecciones()
  }

  initPuntajeSecciones() {
    this.diagnosticoService
      .getById(this.diagnosticoId)
      .subscribe(
        (diagnostico: { id_diagnostico; fk_respuesta_cuestionario }) => {
          this.isLoading = true;
          this.diagnosticoService
            .getPuntajeSecciones(
              diagnostico.fk_respuesta_cuestionario,
              diagnostico.id_diagnostico
            )
            .subscribe((datos: any[]) => {
              this.puntajeSecciones = datos;
            });
          this.isLoading = false;
        }
      );
  }
}
