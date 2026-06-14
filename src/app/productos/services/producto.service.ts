import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  lista_producto: Producto[] = [
    {
      id: 0,
      titulo: 'playstetion 5',
      descripcion: 'Sony 4k HDR',
      descuento: 10,
      precio: 1400000
    },
    {
      id: 1,
      titulo: 'joystick',
      descripcion: 'Control Inalámbrico DualSense',
      descuento: 20,
      precio: 150000
    },
    {
      id: 2,
      titulo: 'PS5 Ghost of Yotei',
      descripcion: 'Sony Interactive Entertainment',
      descuento: 20,
      precio: 180000
    }
  ]


  constructor() { }

  getProductoAll(): Observable<Producto[]> {
    return of(this.lista_producto);
  }

  getProductoById(id: number): Observable<Producto | undefined> {
    return of(this.lista_producto.find(x => x.id === id));
  }

  deleteProducto(id: number): Observable<Producto[] | undefined> {
    this.lista_producto = this.lista_producto.filter(p => p.id !== id);
    return of(this.lista_producto);
  }

}
