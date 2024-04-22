import { Injectable } from '@angular/core';
import { PROFESORES } from '../data/profesores.data'
import { Profesor } from '../interfaces/profesores.interface';


@Injectable({
    providedIn: 'root'
})
export class ProfesoresService {

    getAll(): Profesor[] {
        return PROFESORES
    }

    getByEspecializad(especialidad: string): Profesor[] {
        return PROFESORES.filter(profesor => profesor.campoExperiencia === especialidad)
    }

    getById(profesorId: number): Profesor | null {
        for (let profesor of PROFESORES) {
            if (profesor.id === profesorId) {
                return profesor;
            }
        }
        return null;
    }

    create(Profesor: Profesor) {
        PROFESORES.push(Profesor);
    }


}
