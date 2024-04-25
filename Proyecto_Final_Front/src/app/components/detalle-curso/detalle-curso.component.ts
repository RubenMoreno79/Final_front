import { Component, Inject, inject } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AlumnosService } from '../../services/alumnos.service';
import { TemariosService } from '../../services/temarios.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';



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
  mostrar: boolean = false
  cursoId: number = 0;
  tieneCurso: boolean = false

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
      this.mostrar = true
      const respuesta = await this.temarioSercice.getAllLeccionesProfesor(this.cursoId)
      this.leccionId = respuesta[0].id

    } else if (rol.rol === 'alumno') {
      const respuestaCurso = await this.alumnoService.info(this.cursoId)
      console.log(respuestaCurso)
      if (respuestaCurso.length < 1) {
        this.tieneCurso = true
      }
      this.mostrar = false
      const respuesta2 = await this.temarioSercice.getAllLeccionesAlumno(this.cursoId)
      console.log(respuesta2)
      this.leccionId = respuesta2[0].id
    }





  };


  async addCurso() {
    const respuesta = await this.alumnoService.addCurso(this.cursoId);
    this.router.navigateByUrl(`usuarios/alumno/miscursos`)
  };

  goToLecciones() {
    this.router.navigateByUrl(`leccion/${this.leccionId}/1`)
  }
  addLeccion() {
    this.router.navigateByUrl(`temario/${this.cursoId}`)
  }
  borrarCurso() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursosService.borrarCurso(this.cursoId)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  editarCurso() {
    this.router.navigateByUrl(`editar/curso/${this.cursoId}`)
  }


}
