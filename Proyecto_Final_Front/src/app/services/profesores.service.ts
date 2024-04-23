import { Injectable, inject } from '@angular/core';
import { PROFESORES } from '../data/profesores.data'
import { Profesor } from '../interfaces/profesores.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../interfaces/cursos.interface';


@Injectable({
    providedIn: 'root'
})
export class ProfesoresService {



    private baseUrl: string = 'http://localhost:3000/api';
    private httpClient = inject(HttpClient);

    getProfesor() {
        return firstValueFrom(
            this.httpClient.get(`${this.baseUrl}/profesores/profesor2`)
        )
    }
    getProfesor2() {
        return firstValueFrom(
            this.httpClient.get(`${this.baseUrl}/profesores/profesor`)
        )
    }

    getAll(): Profesor[] {
        return PROFESORES
    }

    getByEspecialidad(especialidad: string): Profesor[] {
        return PROFESORES.filter(profesor => profesor.experiencia === especialidad)
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



    getMisCursos() {
        return firstValueFrom(
            this.httpClient.get<Curso[]>(`${this.baseUrl}/cursos/getbyprofesor`)
        )
    };

}