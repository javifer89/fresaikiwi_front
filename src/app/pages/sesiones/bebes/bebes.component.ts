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
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592241/fresaikiwi/beb%C3%A9s/rmps6g0kgwr9grnpa51z.jpg',
        alt: 'imagen 0',
      },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592240/fresaikiwi/beb%C3%A9s/zl6thcunkmoyyqthqifv.jpg', alt: 'imagen 1' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592240/fresaikiwi/beb%C3%A9s/pgfht2kpdol8elf9n2rk.jpg', alt: 'imagen 2' },
      {
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592240/fresaikiwi/beb%C3%A9s/yk3aa2su6hycxcripl8b.jpg',
        alt: 'imagen 3',
      },
    ];
  }
}

interface GridImg{
  src: string,
  alt: string
}
