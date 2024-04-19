import { Component, Input, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {

  @Input() usuario: Usuario | null = null;

  usuariosService = inject(UsuariosService)
  router: any;

  async ngOnInit() {
    const alumno: any = await this.usuariosService.getAlumno();
    this.usuario = alumno[0];
    console.log(alumno)
  }

  editarUsuario() {
    this.router.navigate(['alumnos/editar']);
  }
}
