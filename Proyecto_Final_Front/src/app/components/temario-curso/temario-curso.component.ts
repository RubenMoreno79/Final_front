import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'temario-curso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './temario-curso.component.html',
  styleUrl: './temario-curso.component.css'
})
export class TemarioCursoComponent {

  formulario: FormGroup = new FormGroup({
    id: new FormControl(),
    tema: new FormControl(),
    leccion: new FormControl(),
    video: new FormControl(),
    imagen: new FormControl(),
    texto: new FormControl(),
  })
  CursoService = inject(CursosService);
  router = inject(Router);

  onSubmit() {

    this.router.navigateByUrl('cursos')
  }
}
