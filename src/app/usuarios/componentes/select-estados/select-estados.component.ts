import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { EstadoUsuario } from '../../model/estadoUsuario';

@Component({
  selector: 'app-select-estados',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-estados.component.html',
  styleUrl: './select-estados.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectEstadosComponent),
      multi: true
    }
  ]
})
export class SelectEstadosComponent implements ControlValueAccessor, OnInit {

  @Input()
  hasError: boolean = false;


  private usuariosService = inject(UsuariosService);

  listaEstados: EstadoUsuario[] = [];
  value: number | string = '';


  ngOnInit(): void {
    this.usuariosService.getEstadoAll().subscribe({
      next: (estados) => {
        if (estados) {
          this.listaEstados = estados;
        }
      },
      error: (err) => console.error('Error al cargar estados:', err)
    });
  }




  onChange: any = () => { };
  onTouched: any = () => { };



  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;


    this.value = selectedValue !== '' ? Number(selectedValue) : '';


    this.onChange(this.value !== '' ? this.value : null);
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value === undefined || value === null || value === '') {
      this.value = '';
      return;
    }

    if (typeof value === 'object' && value.id !== undefined) {
      this.value = Number(value.id);
    } else {
      this.value = !isNaN(value) ? Number(value) : '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
