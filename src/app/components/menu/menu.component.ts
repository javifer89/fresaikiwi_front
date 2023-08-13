import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  usuariosService = inject(UsuariosService);

  router: Router = inject(Router);

  menuItems: MenuItem[] = [
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
    {
      title: 'Blog',
      routes: ['/blog'],
    },
    {
      title: 'Contacto',
      routes: ['/contacto'],
    },
    {
      title: 'Acceso Usuarios',
      routes: [],
      childItems: [
        {
          title: 'Login Usuarios',
          routes: ['/usuarios', 'login'],
        },
        {
          title: 'Registro Usuarios',
          routes: ['/usuarios', 'registro'],
        },
      ],
    },
  ];

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
  id?: number
}
