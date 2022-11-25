import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionariosUsuarioComponent } from './pages/user/cuestionarios-usuario/cuestionarios-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registrarse/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path : 'registro',
    component : RegistroComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'cuestionario',
    component : CuestionariosUsuarioComponent,
    pathMatch : 'full'
  },
  {
    path : 'cuestionario/:tables',
    component : CuestionariosUsuarioComponent,
    pathMatch : 'full'
  },
  {
    path : 'usuario/perfil',
    component : PerfilComponent,
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
