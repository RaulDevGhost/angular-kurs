import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  image = 'https://source.unsplash.com/random';
  btnDisable = true;
  inputValue = '';
  inputAge = 0;
  progressValue = 10;
  emojis: string[] = ['😂', '🐦', '🐳', '🌮', '💚'];
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  testIt() {
    this.progressValue += 5;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log('jajsdjs', element.scrollTop);
  }

  testKeyUp(event: Event) {
    const eventInput = event.target as HTMLInputElement;
    console.log(eventInput.value);
  }
}
