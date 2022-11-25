import { Component, Input, OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestasCuestionariosService } from 'src/app/services/respuestas-cuestionarios.service';

@Component({
  selector: 'app-tables-cuestionarios',
  templateUrl: './tables-cuestionarios.component.html',
  styleUrls: ['./tables-cuestionarios.component.css'],
})
export class TablesCuestionariosComponent implements OnInit {
  datos: any;
  constructor(
    private cuestionarioService: CuestionarioService,
    private respuestasCuestionariosService: RespuestasCuestionariosService
  ) {}

  ngOnInit(): void {
    this.cuestionarioService.listarCategorias().subscribe((data: any) => {
      this.datos = data;
    });
  }
}
