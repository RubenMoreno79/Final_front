import { Component } from '@angular/core';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ListaCursosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
