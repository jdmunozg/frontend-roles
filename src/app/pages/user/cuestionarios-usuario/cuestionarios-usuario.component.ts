import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';

@Component({
  selector: 'app-cuestionarios-usuario',
  templateUrl: './cuestionarios-usuario.component.html',
  styleUrls: ['./cuestionarios-usuario.component.css'],
})
export class CuestionariosUsuarioComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  params: any;
  estado: boolean = true;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (data) => {
      //console.log(data);
      this.params = data['param'];
      await this.params;
      //console.log(this.params);
    });
    try {
      let numero = Number(this.params);
      if (isNaN(numero)) {
        //console.log(true);
        this.estado = false;
      }
    } catch (error) {
      console.log(error);
    }
    //console.log(this.estado);
  }
}
