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
