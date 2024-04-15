import { Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';


export const routes: Routes = [

    { path: 'cursos', component: ListaCursosComponent },
    { path: 'cursos/nuevo', component: NuevoCursoComponent }


];
