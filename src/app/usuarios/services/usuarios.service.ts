import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioDto } from '../dto/usuarioDto';
import { EstadoUsuario } from '../model/estadoUsuario';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaEstados: EstadoUsuario[] = [
    new EstadoUsuario(1, 'Activo'),
    new EstadoUsuario(2, 'Inactivo'),
    new EstadoUsuario(3, 'Suspendido')
  ];

  listadoUsuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Eduardo Carnevali',
      email: 'eduardo.carnevali@example.com',
      rol: 'Administrador',
      estado: new EstadoUsuario(1, 'Activo')
    },
    {
      id: 2,
      nombre: 'Juan Gómez',
      email: 'juan.gomez@example.com',
      rol: 'Usuario',
      estado: new EstadoUsuario(1, 'Activo')
    },
    {
      id: 3,
      nombre: 'Natalia Pérez',
      email: 'natalia.perez@example.com',
      rol: 'Usuario',
      estado: new EstadoUsuario(1, 'Activo')
    },
    {
      id: 4,
      nombre: 'Marta Rodríguez',
      email: 'marta.rodriguez@example.com',
      rol: 'Usuario',
      estado: new EstadoUsuario(1, 'Activo')
    },
    {
      id: 5,
      nombre: 'Renata Carnevali',
      email: 'renata.carnevali@example.com',
      rol: 'Usuario',
      estado: new EstadoUsuario(1, 'Activo')
    }
  ];

  constructor() { }

  getEstadoAll(): Observable<EstadoUsuario[] | undefined> {
    return of(this.listaEstados);
  }

  getEstadoById(id: number): Observable<EstadoUsuario | undefined> {

    return of(this.listaEstados.find(estado => estado.id === id));


  }

  getUsuario(): Observable<Usuario[]> {
    return of(this.listadoUsuarios);
  }

  getUsuarioById(id: number): Observable<Usuario | undefined> {
    return of(this.listadoUsuarios.find(usuario => usuario.id === id));
  }

  agregarUsuario(usuario: UsuarioDto) {
    const emailExiste = this.listadoUsuarios.some(u => u.email.toLowerCase() === usuario.email.toLowerCase());
    if (emailExiste) {
      throw new Error('El correo electrónico ya se encuentra registrado.');
    }

    const estado = this.listaEstados.find(e => e.id === usuario.idEstado);
    if (!estado) {
      throw new Error('El estado seleccionado no es válido.');
    }

    const nuevoId = this.listadoUsuarios.length > 0 ? Math.max(...this.listadoUsuarios.map(u => u.id)) + 1 : 1;
    var nuevoUsuario: Usuario = {
      id: nuevoId,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      estado: estado
    }
    this.listadoUsuarios.push(nuevoUsuario);
  }

  deleteUsuario(id: number): void {
    this.listadoUsuarios = this.listadoUsuarios.filter(usuario => usuario.id !== id);
  }

  baja(id: number): Observable<Usuario | undefined> {

    const estadoBaja = this.listaEstados.find(e => e.id === 2);
    this.listadoUsuarios = this.listadoUsuarios.map(usuario =>
      usuario.id === id ? { ...usuario, estado: estadoBaja ?? usuario.estado } : usuario
    );

    return of(this.listadoUsuarios.find(usuario => usuario.id === id));
  }

  cambiarEstado(idEstado: number, id: number) {
    const estadoBaja = this.listaEstados.find(e => e.id === idEstado);
    this.listadoUsuarios = this.listadoUsuarios.map(usuario =>
      usuario.id === id ? { ...usuario, estado: estadoBaja ?? usuario.estado } : usuario
    );

    return of(this.listadoUsuarios.find(usuario => usuario.id === id));

  }

}
