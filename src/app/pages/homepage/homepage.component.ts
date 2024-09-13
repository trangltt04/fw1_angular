import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'San pham a',
      description: 'Mo ta san pham a',
      price: 111,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
    {
      id: 2,
      title: 'San pham b',
      description: 'Mo ta san pham b',
      price: 222,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
    {
      id: 3,
      title: 'San pham c',
      description: 'Mo ta san pham c',
      price: 333,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
    {
      id: 4,
      title: 'San pham d',
      description: 'Mo ta san pham d',
      price: 444,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
  ];
}
