import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  
  constructor(private httpClient: HttpClient) { }
  public getRolById(id:any){
    return this.httpClient.get(`${baserUrl}/rol/byId/${id}`);
  }
}
