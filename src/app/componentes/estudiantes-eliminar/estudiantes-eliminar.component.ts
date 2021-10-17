import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-estudiantes-eliminar',
  templateUrl: './estudiantes-eliminar.component.html',
  styleUrls: ['./estudiantes-eliminar.component.css']
})
export class EstudiantesEliminarComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private apiService:ApiService, private router:Router) {

    this.activatedRoute.params.subscribe((parametros)=>{
      let id = parametros.id;
      let nuevos = this.apiService.getEstudiantes().filter((e)=>{
        return e.id!=id;
      })  

      this.apiService.setEstudiantes(nuevos);
      this.router.navigate(['/estudiantes']);
    })


  }

  ngOnInit(): void {
  }

}
