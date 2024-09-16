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
  products: Product[] = [];
}
