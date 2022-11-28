import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user: any;
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.user = this.usuarioService.getUser();
  }
}
