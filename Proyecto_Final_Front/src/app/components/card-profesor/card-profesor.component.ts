import { Component, Input, inject } from '@angular/core';
import { ProfesoresService } from '../../services/profesores.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/usuarios.interfaces';
import { Router } from '@angular/router';
import { Profesor } from '../../interfaces/profesores.interface';

@Component({
  selector: 'app-card-profesor',
  standalone: true,
  imports: [],
  templateUrl: './card-profesor.component.html',
  styleUrl: './card-profesor.component.css'
})
export class CardProfesorComponent {
  @Input() usuario: Usuario | null = null;
  @Input() profesor: Profesor| null = null;

  usuariosService = inject(UsuariosService);
 profesoresService = inject(ProfesoresService)

  router = inject(Router);

  async ngOnInit() {
    const profesor: any = await this.profesoresService.getProfesor();
    const usuario:any = await this.profesoresService.getProfesor2();
      console.log(usuario);
 
    this.profesor = profesor[0];
    this.usuario = usuario[0];
   
  }


  editarUsuario() {
    console.log('entra')
    if (this.usuario?.rol==='profesor'){
        this.router.navigateByUrl('/usuarios/profesor/editar');
      
    }else{
       this.router.navigateByUrl('/alumnos/editar');
           }
  }
}



