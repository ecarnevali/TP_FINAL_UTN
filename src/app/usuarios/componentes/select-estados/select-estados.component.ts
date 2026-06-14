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

  isDisabled: boolean = false;

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
    // CRITICAL: Convertimos el valor a número porque el ID de tu clase EstadoUsuario es number
    this.value = selectElement.value ? Number(selectElement.value) : '';
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value && typeof value === 'object') {
      this.value = value.id;
    } else {
      this.value = value !== undefined && value !== null ? Number(value) : '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }


}
