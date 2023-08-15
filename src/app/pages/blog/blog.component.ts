import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogService = inject(BlogService);
  postOrdenados: Post[];
  categorias: string[] = this.blogService
    .getAll()
    .map((post) => post.categoria);

  constructor() {
    this.postOrdenados = [
      {
        titulo: '',
        texto: '',
        autor: '',
        imagen: '',
        fecha: '',
        categoria: '',
      },
    ];
  }

  ngOnInit() {
    this.getPosts();
  }

  onGetByCategory(event: any) {
    const categoria = event.target ? event.target.value : event;
    if (categoria) {
      const posts = this.blogService.getAll();
      this.postOrdenados = posts.filter((post) => post.categoria === categoria);
    } else {
      this.getPosts();
    }
  }

  getPosts() {
    this.postOrdenados = this.blogService.getAll();
  }
}
