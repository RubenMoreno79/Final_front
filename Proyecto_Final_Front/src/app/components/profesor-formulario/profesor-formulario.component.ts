import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    especialidad: new FormControl(),
    descripcion_experiencia: new FormControl(),
    foto: new FormControl(),
  })

  usuarios_id: Number = 0;
  ProfesorService = inject(ProfesoresService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);


  async onSubmit() {
    const respuesta = await this.ProfesorService.create(this.formulario.value, this.usuarios_id)

    this.router.navigateByUrl('')


  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.usuarios_id = (params['usuarios_id']);

    });
  };

}
