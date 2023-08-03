import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-panel-usuarios',
  templateUrl: './panel-usuarios.component.html',
  styleUrls: ['./panel-usuarios.component.css']
})
export class PanelUsuariosComponent {




 usuariosService = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute);

  usuarioId: number;
  usuario: Usuario;

  constructor() {
    this.usuarioId = 0;
    this.usuario = {
      id: 0,
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      telefono: '',
      direccion: '',
      rol: '',
      validado: 0,
    };
  }

  // async ngOnInit() {
  //   this.staff = await this.staffService.perfil();
  // }
}
