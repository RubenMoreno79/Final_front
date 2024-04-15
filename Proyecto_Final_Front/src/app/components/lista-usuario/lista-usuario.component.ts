import { Component, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { USUARIOS } from '../../data/usuario.data';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent {

  arrUsuarios: Usuario[] = [];

  usuariosService = inject(UsuariosService);
  usuario: any;

  async ngOnInit() {
    const response = await this.usuariosService.getAll();
    this.arrUsuarios = response;
  }



  getNombres(): string[] {
    return [...new Set(USUARIOS.map(usuario => usuario.nombre))]
  }

}
