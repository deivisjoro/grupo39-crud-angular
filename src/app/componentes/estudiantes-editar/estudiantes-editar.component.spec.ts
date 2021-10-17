import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesEditarComponent } from './estudiantes-editar.component';

describe('EstudiantesEditarComponent', () => {
  let component: EstudiantesEditarComponent;
  let fixture: ComponentFixture<EstudiantesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
