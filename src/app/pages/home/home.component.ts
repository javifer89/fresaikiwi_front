import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // images: any[];
  imagenSeleccionada: number = 0;
  interval: any;

  images = [
    '../../../assets/images/NEWBORN/EIRE-35 copia.jpg',
    '../../../assets/images/COMUNIONES/EDURNE-74 copia.jpg',
    '../../../assets/images/CUMPLE/CARLOTA_2ANYS-147 còpia copia.jpg',
    '../../../assets/images/BEBÉS/ALEJANDRI_9M-43.jpg',
    '../../../assets/images/COMUNIONES/SYRA_EXTERIORS-69 copia.jpg',
    '../../../assets/images/EMBARAZO/EUGE_EMB-8.jpg',
  ];
  constructor() {
    // this.images = [
    //   {
    //     nombre: 'Sala de conferencias',
    //     url: '../../../assets/images/NEWBORN/EIRE-35 copia.jpg',
    //     descripcion: 'Sala de conferencias',
    //   },
    //   {
    //     nombre: 'Sala de conciertos',
    //     url: '../../../assets/images/COMUNIONES/EDURNE-74 copia.jpg',
    //     descripcion: 'Sala de conciertos Hotel Hacienda de Cortés',
    //   },
    //   {
    //     nombre: 'Sala de exposiciones',
    //     url: '../../../assets/images/CUMPLE/CARLOTA_2ANYS-147 còpia copia.jpg',
    //     descripcion: 'Sala de exposiciones',
    //   },
    //   {
    //     nombre: 'Sala de formación',
    //     url: '../../../assets/images/BEBÉS/ALEJANDRI_9M-43.jpg',
    //     descripcion: 'Sala de formación Da Vinci',
    //   },
    //   {
    //     nombre: 'Teatro Jovellanos',
    //     url: '../../../assets/images/COMUNIONES/SYRA_EXTERIORS-69 copia.jpg',
    //     descripcion: 'Teatro Jovellanos de Gijón',
    //   },
    //   {
    //     nombre: 'Sala de conferencias Chachi',
    //     url: '../../../assets/images/EMBARAZO/EUGE_EMB-8.jpg',
    //     descripcion: 'Teatro Jovellanos de Gijón',
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
