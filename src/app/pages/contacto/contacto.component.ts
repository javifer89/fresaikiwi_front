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
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { catchError, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
// import {inject } from '@angular/core';
// import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

// TODO NO FUNCIONA EL ENVIO DEL FORMULARIO
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent  {
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
    this.form = this.formBuilder.group({
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot,
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    if (this.form.valid && this.honeypot.value == '') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      let formData: any = new FormData();
      formData.append('name', this.form.get('name')!.value);
      formData.append('lastname', this.form.get('lastname')!.value);
      formData.append('email', this.form.get('email')!.value);
      formData.append('message', this.form.get('message')!.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http
        .post(
          'https://script.google.com/macros/s/AKfycbzwJkPGNIHgZgB3lZtQBNT-wtCHLd1FiOFDPQXSSO19mL1p1WJwkUnCPMF_R56YblY8SQ/exec',
          formData
        )
        .pipe(
          switchMap((response: any) => {
            if (response['result'] == 'success') {
              // this.responseMessage = "Gracias por tu mensaje, me pondré en contacto contigo con la mayor brevedad posible";
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
              // this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
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
            this.form.enable();
            this.submitted = true;
            this.isLoading = false;
            console.log(response);
            return of(response); // You can modify this to return any relevant data
          }),
          catchError((error) => {
            // this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
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
            this.form.enable();
            this.submitted = true;
            this.isLoading = false;
            console.log(error);
            return of(error); // You can modify this to return any relevant data
          })
        )
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    }
  }
}
