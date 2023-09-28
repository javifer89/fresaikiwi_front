import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-embarazo',
  templateUrl: './embarazo.component.html',
  styleUrls: ['./embarazo.component.scss']
})
export class EmbarazoComponent {
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
      {
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592850/fresaikiwi/embarazo/bv3dudt2czkphmqdsj6l.jpg',
        alt: 'imagen 0',
      },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592850/fresaikiwi/embarazo/shgjkzw9s98ec1ywv2gw.jpg', alt: 'imagen 1' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592852/fresaikiwi/embarazo/avqyfoplwyas7z5bidp2.jpg', alt: 'imagen 2' },
      {
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592851/fresaikiwi/embarazo/tzwfys8otbdbmgl5uozg.jpg',
        alt: 'imagen 3',
      },
    ];
  }
  // TODO REVISAR AREA del FONDO CLICKABLE PARA SALIR de la imagen (VERTICAL)
  closeLightboxOnClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.lightboxActive = false;
    }
  }
}

interface GridImg {
  src: string,
  alt: string
}
