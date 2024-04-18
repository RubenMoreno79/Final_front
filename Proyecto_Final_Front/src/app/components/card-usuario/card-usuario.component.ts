import { Component, Input, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'card-usuario',
  standalone: true,
  imports: [],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {

  @Input() usuario: Usuario | null = null;

  usuariosService = inject(UsuariosService)

  async ngOnInit() {
    const alumno: any = await this.usuariosService.getAlumno();
    this.usuario = alumno[0];
    console.log(alumno)
  }
}
