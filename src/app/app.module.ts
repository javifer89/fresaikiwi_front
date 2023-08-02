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
