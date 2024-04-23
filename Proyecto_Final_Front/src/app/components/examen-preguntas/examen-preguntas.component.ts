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
    respuesta_correcta: new FormControl(),
    respuesta_incorrecta1: new FormControl(),
    respuesta_incorrecta2: new FormControl(),
    respuesta_incorrecta3: new FormControl(),

  })

  PreguntaService = inject(PreguntasService);
  router = inject(Router);


  onSubmit() {
    this.PreguntaService.create(this.Formulario.value)
    this.router.navigateByUrl('examen')
  }
}


