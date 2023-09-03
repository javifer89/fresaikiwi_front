import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: any[];
  imagenSeleccionada: number = 0;
  interval: any;
  // sesiones1: Sesion[];
  // sesiones2: Sesion[];

  router: Router = inject(Router)

    constructor() {
    this.images = [
      {
        nombre: 'Newborn',
        url: '../../../assets/images/NEWBORN/EIRE-35 copia.jpg',
      },
      {
        nombre: 'Comunión',
        url: '../../../assets/images/COMUNIONES/EDURNE-74 copia.jpg',
      },
      {
        nombre: 'Cumpleaños',
        url: '../../../assets/images/CUMPLE/CARLOTA_2ANYS-147 còpia copia.jpg',
      },
      {
        nombre: 'Bebés',
        url: '../../../assets/images/BEBÉS/ALEJANDRI_9M-43.jpg',
      },
      ];
      // this.sesiones1 = [
      //   {
      //     title: 'Bebés',
      //     routes: ['/sesiones', 'bebes'],
      //     img: '../../../assets/images/BEBÉS/P1_FILES_EMMA_BATHMILK-5.jpg',
      //   },
      //   {
      //     title: 'Newborn',
      //     routes: ['/sesiones', 'newborn'],
      //     img: '../../../assets/images/NEWBORN/SOFÍA_NB-13 copia.jpg',
      //   },
      //   {
      //     title: 'Embarazo',
      //     routes: ['/sesiones', 'embarazo'],
      //     img: '../../../assets/images/EMBARAZO/LAURA-1 copia.jpg',
      //   },
      //   {
      //     title: 'Comunión',
      //     routes: ['/sesiones', 'comunion'],
      //     img: '../../../assets/images/COMUNIONES/EDURNE_EXTERIORS-135 còpia.jpg',
      //   },

      //   {
      //     title: 'Navidad',
      //     routes: ['/sesiones', 'navidad'],
      //     img: '../../../assets/images/CUMPLE/SANTOS-214.jpg',
      //   },
      //   {
      //     title: 'Cumples',
      //     routes: ['/sesiones', 'cumples'],
      //     img: '../../../assets/images/CUMPLE/SANTOS-214.jpg',
      //   },
      //   {
      //     title: 'Familia',
      //     routes: ['/sesiones', 'familia'],
      //     img: '/assets/images/CUMPLE/SANTOS-214.jpg',
      //   },
      //   {
      //     title: 'Fine Art',
      //     routes: ['/sesiones', 'fine-art'],
      //     img: '/assets/images/FINE ART/AURO+LAIA-26-2.jpg',
      //   },
      // ];
  }

  ngOnInit(): void {
    this.startInterval();
  }

  cambiaImagen() {
    this.imagenSeleccionada++;
    if (this.imagenSeleccionada >= this.images.length) {
      this.imagenSeleccionada = 0;
    }
  }
  startInterval() {
    this.interval = setInterval(() => {
      this.cambiaImagen();
    }, 5000);
  }
}
  // stopInterval() {
  //   clearInterval(this.interval);
  //   this.interval = null;
// }


export interface Image{
  nombre: string;
  url: string;
}

export interface Sesion {
  title: string;
  routes: string[];
  img: string;
}
