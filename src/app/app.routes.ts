import { Routes } from '@angular/router';
import { AsignaturasComponent } from './componentes/asignaturas/asignaturas.component';
import { EstudiantesAddComponent } from './componentes/estudiantes-add/estudiantes-add.component';
import { EstudiantesEditarComponent } from './componentes/estudiantes-editar/estudiantes-editar.component';
import { EstudiantesEliminarComponent } from './componentes/estudiantes-eliminar/estudiantes-eliminar.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SesionGuard } from './guardianes/sesion.guard';

export const RUTAS: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'estudiantes', component: EstudiantesComponent, canActivate: [SesionGuard]},
    { path: 'asignaturas', component: AsignaturasComponent},
    { path: 'estudiantes-add', component: EstudiantesAddComponent, canActivate: [SesionGuard]},
    { path: 'estudiantes-editar/:id', component: EstudiantesEditarComponent, canActivate: [SesionGuard]},
    { path: 'estudiantes-eliminar/:id', component: EstudiantesEliminarComponent, canActivate: [SesionGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];