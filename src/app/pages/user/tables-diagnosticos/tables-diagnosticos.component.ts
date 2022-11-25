import { Component, Input, OnInit } from '@angular/core';
import { RespuestasCuestionariosService } from 'src/app/services/respuestas-cuestionarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tables-diagnosticos',
  templateUrl: './tables-diagnosticos.component.html',
  styleUrls: ['./tables-diagnosticos.component.css'],
})
export class TablesDiagnosticosComponent implements OnInit {
  datos: any;
  usuario: any;
  constructor(
    private respuestasCuestionariosService: RespuestasCuestionariosService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUser();
    this.respuestasCuestionariosService.getAll().subscribe((data: any) => {
      this.datos = data;
      console.log('DATOS:', this.datos);
    });
  }
}
