import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import dayjs from 'dayjs';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {


  activatedRoute = inject(ActivatedRoute);

  usuariosService = inject(UsuariosService);

  alumnosService = inject(AlumnosService);


  alumno: any | null = null
  alumno2: any | null = null


  formulario: FormGroup = new FormGroup({
    foto: new FormControl(null),
    nombre: new FormControl(null),
    apellidos: new FormControl(null),
    username: new FormControl(null),
    fecha_nacimiento: new FormControl(null),
    telefono: new FormControl(null),
    genero: new FormControl(null),
    campoInteres: new FormControl(null)
  });
  router: any;



  async ngOnInit() {

    const resupuesta = await this.usuariosService.getAlumno();
    const respuesta2 = await this.alumnosService.getAlumno()

    this.alumno = resupuesta;
    this.alumno2 = respuesta2;

    this.formulario.setValue({
      foto: this.alumno2[0].foto,
      nombre: this.alumno[0].nombre,
      apellidos: this.alumno[0].apellidos,
      username: this.alumno[0].username,
      fecha_nacimiento: dayjs(this.alumno[0].fecha_nacimiento).format('YYYY-MM-DD'),
      telefono: this.alumno[0].telefono,
      genero: this.alumno[0].genero,
      campoInteres: this.alumno2[0].campoInteres


    });

  };


  async onSubmit() {
    console.log(this.alumno[0].id)
    const respuesta = await this.usuariosService.editAlumno(this.alumno[0].id, this.formulario.value)

    console.log(respuesta)
  }

}