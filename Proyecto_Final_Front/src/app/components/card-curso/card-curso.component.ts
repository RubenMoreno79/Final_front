import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Temario } from '../../interfaces/temario.interface';
import { TemariosService } from '../../services/temarios.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



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
  curso_id: Number = 16

  activatedRoute = inject(ActivatedRoute);
  temariosService = inject(TemariosService)
  router: any;
  urlSafe: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) {

  }
  //TODO: Acabar bien toda la funcionalidad de este componente, tanto para alumnos como para profesores.
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const temarioId = Number(params['temarioId']);

      this.temario = await this.temariosService.getById(temarioId);
      console.log(this.temario)
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.temario[0].video)
      this.arrTemas = await this.temariosService.getAllLeccionesProfesor(this.curso_id)
      console.log(this.arrTemas)
    });
  }
}
