import { Routes } from '@angular/router';

import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAlumnoComponent } from './components/home-alumno/home-alumno.component';
import { HomeProfesorComponent } from './components/home-profesor/home-profesor.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { TemarioCursoComponent } from './components/temario-curso/temario-curso.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ProfesorFormularioComponent } from './components/profesor-formulario/profesor-formulario.component';
import { AlumnoFormularioComponent } from './components/alumno-formulario/alumno-formulario.component';

import { ExamenPreguntasComponent } from './components/examen-preguntas/examen-preguntas.component';
import { ExamenComponent } from './components/examen/examen.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'cursos', component: ListaCursosComponent },
    { path: 'cursos/:cursoId', component: DetalleCursoComponent },
    { path: 'curso/nuevo', component: NuevoCursoComponent },
    { path: 'usuarios', component: ListaUsuarioComponent },
    { path: 'usuarios/nuevo', component: NuevoUsuarioComponent },
    { path: 'usuarios/login', component: LoginUsuarioComponent },
    { path: 'usuarios/alumno', component: HomeAlumnoComponent },
    { path: 'usuarios/profesor', component: HomeProfesorComponent },
    { path: 'temario', component: TemarioCursoComponent },
    { path: 'leccion/:temarioId', component: CardCursoComponent },
    { path: 'usuarios/card', component: CardUsuarioComponent },
    { path: 'alumnos/editar', component: EditarUsuarioComponent },
    { path: 'newprofesor', component: ProfesorFormularioComponent },
    { path: 'newalumno', component: AlumnoFormularioComponent },
    { path: 'newpregunta', component: ExamenPreguntasComponent },
    { path: 'examen', component: ExamenComponent },









];
