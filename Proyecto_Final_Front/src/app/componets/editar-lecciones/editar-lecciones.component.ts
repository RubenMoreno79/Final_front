import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { TemariosService } from '../../services/temarios.service';

@Component({
  selector: 'app-editar-lecciones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-lecciones.component.html',
  styleUrl: './editar-lecciones.component.css'
})
export class EditarLeccionesComponent {
  leccionId: number = 0;

  activatedRoute = inject(ActivatedRoute);
  CursoService = inject(CursosService);
  router = inject(Router);
  TemarioService = inject(TemariosService)


  formulario: FormGroup = new FormGroup({
    id: new FormControl(),
    tema: new FormControl(),
    leccion: new FormControl(),
    video: new FormControl(),
    imagen: new FormControl(),
    texto: new FormControl(),
  })

  async onSubmit() {
    this.TemarioService.editarLeccion(this.leccionId, this.formulario.value)
    this.router.navigateByUrl(`leccion/${this.leccionId}`)
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.leccionId = Number(params['leccionid']);

    })
    const respuesta = await this.TemarioService.getById(this.leccionId)
    console.log(respuesta)
    this.formulario.setValue({
      id: respuesta[0].id,
      tema: respuesta[0].tema,
      leccion: respuesta[0].leccion,
      video: respuesta[0].video,
      imagen: respuesta[0].imagen,
      texto: respuesta[0].texto,
    })

  }
}
