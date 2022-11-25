import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  params: any;
  constructor(
    private respuestasCuestionariosService: RespuestasCuestionariosService,
    private usuarioService: UsuarioService, private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUser();
    this.respuestasCuestionariosService.getAll().subscribe((data: any) => {
      this.datos = data;
      console.log('DATOS:', this.datos);
    });
    this.activatedRoute.params.subscribe(async (data) => {
      this.params = await data['cuestionarioId'];
    });
  }
}
