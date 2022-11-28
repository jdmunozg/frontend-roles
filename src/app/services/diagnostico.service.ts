import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticoService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(`${baserUrl}/diagnostico`);
  }

  public getById(id: number) {
    return this.http.get(`${baserUrl}/diagnostico/byId/${id}`);
  }

  public getPuntajeSecciones(
    id_respuesta_cuestioanrio: number,
    id_diagnostico: number
  ) {
    return this.http.get(
      `${baserUrl}/diagnostico/puntaje-secciones/${id_respuesta_cuestioanrio}/${id_diagnostico}`
    );
  }
}
