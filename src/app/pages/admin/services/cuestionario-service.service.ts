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

  pathPreguntas(bodyRequest) {
    return this.http.patch(
      `${baserUrl}/pregunta/${bodyRequest.id_pregunta}`,
      bodyRequest
    );
  }

  getOpcionRespues(id) {
    return this.http.get(`${baserUrl}/opcion-respuesta/byPreguntaId/${id}`);
  }

  pathResouesta(bodyRequest) {
    return this.http.patch(
      `${baserUrl}/opcion-respuesta/${bodyRequest.id_opcion_respuesta}`,
      bodyRequest
    );
  }

  postCuestionarios(body) {
    return this.http.post(`${baserUrl}/cuestionario`, body);
  }

  postSeccion_cues(body) {
    return this.http.post(`${baserUrl}/seccion-cuestionario`, body);
  }

  postSeccionCuestionarioCues(body) {
    return this.http.post(
      `${baserUrl}/cuestionario-seccion-cuestionario`,
      body
    );
  }

  postPregunta(body) {
    return this.http.post(`${baserUrl}/pregunta`, body);
  }

  postOpcionRespuesta(body) {
    return this.http.post(`${baserUrl}/opcion-respuesta`, body);
  }
}
