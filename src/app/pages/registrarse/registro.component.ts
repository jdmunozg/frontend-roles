import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user = {
    nombre : '',
    apellido : '',
    correo : '',
    clave : '',
    fk_rol_usuario:1,
    fk_semestre:1,
    activo:true
  }
  public semestres = [
    {semestre:1},
    {semestre:2},
    {semestre:3},
    {semestre:4},
    {semestre:5},
    {semestre:6},
    {semestre:7},
    {semestre:8},
  ]
  constructor(private usuarioService:UsuarioService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    console.log('hola')
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.correo == '' || this.user.correo == null){
      this.snack.open('El correo del usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.usuarioService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
        // this.navigate.router['login'];
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          duration : 3000
        });
      }
    )
  }
}
