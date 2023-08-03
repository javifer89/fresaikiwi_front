import { Injectable, inject } from '@angular/core';
import { Reserva } from '../interfaces/reserva.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/reservas';
  }

  getAll(): Promise<Reserva[]> {
    return firstValueFrom(this.httpClient.get<Reserva[]>(this.baseUrl));
  }

  getById(reservaId: number): Promise<Reserva> {
    return firstValueFrom(
      this.httpClient.get<Reserva>(`${this.baseUrl}/${reservaId}`)
    );
  }

  create(formValue: any): Promise<Reserva | any> {
    return firstValueFrom(
      this.httpClient.post<Reserva | any>(this.baseUrl, formValue)
    );
  }

  updateById(reservaId: number, formValue: any): Promise<Reserva> {
    return firstValueFrom(
      this.httpClient.put<Reserva>(
        `${this.baseUrl}/editar/${reservaId}`,
        formValue
      )
    );
  }

  deleteById(reservaId: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${reservaId}`)
    );
  }
}
