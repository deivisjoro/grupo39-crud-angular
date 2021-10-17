import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesEliminarComponent } from './estudiantes-eliminar.component';

describe('EstudiantesEliminarComponent', () => {
  let component: EstudiantesEliminarComponent;
  let fixture: ComponentFixture<EstudiantesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
