import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { CuestionarioServiceService } from '../../../../services/cuestionario-service.service';

@Component({
  selector: 'app-opcion-respuesta',
  templateUrl: './opcion-respuesta.component.html',
  styleUrls: ['./opcion-respuesta.component.css'],
  providers: [MessageService],
})
export class OpcionRespuestaComponent implements OnInit {
  @Input() informacion: any;
  group: FormGroup;
  msgs: Message[];
  constructor(
    private _servicesCuestionario: CuestionarioServiceService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.group = this.formBuilder.group({
      id_opcion_respuesta: this.informacion.id_opcion_respuesta,
      porcentaje_exactitud: this.informacion.porcentaje_exactitud,
      opcion_respuesta: this.informacion.opcion_respuesta,
      fk_pregunta: this.informacion.fk_pregunta,
    });
  }

  onSumit(value) {
    console.log(value);
    this._servicesCuestionario.pathResouesta(value).subscribe((r) => {
      console.log(r);
    });
  }

  showViaService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
}
