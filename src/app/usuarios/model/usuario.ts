import { EstadoUsuario } from "./estadoUsuario";

export class Usuario {
    id: number; 
    nombre: string;
    email: string
    rol: string;
    estado: EstadoUsuario;

    constructor(id: number, nombre: string, email: string, rol: string, estado: EstadoUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.estado = estado;
    }
}

