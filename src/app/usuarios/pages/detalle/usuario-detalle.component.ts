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

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(id);
      this.cargarUsuario();
    }
  }

}
