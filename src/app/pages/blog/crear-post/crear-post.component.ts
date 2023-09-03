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
      //TODO REVISAR ORDEN DE LOS CAMPOS DEL FORMULARIO CON LA PETICIÓN DEL BACK
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(), // usuario_id
      imagen: new FormControl(), //img_url
      fecha: new FormControl(),
      categoria: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.blogService.createPost(this.formulario.value);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.formData.append('fichero', file);
  }
}
