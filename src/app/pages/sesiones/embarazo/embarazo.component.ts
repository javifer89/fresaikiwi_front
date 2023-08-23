import { Component } from '@angular/core';

@Component({
  selector: 'app-embarazo',
  templateUrl: './embarazo.component.html',
  styleUrls: ['./embarazo.component.scss']
})
export class EmbarazoComponent {
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
        src: '/assets/images/EMBARAZO/ELENA_EMB-134 copia 2.jpg',
        alt: 'imagen 0',
      },
      {
        src: '/assets/images/EMBARAZO/ELENA_EMB-247 copia 2.jpg',
        alt: 'imagen 1',
      },
      { src: '/assets/images/EMBARAZO/SONIETES-5.jpg', alt: 'imagen 2' },
      { src: '/assets/images/EMBARAZO/EUGE_EMB-64.jpg', alt: 'imagen 3' },
    ];
  }
}

interface GridImg{
  src: string,
  alt: string
}
