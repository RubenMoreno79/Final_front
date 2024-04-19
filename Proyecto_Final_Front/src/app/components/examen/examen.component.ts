import { Component, inject } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { PreguntasService } from '../../services/pregunta.service';
import { PREGUNTA } from '../../data/pregunta.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {
  arrPreguntas: Pregunta[] = [];
  preguntasService = inject(PreguntasService)
  ngOnInit() {
    this.arrPreguntas = this.preguntasService.getAll();
  }
  onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrPreguntas = this.preguntasService.getAll();
    } else {
      this.arrPreguntas = this.preguntasService.getByNombre($event.target.value);
    }
  }

  getNombres(): string[] {
    return [...new Set(PREGUNTA.map(pregunta => pregunta.titulo))]
  }

}
