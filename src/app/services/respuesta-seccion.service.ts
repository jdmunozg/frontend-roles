import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RespuestaSeccionService {

  constructor(private http: HttpClient) {}

  public getRespuestaSeccion(id:number){ 
      return this.http.get(`${baserUrl}/respuesta-seccion-cuestionario/respuesta-cuestionario/${id}`);
  }
}
