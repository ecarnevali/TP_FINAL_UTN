import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../../dto/usuarioDto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { SelectEstadosComponent } from '../../componentes/select-estados/select-estados.component';
import { SelectRolComponent } from '../../componentes/select-rol/select-rol.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alta',
  imports: [CommonModule, ReactiveFormsModule, SelectEstadosComponent, SelectRolComponent, RouterLink],
  templateUrl: './usuario-alta.component.html',
  styleUrl: './usuario-alta.component.css'
})
export class UsuarioAltaComponent {

  usuarioDto: UsuarioDto | null = null;

  fGroup: FormGroup;

  errorMessage: string | null = null;
  enviado: boolean = false;
  colorExito: string = 'green';



  constructor(private services: UsuariosService, private fb: FormBuilder) {
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
      idEstado: ['', Validators.required]
    })

  }



  alta() {
    if (!this.fGroup.valid) return;

    this.usuarioDto = {
      ...this.fGroup.value,
      idEstado: Number(this.fGroup.value.idEstado),
    } as UsuarioDto;

    try {
      this.services.agregarUsuario(this.usuarioDto);

      this.enviado = true;
    } catch (error: any) {
      this.errorMessage = error;
    }


  }

  mensajeErrores: any = {
    nombre: [
      { tipo: 'required', mensaje: 'El nombre es obligatorio' },
      { tipo: 'minlength', mensaje: 'El nombre debe tener al menos 3 caracteres' }
    ],
    email: [
      { tipo: 'required', mensaje: 'El email es obligatorio' },
      { tipo: 'email', mensaje: 'El email no es válido' }
    ]
  };

  cerrarMensaje() {

    this.errorMessage = null;
    this.enviado = false;
    this.fGroup.reset();
  }

}
