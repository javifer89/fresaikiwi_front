import { ChangeDetectorRef, Component, inject, Input, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sesion } from 'src/app/interfaces/sesion.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { SesionesService } from 'src/app/services/sesiones.service';
import Swal from 'sweetalert2';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarEvent } from 'src/app/interfaces/calendar-event.interface';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import { createEventId, INITIAL_EVENTS } from './event-utils';



@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  @Input() reservas: CalendarEvent[] = [];
  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  currentEvents = signal<EventApi[]>([]);
  formulario: FormGroup;
  calendarService = inject(CalendarService);
  sesionesService = inject(SesionesService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  cd = inject(ChangeDetectorRef);

  sesion: Sesion;
  sesionId: number;
  options: any;

  sesionSeleccionada!: Sesion;


  constructor(private changeDetector: ChangeDetectorRef) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [Validators.required]),
      descripcion: new FormControl(null, [Validators.required]),

      fecha: new FormControl(null, [Validators.required]),
      hora: new FormControl(null, [Validators.required]),

       fecha_fin_reserva: new FormControl(null, [Validators.required]),
      // hora_fin_reserva: new FormControl(null, [Validators.required]),
    });
    this.sesion = {
      id: 0,
      nombre: '',
      precio: 0,
      duracion: '',
      reservas: [],
    };
    this.sesionId = 0;
  }

  async ngOnInit() {
    this.options = {
      initialView: 'dayGridMonth',
      plugins: [timeGridPlugin, interactionPlugin, dayGridPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
        initialView: 'dayGridMonth',
      },
      editable: true,
      droppable: true,
      selectable: true,
      dateClick: (info: any) => {
        console.log(info);
        this.handleDateClick(info)
      },
      select: (info: any) => {
        console.log(info);
        const { startStr, endStr } = info;
        this.onSelect({
          startStr,
          endStr,
        });
      },
      events: this.reservas,
    };
    const { sesionId } = this.activatedRoute.snapshot.params;
    try {
      this.sesionSeleccionada = await this.sesionesService.getById(sesionId);
    } catch (error) {
      console.log(error);
    }
    this.activatedRoute.params.subscribe(async (params) => {
      this.sesionId = params['sesionId'];
      this.sesion = await this.sesionesService.getById(params['sesionId']);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.calendarComponent.events = changes["reservas"].currentValue
  }
  getCalendarApi() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.update((options) => ({
      ...options,
      weekends: !options.weekends,
    }));
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
  async getEvents(): Promise<CalendarEvent[] | any> {
    try {
      const response = await this.calendarService.getAll();
      const calendarEvents: CalendarEvent[] = response.map((event) => {
        return {
          title: event.titulo,
          description: event.descripcion,
          start: event.fecha_reserva,
          end: event.fecha_reserva,
        };
      });
      return calendarEvents;
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmit() {
    try {
      this.formulario.value.sesiones_id = this.sesionSeleccionada.id;
      const response = await this.calendarService.create(this.formulario.value);

      const date = new Date(this.formulario.value.fecha_reserva);
      const [hora, minutos] = this.formulario.value.hora_reserva.split(':');
      date.setHours(hora);
      date.setMinutes(minutos);
      const dateString = date.toISOString();
      console.log(dateString);

      console.log(response);

      if (response.id_reserva) {
        Swal.fire({
          icon: 'success',
          title: 'Sesión Reservada',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6',
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Registro fallido',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6',
        });
      }

      this.sesionSeleccionada = await this.sesionesService.getById(this.sesionId);
    } catch (error) {
      console.log(error);
      //Si hay error, redirección a la lista de sesiones
      this.router.navigate(['/sesiones']);
    }
  }

  onSelect(event: { startStr: string; endStr: string }) {
    this.formulario.patchValue({
      fecha: event.startStr.split('T')[0],
    });
    // this.formulario.patchValue({
    //   fecha_fin_reserva: event.endStr.split('T')[0],
    // });
    this.formulario.patchValue({
      hora: event.startStr.split('T')[1].slice(0, 5),
    });
    // this.formulario.patchValue({
    //   hora_fin_reserva: event.endStr.split('T')[1].slice(0, 5),
    // });
  }

  checkError(field: string, error: string): boolean | undefined {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
    // }
  }
}
