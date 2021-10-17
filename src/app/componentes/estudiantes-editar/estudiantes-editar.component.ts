import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-estudiantes-editar',
  templateUrl: './estudiantes-editar.component.html',
  styleUrls: ['./estudiantes-editar.component.css']
})
export class EstudiantesEditarComponent implements OnInit {

  estudiante:any = {
    id: 0,
    nombre: "",
    nota1: 0,
    nota2: 0,
    nota3: 0
  };

  constructor(private activatedRoute:ActivatedRoute, private apiService:ApiService, private router:Router ) { 

    this.activatedRoute.params.subscribe((parametros)=>{
      let id = parametros.id;
      this.apiService.getEstudiantes().forEach((e)=>{
        if(e.id==id){
          this.estudiante = e; 
          return;         
        }
      })   
    })

  }

  ngOnInit(): void {
  }

  guardar(nombre:any, nota1:any, nota2:any, nota3:any){
    this.apiService.getEstudiantes().forEach((e)=>{
      if(e.id==this.estudiante.id){
        e.nombre = nombre;
        e.nota1 = nota1;
        e.nota2 = nota2;
        e.nota3 = nota3;
        this.router.navigate(['/estudiantes']);
        return;
      }
    })
  }

}
