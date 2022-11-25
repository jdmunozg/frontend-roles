import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestasCuestionariosService } from 'src/app/services/respuestas-cuestionarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tables-cuestionarios',
  templateUrl: './tables-cuestionarios.component.html',
  styleUrls: ['./tables-cuestionarios.component.css'],
})
export class TablesCuestionariosComponent implements OnInit {
  datos: any;
  idCuestionario:any;
  params: any;
  cuestionario: any[] = [];
  constructor(
    private cuestionarioService: CuestionarioService,
    private respuestasCuestionariosService: RespuestasCuestionariosService,
    private router:Router,
    private route:ActivatedRoute,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cuestionarioService.listarCategorias().subscribe((data: any) => {
      this.datos = data;
    });
    this.activatedRoute.params.subscribe(async (data) => {
      this.params = await data['cuestionarioId'];
      if(this.params) {
        this.cuestionarioService.mostrarCuestionario(this.params).subscribe((cuestionario: any[]) => {
          this.cuestionario = cuestionario;
          console.log(this.cuestionario)
        })
      }
    });
  }
  empezarExamen(id_cuestionario){
    Swal.fire({
      title:'¿Quieres comenzar el examen?',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Empezar',
      icon:'info'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.router.navigate(['cuestionario/tables-cuestionarios/' + id_cuestionario])
      }
    });
  }
}
