import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { FormsModule } from '@angular/forms';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaCursosComponent, FormsModule, NuevoCursoComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Final_Front';
}
