import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  usuariosService: UsuariosService = inject(UsuariosService);
  router: Router = inject(Router);

  public active: boolean = false;
  public imagenSeleccionada: number = 0;
  public interval: any;

  public images: any[] = [
    {
      nombre: 'Newborn',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695593005/fresaikiwi/newborn/keykx1efzjtmuu7fz5ag.jpg',
    },
    {
      nombre: 'Comunión',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592257/fresaikiwi/comuniones/txdd0wl8fjegett8criy.jpg',
    },
    {
      nombre: 'Cumpleaños',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592833/fresaikiwi/cumples/wzeoeemgq24wrysgr1zx.jpg',
    },
    {
      nombre: 'Bebés',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592240/fresaikiwi/beb%C3%A9s/kxpv1awj7pdj21jss5fr.jpg',
    },
    {
      nombre: 'Embarazo',
      url: 'https://res.cloudinary.com/dscycaajk/image/upload/v1695592852/fresaikiwi/embarazo/fy8a3twdk9rudxffasoh.jpg',
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

  ngOnInit(): void {
    this.startInterval();
  }

  setActive(): void {
    this.active = !this.active;
  }

  cambiaImagen() {
    this.imagenSeleccionada++;
    if (this.imagenSeleccionada >= this.images.length) {
      this.imagenSeleccionada = 0;
    }
  }
  startInterval() {
    this.interval = setInterval(() => {
      this.cambiaImagen();
    }, 5000);
  }

  //   onLogout(logOut: number) {
  //     localStorage.removeItem('token_front');
  //     if (logOut === 0) {
  //       this.router.navigate(['/loginStaff']);
  //     } else {
  //       this.router.navigate(['/usuarios', 'login']);
  //     }
  //   }
}

export interface MenuItem {
  title: string;
  routes: string[];
  childItems?: MenuChildItem[];
}
export interface MenuChildItem extends MenuItem {
  id?: number;
}
