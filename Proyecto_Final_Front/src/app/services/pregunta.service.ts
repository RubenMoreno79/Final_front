import { Injectable, inject } from '@angular/core';
import { PREGUNTA } from '../data/pregunta.data'
import { Pregunta } from '../interfaces/pregunta.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PreguntasService {

    private baseUrl: string = 'http://localhost:3000/api';
    private httpClient = inject(HttpClient);

    getAllProfesor(cursoId: Number) {
        return firstValueFrom(
            this.httpClient.get<Pregunta[]>(`${this.baseUrl}/preguntas/all/profesores/${cursoId}`)
        )
    }

    getAllAlumno(cursoId: Number) {
        return firstValueFrom(
            this.httpClient.get<Pregunta[]>(`${this.baseUrl}/preguntas/all/alumnos/${cursoId}`)
        )
    }

    getByNombre(nombre: string): Pregunta[] {
        return PREGUNTA.filter(pregunta => pregunta.titulo === nombre)
    }

    getById(preguntaId: number): Pregunta | null {
        for (let pregunta of PREGUNTA) {
            if (pregunta.id === preguntaId) {
                return pregunta;
            }
        }
        return null;
    }

    create(Pregunta: Pregunta) {
        PREGUNTA.push(Pregunta);
    }

    enviarNota(nota: number, cursoId: Number) {
        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/alumnoscursos/nota/${nota}/${cursoId}`, {})
        )
    }
}
