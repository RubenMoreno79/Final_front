import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nuevo-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-curso.component.html',
  styleUrl: './nuevo-curso.component.css'
})
export class NuevoCursoComponent {

  formulario: FormGroup = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    horas: new FormControl(),
    categoria: new FormControl(),
    examen: new FormControl(),
    descripcion: new FormControl(),
    contenido: new FormControl(),
    Imagen: new FormControl(),
  })

  CursoService = inject(CursosService);
  router = inject(Router);

  async onSubmit() {
    const respuesta = await this.CursoService.create(this.formulario.value)
    console.log(respuesta.insertId);

    this.router.navigateByUrl('')
  }



}



