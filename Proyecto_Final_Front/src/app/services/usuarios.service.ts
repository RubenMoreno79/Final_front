import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interfaces';
import { USUARIOS } from '../data/usuario.data';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { JwtPayload, jwtDecode } from 'jwt-decode';


export type JwtPayloadCustom = JwtPayload & { user_role: string, user_id: string };

type RegistroResponse = {
    insertId: any;
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

    private tokenKey = 'myAppToken';


    getAll(): Usuario[] {
        return USUARIOS
    }
    getByNombreUsuario(nombre: string): Usuario[] {
        return USUARIOS.filter(usuario => usuario.nombre === nombre)
    }
    create(usuario: Usuario) {
        USUARIOS.push(usuario);
    }


    private baseUrl: string = 'http://localhost:3000/api';

    private httpClient = inject(HttpClient);

    register(nuevoUsuario: Usuario) {
        return firstValueFrom(
            this.httpClient.post<RegistroResponse>(`${this.baseUrl}/usuarios/registro`, nuevoUsuario)
        );
    }

    login(values: LoginType) {
        return firstValueFrom(
            this.httpClient.post<LoginResponse>(`${this.baseUrl}/usuarios/login`, values)
        );
    }

    getAlumno() {
        return firstValueFrom(
            this.httpClient.get(`${this.baseUrl}/alumnos/alumno`)
        )
    }

    getProfesor() {
        return firstValueFrom(
            this.httpClient.get(`${this.baseUrl}/profesores/profesor`)
        )
    }

    editAlumno(userId: number, usuario: any) {
        usuario.id = userId
        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/alumnos/editar`, usuario)
        )
    }

    editProfesor(profesor: any) {

        return firstValueFrom(
            this.httpClient.put(`${this.baseUrl}/profesores/editar`, profesor)
        )
    }




    isLogged() {
        return localStorage.getItem('token_crm') ? true : false;
    }

    // isAdmin() {
    //     // El role del usuario está codificado dentro del TOKEN
    //     const decoded: JwtPayloadCustom = jwtDecode(localStorage.getItem('token_crm')!);

    //     if (decoded.user_role === 'admin') {
    //         return true;
    //     }
    //     return false;
    // }


    isusuario() {
        const decoded: JwtPayloadCustom = jwtDecode(localStorage.getItem('token_crm')!);
        return decoded
    }


    isAlumnoEdit() {
        const decoded: JwtPayloadCustom = jwtDecode(localStorage.getItem('token_crm')!);
        console.log(decoded)
        return decoded
    }

    isProfesorEdit() {
        const decoded2: JwtPayloadCustom = jwtDecode(localStorage.getItem('token_crm')!);
        console.log(decoded2)
        return decoded2
    }


}









