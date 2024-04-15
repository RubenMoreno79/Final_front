import { Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';

import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: 'cursos', component: ListaCursosComponent },
    { path: 'cursos/nuevo', component: NuevoCursoComponent },
    { path: 'usuarios', component: ListaUsuarioComponent },
    { path: 'usuarios/nuevo', component: NuevoUsuarioComponent },
    { path: 'usuarios/login', component: LoginUsuarioComponent },




];
