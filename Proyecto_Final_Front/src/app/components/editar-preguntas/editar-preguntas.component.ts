import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PreguntasService } from '../../services/pregunta.service';

@Component({
  selector: 'app-editar-preguntas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-preguntas.component.html',
  styleUrl: './editar-preguntas.component.css'
})
export class EditarPreguntasComponent {
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
  preguntaid: number = 0
  PreguntaService = inject(PreguntasService);
  router = inject(Router);
  activatedRoutes = inject(ActivatedRoute)


  async ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.preguntaid = Number(params['preguntaid'])
    })
    this.activatedRoutes.params.subscribe(params => {
      this.cursoid = Number(params['cursoid'])
    })
    console.log(this.cursoid)
    const respuesta = await this.PreguntaService.getById(this.preguntaid)

    this.Formulario.setValue({
      id: respuesta[0].id,
      titulo: respuesta[0].titulo,
      enunciado: respuesta[0].enunciado,
      respuesta_correcta: respuesta[0].respuesta_correcta,
      respuesta_incorrecta1: respuesta[0].respuesta_incorrecta1,
      respuesta_incorrecta2: respuesta[0].respuesta_incorrecta2,
      respuesta_incorrecta3: respuesta[0].respuesta_incorrecta3,
    })
  }

  onSubmit() {
    this.PreguntaService.editarOregunta(this.preguntaid, this.Formulario.value)
    this.router.navigateByUrl(`examen/${this.cursoid}`)
  }
}
