import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    correo: '',
    clave: '',
    fk_rol_usuario: 1,
  };
  constructor(
    private snack: MatSnackBar,
    private usuarioService: UsuarioService,
    private rolService: RolService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  formSubmit() {
    if (
      this.loginData.correo.trim() == '' ||
      this.loginData.correo.trim() == null
    ) {
      this.snack.open('El correo del usuario es requerido !!', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.clave.trim() == '' ||
      this.loginData.clave.trim() == null
    ) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000,
      });
      return;
    }
    this.usuarioService
      .autenticacionUsuario(this.loginData.correo, this.loginData.clave)
      .subscribe((data: any)=> {
        console.log(data);
        if (data['estado'] == true) {
          if (data.usuario.activo == true) {
            localStorage.setItem('usuario', JSON.stringify(data.usuario));
            this.rolService
              .getRolById(data.usuario.fk_rol_usuario)
              .subscribe(async (data: any) => {
                if (data.rol != 'Admin') {
                  await this.router.navigate(['cuestionario']);
                } else {
                  await this.router.navigate(['admin']);
                }
                 window.location.reload();
              });
          }
        }
      });
  }
}
