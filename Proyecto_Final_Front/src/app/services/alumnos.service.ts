import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Curso } from '../interfaces/cursos.interface';
import { ALUMNO } from '../data/alumno.data'
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  private baseUrl: string = 'http://localhost:3000/api';

  private httpClient = inject(HttpClient);


  addCurso(cursoId: Number) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/alumnoscursos/nuevo/${cursoId}`, {}))

  };

  getCurso(cursoId: Number) {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/info/${cursoId}`)
    )
  }

  getAlumno() {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/alumnos/alumno2`)
    )
  };

  getMisCursos() {
    return firstValueFrom(
      this.httpClient.get<Curso[]>(`${this.baseUrl}/alumnoscursos/todos`)
    )
  };

};
