import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-cuestionario',
  templateUrl: './preguntas-cuestionario.component.html',
  styleUrls: ['./preguntas-cuestionario.component.css'],
})
export class PreguntasCuestionarioComponent implements OnInit {
  @Input() cuestionario: any[];
  constructor() {
  }

  ngOnInit(): void {
  }
}
