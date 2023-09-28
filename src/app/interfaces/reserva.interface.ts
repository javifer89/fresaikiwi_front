export interface Reserva {
  id_reserva: number;
  usuario_id: number;
  sesion_id: number;
  titulo: string;
  descripcion: string;
  fecha_reserva: string;
  hora_reserva: string;
//   fecha_fin_reserva: string;
//   hora_fin_reserva: string;
  aceptada: number;
}
