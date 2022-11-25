import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './pages/registrarse/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { CuestionariosUsuarioComponent } from './pages/user/cuestionarios-usuario/cuestionarios-usuario.component';
import { SidebarComponent } from './pages/user/sidebar/sidebar.component';
import { TablesCuestionariosComponent } from './pages/user/tables-cuestionarios/tables-cuestionarios.component'
import {TableModule} from 'primeng/table';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PreguntasCuestionarioComponent } from './pages/user/preguntas-cuestionario/preguntas-cuestionario.component';
// import { NgxUiLoaderModule , NgxUiLoaderHttpModule } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    LoginComponent,
    CuestionariosUsuarioComponent,
    SidebarComponent,
    TablesCuestionariosComponent,
    PerfilComponent,
    PreguntasCuestionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TableModule
    // NgxUiLoaderModule,
    // NgxUiLoaderHttpModule.forRoot({
    //   showForeground:true
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
