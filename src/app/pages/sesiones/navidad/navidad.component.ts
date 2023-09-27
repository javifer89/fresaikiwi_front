import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navidad',
  templateUrl: './navidad.component.html',
  styleUrls: ['./navidad.component.scss']
})
export class NavidadComponent {
 imagenes: GridImg[] = [];
  lightboxActive: boolean = false;
  imgIndex: number = 0;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    this.lightboxActive = false;
  }
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
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592955/fresaikiwi/navidad/n2w4dahcb3h0heffahj4.jpg', alt: 'imagen 0' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592957/fresaikiwi/navidad/cuccsljzai07cnu0knfo.jpg', alt: 'imagen 1' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592955/fresaikiwi/navidad/g3mcjuzwrr7pg8ynnzqm.jpg', alt: 'imagen 2' },
      // { src: '/assets/images/NAVIDAD/MITIAMOLA_NADAL-138.jpg', alt: 'imagen 3' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592956/fresaikiwi/navidad/ztvwku2zfh1ubrku6aue.jpg', alt: 'imagen 3' },
    ];
  }
  closeLightboxOnClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.lightboxActive = false;
    }
  }
}

interface GridImg{
  src: string,
  alt: string
}
