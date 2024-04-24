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

    getById(preguntaId: number) {
        return firstValueFrom(
            this.httpClient.get<Pregunta[]>(`${this.baseUrl}/preguntas/${preguntaId}`)
        )
    }

    create(cursoid: number, Pregunta: Pregunta) {
        return firstValueFrom(
            this.httpClient.post(`${this.baseUrl}/preguntas/nuevo/${cursoid}`, Pregunta)
        )
    }

    enviarNota(nota: number, cursoId: Number) {
        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/alumnoscursos/nota/${nota}/${cursoId}`, {})
        )
    }

    borrrarPregunta(preguntaId: number) {
        return firstValueFrom(
            this.httpClient.delete(`${this.baseUrl}/preguntas/borrar/${preguntaId}`)
        )
    }
    editarOregunta(preguntaid: number, pregunta: Pregunta) {
        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/preguntas/editar/${preguntaid}`, pregunta)
        )
    }

    isFinish(cursoid: number) {
        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/alumnoscursos/finish/${cursoid}`, {})
        )
    }
}
