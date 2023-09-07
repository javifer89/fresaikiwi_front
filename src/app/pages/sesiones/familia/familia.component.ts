import { Component } from '@angular/core';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss'],
})
export class FamiliaComponent {
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
        src: '/assets/images/FAMILIA/PAM_FAMILY-6.jpg',
        alt: 'imagen 0',
      },
      { src: '/assets/images/FAMILIA/PAM_FAMILY-50.jpg', alt: 'imagen 1' },
      { src: '/assets/images/FAMILIA/PAM_FAMILY-231.jpg', alt: 'imagen 2' },
      { src: '/assets/images/FAMILIA/PAM_FAMILY-227.jpg', alt: 'imagen 3' },
    ];
  }
}

interface GridImg {
  src: string;
  alt: string;
}
