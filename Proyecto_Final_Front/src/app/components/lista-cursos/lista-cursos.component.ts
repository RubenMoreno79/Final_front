import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { CursosService } from '../../services/cursos.service';
import { CURSOS } from '../../data/curso.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lista-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})


export class ListaCursosComponent {

  arrCursos: Curso[] = [];

  cursosService = inject(CursosService);

  async ngOnInit() {
    // this.arrCursos = this.cursosService.getAll();
    this.arrCursos = await this.cursosService.listaCursos();
  };

  async onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrCursos = await this.cursosService.listaCursos();
    } else {
      this.arrCursos = this.cursosService.getByNombre($event.target.value);
    }
  };

  getNombres(): string[] {
    return [...new Set(CURSOS.map(curso => curso.nombre))]
  };





}
