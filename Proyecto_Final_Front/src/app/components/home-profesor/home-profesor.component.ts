import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'home-profesor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './home-profesor.component.html',
  styleUrl: './home-profesor.component.css'
})
export class HomeProfesorComponent {
  router = inject(Router);
  usuariosService = inject(UsuariosService);

  onClickLogout() {
    localStorage.removeItem('token_crm');
    Swal.fire('Hasta pronto');
    this.router.navigateByUrl('/usuarios/login');
  }

}
