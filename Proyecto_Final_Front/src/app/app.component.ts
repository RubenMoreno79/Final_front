import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { FormsModule } from '@angular/forms';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';

import { CardUsuarioComponent } from './components/card-usuario/card-usuario.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaCursosComponent, FormsModule, NuevoCursoComponent, RouterLink, RouterLinkActive, CardUsuarioComponent, ListaUsuarioComponent, NuevoUsuarioComponent, LoginUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Final_Front';
}
