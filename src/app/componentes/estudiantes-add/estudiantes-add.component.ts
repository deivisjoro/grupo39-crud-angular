import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-estudiantes-add',
  templateUrl: './estudiantes-add.component.html',
  styleUrls: ['./estudiantes-add.component.css']
})
export class EstudiantesAddComponent implements OnInit {

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(nombre:any, nota1:any, nota2:any, nota3:any){
    
    let id = this.apiService.getEstudiantes().length + 1;

    let estudiante = {
      id,
      nombre,
      nota1,
      nota2,
      nota3
    };
    this.apiService.getEstudiantes().push(estudiante);
    this.router.navigate(['/estudiantes']);
  }

}
