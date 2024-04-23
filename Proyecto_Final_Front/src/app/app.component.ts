import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { FormsModule } from '@angular/forms';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';

import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { HomeAlumnoComponent } from './components/home-alumno/home-alumno.component';
import { HomeProfesorComponent } from './components/home-profesor/home-profesor.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';

import { TemarioCursoComponent } from './components/temario-curso/temario-curso.component';
import { ProfesorFormularioComponent } from './components/profesor-formulario/profesor-formulario.component';
import { AlumnoFormularioComponent } from './components/alumno-formulario/alumno-formulario.component';

import { ExamenPreguntasComponent } from './components/examen-preguntas/examen-preguntas.component';
import { ExamenComponent } from './components/examen/examen.component';
import { UsuariosService } from './services/usuarios.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaCursosComponent, FormsModule, NuevoCursoComponent, RouterLink, RouterLinkActive, CardUsuarioComponent, ListaUsuarioComponent, NuevoUsuarioComponent, LoginUsuarioComponent, HomeAlumnoComponent, HomeProfesorComponent, DetalleCursoComponent, TemarioCursoComponent, CardUsuarioComponent, ProfesorFormularioComponent, AlumnoFormularioComponent, ExamenPreguntasComponent, ExamenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Final_Front';
  router = inject(Router);
  usuariosService = inject(UsuariosService);

  onClickLogout() {
    localStorage.removeItem('token_crm');
    Swal.fire('Hasta pronto');
    this.router.navigateByUrl('/usuarios/login');
  }
}
