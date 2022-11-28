import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuestionarioServiceService } from '../../services/cuestionario-service.service';

@Component({
  selector: 'app-crear-cuestionario',
  templateUrl: './crear-cuestionario.component.html',
  styleUrls: ['./crear-cuestionario.component.css'],
})
export class CrearCuestionarioComponent implements OnInit {
  group: FormGroup;
  groups: FormGroup;
  groupp: FormGroup;
  groupr: FormGroup;
  botonOne: boolean = true;
  botonTwo: boolean = true;
  botonTree: boolean = true;
  botonFor: boolean = true;
  cuestionarioInfo: any;
  seccionNueva: boolean = false;
  cities: any;
  selectedCity: string;
  seccionCuestionarioInfo: any;
  seccionPregunas: boolean = false;
  seccionRespuesta: boolean = false;
  infoPregunta: any;
  nuevaPre: boolean = false;
  nuevaSeccion: boolean = false;
  constructor(
    private _servicesCuestionario: CuestionarioServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cities = [];
    this._servicesCuestionario.getHabilidades().subscribe((res) => {
      this.cities = res;
    });
    this.group = this.formBuilder.group({
      fk_semestre: [null, Validators.required],
      estandar_puntuacion: [null, Validators.required],
      nombre: ['', Validators.required],
    });

    this.groups = this.formBuilder.group({
      fk_habilidad: [null, Validators.required],
      estandar_puntuacion: [null, Validators.required],
      seccion: ['', Validators.required],
    });
    this.groupp = this.formBuilder.group({
      fk_habilidad: null,
      fk_seccion_cuestionario: null,
      puntos: [null, Validators.required],
      enunciado: ['', Validators.required],
      activo: true,
    });

    this.groupr = this.formBuilder.group({
      fk_pregunta: null,
      porcentaje_exactitud: [null, Validators.required],
      opcion_respuesta: ['', Validators.required],
    });
  }

  onSumit(value) {
    console.log(value);
    if (this.group.valid) {
      this.botonOne = false;
      this._servicesCuestionario.postCuestionarios(value).subscribe((r) => {
        this.cuestionarioInfo = r;
        console.log(r);
      });
      this.seccionNueva = true;
    } else {
      console.log('invalido');
    }
  }

  onSumits(value) {
    this.groupp = this.formBuilder.group({
      fk_habilidad: null,
      fk_seccion_cuestionario: null,
      puntos: [null, Validators.required],
      enunciado: ['', Validators.required],
      activo: true,
    });
    if (this.groups.valid) {
      this.botonTwo = false;
      this.nuevaPre = false;
      this._servicesCuestionario.postSeccion_cues(value).subscribe((r) => {
        console.log(r);
        this.seccionCuestionarioInfo = r;
      });
      setTimeout(() => {
        this._servicesCuestionario
          .postSeccionCuestionarioCues({
            fk_cuestionario: this.cuestionarioInfo.id_cuestionario,
            fk_seccion_cuestionario:
              this.seccionCuestionarioInfo.id_seccion_cuestionario,
          })
          .subscribe((r) => {
            console.log(r);
          });
      }, 1000);
      this.seccionPregunas = true;
    } else {
      console.log('invalido');
    }
  }

  onSumitP(value) {
    this.groupr = this.formBuilder.group({
      fk_pregunta: null,
      porcentaje_exactitud: [null, Validators.required],
      opcion_respuesta: ['', Validators.required],
    });
    this.botonTree = false;
    this.groupp.controls['fk_habilidad'].setValue(
      this.seccionCuestionarioInfo.fk_habilidad
    );
    this.groupp.controls['fk_seccion_cuestionario'].setValue(
      this.seccionCuestionarioInfo.id_seccion_cuestionario
    );
    console.log(this.groupp.value);
    if (this.groupp.valid) {
      this._servicesCuestionario
        .postPregunta(this.groupp.value)
        .subscribe((r) => {
          console.log(r);
          this.infoPregunta = r;
        });
      this.seccionRespuesta = true;
    } else {
      console.log('invalido');
    }
  }

  onSumitR(value) {
    this.groupr.controls['fk_pregunta'].setValue(this.infoPregunta.id_pregunta);
    console.log(this.groupr.value);
    if (this.groupr.valid) {
      this._servicesCuestionario
        .postOpcionRespuesta(this.groupr.value)
        .subscribe((r) => {
          console.log(r);
        });
    } else {
      console.log('invalido');
    }
  }

  cerrarSeccionRespuesta() {
    this.botonTree = true;
    this.nuevaPre = true;
    this.seccionRespuesta = false;
  }

  cerrarSeccionSeccionCuestionario() {
    this.seccionNueva = false;
    window.location.reload();
  }

  cerrarSeccionpregunta() {
    this.botonTwo = true;
    this.nuevaSeccion = true;
    this.seccionPregunas = false;
  }

  limpiar(value) {
    if (value == 'resp') {
      this.groupr = this.formBuilder.group({
        fk_pregunta: null,
        porcentaje_exactitud: [null, Validators.required],
        opcion_respuesta: ['', Validators.required],
      });
    }
    if (value == 'pre') {
      this.groupp = this.formBuilder.group({
        fk_habilidad: null,
        fk_seccion_cuestionario: null,
        puntos: [null, Validators.required],
        enunciado: ['', Validators.required],
        activo: true,
      });
    }
    if (value == 'sec') {
      this.groups = this.formBuilder.group({
        fk_habilidad: [null, Validators.required],
        estandar_puntuacion: [null, Validators.required],
        seccion: ['', Validators.required],
      });
    }
  }
}
