import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { AsignaturasComponent } from './componentes/asignaturas/asignaturas.component';

import { RUTAS } from './app.routes';
import { EstudiantesAddComponent } from './componentes/estudiantes-add/estudiantes-add.component';
import { EstudiantesEditarComponent } from './componentes/estudiantes-editar/estudiantes-editar.component';
import { EstudiantesEliminarComponent } from './componentes/estudiantes-eliminar/estudiantes-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    EstudiantesComponent,
    AsignaturasComponent,
    EstudiantesAddComponent,
    EstudiantesEditarComponent,
    EstudiantesEliminarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( RUTAS, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
