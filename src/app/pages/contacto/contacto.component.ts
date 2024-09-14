// import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ContactoService } from 'src/app/services/contacto.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-contacto',
//   templateUrl: './contacto.component.html',
//   styleUrls: ['./contacto.component.css'],
// })
// export class ContactoComponent {
//   formulario: FormGroup;
//   contactoService = inject(ContactoService);

//   constructor(private router: Router) {
//     this.formulario = new FormGroup({
//       nombre: new FormControl(null, [Validators.required]),
//       apellidos: new FormControl(null, [Validators.required]),
//       email: new FormControl(null, [
//         Validators.required,
//         Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
//       ]),
//       mensaje: new FormControl(null, [Validators.required]),
//     });
//   }

//   async onSubmit() {
//     const response = await this.contactoService.contactoFormulario(
//       this.formulario.value
//     );
//     console.log(response);

//     Swal.fire({
//       icon: 'success',
//       title: 'Mensaje enviado correctamente',
//       showConfirmButton: false,
//       timer: 2500,
//       width: 500,
//       padding: '3em',
//       color: '#333333',
//       background: '#0077B6',
//     });
//     this.router.navigate(['/home']);
//   }

//   checkError(field: string, error: string) {
//     return (
//       this.formulario.get(field)?.hasError(error) &&
//       this.formulario.get(field)?.touched
//     );
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { catchError, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
// import {inject } from '@angular/core';
// import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// TODO NO FUNCIONA EL ENVIO DEL FORMULARIO
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactoComponent implements OnInit {
  //   contactService = inject(ContactService)
  //   formulario: FormGroup;
  // router: Router = new Router();
  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  lastname: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(999),
  ]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage!: string; // the response message to show to the user

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    // this.form = this.formBuilder.group({
    //   name: this.name,
    //   lastname: this.lastname,
    //   email: this.email,
    //   message: this.message,
    //   honeypot: this.honeypot,
    // });
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(999)]],
      honeypot: [''],  // Campo anti-spam
    });
  }
  ngOnInit(): void {

      // Ocultar todos los asteriscos de los campos requeridos
      const requiredMarkers = document.querySelectorAll('.mat-form-field-required-marker');
      requiredMarkers.forEach(marker => marker.classList.add('hidden-required-marker'));
    
   }

  onSubmit() {
    // Validamos que el formulario sea válido y el honeypot esté vacío
    if (this.form.valid && this.form.get('honeypot')?.value === '') {
      this.form.disable();  // Deshabilitamos el formulario para evitar múltiples envíos
      const formData: any = new FormData();
      formData.append('name', this.form.get('name')?.value);
      formData.append('lastname', this.form.get('lastname')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('message', this.form.get('message')?.value);
      this.isLoading = true;  // Mostramos que el envío está en progreso
      this.submitted = false;  // Reiniciamos el mensaje de respuesta en caso de múltiples envíos

      this.http.post('https://script.google.com/macros/s/AKfycbwsfCL91lZAQrk7v3BNJHpuHvV9XIg8YXy4dBbvPYulHqQctIiDxGwsADuMs3zQIvQghw/exec', formData)
        .pipe(
          switchMap((response: any) => {
            if (response['result'] === 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado correctamente',
                text: 'Gracias por tu mensaje, me pondré en contacto contigo con la mayor brevedad posible',
                showConfirmButton: false,
                timer: 3500,
                width: 500,
                padding: '3em',
                color: '#333333',
                background: '#0077B6',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ha ido mal...',
                showConfirmButton: false,
                timer: 2500,
                width: 500,
                padding: '3em',
                color: '#333333',
                background: '#0077B6',
              });
            }
            this.form.enable();  // Volvemos a habilitar el formulario
            this.submitted = true;
            this.isLoading = false;
            return of(response);
          }),
          catchError((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo ha ido mal...',
              showConfirmButton: false,
              timer: 2500,
              width: 500,
              padding: '3em',
              color: '#333333',
              background: '#0077B6',
            });
            this.form.enable();  // Habilitamos el formulario en caso de error
            this.submitted = true;
            this.isLoading = false;
            return of(error);
          })
        )
        .subscribe(() => {
          this.router.navigate(['/home']);  // Redireccionamos tras el envío
        });
    }
  }
}
