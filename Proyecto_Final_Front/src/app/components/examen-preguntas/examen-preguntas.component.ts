import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PreguntasService } from '../../services/pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'examen-preguntas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './examen-preguntas.component.html',
  styleUrl: './examen-preguntas.component.css'
})
export class ExamenPreguntasComponent {
  Formulario: FormGroup = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl(),
    enunciado: new FormControl(),
    opcion1: new FormControl(),
    opcion2: new FormControl(),
    opcion3: new FormControl(),
    opcion4: new FormControl(),

  })

  PreguntaService = inject(PreguntasService);
  router = inject(Router);

  onSubmit() {
    this.PreguntaService.create(this.Formulario.value)
    this.router.navigateByUrl('examen')
  }
}


