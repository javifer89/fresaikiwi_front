import { Component } from '@angular/core';

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.scss'],
})
export class NewbornComponent {
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
        src: '/assets/images/NEWBORN/SOFÍA_NB-13 copia.jpg',
        alt: 'imagen 0',
      },
      { src: '/assets/images/NEWBORN/DAREN_NB-22 copia.jpg', alt: 'imagen 1' },
      { src: '/assets/images/NEWBORN/MALENA-79 copia.jpg', alt: 'imagen 2' },
      {
        src: '/assets/images/NEWBORN/JOIA+VICENT-51 copia.jpg',
        alt: 'imagen 2',
      },
    ];
  }
}

interface GridImg {
  src: string;
  alt: string;
}
