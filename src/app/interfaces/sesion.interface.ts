import { Time } from "@angular/common";


export interface Sesion {
  id: number;
  nombre: string;
  precio: number;
  duracion: string | Time;
  reservas: [];
}
