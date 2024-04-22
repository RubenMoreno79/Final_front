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

    getById(temarioId: number): Temario | null {
        for (let temario of TEMARIOS) {
            if (temario.id === temarioId) {
                return temario;
            }
        }
        return null;
    }

    create(Temario: Temario, cursoId: Number) {
        return firstValueFrom(
            this.httpClient.post<RegistroResponse>(`${this.baseUrl}/lecciones/new/${cursoId}`, Temario)
        )
    }
}
