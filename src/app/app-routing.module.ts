import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionariosUsuarioComponent } from './pages/user/cuestionarios-usuario/cuestionarios-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registrarse/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AdminModule } from './pages/admin/admin.module';
import { PreguntasCuestionarioComponent } from './pages/user/preguntas-cuestionario/preguntas-cuestionario.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'cuestionario',
    component: CuestionariosUsuarioComponent,
    pathMatch: 'full',
  },
  {
    path: 'cuestionario/:tables',
    component: CuestionariosUsuarioComponent,
    pathMatch: 'full',
  },
  {
    path: 'cuestionario/:tables/:cuestionarioId',
    component: CuestionariosUsuarioComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'usuario/perfil',
    component: PerfilComponent,
    pathMatch: 'full',
  },
  {
    path: 'cuestionario/:preguntas/:cuestionarioId',
    component: PreguntasCuestionarioComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
