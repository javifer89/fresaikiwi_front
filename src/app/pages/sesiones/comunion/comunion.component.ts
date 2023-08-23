import { Component } from '@angular/core';

@Component({
  selector: 'app-comunion',
  templateUrl: './comunion.component.html',
  styleUrls: ['./comunion.component.scss']
})
export class ComunionComponent {
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
      {
        src: '/assets/images/COMUNIONES/FINALS_MARC_COMU-126 còpia.jpg',
        alt: 'imagen 0',
      },
      {
        src: '/assets/images/COMUNIONES/SYRA_EXTERIORS-110.jpg',
        alt: 'imagen 1',
      },
      {
        src: '/assets/images/COMUNIONES/EDURNE_EXTERIORS-135 còpia.jpg',
        alt: 'imagen 2',
      },
      { src: '/assets/images/COMUNIONES/EDURNE-23 copia.jpg', alt: 'imagen 3' },
    ];
  }
}

interface GridImg{
  src: string,
  alt: string

}
