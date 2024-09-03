import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
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

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.preloadImages(this.images);

    this.startInterval();
    // TODO COMPROBAR QUE FUNCIONA O BUSCAR OTRA SOLUCIÓN
    // Forzar recarga de la página al volver a la página de inicio
    if (this.router.url === '/home') {
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
      });
    }
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

  // startInterval() {
  //   console.log('Interval started');
  //   this.interval = setInterval(() => {
  //     // Cambiar la imagen
  //     this.cambiaImagen();

  //     // Reiniciar el intervalo después de un breve retraso
  //     clearInterval(this.interval); // Detener el intervalo actual
  //     this.interval = setInterval(() => {
  //       this.cambiaImagen();
  //     }, 5000); // Reiniciar el intervalo después de 5 segundos
  //   }, 5000); // Cambia la imagen cada 5 segundos
  // }

  // startInterval(): void {
  //   console.log('Intezrval started');
  //   this.interval = setInterval(() => {
  //     // Detener el intervalo
  //     clearInterval(this.interval);
  //     // Cambiar la imagen
  //     this.cambiaImagen();
  //     // Reiniciar el intervalo después de un breve retraso
  //     setTimeout(() => {
  //       this.startInterval();
  //     }, 1000); // Espera 1 segundo antes de reiniciar el intervalo
  //   }, 5000); // Cambia la imagen cada 5 segundos
  // }

  //       cambiaImagen() {
  //         this.imagenSeleccionada++;
  //         if (this.imagenSeleccionada >= this.images.length) {
  //           this.imagenSeleccionada = 0;
  //         }
  // }
  cambiaImagen() {

    // Cambiar la imagen
    this.imagenSeleccionada++;
    if (this.imagenSeleccionada >= this.images.length) {
      this.imagenSeleccionada = 0;
    }
  }
  //   }
  //   // Detener el intervalo temporalmente para evitar superposiciones
  //   clearInterval(this.interval);

  //   // Reiniciar el intervalo después de un breve retraso
  //   setTimeout(() => {
  //     this.startInterval();
  //   }, 1000); // Espera 1 segundo antes de reiniciar el intervalo
  // }


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
