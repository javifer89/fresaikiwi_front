import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
import { ReactiveFormsModule } from '@angular/forms';
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
import { CrearPostComponent } from './pages/blog/crear-post/crear-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        SesionesComponent,
        BlogComponent,
        ReservasComponent,
        ContactoComponent,
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
        CrearPostComponent,
        FooterComponent

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        provideAnimationsAsync(),
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        RouterModule,
        MenuComponent,
        FullCalendarModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class AppModule { }
