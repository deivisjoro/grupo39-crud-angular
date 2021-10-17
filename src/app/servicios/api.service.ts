import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private estudiantes:any[] = [];

  constructor() { }

  getEstudiantes():any[]{

    /*
      import { HttpClient, HttpHeaders } from '@angular/common/http';

      const peticion = `http://localhost/api/estudiantes`;

      const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"'
      })

      return this.httpClient.get(peticion, null, { headers }).pipe( map( (data:any)=>{
      return data;
     }));
    
    */

    return this.estudiantes;

  }

  setEstudiantes(estudiantes:any){
    this.estudiantes = estudiantes;
  }

  getProductos(){
    fetch("http://localhost:8080/tienda/api/productos")
    .then(respuesta=>{
      return respuesta.json()
    })
    .then(productos=>{
      for(let i=0; i<productos.length;i++){

        this.estudiantes.push(productos[i]); 
      }
    })
  }
}
