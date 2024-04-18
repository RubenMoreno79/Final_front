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
  temario: Temario | null = null

  activatedRoute = inject(ActivatedRoute);
  temariosService = inject(TemariosService)
  router: any;
  urlSafe: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const temarioId = Number(params['temarioId']);

      this.temario = this.temariosService.getById(temarioId);
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.temario!.video)

    });
  }
}
