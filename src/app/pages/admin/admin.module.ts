import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavVerticalComponent,
    WelcomeComponent,
    CuestionarioComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
})
export class AdminModule {}
