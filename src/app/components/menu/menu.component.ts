import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, NO_ERRORS_SCHEMA, OnDestroy, OnInit, ViewChild, effect, inject, input, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { RouterLink } from '@angular/router';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'


// Importar Swiper y los módulos directamente desde 'swiper'
import Swiper from 'swiper';
import SwiperCore from 'swiper';
//import 'swiper/swiper-bundle.css'; // Para estilos generales
//import '../../../../node_modules/swiper/modules/navigation.css'; // Para estilos del módulo de navegación
//import '../../../../node_modules/swiper/modules/pagination.css'; // Para estilos del módulo de paginación
//import '../../../../node_modules/swiper/modules/effect-fade.css'; // Para estilos del módulo de efecto de desvanecimiento
//import Autoplay from 'swiper';
// import Pagination from 'swiper';
// import Navigation from 'swiper';
// import EffectFade from 'swiper';

// Habilitar los módulos que vas a usar
// SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {



  usuariosService: UsuariosService = inject(UsuariosService);
  router: Router = inject(Router);

  public active: boolean = false;
  public imagenSeleccionada: number = 0;
  public interval: any;

  public images: any[] = [
    {
      nombre: 'Comunión',
      //url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592257/fresaikiwi/comuniones/txdd0wl8fjegett8criy.jpg',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1712527890/txdd0wl8fjegett8criy_iq6mni.avif'
    },
    {
      nombre: 'Cumpleaños',
      //url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/wzeoeemgq24wrysgr1zx.jpg',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1712527889/CARLOTA_2ANYS-147-c%C3%B2pia-copia_s5dera.avif'
    },
    {
      nombre: 'Bebés',
      //url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592240/fresaikiwi/beb%C3%A9s/kxpv1awj7pdj21jss5fr.jpg',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1712527889/ALEJANDRI_9M-43_cratx7.avif'
    },
    {
      nombre: 'Embarazo',
      //url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592852/fresaikiwi/embarazo/fy8a3twdk9rudxffasoh.jpg',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1712527890/fy8a3twdk9rudxffasoh_qd5uqo.avif'
    },
    {
      nombre: 'Newborn',
      //url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593005/fresaikiwi/newborn/keykx1efzjtmuu7fz5ag.jpg',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1712527070/EIRE-35-copia_hndnxb.avif'
    },
  ];

  public menuItems: MenuItem[] = [
    {
      title: 'Sobre mí',
      routes: ['/about'],
    },
    {
      title: 'Sesiones',
      routes: ['/sesiones'],
      childItems: [
        {
          title: 'Bebés',
          routes: ['/sesiones', 'bebes'],
        },
        {
          title: 'Newborn',
          routes: ['/sesiones', 'newborn'],
        },
        {
          title: 'Embarazo',
          routes: ['/sesiones', 'embarazo'],
        },
        {
          title: 'Comunión',
          routes: ['/sesiones', 'comunion'],
        },
        {
          title: 'Navidad',
          routes: ['/sesiones', 'navidad'],
        },
        {
          title: 'Cumples',
          routes: ['/sesiones', 'cumples'],
        },
        {
          title: 'Familia',
          routes: ['/sesiones', 'familia'],
        },
        {
          title: 'Fine Art',
          routes: ['/sesiones', 'fine-art'],
        },
      ],
    },
    {
      title: 'Reservar',
      routes: ['/reservas'],
    },
    // {
    //   title: 'Blog',
    //   routes: ['/blog'],
    // },
    {
      title: 'Contacto',
      routes: ['/contacto'],
    },
    // {
    //   title: 'Acceso Usuarios',
    //   routes: [],
    //   childItems: [
    //     {
    //       title: 'Login Usuarios',
    //       routes: ['/usuarios', 'login'],
    //     },
    //     {
    //       title: 'Registro Usuarios',
    //       routes: ['/usuarios', 'registro'],
    //     },
    //   ],
    // },
  ];


  constructor() { }

  ngOnInit(): void {

    this.startInterval();
    // TODO COMPROBAR QUE FUNCIONA O BUSCAR OTRA SOLUCIÓN
    // Forzar recarga de la página al volver a la página de inicio
    if (this.router.url === '/home') {
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
      });
    }
  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  setActive(): void {
    this.active = !this.active;
  }
  preloadImages(images: any[]) {
    images.forEach(image => {
      const img = new Image();
      img.src = image.url;
    });
  }

  startInterval() {
    console.log('Interval started');
    this.interval = setInterval(() => {
      this.cambiaImagen();
    }, 5000);
  }

  cambiaImagen() {

    // Cambiar la imagen
    this.imagenSeleccionada++;
    if (this.imagenSeleccionada >= this.images.length) {
      this.imagenSeleccionada = 0;
    }
  }
}

export interface MenuItem {
  title: string;
  routes: string[];
  childItems?: MenuChildItem[];
}
export interface MenuChildItem extends MenuItem {
  id?: number;
}
