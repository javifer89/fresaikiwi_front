import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-comunion',
  templateUrl: './comunion.component.html',
  styleUrls: ['./comunion.component.scss']
})
export class ComunionComponent {
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
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592257/fresaikiwi/comuniones/c2mr7vux6tewxmjac3k6.jpg',
        alt: 'imagen 0',
      },
      {
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592258/fresaikiwi/comuniones/e5ddx8j1zcmqu9dcio82.jpg',
        alt: 'imagen 1',
      },
      // { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592258/fresaikiwi/comuniones/lowg2cuzmgw9endyjhn2.jpg', alt: 'imagen 3' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592257/fresaikiwi/comuniones/crpkfhvd5vlql731im63.jpg', alt: 'imagen 2' },
      {
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592258/fresaikiwi/comuniones/qc9upzc2etknfofweee3.jpg',
        alt: 'imagen 3',
      },
    ];
  }
  closeLightboxOnClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.lightboxActive = false;
    }
  }
}
// TODO FALTA REVISAR FOOTER PARA LIGHTBOX

interface GridImg{
  src: string,
  alt: string

}
