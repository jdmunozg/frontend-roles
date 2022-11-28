import { Component, Input, OnInit } from '@angular/core';
import { RespuestasCuestionariosService } from 'src/app/services/respuestas-cuestionarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-preguntas-cuestionario',
  templateUrl: './preguntas-cuestionario.component.html',
  styleUrls: ['./preguntas-cuestionario.component.css'],
})
export class PreguntasCuestionarioComponent implements OnInit {

  @Input() cuestionario: any[];
  @Input() params:any;
  respuestas:any[]=[];
  idRespuestaCuestionario:any;
  respuestas_cuestionario:any[]=[];

  constructor(private respuestasCuestionariosService:RespuestasCuestionariosService,
              private usuarioService:UsuarioService
    ) {
  }

  ngOnInit(): void {
    let respuesta_cuestionario = {
      "fk_cuestionario":this.params,
      "fk_usuario":this.usuarioService.getUser().id_usuario,
    }
    this.respuestasCuestionariosService.respuestaCuestionario(respuesta_cuestionario).subscribe( (data:any) =>
    {
      this.idRespuestaCuestionario = data.id_respuesta_cuestionario;
      console.log(this.idRespuestaCuestionario);
    }
    )
  }
  insertarSeccion(seccion, opcion_respuesta){

  if(this.existeSeccion(seccion)===false){
    this.respuestas.push({seccion:{
      "fk_seccion_cuestionario":seccion,
      "fk_respuesta_cuestionario":this.idRespuestaCuestionario},
    })
    this.respuestas_cuestionario.push({ "fk_respuesta_seccion_cuestionario": null,
    "fk_opcion_respuesta":opcion_respuesta})
  }else{
    
    this.respuestas_cuestionario.push({ "fk_respuesta_seccion_cuestionario": null,
    "fk_opcion_respuesta":opcion_respuesta})
  }
  console.log(this.respuestas);
  console.log(this.respuestas_cuestionario);
  }

  existeSeccion(seccion){
    for (const x of this.respuestas) {
      if(x.seccion.fk_seccion_cuestionario===seccion){
        return true
      }
    }
    return false;
  }
  
  
  
}
