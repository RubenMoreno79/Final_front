import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interfaces';
import { USUARIOS } from '../data/usuario.data';





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







}





