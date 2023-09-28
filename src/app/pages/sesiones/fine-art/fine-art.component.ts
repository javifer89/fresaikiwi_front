import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-fine-art',
  templateUrl: './fine-art.component.html',
  styleUrls: ['./fine-art.component.scss']
})
export class FineArtComponent {
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
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695591750/fresaikiwi/fine-art/dxnkurmxttyytdzn2ivu.jpg', alt: 'imagen 0' },
      // { src: '/assets/images/FINE ART/AURO+LAIA-26.jpg', alt: 'imagen 1' },
      // { src: '/assets/images/FINE ART/AURO+LAIA-26.jpg', alt: 'imagen 2' },
      // { src: '/assets/images/FINE ART/AURO+LAIA-26.jpg', alt: 'imagen 3' },
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
