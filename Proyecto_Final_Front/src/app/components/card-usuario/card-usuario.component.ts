import { Component, Input, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Alumno } from '../../interfaces/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'card-usuario',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {

  @Input() usuario: Usuario | null = null;
  @Input() alumno: Alumno | null = null;

  usuariosService = inject(UsuariosService);
  alumnosService = inject(AlumnosService)

  router = inject(Router);

  async ngOnInit() {
    const alumno: any = await this.usuariosService.getAlumno();
    const alumno2: any = await this.alumnosService.getAlumno();
    this.alumno = alumno2[0];
    console.log(alumno)
    this.usuario = alumno[0];

  }

  editarUsuario() {
    if (this.usuario?.rol === 'profesor') {
      this.router.navigateByUrl('/usuarios/profesores/editar');

    } else {
      this.router.navigateByUrl('usuarios/alumno/editar');
    }
  }
}
