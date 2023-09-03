import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogService } from 'src/app/services/blog.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogService = inject(BlogService);
  postOrdenados: Post[];
  categorias: string[] = []

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

    async ngOnInit() {
      this.categorias = (await this.blogService.getAll()).map(
        (post) => post.categoria
      );
    this.getPosts();
  }

   async onGetByCategory(event: any): Promise<Post[]> {
    const categoria = event.target ? event.target.value : event;
    if (categoria) {
        const posts = await this.blogService.getByCategory(categoria);
        return posts
    //   this.postOrdenados = posts.filter((post) => post.categoria === categoria);
    } else {
      return this.getPosts();
    }
  }

  async getPosts() {
    return this.postOrdenados = await this.blogService.getAll();
  }
}
