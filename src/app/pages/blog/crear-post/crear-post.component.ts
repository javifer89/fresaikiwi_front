import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css'],
})
export class CrearPostComponent {
  blogService = inject(BlogService);
  formulario: FormGroup;
  formData = new FormData();
  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      // fecha: new FormControl(),
      categoria: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.blogService.createPost(this.formulario.value);
  }
//TODO REVISAR PETICIÓN AL BACK PARA SUBIR LA IMAGEN
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.formData.append('fichero', file);
  }
}
