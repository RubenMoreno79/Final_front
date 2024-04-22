import { Component, Input, inject } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Router, RouterLink } from '@angular/router';
import { Curso } from '../../interfaces/cursos.interface';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mis-cursos.component.html',
  styleUrl: './mis-cursos.component.css'
})
export class MisCursosComponent {


  arrCursos: Curso[] = [];

  alumnosServices = inject(AlumnosService);
  router = inject(Router);


  async ngOnInit() {

    this.arrCursos = await this.alumnosServices.getMisCursos();
  }


}
