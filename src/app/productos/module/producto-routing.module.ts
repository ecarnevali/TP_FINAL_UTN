import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from '../pages/producto/producto.component';
import { ProductoDetalleComponent } from '../pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: ':id',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
