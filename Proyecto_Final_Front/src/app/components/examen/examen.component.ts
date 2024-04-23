import { Component, inject } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { PreguntasService } from '../../services/pregunta.service';
import { PREGUNTA } from '../../data/pregunta.data';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {

  cursoId: Number = 0
  resultadoExamen: Number[] = []

  arrPreguntas: Pregunta[] = [];
  preguntasService = inject(PreguntasService)
  activatedRoutes = inject(ActivatedRoute)
  router = inject(Router)
  arrPreguntasMezcladas: any[] = []

  formulario: FormGroup = new FormGroup({

  }

  )



  async ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.cursoId = Number(params['cursoid'])
    })
    this.arrPreguntas = await this.preguntasService.getAllProfesor(this.cursoId);
    for (let pregunta of this.arrPreguntas) {
      const preguntaFinal = {
        respuestas: this.mezclar(pregunta),
        enunciado: pregunta.enunciado,
        titulo: pregunta.titulo,
        id: pregunta.id
      }
      this.arrPreguntasMezcladas.push(preguntaFinal)
    }
    console.log(this.arrPreguntasMezcladas)

  }
  async onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrPreguntas = await this.preguntasService.getAllProfesor(this.cursoId);
    } else {
      this.arrPreguntas = this.preguntasService.getByNombre($event.target.value);
    }
  }

  getNombres(): string[] {
    return [...new Set(PREGUNTA.map(pregunta => pregunta.titulo))]
  }
  mezclar(pregunta: Pregunta): { texto: string, correcta: boolean }[] {
    let opciones = [
      { texto: pregunta.respuesta_correcta, correcta: true },
      { texto: pregunta.respuesta_incorrecta1, correcta: false },
      { texto: pregunta.respuesta_incorrecta2, correcta: false },
      { texto: pregunta.respuesta_incorrecta3, correcta: false }];
    let opcionesMix = opciones.sort(() => Math.random() - 0.5);
    return opcionesMix
  }

  selectRespuesta(pregunta: Pregunta, acertado: boolean) {
    console.log(acertado)
    if (acertado) {

    }
  }

  goToPreguntas() {
    this.router.navigateByUrl('newpregunta/16')
  }
  onSubmit() {
    console.log()
  }
}
