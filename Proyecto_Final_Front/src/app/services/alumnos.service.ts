import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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

  getAlumno() {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/alumnos/alumno`)
    )
  }



};
