import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SesionesComponent } from './pages/sesiones/sesiones.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NewbornComponent } from './pages/sesiones/newborn/newborn.component';
import { ComunionComponent } from './pages/sesiones/comunion/comunion.component';
import { EmbarazoComponent } from './pages/sesiones/embarazo/embarazo.component';
import { BebesComponent } from './pages/sesiones/bebes/bebes.component';
import { FamiliaComponent } from './pages/sesiones/familia/familia.component';
import { FineArtComponent } from './pages/sesiones/fine-art/fine-art.component';
import { NavidadComponent } from './pages/sesiones/navidad/navidad.component';
import { CumplesComponent } from './pages/sesiones/cumples/cumples.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { EditarUsuariosComponent } from './pages/usuarios/editar-usuarios/editar-usuarios.component';
import { PanelUsuariosComponent } from './pages/usuarios/panel-usuarios/panel-usuarios.component';
import { ListaReservasComponent } from './pages/reservas/lista-reservas/lista-reservas.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SesionesComponent,
    BlogComponent,
    ReservasComponent,
    ContactoComponent,
    MenuComponent,
    CalendarComponent,
    NewbornComponent,
    ComunionComponent,
    EmbarazoComponent,
    BebesComponent,
    FamiliaComponent,
    FineArtComponent,
    NavidadComponent,
    CumplesComponent,
    RegistroComponent,
    LoginComponent,
    ListaUsuariosComponent,
    EditarUsuariosComponent,
    PanelUsuariosComponent,
    ListaReservasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
