import { Component } from '@angular/core';
type productFormat = {
  name: string;
  price: number;
  quantity: number;
  description: string;
};

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  isInfoVisible = true;

  toggleInfo() {
    this.isInfoVisible = !this.isInfoVisible;
  }

  // Single data types array
  ArrayTrials: Array<string> = ['Hello', 'World', 'This', 'Is', 'An', 'Array'];

  // Multiple data types array
  ArrayTrials2: Array<string | number> = [
    'Hello',
    1,
    'World',
    2,
    'This',
    3,
    'Is',
    4,
    'An',
    5,
    'Array',
    6,
  ];

  // Array shortcut
  ArrayTrials3: number[] = [1, 8, 8];

  // Objects
  products: productFormat = {
    name: 'Kivo Gari',
    price: 1000,
    quantity: 2,
    description: 'Tuba sheyy',
  };

  AnArrayOfProducts: Array<productFormat> = [
    {
      name: 'Samsung',
      price: 10,
      quantity: 80,
      description: "It's okay",
    },
    {
      name: 'itel',
      price: 1,
      quantity: 10,
      description: "It's not nice",
    },
    {
      name: 'Tecno',
      price: 1888,
      quantity: 33,
      description: 'Not bad',
    },
  ];

  
}
