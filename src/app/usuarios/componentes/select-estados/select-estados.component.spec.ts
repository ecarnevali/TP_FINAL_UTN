import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEstadosComponent } from './select-estados.component';

describe('SelectEstadosComponent', () => {
  let component: SelectEstadosComponent;
  let fixture: ComponentFixture<SelectEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectEstadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
