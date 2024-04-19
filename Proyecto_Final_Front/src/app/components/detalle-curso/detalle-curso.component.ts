import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AlumnosService } from '../../services/alumnos.service';


@Component({
  selector: 'detalle-curso',
  standalone: true,
  imports: [],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent {

  curso: Curso | null = null

  cursoId: Number = 0;

  activatedRoute = inject(ActivatedRoute);
  cursosService = inject(CursosService);
  alumnoService = inject(AlumnosService);
  router: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cursoId = Number(params['cursoId']);
      this.curso = this.cursosService.getById(this.cursoId);
    });
  };


  async addCurso() {
    const respuesta = await this.alumnoService.addCurso(this.cursoId);
    console.log(respuesta);
  };



}
