import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { ProfesoresService } from '../../services/profesores.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos-profesor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos-profesor.component.html',
  styleUrl: './cursos-profesor.component.css'
})
export class CursosProfesorComponent {
  arrCursosProfesor: Curso[] = [];
  profesoresService = inject(ProfesoresService);
  router = inject(Router);


  async ngOnInit() {
    console.log('entra')


    this.arrCursosProfesor = await this.profesoresService.getMisCursos();
    console.log(this.arrCursosProfesor)





  }










}
