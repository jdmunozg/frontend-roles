import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    "correo" : '',
    "clave" : '',
  }
  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.loginData.correo.trim() == '' || this.loginData.correo.trim() == null){
      this.snack.open('El correo del usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.clave.trim() == '' || this.loginData.clave.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }
  }
}
