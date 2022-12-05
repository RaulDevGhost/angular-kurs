import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  image = 'https://source.unsplash.com/random';
  icelandImg = './assets/images/iceland.jpeg';
  btnDisable = true;
  inputValue = '';
  inputAge = 0;
  progressValue = 10;
  widthImg = 10;
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  emojis: string[] = ['😂', '🐦', '🐳', '🌮', '💚'];
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpeg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpeg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpeg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpeg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpeg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpeg',
    },
  ];

  testIt() {
    this.progressValue += 5;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log('jajsdjs', element.scrollTop);
    // if (element.scrollTop > 50) {
    //   this.inputValue = 'Raul';
    //   this.btnDisable = false;
    // }
  }

  testKeyUp(event: Event) {
    const eventInput = event.target as HTMLInputElement;
    console.log(eventInput.value);
  }
}
