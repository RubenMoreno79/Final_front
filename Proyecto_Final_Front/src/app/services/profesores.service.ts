import { Injectable, inject } from '@angular/core';
import { PROFESORES } from '../data/profesores.data'
import { Profesor } from '../interfaces/profesores.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProfesoresService {

    private baseUrl: string = 'http://localhost:3000/api';

    private httpClient = inject(HttpClient);


    getAll(): Profesor[] {
        return PROFESORES
    }

    getByEspecializad(especialidad: string): Profesor[] {
        return PROFESORES.filter(profesor => profesor.especialidad === especialidad)
    }

    getById(profesorId: number): Profesor | null {
        for (let profesor of PROFESORES) {
            if (profesor.id === profesorId) {
                return profesor;
            }
        }
        return null;
    }

    create(Profesor: Profesor, usuarios_id: any) {
        const body = { ...Profesor, usuarios_id }
        return firstValueFrom(
            this.httpClient.post(`${this.baseUrl}/profesores/nuevo`, body))
    }
}



