import { Component, Input, OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-tables-cuestionarios',
  templateUrl: './tables-cuestionarios.component.html',
  styleUrls: ['./tables-cuestionarios.component.css'],
})
export class TablesCuestionariosComponent implements OnInit {
  @Input() parametro: any;
  datos: any;
  constructor(private cuestionarioService: CuestionarioService) {}

  ngOnInit(): void {
    if (this.parametro == 'tables-cuestionarios') {
      this.cuestionarioService.listarCategorias().subscribe((data: any) => {
        //console.log(data);
        this.datos = data;
      });
    }
    //console.log(this.parametro);
  }
}
