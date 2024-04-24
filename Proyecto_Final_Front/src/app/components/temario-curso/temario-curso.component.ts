import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { TemariosService } from '../../services/temarios.service';

@Component({
  selector: 'temario-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './temario-curso.component.html',
  styleUrl: './temario-curso.component.css'
})
export class TemarioCursoComponent {

  cursoId: Number = 0;

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
    const respuesta = await this.TemarioService.create(this.formulario.value, this.cursoId)
    console.log(respuesta);
    console.log(this.cursoId);
    this.router.navigateByUrl(`leccion/${respuesta.insertId}/1`)
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cursoId = Number(params['cursoId']);

    })

  }
}
