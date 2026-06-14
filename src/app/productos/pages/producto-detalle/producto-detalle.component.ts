import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { pipe } from 'rxjs';
import { DescuentoPipe } from '../../../pipes/descuento.pipes';

@Component({
  selector: 'app-producto-detalle',
  imports: [CommonModule, DescuentoPipe,RouterLink],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent implements OnInit{

  id:number = 0;
  producto: Producto | undefined;

  protected router = inject(ActivatedRoute)


  constructor(private service: ProductoService){

  }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.params['id']);
    this.service.getProductoById(this.id).subscribe(result => {this.producto = result});
  }

}
