import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user:any = null;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.usuarioService.isLoggedIn();
    this.user = this.usuarioService.getUser();
    this.usuarioService.loginStatusSubjec.asObservable().subscribe(
      data => {
        // this.isLoggedIn = this.usuarioService.isLoggedIn();
        this.user = this.usuarioService.getUser();
        if(this.user){
          this.isLoggedIn = true;
          
        }
      }
    )
  }
  public async logout(){
    await this.usuarioService.logout();
    window.location.reload();
    return;
  }
}
