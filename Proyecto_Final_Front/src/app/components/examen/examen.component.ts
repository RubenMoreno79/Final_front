import { Component, inject } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { PreguntasService } from '../../services/pregunta.service';
import { PREGUNTA } from '../../data/pregunta.data';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {

  cursoId: number = 0
  resultadoExamen: Number[] = []
  nota: number = 0


  arrPreguntas: Pregunta[] = [];
  preguntasService = inject(PreguntasService)
  activatedRoutes = inject(ActivatedRoute)
  router = inject(Router)
  arrPreguntasMezcladas: any[] = []
  mostrar: boolean = false

  formulario: FormGroup = new FormGroup({
    valor: new FormControl(0)
  }
  )


  botonesDeshabilitados: { [key: number]: boolean } = {};

  obtenerDatosUsuario() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token_crm');
    const decodedToken = jwtHelper.decodeToken(token!);
    return decodedToken;
  }



  async ngOnInit() {
    const rol = this.obtenerDatosUsuario()
    this.activatedRoutes.params.subscribe(params => {
      this.cursoId = Number(params['cursoid'])
    })
    if (rol.rol === 'profesor') {
      this.arrPreguntas = await this.preguntasService.getAllProfesor(this.cursoId);
      this.mostrar = true
    } else if (rol.rol === 'alumno') {
      this.arrPreguntas = await this.preguntasService.getAllAlumno(this.cursoId)
    }
    for (let pregunta of this.arrPreguntas) {
      const preguntaFinal = {
        respuestas: this.mezclar(pregunta),
        enunciado: pregunta.enunciado,
        titulo: pregunta.titulo,
        id: pregunta.id
      }
      this.arrPreguntasMezcladas.push(preguntaFinal)
    }
  }

  async onChange($event: any) {
    if ($event.target.value === 'todas') {
      this.arrPreguntas = await this.preguntasService.getAllProfesor(this.cursoId);
    } else {
      this.arrPreguntas = this.preguntasService.getByNombre($event.target.value);
    }
  }

  getNombres(): string[] {
    return [...new Set(PREGUNTA.map(pregunta => pregunta.titulo))]
  }
  mezclar(pregunta: Pregunta): { texto: string, correcta: boolean }[] {
    let opciones = [
      { texto: pregunta.respuesta_correcta, correcta: true },
      { texto: pregunta.respuesta_incorrecta1, correcta: false },
      { texto: pregunta.respuesta_incorrecta2, correcta: false },
      { texto: pregunta.respuesta_incorrecta3, correcta: false }];
    let opcionesMix = opciones.sort(() => Math.random() - 0.5);
    return opcionesMix
  }

  selectRespuesta(pregunta: Pregunta, acertado: boolean) {

    if (acertado) {
      this.formulario.value.valor = 1
    } else {
      this.formulario.value.valor = 0
    }
  }

  goToPreguntas() {
    this.router.navigateByUrl(`newpregunta/${this.cursoId}`)
  }
  onSubmit() {
    if (this.formulario.value.valor === 1) {
      this.nota++
    }

  }
  onClickBoton(id: number) {
    setTimeout(() => {
      { this.botonesDeshabilitados[id] = true }

    }, 1000);
  }
  calcularNota() {
    return (this.nota / this.arrPreguntas.length) * 10
  }

  terminarExamen() {
    const resultado = Number(this.calcularNota().toFixed(2))
    if (resultado >= 5) {
      Swal.fire('Examen aprobado', `Felicidades tu nota es de ${resultado}`, 'success');
      this.preguntasService.enviarNota(resultado, this.cursoId)
      this.preguntasService.isFinish(this.cursoId)
    } else {
      Swal.fire('Examen suspendido', `Tu nota fue de ${resultado} vuelve a intentarlo`, 'error');
    }

    this.router.navigateByUrl('/usuarios/alumno/logros')
  }

  borrarPregunta(preguntaId: number) {


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
        this.preguntasService.borrrarPregunta(preguntaId)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        setTimeout(() => {
          location.reload()
        }, 1500);
      }
    });
  }

  editarPregunta(preguntaid: number) {
    this.router.navigateByUrl(`/editar/pregunta/${preguntaid}/${this.cursoId}`)
  }
}


