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
        src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592917/fresaikiwi/familia/sahci7wbvfq5e6qof2cx.jpg',
        alt: 'imagen 0',
      },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592917/fresaikiwi/familia/c331gabfkqrmur8qrzzi.jpg', alt: 'imagen 1' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592918/fresaikiwi/familia/kgytggvtllvyagltlo0s.jpg', alt: 'imagen 2' },
      { src: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592917/fresaikiwi/familia/ttsbbxkprnopjqtc9hfm.jpg', alt: 'imagen 3' },
    ];
  }
}

interface GridImg {
  src: string;
  alt: string;
}
