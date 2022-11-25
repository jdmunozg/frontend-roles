import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';

@Component({
  selector: 'app-cuestionarios-usuario',
  templateUrl: './cuestionarios-usuario.component.html',
  styleUrls: ['./cuestionarios-usuario.component.css']
})
export class CuestionariosUsuarioComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  params:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      async data=>{
        this.params = data['tables'];
        await this.params;
        console.log(this.params);
      }
    )

  }

}
