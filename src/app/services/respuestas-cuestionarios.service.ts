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
}
