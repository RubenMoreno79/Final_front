import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Temario } from '../../interfaces/temario.interface';
import { TemariosService } from '../../services/temarios.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';



@Component({
  selector: 'card-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-curso.component.html',
  styleUrl: './card-curso.component.css',
  providers: [],

})
export class CardCursoComponent {
  temario: Temario[] | null = null
  arrTemas: Temario[] = []
  curso_id: Number = 0
  temarioId: number = 0

  activatedRoute = inject(ActivatedRoute);
  temariosService = inject(TemariosService)
  router = inject(Router)
  urlSafe: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) {

  }
  obtenerDatosUsuario() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token_crm');
    const decodedToken = jwtHelper.decodeToken(token!);
    return decodedToken;
  }


  async ngOnInit() {
    const rol = this.obtenerDatosUsuario()
    this.activatedRoute.params.subscribe(async params => {
      this.temarioId = Number(params['temarioId']);
      this.temario = await this.temariosService.getById(this.temarioId);


      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.temario[0].video)

      if (rol.rol === 'profesor') {
        this.arrTemas = await this.temariosService.getAllLeccionesProfesor(this.temario[0].curso_id)
      } else if (rol.rol === 'alumno') {
        this.arrTemas = await this.temariosService.getAllLeccionesAlumno(this.temario[0].curso_id)
      }
      this.curso_id = this.temario[0].curso_id
    });
  }

  addLeccion() {
    this.router.navigateByUrl(`temario/${this.temario![0].curso_id}`)
  }

  borrarLeccion() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.temariosService.borrarLeccions(this.temarioId)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.router.navigateByUrl(`cursos/${this.arrTemas[0].curso_id}`)
      }
    });
  }

  editarLeccion() {
    this.router.navigateByUrl(`/editar/leccion/${this.temarioId}`)
  }

}
