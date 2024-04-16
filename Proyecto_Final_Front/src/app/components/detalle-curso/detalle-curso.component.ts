import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'detalle-curso',
  standalone: true,
  imports: [],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent {

  curso: Curso | null = null

  activatedRoute = inject(ActivatedRoute);
  cursosService = inject(CursosService)
  router: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const cursoId = Number(params['cursoId']);

      this.curso = this.cursosService.getById(cursoId);

    });
  }


}
