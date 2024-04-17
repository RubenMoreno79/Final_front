import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nuevo-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  formulario: FormGroup = new FormGroup({

    id: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    rol: new FormControl(),
    nombre: new FormControl(),
    apellidos: new FormControl(),
    fecha_nacimiento: new FormControl(),
    updafechaRegisto: new FormControl(),
    genero: new FormControl(),
    telefono: new FormControl(),
  })

  UsuarioService = inject(UsuariosService)
  router = inject(Router);

  async onSubmit() {
    const respuesta = await this.UsuarioService.register(this.formulario.value)
    //this.router.navigateByUrl('home')
    console.log(respuesta)
  }

}


