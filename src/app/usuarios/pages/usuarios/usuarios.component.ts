import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../model/usuario';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  listadoUsuarios: Usuario[] = [];

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.service.getUsuario().subscribe(usuarios => {
      this.listadoUsuarios = usuarios;
    });
  }

  eliminarUsuario(id: number){
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.service.deleteUsuario(id);
      this.cargarUsuarios();
    }
  }


}

