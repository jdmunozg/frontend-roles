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
  // public user_sesion = {
  //   correo:'',
  //   clave: ''
  // }

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {}

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baserUrl}/usuario`,user);
  }
  public autenticacionUsuario(correo:String,clave:String){
    return this.httpClient.get(`${baserUrl}/usuario/validar/${correo}/${clave}`);
  }

  public getUser(){
    let userStr = localStorage.getItem('usuario');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      // this.logout();
      return null;
    }
  }
}
