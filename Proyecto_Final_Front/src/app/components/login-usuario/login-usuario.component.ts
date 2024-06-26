import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'login-usuario',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  usuariosService = inject(UsuariosService)
  router = inject(Router);

  formulario: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })


  async onSubmit() {
    const response = await this.usuariosService.login(this.formulario.value);
    console.log(response)
    this.router.navigateByUrl('/home');

    // Comprobamos la respuesta
    if (response.success) {
      Swal.fire('Login correcto', 'Tu datos son correctos', 'success');
      // Guardo el TOKEN en LocalStorage
      localStorage.setItem('token_crm', response.token!);


    } else {
      Swal.fire('Error', 'Revisa tu usuario y/o contraseña', 'error');
    }
  }

}


