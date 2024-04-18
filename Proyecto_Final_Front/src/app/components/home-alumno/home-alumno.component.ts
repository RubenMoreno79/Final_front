import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'home-alumno',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home-alumno.component.html',
  styleUrl: './home-alumno.component.css'
})
export class HomeAlumnoComponent {

}
