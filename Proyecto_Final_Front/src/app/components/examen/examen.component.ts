import { Component, inject } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { PreguntasService } from '../../services/pregunta.service';
import { PREGUNTA } from '../../data/pregunta.data';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {

  cursoId: Number = 0

  arrPreguntas: Pregunta[] = [];
  preguntasService = inject(PreguntasService)
  activatedRoutes = inject(ActivatedRoute)




  async ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.cursoId = Number(params['cursoid'])
    })
    this.arrPreguntas = await this.preguntasService.getAllProfesor(this.cursoId);
    console.log(this.arrPreguntas)
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
  mezclar(opcion1: string, opcion2: string, opcion3: string, opcion4: string) {
    let opciones = [opcion1, opcion2, opcion3, opcion4];
    let opcionesMix = opciones.sort(() => Math.random() - 0.5);
    return opcionesMix

  }
}
