import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-curso.component.html',
  styleUrl: './editar-curso.component.css'
})
export class EditarCursoComponent {

  cursoId: number = 0

  formulario: FormGroup = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    horas: new FormControl(),
    categoria: new FormControl(),
    descripcion: new FormControl(),
    contenido: new FormControl(),
    Imagen: new FormControl(),
  })

  CursoService = inject(CursosService);
  router = inject(Router);
  activatedRoutes = inject(ActivatedRoute)

  async ngOnInit() {

    this.activatedRoutes.params.subscribe(params => {
      this.cursoId = Number(params['cursoid'])
    })
    const respuesta = await this.CursoService.getById(this.cursoId)
    console.log(respuesta[0])
    this.formulario.setValue({
      id: respuesta[0].id,
      nombre: respuesta[0].nombre,
      horas: respuesta[0].horas,
      categoria: respuesta[0].categoria,
      descripcion: respuesta[0].descripcion,
      contenido: respuesta[0].contenido,
      Imagen: respuesta[0].Imagen,
    })
  }


  async onSubmit() {
    this.CursoService.editarCurso(this.cursoId, this.formulario.value)
    setTimeout(() => {
      this.router.navigateByUrl(`/cursos/${this.cursoId}`)

    }, 500);
  }


}
