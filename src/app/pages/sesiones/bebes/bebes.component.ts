import { Component } from '@angular/core';

@Component({
  selector: 'app-bebes',
  templateUrl: './bebes.component.html',
  styleUrls: ['./bebes.component.scss'],
})
export class BebesComponent {
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
        src: '/assets/images/BEBÉS/P1_FILES_EMMA_BATHMILK-5.jpg',
        alt: 'imagen 0',
      },
      { src: '/assets/images/BEBÉS/ALEJANDRI_9M-43.jpg', alt: 'imagen 1' },
      { src: '/assets/images/BEBÉS/ALEJANDRI_9M-43.jpg', alt: 'imagen 2' },
    ];
  }
}

interface GridImg{
  src: string,
  alt: string
}
