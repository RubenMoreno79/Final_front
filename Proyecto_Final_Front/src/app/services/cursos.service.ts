import { Injectable, inject } from '@angular/core';
import { CURSOS } from '../data/curso.data'
import { Curso } from '../interfaces/cursos.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  private baseUrl: string = 'http://localhost:3000/api';
  private httpClient = inject(HttpClient);

  getAll(): Curso[] {
    return CURSOS
  };

  getByNombre(nombre: string): Curso[] {
    return CURSOS.filter(curso => curso.nombre === nombre)
  }

  getById(cursoId: Number): Curso | null {
    for (let curso of CURSOS) {
      if (curso.id === cursoId) {
        return curso;
      }
    }
    return null;
  };

  create(Curso: Curso) {
    CURSOS.push(Curso);
  };

  listaCursos() {
    return firstValueFrom(this.httpClient.get<Curso[]>(`${this.baseUrl}/cursos`));


  }



}

