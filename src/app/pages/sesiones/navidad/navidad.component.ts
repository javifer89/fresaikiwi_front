import { Component } from '@angular/core';

@Component({
  selector: 'app-navidad',
  templateUrl: './navidad.component.html',
  styleUrls: ['./navidad.component.scss']
})
export class NavidadComponent {
 imagenes: GridImg[] = [];
  lightboxActive: boolean = false;
  imgIndex: number = 0;

  gridImgHandler(index: number) {
    this.lightboxActive = true;
    this.imgIndex = index
  }
  lightboxBtnHandler() {
    this.lightboxActive = false;
  }
  constructor() {
    this.imagenes = [
      // { src: '/assets/images/NAVIDAD/ISARD_NADAL-67.jpg', alt: 'imagen 0' },
      { src: '/assets/images/NAVIDAD/ALEJITO_NAVIDAD-98.jpg', alt: 'imagen 0' },
      { src: '/assets/images/NAVIDAD/PROBA_DECORAT-22 copia 2.jpg', alt: 'imagen 1' },
      { src: '/assets/images/NAVIDAD/MIGUEL_NADAL-129.jpg', alt: 'imagen 2' },
      // { src: '/assets/images/NAVIDAD/MITIAMOLA_NADAL-138.jpg', alt: 'imagen 3' },
      { src: '/assets/images/NAVIDAD/EMMA_ELFA-1 copia.jpg', alt: 'imagen 3' },
    ];
  }
}

interface GridImg{
  src: string,
  alt: string
}
