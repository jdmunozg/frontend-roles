import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CuestionarioService {
  urlApi = environment.urlback;
  constructor(private http: HttpClient) {}

  getAllCuestionario() {
    return this.http.get(`${this.urlApi}cuestionario`);
  }
}
