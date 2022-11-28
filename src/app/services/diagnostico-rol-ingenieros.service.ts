import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticoRolIngenierosService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(`${baserUrl}/diagnostico-rol-ingeniero`);
  }

  public getAllByDiagnosticoId(id: number) {
    return this.http.get(
      `${baserUrl}/diagnostico-rol-ingeniero/diagnostico/${id}`
    );
  }


}
