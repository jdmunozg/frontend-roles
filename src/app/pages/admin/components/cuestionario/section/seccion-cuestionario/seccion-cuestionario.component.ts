import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CuestionarioServiceService } from '../../../../services/cuestionario-service.service';

@Component({
  selector: 'app-seccion-cuestionario',
  templateUrl: './seccion-cuestionario.component.html',
  styleUrls: ['./seccion-cuestionario.component.css'],
})
export class SeccionCuestionarioComponent implements OnInit {
  @Input() informacion: any;
  group: FormGroup;
  cities: any;
  selectedCity: string;
  constructor(
    private formBuilder: FormBuilder,
    private _servicesCuestionario: CuestionarioServiceService
  ) {}

  ngOnInit(): void {
    this.cities = [];
    this._servicesCuestionario.getHabilidades().subscribe((res) => {
      this.cities.push({
        id_habilidad: this.informacion.id_habilidad,
        habilidad: this.informacion.habilidad,
        fk_tipo_habilidad: 2,
      });
      for (let i in res) {
        if (res[i].id_habilidad != this.informacion.id_habilidad) {
          this.cities.push(res[i]);
        }
      }
    });
    this.group = this.formBuilder.group({
      id_seccion_cuestionario: this.informacion.id_seccion,
      fk_habilidad: this.informacion.id_habilidad,
      seccion: this.informacion.seccion,
      estandar_puntuacion: this.informacion.puntuacion_seccion,
    });
  }

  onSumit(value) {
    console.log(value);
    this._servicesCuestionario.pathSeccion(value).subscribe((res) => {
      console.log(res);
    });
  }
}
