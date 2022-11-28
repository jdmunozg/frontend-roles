import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class RespuestasCuestionariosService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(`${baserUrl}/respuesta-cuestionario`);
  }

  public getAllByUsuarioId(id: number) {
    return this.http.get(`${baserUrl}/respuesta-cuestionario/usuario/${id}`);
  }

  public respuestaCuestionario(respuestas:any){
    return this.http.post(`${baserUrl}/respuesta-cuestionario`,respuestas)
  }

  public respuestaSeccionCuestionario(seccion:any){
    return this.http.post(`${baserUrl}/respuesta-seccion-cuestionario`,seccion)
  }
}
