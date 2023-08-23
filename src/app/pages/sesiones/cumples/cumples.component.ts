import { Component } from '@angular/core';

@Component({
  selector: 'app-cumples',
  templateUrl: './cumples.component.html',
  styleUrls: ['./cumples.component.scss'],
})
export class CumplesComponent {
  imagenes: GridImg[] = [];
  lightboxActive: boolean = false;
  imgIndex: number = 0;

  gridImgHandler(index: number) {
    this.lightboxActive = true;
    this.imgIndex = index;
  }
  lightboxBtnHandler() {
    this.lightboxActive = false;
  }
  constructor() {
    this.imagenes = [
      {
        src: '/assets/images/CUMPLE/SANTOS-214.jpg',
        alt: 'imagen 0',
      },
      { src: '/assets/images/CUMPLE/EMMA 1 copia.jpg', alt: 'imagen 1' },
      { src: '/assets/images/CUMPLE/ALEJANDRA copia.jpg', alt: 'imagen 2' },
      { src: '/assets/images/CUMPLE/MELLIS_2-178.jpg', alt: 'imagen 3' },
    ];
  }
}

interface GridImg {
  src: string;
  alt: string;
}
