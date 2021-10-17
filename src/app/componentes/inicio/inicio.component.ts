import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  errorDatos = false;
  errorVacio = false;

  constructor(private sesionService:SesionService, private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(usuario:string, password:string){
    if(usuario.trim()==='' || password.trim()===''){
      this.errorVacio = true;
      return;
    }

    this.errorVacio = false;

    if(usuario.trim()==='admin' && password.trim()==='admin'){

      this.errorDatos = false;
      this.sesionService.autorizado = true;

      let sesion = {
        autorizado: true
      }

      let salida = JSON.stringify(sesion);
      sessionStorage.setItem("autorizado", salida);
      
      this.router.navigate(['/estudiantes']);
    }
    else{
      this.errorDatos = true;
    }

  }

}
