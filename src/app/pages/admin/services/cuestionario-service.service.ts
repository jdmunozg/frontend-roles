import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../../../services/helper';

@Injectable({
  providedIn: 'root',
})
export class CuestionarioServiceService {
  constructor(private http: HttpClient) {}

  postCuestinario(bodyRequest: any) {
    return this.http.patch(
      `${baserUrl}/cuestionario/${bodyRequest.id_cuestionario}`,
      bodyRequest
    );
  }

  getSeccionWithQuestions(id) {
    return this.http.get(`${baserUrl}/cuestionario/all/${id}`);
  }

  getHabilidades() {
    return this.http.get(`${baserUrl}/habilidad`);
  }

  pathSeccion(badyRequest) {
    return this.http.patch(
      `${baserUrl}/seccion-cuestionario/${badyRequest.id_seccion_cuestionario}`,
      badyRequest
    );
  }
  getpreguntasHabildiad(id) {
    return this.http.get(`${baserUrl}/pregunta/bySeccionId/${id}`);
  }
}