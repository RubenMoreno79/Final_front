import { Injectable } from '@angular/core';
import { ALUMNO } from '../data/alumno.data'
import { Alumno } from '../interfaces/alumno.interface';


@Injectable({
    providedIn: 'root'
})
export class AlumnosService {

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

    create(Alumno: Alumno) {
        ALUMNO.push(Alumno);
    }
}
