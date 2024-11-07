import { Component } from '@angular/core';
import { FirstComponent } from "../first/first.component";
type productFormat = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
};

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  AnArrayOfProducts: Array<productFormat> = [
    {
      name: 'Samsung s24 ultra',
      price: 10800,
      quantity: 8,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "https://get4lessghana.com/wp-content/uploads/2024/01/s24-Ultra-1-768x768.jpg",
    },
    {
      name: 'itel p45',
      price: 100,
      quantity: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: "https://www.electromart.com.gh/wp-content/uploads/2024/05/ITEL-S24-black-new111.webp",

    },
    {
      name: 'iPhone 15 Pro Max',
      price: 1899,
      quantity: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      image: "https://www.electromart.com.gh/wp-content/uploads/2024/05/3-iphone-15-pro.webp",

    },
    {
      name: 'Tecno Spark 30',
      price: 1888,
      quantity: 33,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      image: "https://www.electromart.com.gh/wp-content/uploads/2024/10/TECNO-SPARK-30-8GB128GB-KL6.png",

    },
    
  ];

}
