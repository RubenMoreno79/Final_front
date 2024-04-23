import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Temario } from '../../interfaces/temario.interface';
import { TemariosService } from '../../services/temarios.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';



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

  activatedRoute = inject(ActivatedRoute);
  temariosService = inject(TemariosService)
  router: any;
  urlSafe: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) {

  }
  obtenerDatosUsuario() {
    const jwtHelper = new JwtHelperService(); // Crear una instancia de JwtHelperService
    const token = localStorage.getItem('token_crm'); // Obtener el token de tu almacenamiento (ej. localStorage)
    const decodedToken = jwtHelper.decodeToken(token!);
    return decodedToken; // Aquí puedes ver los datos del usuario
  }

  //TODO: Acabar bien toda la funcionalidad de este componente, tanto para alumnos como para profesores.
  ngOnInit() {
    const rol = this.obtenerDatosUsuario()
    this.activatedRoute.params.subscribe(async params => {
      const temarioId = Number(params['temarioId']);

      this.temario = await this.temariosService.getById(temarioId);
      console.log(this.temario[0].curso_id)

      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.temario[0].video)

      if (rol.rol === 'profesor') {
        this.arrTemas = await this.temariosService.getAllLeccionesProfesor(this.temario[0].curso_id)
      } else if (rol.rol === 'alumno') {
        this.arrTemas = await this.temariosService.getAllLeccionesAlumno(this.temario[0].curso_id)
      }
      this.curso_id = this.temario[0].curso_id

    });

  }
}
