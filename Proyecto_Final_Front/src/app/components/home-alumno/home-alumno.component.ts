import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'home-alumno',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-alumno.component.html',
  styleUrl: './home-alumno.component.css'
})
export class HomeAlumnoComponent {

  router = inject(Router);
  usuariosService = inject(UsuariosService);

  onClickLogout() {
    localStorage.removeItem('token_crm');
    Swal.fire('Hasta pronto');
    this.router.navigateByUrl('/usuarios/login');
  }
}
