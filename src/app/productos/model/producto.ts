export class Producto {
    id: number
    titulo: string;
    precio: number;
    descripcion: string;
    descuento: number;

    constructor(id:number,titulo: string, precio: number, descripcion: string, descuento: number,) {
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.descuento = descuento
    }
}