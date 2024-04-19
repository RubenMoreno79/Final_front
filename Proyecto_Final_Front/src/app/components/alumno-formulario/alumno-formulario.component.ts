import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumno-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './alumno-formulario.component.html',
  styleUrl: './alumno-formulario.component.css'
})
export class AlumnoFormularioComponent {

  formulario: FormGroup = new FormGroup({


    campoInteres: new FormControl(),
    foto: new FormControl(),
  })

  AlumnoService = inject(AlumnosService);
  router = inject(Router);

  onSubmit() {
    this.AlumnoService.create(this.formulario.value)
    this.router.navigateByUrl('')
  }
}
