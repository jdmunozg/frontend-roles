import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { CuestionarioServiceService } from '../../services/cuestionario-service.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
})
export class CuestionarioComponent implements OnInit {
  cols: any;
  products: any;
  loading: boolean = true;
  display: boolean = false;
  information: any;
  group: FormGroup;
  groups: FormGroup;
  continuar: boolean = true;
  seccion: any;
  constructor(
    private cuestionarioService: CuestionarioService,
    private formBuilder: FormBuilder,
    private _servicesCuestionario: CuestionarioServiceService
  ) {}

  ngOnInit(): void {
    this.cuestionarioService.listarCategorias().subscribe((resp) => {
      this.products = resp;
      this.loading = false;
    });
    this.cols = [
      { field: 'id_cuestionario', header: 'Codigo' },
      { field: 'nombre', header: '  Nombre' },
      { field: 'fk_semestre', header: 'Semestre' },
      { field: 'estandar_puntuacion', header: 'Puntuacion' },
    ];
  }

  showDialog(value: any) {
    console.log(value);
    this.continuar = true;
    this.information = value;
    this.group = this.formBuilder.group({
      id_cuestionario: value.id_cuestionario,
      fk_semestre: value.fk_semestre,
      estandar_puntuacion: value.estandar_puntuacion,
      nombre: value.nombre,
    });
    this._servicesCuestionario
      .getSeccionWithQuestions(value.id_cuestionario)
      .subscribe((resp) => {
        console.log(resp);
        this.seccion = resp;
      });
    setTimeout(() => {
      console.log(this.seccion);
      this.display = true;
    }, 3000);
  }

  onSumit(value: any) {
    this._servicesCuestionario.postCuestinario(value).subscribe((resp) => {
      console.log(resp);
    });
    this.continuar = false;
  }
}
