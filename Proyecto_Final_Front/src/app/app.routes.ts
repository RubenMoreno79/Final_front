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
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ProfesorFormularioComponent } from './components/profesor-formulario/profesor-formulario.component';
import { AlumnoFormularioComponent } from './components/alumno-formulario/alumno-formulario.component';

import { ExamenPreguntasComponent } from './components/examen-preguntas/examen-preguntas.component';
import { ExamenComponent } from './components/examen/examen.component';
import { MisCursosComponent } from './components/mis-cursos/mis-cursos.component';
import { authGuard } from './core/guards/auth.guard';
import { CardProfesorComponent } from './components/card-profesor/card-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { CursosProfesorComponent } from './components/cursos-profesor/cursos-profesor.component';



export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'cursos', component: ListaCursosComponent },
    { path: 'cursos/:cursoId', component: DetalleCursoComponent },
    { path: 'curso/nuevo', component: NuevoCursoComponent, canActivate: [authGuard] },
    { path: 'usuarios', component: ListaUsuarioComponent, canActivate: [authGuard] },
    { path: 'usuarios/nuevo', component: NuevoUsuarioComponent },
    { path: 'usuarios/login', component: LoginUsuarioComponent },
    {
        path: 'usuarios/alumno', component: HomeAlumnoComponent,
        children: [
            { path: 'card', component: CardUsuarioComponent, canActivate: [authGuard] },
            { path: 'miscursos', component: MisCursosComponent, canActivate: [authGuard] },
            { path: 'editar', component: EditarUsuarioComponent, canActivate: [authGuard] },
            { path: 'buscarnuevocurso', component: ListaCursosComponent, canActivate: [authGuard] },

        ]
    },

    { path: 'temario/:cursoId', component: TemarioCursoComponent, canActivate: [authGuard] },
    { path: 'leccion/:temarioId', component: CardCursoComponent, canActivate: [authGuard] },
    { path: 'usuarios/card', component: CardUsuarioComponent, canActivate: [authGuard] },
    { path: 'newpregunta/:cursoid', component: ExamenPreguntasComponent, canActivate: [authGuard] },
    { path: 'examen/:cursoid', component: ExamenComponent, canActivate: [authGuard] },
    {
        path: 'usuarios/profesor', component: HomeProfesorComponent,
        children: [
            { path: 'cusosprofesor', component: CursosProfesorComponent, canActivate: [authGuard] },
            { path: 'card', component: CardProfesorComponent, canActivate: [authGuard] },
            { path: 'editar', component: EditarProfesorComponent, canActivate: [authGuard] },
            { path: 'listacursos', component: ListaCursosComponent, canActivate: [authGuard] },
            { path: 'nuevocursoprofesor', component: NuevoCursoComponent, canActivate: [authGuard] },

        ]
    },
    { path: 'newalumno/:usuarios_id', component: AlumnoFormularioComponent },
    { path: 'newprofesor/:usuarios_id', component: ProfesorFormularioComponent },











];
