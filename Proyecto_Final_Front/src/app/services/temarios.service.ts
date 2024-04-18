import { Injectable } from '@angular/core';
import { TEMARIOS } from '../data/temario.data'
import { Temario } from '../interfaces/temario.interface';


@Injectable({
    providedIn: 'root'
})
export class TemariosService {

    getAll(): Temario[] {
        return TEMARIOS
    }

    getByTema(tema: string): Temario[] {
        return TEMARIOS.filter(temario => temario.tema === tema)
    }

    getById(temarioId: number): Temario | null {
        for (let temario of TEMARIOS) {
            if (temario.id === temarioId) {
                return temario;
            }
        }
        return null;
    }

    create(Temario: Temario) {
        TEMARIOS.push(Temario);
    }
}
