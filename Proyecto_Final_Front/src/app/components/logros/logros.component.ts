import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Curso } from '../../interfaces/cursos.interface';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.css'
})
export class LogrosComponent {

  alumnosService = inject(AlumnosService)
  cursosCompletados: Curso[] = []

  async ngOnInit() {
    const cursos = await this.alumnosService.getMisCursos()
    this.cursosCompletados = cursos.filter(objeto => objeto.nota >= 5)

  }

}
