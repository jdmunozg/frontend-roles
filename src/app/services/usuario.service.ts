import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit{

  public user = {
    nombre : '',
    apellido : '',
    correo : '',
    clave : '',
    fk_rol_usuario : '',
    estado : ''
  }

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {}

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baserUrl}/usuario`,user);
  }
}
