import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { ProfesoresService } from '../../services/profesores.service';
import dayjs from 'dayjs';

@Component({
  selector: 'app-editar-profesor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-profesor.component.html',
  styleUrl: './editar-profesor.component.css'
})
export class EditarProfesorComponent {
  activatedRoute = inject(ActivatedRoute);

  usuariosService = inject(UsuariosService);
  profesoresService = inject(ProfesoresService)
  router = inject(Router)

  profesor: any | null = null
  profesor2: any | null = null



  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(null),
    apellidos: new FormControl(null),
    username: new FormControl(null),
    fecha_nacimiento: new FormControl(null),
    telefono: new FormControl(null),
    genero: new FormControl(null),
    experiencia: new FormControl(null),
    descripcion_experiencia: new FormControl(null),
    especialidad: new FormControl(null),
    foto: new FormControl(null),
  });




  async ngOnInit() {


    const respuesta = await this.usuariosService.getProfesor();
    const respuesta2 = await this.profesoresService.getProfesor();
    console.log(respuesta2)


    this.profesor = respuesta;
    this.profesor2 = respuesta2;

    this.formulario.setValue({
      nombre: this.profesor[0].nombre,
      apellidos: this.profesor[0].apellidos,
      username: this.profesor[0].username,
      fecha_nacimiento: dayjs(this.profesor[0].fecha_nacimiento).format('YYYY-MM-DD'),
      telefono: this.profesor[0].telefono,
      genero: this.profesor[0].genero,
      experiencia: this.profesor2[0].experiencia,
      descripcion_experiencia: this.profesor2[0].descripcion_experiencia,
      foto: this.profesor2[0].foto,
      especialidad: this.profesor2[0].especialidad,
    });

  };


  async onSubmit() {
    console.log(this.profesor[0].id)
    const respuesta = await this.usuariosService.editProfesor(this.formulario.value)
    this.router.navigateByUrl('/usuarios/profesor/card')
  }

}

