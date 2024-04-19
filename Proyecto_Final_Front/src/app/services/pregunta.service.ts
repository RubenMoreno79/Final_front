import { Injectable } from '@angular/core';
import { PREGUNTA } from '../data/pregunta.data'
import { Pregunta } from '../interfaces/pregunta.interface';


@Injectable({
    providedIn: 'root'
})
export class PreguntasService {

    getAll(): Pregunta[] {
        return PREGUNTA
    }

    getByNombre(nombre: string): Pregunta[] {
        return PREGUNTA.filter(pregunta => pregunta.nombre === nombre)
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
}
