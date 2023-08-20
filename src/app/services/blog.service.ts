import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        titulo: 'Pizza prosciutto',
        texto:
          'La mejor pizza prosciutto que he probado en mi vida. En esta pizzería de Alicante hacen las pizzas que te trasladarán a la Italia tradicional en cada bocado.',
        autor: 'Javi',
        imagen:
          'https://s3-eu-west-1.amazonaws.com/straus/media/products2/de81d86a57484f75935f267cf321f10a.jpg',
        fecha: '22-5-23',
        categoria: 'campañas',
      },
      {
        titulo: 'Viaje a China',
        texto:
          'Un viaje super interesante en el que pudimos conocer una gran cantidad de costumbres de la cultura asiática, así como su gastronomía',
        autor: 'Pablo',
        imagen:
          'https://a.cdn-hotels.com/gdcs/production48/d512/0c281436-7022-4d50-beff-2c64308c4dbb.jpg',
        fecha: '21-3-23',
        categoria: 'varios',
      },
      {
        titulo: 'Ford Mustang GT',
        texto:
          'When you run down the road with 2015 Ford Mustang GT Premium, you will surely create a buzz. The car has an aura that demands immediate attention from the onlookers. It is not a typical family car but when sophistication is on top of your list, you should look out for this vehicle.',
        autor: 'Javi',
        imagen:
          'https://www.hdcarwallpapers.com/walls/ford_mustang_gt_fastback_2018_4k-HD.jpg',
        fecha: '22-4-23',
        categoria: 'sesiones',
      },
      {
        titulo: 'Game of thrones',
        texto:
          'Una serie que te enganchará desde el primer capítulo y que te trasladará a la época medieval en la que se desarrolla toda la historia',
        autor: 'Laura',
        imagen:
          'http://thedrawshop.com/wp-content/uploads/2013/08/game-of-thrones-season-4.jpg',
        fecha: '22-6-23',
        categoria: 'modelos',
      },
      {
        titulo: 'Viaje a London',
        texto:
          'Londres es una ciudad única, cuando vas caminando por sus calles no te imaginas la inmensidad de esta ciudad. Sin duda se necesita varias semanas para poder explorarla al máximo. Volveremos a seguir con la visita, sin duda.',
        autor: 'Pedro',
        imagen:
          'https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200b/0_London-at-sunset.jpg',
        fecha: '22-6-23',
        categoria: 'sesiones',
      },
      {
        titulo: 'Breaking Bad',
        texto:
          'Una serie que no te dejará indiferente, te sumerge dentro de la  atmósfera en la que se desarrolla la historia, llena de conflictos y actos con consecuencias irreparables. El papel que realizan los actores principales es sublime, gracias a su perfecta interpretación, la trama simplemente es un reflejo exacto del problema que atraviesa la sociedad norteamericana en la actualidad respecto al consumo y tráfico de drogas.',
        autor: 'Laura',
        imagen: 'https://i.blogs.es/16e585/breaking-bad/1366_2000.jpg',
        fecha: '22-6-23',
        categoria: 'varios',
      },
      {
        titulo: 'Los templos del Chuletón en España',
        texto:
          '¿A quien no le gusta un buen chuletón? Y es que, para muchos, el chuletón es una de las joyas de la gastronomía. Por esta razón, varios restaurantes se han convertido en templos cárnicos y en ese listado se ha colado un restaurante de La Rioja, La Alameda de Fuenmayor. No es la primera vez que este restaurante consigue un reconocimiento a su buen hacer porque en mayo de 2018 fue nombrado el mejor restaurante de cocina tradicional de España en la décima edición de los Premios Gastronómicos de ABC.',
        autor: 'Javi',
        imagen:
          'https://www.rioja2.com/images/noticias/72682/recortes/11x6-chuleton-de-la-alameda.jpg',
        fecha: '11-6-23',
        categoria: 'modelos',
      },
      {
        titulo: 'Nuevo Audio q8',
        texto:
          'Audi continúa su ofensiva de electrificación con el Q8 TFSIe quattro: el SUV coupé es el séptimo modelo con propulsión híbrida enchufable (PHEV) que la marca introduce en el mercado desde mediados de 2019. Audi pone esta tecnología de hibridación al servicio del cliente: proporciona una experiencia de conducción eléctrica cómoda y segura, una gestión de la carga sencilla y un alto nivel de practicidad para el día a día.',
        autor: 'Javi',
        imagen:
          'https://www.eventosmotor.com/wp-content/uploads/2020/10/Audi-Q8-TFSIe-eventosmotor-1.jpg',
        fecha: '10-6-23',
        categoria: 'sesiones',
      },
    ];
  }

  createPost(newPost: Post): void {
    this.arrPost.push(newPost);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Post creado!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  getAll(): Post[] {
    this.saveLocalStorage(this.arrPost);
    return this.arrPost;
  }

  // getByCategory(categoria: string): Post | undefined {
  //   return this.arrPost.find((post) => post.categoria === categoria)
  // }

  getByCategory(categoria: string): Post[] | undefined {
    this.arrPost = this.arrPost.filter((post) => post.categoria === categoria);
    return this.arrPost;
  }

  onPostPublicado($event: any) {
    this.arrPost.push($event), this.saveLocalStorage(this.arrPost);
  }

  saveLocalStorage(data: any) {
    localStorage.setItem('post', JSON.stringify(data))!;
  }
}
