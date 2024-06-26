import { Injectable, inject } from '@angular/core';
import { CURSOS } from '../data/curso.data'
import { Curso } from '../interfaces/cursos.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


type RegistroResponse = {
  insertId: any;
  success?: string,
  error?: string
};

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  private baseUrl: string = 'http://localhost:3000/api';
  private httpClient = inject(HttpClient);

  getAll(): Curso[] {
    return CURSOS
  };

  getByCategory(categoria: string) {
    return firstValueFrom(
      this.httpClient.get<Curso[]>(`${this.baseUrl}/cursos/category/${categoria}`)
    )
  }

  getById(cursoId: Number) {
    return firstValueFrom(
      this.httpClient.get<Curso[]>(`${this.baseUrl}/cursos/${cursoId}`)
    )
  };

  create(Curso: Curso) {
    return firstValueFrom(
      this.httpClient.post<RegistroResponse>(`${this.baseUrl}/cursos/nuevo`, Curso)

    )

  };

  listaCursos() {
    return firstValueFrom(this.httpClient.get<Curso[]>(`${this.baseUrl}/cursos`));


  }

  borrarCurso(cursoid: number) {
    return firstValueFrom(this.httpClient.delete(`${this.baseUrl}/cursos/${cursoid}`))
  }

  editarCurso(cursoid: number, body: any) {
    return firstValueFrom(this.httpClient.put(`${this.baseUrl}/cursos/${cursoid}`, body))
  }



}

