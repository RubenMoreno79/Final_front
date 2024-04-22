import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-alumno',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-alumno.component.html',
  styleUrl: './home-alumno.component.css'
})
export class HomeAlumnoComponent {

}
