import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-select-rol',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-rol.component.html',
  styleUrl: './select-rol.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRolComponent),
      multi: true
    }
  ]
})
export class SelectRolComponent implements ControlValueAccessor {

  @Input()
  hasError: boolean = false;

  roles: string[] = ['Administrador', 'Usuario', 'Invitado'];
  value: string = '';

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.value = selectElement.value;
    this.onChange(this.value);
    this.onTouched();
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
