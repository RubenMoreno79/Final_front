import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interfaces';
import { USUARIOS } from '../data/usuario.data';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { JwtPayload, jwtDecode } from 'jwt-decode';


export type JwtPayloadCustom = JwtPayload & { user_role: string, user_id: string };

type RegistroResponse = {
    success?: string,
    error?: string
};
type LoginType = { email: string, password: string };
type LoginResponse = {
    success?: string,
    token?: string,
    error?: string
};


@Injectable({
    providedIn: 'root'
})
export class UsuariosService {


    getAll(): Usuario[] {
        return USUARIOS
    }
    getByNombreUsuario(nombre: string): Usuario[] {
        return USUARIOS.filter(usuario => usuario.nombre === nombre)
    }
    create(usuario: Usuario) {
        USUARIOS.push(usuario);
    }


    private baseUrl: string = 'http://localhost:3000/api/usuarios';

    private httpClient = inject(HttpClient);

    register(nuevoUsuario: Usuario) {
        return firstValueFrom(
            this.httpClient.post<RegistroResponse>(`${this.baseUrl}/registro`, nuevoUsuario)
        );
    }

    login(values: LoginType) {
        return firstValueFrom(
            this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, values)
        );
    }

    isLogged() {
        return localStorage.getItem('token_crm') ? true : false;
    }

    isAdmin() {
        // El role del usuario está codificado dentro del TOKEN
        const decoded: JwtPayloadCustom = jwtDecode(localStorage.getItem('token_crm')!);

        if (decoded.user_role === 'admin') {
            return true;
        }
        return false;
    }





}





