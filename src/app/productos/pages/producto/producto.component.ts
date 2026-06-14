import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DescuentoPipe } from '../../../pipes/descuento.pipes';

@Component({
  selector: 'app-producto',
  imports: [CommonModule, RouterLink, DescuentoPipe],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

  listaProducto: Producto[] = [];

  constructor(private service: ProductoService) {

  }

  ngOnInit(): void {
    this.service.getProductoAll().subscribe(p => { if (p) this.listaProducto = p });
  }

  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.service.deleteProducto(id).subscribe(x => {if(x){ this.listaProducto = x}});
    }
  }

}
