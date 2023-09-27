import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.scss'],
})
export class NewbornComponent {
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
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593008/fresaikiwi/newborn/x1tqausviurqtqgkq4ot.jpg',
        alt: 'imagen 0',
      },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593006/fresaikiwi/newborn/l9jaqow99kubncjvrzvu.jpg', alt: 'imagen 1' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593006/fresaikiwi/newborn/svbu4gihyvi73p6ibend.jpg', alt: 'imagen 2' },
      {
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593006/fresaikiwi/newborn/ohfjh86ijjnkzixxr4ir.jpg',
        alt: 'imagen 2',
      },
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
