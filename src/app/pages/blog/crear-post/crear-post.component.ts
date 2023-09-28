import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css'],
})
export class CrearPostComponent {
  blogService = inject(BlogService);
  formulario: FormGroup;
  // formulario = FormBuilder
  formData = new FormData();
  constructor() {
    this.formulario = new FormGroup({
      //TODO REVISAR ORDEN DE LOS CAMPOS DEL FORMULARIO CON LA PETICIÓN DEL BACK
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(), // usuario_id
      imagen: new FormControl(), //img_url
      fecha: new FormControl(), // new Date()
      categoria: new FormControl(),

      // TODO CONFIGURAR EL new Date ()
      // this.formulario = this.formBuilder.group({
      //   titulo: [''],
      //   texto: [''],
      //   autor: [''],
      //   imagen: [''],
      //   fecha: [''],
      //   categoria: [''],
      // });
    });
  }
//   const fechaActual = new Date();
//   const fechaISO = this.fechaActual.toISOString();
   // this.formulario.get('fecha').setValue(fechaISO);



  async onSubmit() {
    const response = await this.blogService.createPost(this.formulario.value);
    Swal.fire({
      icon: 'success',
      title: 'Publicación creada',
      showConfirmButton: false,
      timer: 2500,
      width: 500,
      padding: '3em',
      color: '#333333',
      background: '#0077B6',
    })
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.formData.append('fichero', file);
  }
}
