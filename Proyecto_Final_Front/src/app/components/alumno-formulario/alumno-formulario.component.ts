import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';

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

  usuarios_id: Number = 0;
  AlumnoService = inject(AlumnosService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);


  async onSubmit() {
    const respuesta = await this.AlumnoService.create(this.formulario.value, this.usuarios_id)


    this.router.navigateByUrl('')


  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.usuarios_id = (params['usuarios_id']);

    });
  };

}
