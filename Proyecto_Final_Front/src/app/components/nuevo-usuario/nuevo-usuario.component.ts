import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'nuevo-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {



  formulario: FormGroup = new FormGroup({

    id: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    rol: new FormControl(null, Validators.required),
    nombre: new FormControl(null, Validators.required),
    apellidos: new FormControl(null, Validators.required),
    fecha_nacimiento: new FormControl(null, Validators.required),
    updafechaRegisto: new FormControl(),
    genero: new FormControl(null, Validators.required),
    telefono: new FormControl(null, Validators.required),
  })

  UsuarioService = inject(UsuariosService)
  router = inject(Router);



  async onSubmit() {
    const respuesta = await this.UsuarioService.register(this.formulario.value)

    const id = respuesta.insertId
    if (this.formulario.value.rol === 'alumno') {
      this.router.navigateByUrl(`newalumno/${respuesta.insertId}`)
    } else if (this.formulario.value.rol === 'profesor') {
      this.router.navigateByUrl(`newprofesor/${respuesta.insertId}`)
    }
  }
  checkError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)!.hasError(errorName) &&
      this.formulario.get(controlName)!.touched;
  }


}


