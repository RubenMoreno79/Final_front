import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuarios.interfaces';

@Component({
  selector: 'card-usuario',
  standalone: true,
  imports: [],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {
  @Input() usuario: Usuario | null = null;

  
}
