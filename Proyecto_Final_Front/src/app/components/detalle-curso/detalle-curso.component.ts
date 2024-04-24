import { Component, Inject, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AlumnosService } from '../../services/alumnos.service';
import { TemariosService } from '../../services/temarios.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'detalle-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent {

  curso: Curso[] = []
  leccionId: Number = 0

  cursoId: Number = 0;

  activatedRoute = inject(ActivatedRoute);
  cursosService = inject(CursosService);
  alumnoService = inject(AlumnosService);
  temarioSercice = inject(TemariosService)
  router = inject(Router)

  obtenerDatosUsuario() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token_crm');
    const decodedToken = jwtHelper.decodeToken(token!);
    return decodedToken;
  }
  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cursoId = Number(params['cursoId']);

    })
    const rol = this.obtenerDatosUsuario()

    this.curso = await this.cursosService.getById(this.cursoId);
    if (rol.rol === 'profesor') {
      const respuesta = await this.temarioSercice.getAllLeccionesProfesor(this.cursoId)
      this.leccionId = respuesta[0].id

    } else if (rol.rol === 'alumno') {
      const respuesta2 = await this.temarioSercice.getAllLeccionesAlumno(this.cursoId)
      this.leccionId = respuesta2[0].id
    }



  };


  async addCurso() {
    const respuesta = await this.alumnoService.addCurso(this.cursoId);
    console.log(respuesta);
  };

  goToLecciones() {
    this.router.navigateByUrl(`leccion/${this.leccionId}`)
  }
  addLeccion() {
    this.router.navigateByUrl(`temario/${this.cursoId}`)
  }



}
