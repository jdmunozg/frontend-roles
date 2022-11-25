import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class RolIngenieroService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(`${baserUrl}/rol-ingeniero`);
  }

  public getById(id: number) {
    return this.http.get(`${baserUrl}/rol-ingeniero/byId/${id}`);
  }
}
