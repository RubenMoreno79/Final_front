import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { CursosService } from '../../services/cursos.service';
import { CURSOS } from '../../data/curso.data';

@Component({
  selector: 'lista-cursos',
  standalone: true,
  imports: [],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})


export class ListaCursosComponent {
  arrCursos: Curso[] = [];
  cursosService = inject(CursosService)
  ngOnInit() {
    this.arrCursos = this.cursosService.getAll();
  }
  onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrCursos = this.cursosService.getAll();
    } else {
      this.arrCursos = this.cursosService.getByNombre($event.target.value);
    }
  }

  getNombres(): string[] {
    return [...new Set(CURSOS.map(curso => curso.nombre))]
  }

}
