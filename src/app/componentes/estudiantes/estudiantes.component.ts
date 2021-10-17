import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes:any[] = [];
  
  constructor(private apiService:ApiService) {
    this.estudiantes = this.apiService.getEstudiantes();

  }

  ngOnInit(): void {
  }

  promedio(n1: any, n2:any, n3:any){

    let resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3
    return resultado.toFixed(1);

  }

}
