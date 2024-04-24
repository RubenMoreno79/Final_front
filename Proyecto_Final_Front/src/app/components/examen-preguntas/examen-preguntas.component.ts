import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PreguntasService } from '../../services/pregunta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'examen-preguntas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './examen-preguntas.component.html',
  styleUrl: './examen-preguntas.component.css'
})
export class ExamenPreguntasComponent {
  Formulario: FormGroup = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl(null),
    enunciado: new FormControl(null),
    respuesta_correcta: new FormControl(null),
    respuesta_incorrecta1: new FormControl(null),
    respuesta_incorrecta2: new FormControl(null),
    respuesta_incorrecta3: new FormControl(null),

  })
  cursoid: number = 0
  PreguntaService = inject(PreguntasService);
  router = inject(Router);
  activatedRoutes = inject(ActivatedRoute)


  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.cursoid = Number(params['cursoid'])
    })
    console.log(this.cursoid)
  }

  onSubmit() {
    this.PreguntaService.create(this.cursoid, this.Formulario.value)
    this.router.navigateByUrl(`examen/${this.cursoid}`)
  }
}


