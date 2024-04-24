import { Injectable, inject } from '@angular/core';
import { TEMARIOS } from '../data/temario.data'
import { Temario } from '../interfaces/temario.interface';
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
export class TemariosService {

    private baseUrl: string = 'http://localhost:3000/api';
    private httpClient = inject(HttpClient);

    getAll(): Temario[] {
        return TEMARIOS
    }

    getByTema(tema: string): Temario[] {
        return TEMARIOS.filter(temario => temario.tema === tema)
    }

    getById(temarioId: number) {
        return firstValueFrom(
            this.httpClient.get<Temario[]>(`${this.baseUrl}/lecciones/${temarioId}`)
        )
    }

    getAllLeccionesProfesor(curso_id: Number) {
        return firstValueFrom(
            this.httpClient.get<Temario[]>(`${this.baseUrl}/lecciones/all/profesores/${curso_id}`)
        )
    }
    getAllLeccionesAlumno(curso_id: Number) {
        return firstValueFrom(
            this.httpClient.get<Temario[]>(`${this.baseUrl}/lecciones/all/alumnos/${curso_id}`)
        )
    }

    create(Temario: Temario, cursoId: Number) {
        return firstValueFrom(
            this.httpClient.post<RegistroResponse>(`${this.baseUrl}/lecciones/new/${cursoId}`, Temario)
        )
    }

    borrarLeccions(leccionId: number) {
        return firstValueFrom(
            this.httpClient.delete(`${this.baseUrl}/lecciones/delete/${leccionId}`)
        )
    }

    editarLeccion(leccionid: number, body: any) {
        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/lecciones/update/${leccionid}`, body)
        )
    }
}
