import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SesionesComponent } from './pages/sesiones/sesiones.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BebesComponent } from './pages/sesiones/bebes/bebes.component';
import { ComunionComponent } from './pages/sesiones/comunion/comunion.component';
import { CumplesComponent } from './pages/sesiones/cumples/cumples.component';
import { EmbarazoComponent } from './pages/sesiones/embarazo/embarazo.component';
import { FamiliaComponent } from './pages/sesiones/familia/familia.component';
import { FineArtComponent } from './pages/sesiones/fine-art/fine-art.component';
import { NavidadComponent } from './pages/sesiones/navidad/navidad.component';
import { NewbornComponent } from './pages/sesiones/newborn/newborn.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { CrearPostComponent } from './pages/blog/crear-post/crear-post.component';
import { PanelUsuariosComponent } from './pages/usuarios/panel-usuarios/panel-usuarios.component';
import { LoginGuard } from './guards';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  {path: 'sesionestest', loadChildren: () => import('./sesiones/sesiones.module').then(m => m.SesionesModule)},

  { path: 'sesiones', component: SesionesComponent },
  { path: 'sesiones/bebes', component: BebesComponent },
  { path: 'sesiones/comunion', component: ComunionComponent },
  { path: 'sesiones/cumples', component: CumplesComponent },
  { path: 'sesiones/embarazo', component: EmbarazoComponent },
  { path: 'sesiones/familia', component: FamiliaComponent },
  { path: 'sesiones/fine-art', component: FineArtComponent },
  { path: 'sesiones/navidad', component: NavidadComponent },
  { path: 'sesiones/newborn', component: NewbornComponent },

  { path: 'reservas', component: ReservasComponent, canActivate: [LoginGuard] },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/crear-post', component: CrearPostComponent, canActivate: [LoginGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'usuarios/login', component: LoginComponent },
  { path: 'usuarios/registro', component: RegistroComponent },
  { path: 'panelUsuarios', component: PanelUsuariosComponent, canActivate: [LoginGuard] },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
