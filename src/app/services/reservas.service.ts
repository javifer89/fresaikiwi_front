import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../interfaces/reserva.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  private httpClient = inject(HttpClient);
  private reservas: string;

  constructor() {
    this.reservas = 'http://localhost:3000/api/reservas';
  }
// TODO INVESTIGAR SCRAPPING A UPHLOW PARA CONECTAR LAS RESERVAS CON LA BASE DE DATOS

  getAll(): Promise<Reserva[]> {
    return firstValueFrom(this.httpClient.get<Reserva[]>(this.reservas));
  }

  getById(idReserva: number): Promise<Reserva> {
    return firstValueFrom(
      this.httpClient.get<Reserva>(`${this.reservas}/${idReserva}`)
    );
  }

  updateById(id_reserva: number, reservaModificada: Reserva): Promise<Reserva> {
    return firstValueFrom(
      this.httpClient.put<Reserva>(
        `${this.reservas}/editar/${id_reserva}`,
        reservaModificada
      )
    );
  }

  aceptarById(id_reserva: number, reservaModificada: number): Promise<Reserva> {
    return firstValueFrom(
      this.httpClient.put<Reserva>(`${this.reservas}/aceptar/${id_reserva}`, {
        aceptada: reservaModificada,
      })
    );
  }

  deleteById(idReserva: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.reservas}/${idReserva}`)
    );
  }
}
