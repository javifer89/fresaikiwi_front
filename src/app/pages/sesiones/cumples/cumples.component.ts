import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cumples',
  templateUrl: './cumples.component.html',
  styleUrls: ['./cumples.component.scss'],
})
export class CumplesComponent {
  imagenes: GridImg[] = [];
  lightboxActive: boolean = false;
  imgIndex: number = 0;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    this.lightboxActive = false;
  }
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
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/bmnofeswolwchazsxtnb.jpg',
        alt: 'imagen 0',
      },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/xy96eu1tbfg7z6dnt4fe.jpg', alt: 'imagen 1' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/c11cnmlojiwoaypepuhr.jpg', alt: 'imagen 2' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/n5swllh8h9piynq69w8f.jpg', alt: 'imagen 3' },
    ];
  }
  closeLightboxOnClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.lightboxActive = false;
    }
  }
}

interface GridImg {
  src: string;
  alt: string;
}
