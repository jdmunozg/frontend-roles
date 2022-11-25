import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuestionarioService } from '../../../../services/cuestionario.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
})
export class CuestionarioComponent implements OnInit {
  cols: any[] = [];
  products: any;
  display: boolean = false;
  loading: boolean = true;
  information: any;
  user = {
    id_cuestionario: '',
    fk_semestre: '',
    nombre: '',
    estandar_puntuacion: '',
  };
  constructor(private _manageService: CuestionarioService) {}

  ngOnInit(): void {
    this.products = [];
    this._manageService.getAllCuestionario().subscribe((resp) => {
      this.products = resp;
      this.loading = false;
    });
    this.cols = [
      { field: 'id_cuestionario', header: 'Code' },
      { field: 'fk_semestre', header: 'Semestre' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'estandar_puntuacion', header: 'Puntaje' },
    ];
  }

  showDialog(info: any) {
    this.information = info;

    console.log(this.information);
    this.display = true;
  }

  onSubmit() {
    console.log(this.user);
  }
}
