import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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

  getAll(): Alumno[] {
    return ALUMNO
  }



  getById(alumnoId: number): Alumno | null {
    for (let alumno of ALUMNO) {
      if (alumno.id === alumnoId) {
        return alumno;
      }
    }
    return null;
  }



  create(Alumno: Alumno, usuarios_id: any) {
    const body = { ...Alumno, usuarios_id }
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/alumnos/nuevo`, body)
    )
  }



};
