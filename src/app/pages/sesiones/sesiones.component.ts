import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css'],
})
export class SesionesComponent {

  sesiones1: Sesion[];
  sesiones2: Sesion[];

  router: Router = inject(Router);
  constructor() {
    this.sesiones1 = [
      {
        title: 'Bebés',
        routes: ['/sesiones', 'bebes'],
        img: '../../../assets/images/BEBÉS/P1_FILES_EMMA_BATHMILK-5.jpg',
      },
      {
        title: 'Newborn',
        routes: ['/sesiones', 'newborn'],
        img: '../../../assets/images/NEWBORN/SOFÍA_NB-13 copia.jpg',
      },
      {
        title: 'Embarazo',
        routes: ['/sesiones', 'embarazo'],
        img: '../../../assets/images/EMBARAZO/LAURA-1 copia.jpg',
      },
      {
        title: 'Comunión',
        routes: ['/sesiones', 'comunion'],
        img: '../../../assets/images/COMUNIONES/EDURNE_EXTERIORS-135 còpia.jpg',
      },
    ];
    this.sesiones2 = [
      {
        title: 'Navidad',
        routes: ['/sesiones', 'navidad'],
        img: '../../../assets/images/NAVIDAD/',
      },
      {
        title: 'Cumples',
        routes: ['/sesiones', 'cumples'],
        img: '../../../assets/images/CUMPLE/EMMA_2-82.jpg',
      },
      {
        title: 'Familia',
        routes: ['/sesiones', 'familia'],
        img: '../../../assets/images/FAMILIA/',
      },
      {
        title: 'Fine Art',
        routes: ['/sesiones', 'fine-art'],
        img: '../../../assets/images/FINE ART/AURO+LAIA-26.jpg',
      },
    ];
  }
}
export interface Sesion {
  title: string;
  routes: string[];
  img: string;
}