import { Injectable } from '@angular/core';
import { CURSOS } from '../data/curso.data'
import { Curso } from '../interfaces/cursos.interface';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getAll(): Curso[] {
    return CURSOS
  }

  getByNombre(nombre: string): Curso[] {
    return CURSOS.filter(curso => curso.nombre === nombre)
  }

  getById(cursoId: number): Curso | null {
    for (let curso of CURSOS) {
      if (curso.id === cursoId) {
        return curso;
      }
    }
    return null;
  }

  create(Curso: Curso) {
    CURSOS.push(Curso);
  }
}
