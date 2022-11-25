import { Component, Input, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-preguntas-cuestionario',
  templateUrl: './preguntas-cuestionario.component.html',
  styleUrls: ['./preguntas-cuestionario.component.css'],
})
export class PreguntasCuestionarioComponent implements OnInit {
  @Input() parametro: any;
  constructor(private preguntaService: PreguntasService) {}

  ngOnInit(): void {
    this.preguntaService.listarPreguntas(this.parametro).subscribe((res) => {
      console.log(res);
    });
  }
}
