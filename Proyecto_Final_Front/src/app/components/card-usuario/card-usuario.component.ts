import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interfaces';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'card-usuario',
  standalone: true,
  imports: [],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {

  @Input()usuario: Usuario | null = null;

activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  

 
}


//   UsuarioPrueba: Usuario= {
//     nombre: "ana",
//     apellidos:"perez",
//     username: "anita",
//     email:"ana@gmail.com",
//    password: "12345",
//    rol: "alumno",
//    fecha_nacimiento: new Date("1988/02/02"),
//   telefono: "602539329",
//   genero: "m" ,


//   }
// }

