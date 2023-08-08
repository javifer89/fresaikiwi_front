import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   images: any[];
  imagenSeleccionada: number = 0;
  interval: any;

  // images = [
  //   '../../../assets/images/NEWBORN/EIRE-35 copia.jpg',
  //   '../../../assets/images/COMUNIONES/EDURNE-74 copia.jpg',
  //   '../../../assets/images/CUMPLE/CARLOTA_2ANYS-147 còpia copia.jpg',
  //   '../../../assets/images/BEBÉS/ALEJANDRI_9M-43.jpg',
  //   '../../../assets/images/COMUNIONES/SYRA_EXTERIORS-69 copia.jpg',
  //   '../../../assets/images/EMBARAZO/EUGE_EMB-8.jpg',
  // ];
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
      {
        nombre: 'Comunión',
        url: '../../../assets/images/COMUNIONES/SYRA_EXTERIORS-69 copia.jpg',
      },
      {
        nombre: 'Embarazo',
        url: '../../../assets/images/EMBARAZO/EUGE_EMB-8.jpg',
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
  stopInterval() {
    clearInterval(this.interval);
    this.interval = null;
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.cambiaImagen();
    }, 5000);
  }
}
