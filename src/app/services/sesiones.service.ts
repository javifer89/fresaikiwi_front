import { Injectable, inject } from '@angular/core';
import { Sesion } from '../interfaces/sesion.interface';
import { Reserva } from '../interfaces/reserva.interface';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SalasService {
  private httpClient = inject(HttpClient);
  private baseUrl: string;
  private reservas: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/sesiones';
    this.reservas = 'http://localhost:3000/api/reservas';
  }

  getAll(): Promise<Sesion[]> {
    return firstValueFrom(this.httpClient.get<Sesion[]>(this.baseUrl));
  }

  getById(idSesion: number): Promise<Sesion> {
    return firstValueFrom(
      this.httpClient.get<Sesion>(`${this.baseUrl}/${idSesion}`)
    );
  }

  create(formValue: any): Promise<Sesion | any> {
    return firstValueFrom(
      this.httpClient.post<Sesion | any>(this.baseUrl, formValue)
    );
  }

  updateById(idSesion: number, formValue: any): Promise<Sesion> {
    return firstValueFrom(
      this.httpClient.put<Sesion>(`${this.baseUrl}/editar/${idSesion}`, formValue)
    );
  }

  deleteById(sesionId: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${sesionId}`)
    );
  }

  reservarSala(formValue: any): Promise<Reserva | any> {
    return firstValueFrom(
      this.httpClient.post<Reserva | any>(this.reservas, formValue)
    );
  }
}
