import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  constructor(private http:HttpClient) { }

  public listarCategorias(){
    return this.http.get(`${baserUrl}/cuestionario`);
  }

}
