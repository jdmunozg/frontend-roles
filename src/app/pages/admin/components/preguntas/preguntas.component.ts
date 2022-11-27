import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { CuestionarioServiceService } from '../../services/cuestionario-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  cities: any;

  selectedCity: string;

  citiesT: any;
  cols: any;
  products: any;
  selectedCityT: string;
  valorCategoria: any = null;
  loading: boolean = true;
  group: FormGroup;
  information: any;
  display: boolean = false;
  seccion: any;
  continuar: boolean = true;
  constructor(
    private cuestionarioService: CuestionarioService,
    private _servicesCuestionario: CuestionarioServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cities = [];
    this.citiesT = [];
    this.cuestionarioService.listarCategorias().subscribe((r) => {
      this.cities = r;
    });
    this.cols = [
      { field: 'id_pregunta', header: 'Codigo' },
      { field: 'enunciado', header: '  Enunciado' },
    ];
  }

  selectCuestionario(value) {
    this.valorCategoria = value;
    this._servicesCuestionario.getSeccionWithQuestions(value).subscribe((r) => {
      this.citiesT = r;
    });
    console.log(this.valorCategoria);
  }

  tableRellenar(value) {
    this._servicesCuestionario.getpreguntasHabildiad(value).subscribe((res) => {
      this.products = res;
      this.loading = false;
    });
  }

  showModal(info) {
    this.information = info;
    this.group = this.formBuilder.group({
      id_pregunta: info.id_pregunta,
      fk_habilidad: info.fk_habilidad,
      fk_seccion_cuestionario: info.fk_seccion_cuestionario,
      enunciado: info.enunciado,
      activo: true,
      puntos: info.puntos,
    });
    this._servicesCuestionario
      .getOpcionRespues(info.id_pregunta)
      .subscribe((r) => {
        this.seccion = r;
      });
    this.display = true;
  }

  onSumit(value) {
    console.log(value);
    this._servicesCuestionario.pathPreguntas(value).subscribe((r) => {
      console.log(r);
    });
    this.continuar = false;
  }
}
