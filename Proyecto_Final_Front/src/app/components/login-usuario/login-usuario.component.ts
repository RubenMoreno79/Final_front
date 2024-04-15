import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'login-usuario',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  usuariosService = inject(UsuariosService)

  formulario: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })




}


