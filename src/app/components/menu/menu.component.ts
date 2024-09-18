import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, NO_ERRORS_SCHEMA, OnDestroy, OnInit, ViewChild, effect, inject, input, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { Carousel } from 'bootstrap';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carousel') carouselElement!: ElementRef;
  carouselInstance!: Carousel;

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
    // Escuchar eventos de navegación para reiniciar el carousel
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/home') {
        setTimeout(() => this.restartCarousel(), 0); // Asegura que se ejecute después de la navegación
      }
    });
  }
  ngAfterViewInit(): void {
    // Inicializar el carousel
    this.initializeCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    // Limpiar el carousel cuando el componente se destruya
    if (this.carouselInstance) {
      this.carouselInstance.dispose();
    }
  }

  initializeCarousel(): void {
    if (this.carouselElement && this.carouselElement.nativeElement) {
      this.carouselInstance = new Carousel(this.carouselElement.nativeElement, {
        interval: 2500
      });
    }
  }

  restartCarousel(): void {
    if (this.carouselInstance) {
      this.carouselInstance.dispose(); // Limpia la instancia anterior
      this.initializeCarousel(); // Re-inicializa el carousel
    } else {
      this.initializeCarousel(); // Inicializa si no estaba inicializado
    }
  }

  // Para manejar el flag active en el navbar
  setActive(): void {
    this.active = !this.active;
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
