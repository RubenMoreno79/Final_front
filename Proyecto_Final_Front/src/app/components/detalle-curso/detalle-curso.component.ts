import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AlumnosService } from '../../services/alumnos.service';
import { TemariosService } from '../../services/temarios.service';


@Component({
  selector: 'detalle-curso',
  standalone: true,
  imports: [],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent {

  curso: Curso[] = []
  leccionId: Number = 0

  cursoId: Number = 0;

  activatedRoute = inject(ActivatedRoute);
  cursosService = inject(CursosService);
  alumnoService = inject(AlumnosService);
  temarioSercice = inject(TemariosService)
  router = inject(Router)

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cursoId = Number(params['cursoId']);

    })
    this.curso = await this.cursosService.getById(this.cursoId);;

    const respuesta = await this.temarioSercice.getAllLeccionesProfesor(this.cursoId)

    this.leccionId = respuesta[0].id


  };


  async addCurso() {
    const respuesta = await this.alumnoService.addCurso(this.cursoId);
    console.log(respuesta);
  };

  goToLecciones() {
    console.log('entra')
    this.router.navigateByUrl(`leccion/${this.leccionId}`)
  }



}
