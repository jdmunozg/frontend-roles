import { Component, Input, OnInit } from '@angular/core';
import { DiagnosticoRolIngenierosService } from 'src/app/services/diagnostico-rol-ingenieros.service';
import { RespuestasCuestionariosService } from 'src/app/services/respuestas-cuestionarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tables-diagnosticos-detail',
  templateUrl: './tables-diagnosticos-detail.component.html',
  styleUrls: ['./tables-diagnosticos-detail.component.css'],
})
export class TablesDiagnosticosDetailComponent implements OnInit {
  @Input() diagnosticoId: any;
  datos: any[] = [];
  constructor(
    private diagnosticoRolIngenierosService: DiagnosticoRolIngenierosService
  ) {}

  ngOnInit(): void {
    this.diagnosticoRolIngenierosService.getAllByDiagnosticoId(this.diagnosticoId).subscribe((data: any) => {
      this.datos = data;
      console.log('DATOS:', this.datos);
    });
  }
}
