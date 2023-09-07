import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionesRoutingModule } from './sesiones-routing.module';
import { SesionComponent } from './sesion/sesion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SesionComponent
  ],
  imports: [
    CommonModule,
    SesionesRoutingModule,
    SharedModule
  ]
})
export class SesionesModule { }
