import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  public respuesta_cuestionario = {
    fk_cuestionario: '',
    fk_usuario:''
  }
  public guardar_respuesta = {
    respuesta_pregunta: '',
    
  } 
  constructor(private http:HttpClient) { }

  public listarPreguntas(id:any){
    return this.http.get(`${baserUrl}/cuestionario/all/${id}`);
  }
  public guardarRespuestaCuestionario(respuesta_cuestionario:any){
    return this.http.post(`${baserUrl}/respuesta_cuertionario/`, respuesta_cuestionario)
  }
}
