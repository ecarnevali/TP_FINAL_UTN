import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-usuario-detalle',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent implements OnInit {

  idUsuario: number = 0;
  usuario: Usuario | undefined

  constructor(private route: ActivatedRoute, private usuarioService: UsuariosService) { }

  get isSuspendido(): boolean {
    return this.usuario?.estado.id !== 1;
  }

  get isActivo(): boolean {
    return this.usuario?.estado.id !== 3 && this.usuario?.estado.id !== 2;
  }

  get isBaja(): boolean {
    return this.usuario?.estado.id !== 1;
  }

  ngOnInit(): void {

    this.idUsuario = Number(this.route.snapshot.params['id']);
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.usuarioService.getUsuarioById(this.idUsuario).subscribe(result => {
      if (result) {
        this.usuario = result;
      }
    })
  }

  eliminarUsuario() {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(this.idUsuario);
      this.cargarUsuario();
    }
  }

  baja() {
    if (confirm('¿Estás seguro de que deseas dar de baja este usuario?')) {
      this.usuarioService.cambiarEstado(2, this.idUsuario).subscribe(result =>
        this.usuario = result
      );

    }
  }

  suspender() {
    if (confirm('¿Estás seguro de que deseas suspender este usuario?')) {
      this.usuarioService.cambiarEstado(3, this.idUsuario).subscribe(result =>
        this.usuario = result
      );

    }
  }

  activar() {
    if (confirm('¿Estás seguro de que deseas activar este usuario?')) {
      this.usuarioService.cambiarEstado(1, this.idUsuario).subscribe(result =>
        this.usuario = result
      );

    }
  }

}
