// import { Component, inject } from '@angular/core';
// import { Router } from '@angular/router';

import { Component, ViewChild, ElementRef, AfterViewInit,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css'],
})
// export class SesionesComponent {
export class SesionesComponent implements AfterViewInit {
  @ViewChild('componentToScrollTo') componentToScrollTo!: ElementRef;
  scrollToComponent = true; // Variable para controlar el scroll

  sesiones: Sesion[];

  // router: Router = inject(Router);

  constructor(private router: Router) {

    this.sesiones = [
      {
        title: 'Bebés',
        routes: ['/sesiones', 'bebes'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592240/fresaikiwi/beb%C3%A9s/yk3aa2su6hycxcripl8b.jpg',
      },
      {
        title: 'Newborn',
        routes: ['/sesiones', 'newborn'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593008/fresaikiwi/newborn/x1tqausviurqtqgkq4ot.jpg',
      },
      {
        title: 'Embarazo',
        routes: ['/sesiones', 'embarazo'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592851/fresaikiwi/embarazo/t2vtbcngm3vsrlrxtsy9.jpg',
      },
      {
        title: 'Cumples',
        routes: ['/sesiones', 'cumples'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/xfgrg379dfmupmiipyo8.jpg',
      },
      {
        title: 'Comunión',
        routes: ['/sesiones', 'comunion'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592258/fresaikiwi/comuniones/qc9upzc2etknfofweee3.jpg',
      },
      {
        title: 'Familia',
        routes: ['/sesiones', 'familia'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592917/fresaikiwi/familia/c331gabfkqrmur8qrzzi.jpg',
      },
      {
        title: 'Navidad',
        routes: ['/sesiones', 'navidad'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592954/fresaikiwi/navidad/wgolcbgcz410qucubxrb.jpg',
      },
      {
        title: 'Fine Art',
        routes: ['/sesiones', 'fine-art'],
        img: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695591750/fresaikiwi/fine-art/dxnkurmxttyytdzn2ivu.jpg',
      },
    ];
  }

  ngAfterViewInit() {
    if (this.scrollToComponent) {
      const containerElement = document.getElementById('containerToScrollTo');
      if (containerElement) {
        containerElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }
  navigateToSesion(routes: string[]) {
    this.router.navigate(routes);
  }
}

export interface Sesion {
  title: string;
  routes: string[];
  img: string;
}
