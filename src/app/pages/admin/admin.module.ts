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
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeccionCuestionarioComponent } from './components/cuestionario/section/seccion-cuestionario/seccion-cuestionario.component';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AdminComponent,
    NavVerticalComponent,
    WelcomeComponent,
    CuestionarioComponent,
    SeccionCuestionarioComponent,
    PerfilComponent,
    PreguntasComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
  ],
})
export class AdminModule {}
