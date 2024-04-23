import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresService } from '../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profesor-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profesor-formulario.component.html',
  styleUrl: './profesor-formulario.component.css'
})
export class ProfesorFormularioComponent {

  formulario: FormGroup = new FormGroup({

    experiencia: new FormControl(),
    campo_experiencia: new FormControl(),
    descripcion_experiencia: new FormControl(),
    foto: new FormControl(),
  })

  ProfesorService = inject(ProfesoresService);
  router = inject(Router);

  onSubmit() {
    this.ProfesorService.create(this.formulario.value)
    this.router.navigateByUrl('usuarios/profesor')
  }
}
