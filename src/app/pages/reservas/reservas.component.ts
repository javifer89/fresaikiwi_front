import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sesion } from 'src/app/interfaces/sesion.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { SesionesService } from 'src/app/services/sesiones.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent {
  // formulario: FormGroup;
  calendarService = inject(CalendarService);
  sesionService = inject(SesionesService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  // sesion: Sesion;
  // sesionId: number;

  // sesionSeleccionada!: Sesion;


  // constructor() {
  //   this.formulario = new FormGroup({
  //     titulo: new FormControl(null, [Validators.required]),
  //     descripcion: new FormControl(null, [Validators.required]),

  //     fecha: new FormControl(null, [Validators.required]),
  //     hora: new FormControl(null, [Validators.required]),

  //     // fecha_fin_reserva: new FormControl(null, [Validators.required]),
  //     // hora_fin_reserva: new FormControl(null, [Validators.required]),
  //   });
  //   this.sesion = {
  //     id: 0,
  //     nombre: '',
  //     precio: 0,
  //     duracion: '',
  //     reservas: [],
  //   };
  //   this.sesionId = 0;
  // }

  // async ngOnInit() {
  //   const { sesionId } = this.activatedRoute.snapshot.params;
  //   try {
  //     this.sesionSeleccionada = await this.sesionService.getById(sesionId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.activatedRoute.params.subscribe(async (params) => {
  //     this.sesionId = params['sesionId'];
  //     this.sesion = await this.sesionService.getById(params['sesionId']);
  //   });
  // }

  // async onSubmit() {
  //   try {
  //     this.formulario.value.sesiones_id = this.sesionSeleccionada.id;
  //     const response = await this.calendarService.create(this.formulario.value);

  //     const date = new Date(this.formulario.value.fecha_reserva);
  //     const [hora, minutos] = this.formulario.value.hora_reserva.split(':');
  //     date.setHours(hora);
  //     date.setMinutes(minutos);
  //     const dateString = date.toISOString();
  //     console.log(dateString);

  //     console.log(response);

  //     if (response.id_reserva) {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Sesión Reservada',
  //         showConfirmButton: false,
  //         timer: 2500,
  //         width: 500,
  //         padding: '3em',
  //         color: '#333333',
  //         background: '#0077B6',
  //       });
  //     } else {
  //       Swal.fire({
  //         icon: 'warning',
  //         title: 'Registro fallido',
  //         showConfirmButton: false,
  //         timer: 2500,
  //         width: 500,
  //         padding: '3em',
  //         color: '#333333',
  //         background: '#0077B6',
  //       });
  //     }

  //     this.sesionSeleccionada = await this.sesionesServices.getById(this.salaId);
  //   } catch (error) {
  //     console.log(error);
  //Si hay error, redirección a la lista de sesiones
  //     this.router.navigate(['/sesiones']);
  //   }
  // }

  // onSelect(event: { startStr: string; endStr: string }) {
  //   this.formulario.patchValue({
  //     fecha: event.startStr.split('T')[0],
  //   });
  //   // this.formulario.patchValue({
  //   //   fecha_fin_reserva: event.endStr.split('T')[0],
  //   // });
  //   this.formulario.patchValue({
  //     hora: event.startStr.split('T')[1].slice(0, 5),
  //   });
  //   // this.formulario.patchValue({
  //   //   hora_fin_reserva: event.endStr.split('T')[1].slice(0, 5),
  //   // });
  // }

  // checkError(field: string, error: string): boolean | undefined {
  //   return (
  //     this.formulario.get(field)?.hasError(error) &&
  //     this.formulario.get(field)?.touched
  //   );
  //   // }
  // }
}
