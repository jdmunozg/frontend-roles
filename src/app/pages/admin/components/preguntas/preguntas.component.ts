import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { CuestionarioServiceService } from '../../services/cuestionario-service.service';

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
  constructor(
    private cuestionarioService: CuestionarioService,
    private _servicesCuestionario: CuestionarioServiceService
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
}
