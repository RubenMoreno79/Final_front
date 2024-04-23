import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-profesor',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './home-profesor.component.html',
  styleUrl: './home-profesor.component.css'
})
export class HomeProfesorComponent {

}
