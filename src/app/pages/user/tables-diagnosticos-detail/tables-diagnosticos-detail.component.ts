import { Component, Input, OnInit } from '@angular/core';
import { DiagnosticoRolIngenierosService } from 'src/app/services/diagnostico-rol-ingenieros.service';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';
import { RespuestaSeccionService } from 'src/app/services/respuesta-seccion.service';
import { ResponseRoles } from './response.interface';


@Component({
  selector: 'app-tables-diagnosticos-detail',
  templateUrl: './tables-diagnosticos-detail.component.html',
  styleUrls: ['./tables-diagnosticos-detail.component.css'],
})
export class TablesDiagnosticosDetailComponent implements OnInit {
  @Input() diagnosticoId: any;
  datos: any[] = [];
  datosRol:ResponseRoles[] = [];
  puntajeSecciones: any[] = [];
  isLoading: boolean = false;

  constructor(
    private diagnosticoRolIngenierosService: DiagnosticoRolIngenierosService,
    private diagnosticoService: DiagnosticoService,
    private respuestaSeccionService:RespuestaSeccionService,
  ) {}

  ngOnInit(): void {
    this.diagnosticoRolIngenierosService
      .getAllByDiagnosticoId(this.diagnosticoId)
      .subscribe((data: any) => {
        this.datos = data;
      });
    // this.initPuntajeSecciones()
    this.getRespuestasSeccion();
    this.getDiagnosticoRolIng();
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

  getRespuestasSeccion(){
    this.respuestaSeccionService.getRespuestaSeccion(this.diagnosticoId).subscribe(
      (data:any)=>{
        this.datos = data;
        console.log(data);
      }
    )
  }

  getDiagnosticoRolIng(){
    this.diagnosticoService.getDiagnosticoRol(this.diagnosticoId).subscribe(
       async(diagnostico:any)=>{
        console.log('ruta',diagnostico);
        await this.diagnosticoRolIngenierosService.getAllByDiagnosticoId(diagnostico.id_diagnostico).subscribe(
          async(data:ResponseRoles[])=>{
            console.log(this.diagnosticoId);
            this.datosRol = data;
            await this.datosRol;
            console.log('roles',this.datosRol);
          }
        )
      }
    )
    
  }
}
