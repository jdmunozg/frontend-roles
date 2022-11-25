import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        redirectTo: 'welcome',
        path: '',
        pathMatch: 'full',
      },
      { path: 'cuestionario', component: CuestionarioComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
