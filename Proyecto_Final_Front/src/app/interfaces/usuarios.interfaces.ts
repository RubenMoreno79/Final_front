export interface Usuario {
    id?: number,
    username: string,
    email: string;
    password: string;
    rol: string;
    nombre: string;
    apellidos: string;
    fecha_nacimiento?: Date;
    updafechaRegisto?: Date;
    genero: string;
    telefono: string;

} 