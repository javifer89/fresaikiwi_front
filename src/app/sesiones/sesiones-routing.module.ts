import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './sesion/sesion.component';
// import { SesionesComponent } from '../pages/sesiones/sesiones.component';

const routes: Routes = [
  {
    path: '',
    component: SesionComponent,
  },
  {
    path: 'sesion',
    component: SesionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionesRoutingModule { }
