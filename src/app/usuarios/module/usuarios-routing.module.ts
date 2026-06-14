import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from '../pages/usuarios/usuarios.component';
import { UsuarioDetalleComponent } from '../pages/detalle/usuario-detalle.component';
import { UsuarioAltaComponent } from '../pages/alta/usuario-alta.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
    {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'alta',
    component: UsuarioAltaComponent
  },
  {
    path: ':id',
    component: UsuarioDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
