import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-texto-alumno',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './texto-alumno.component.html',
  styleUrl: './texto-alumno.component.css'
})
export class TextoAlumnoComponent {

}
