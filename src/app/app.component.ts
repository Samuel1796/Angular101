import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';
import { Movie, Product, User } from './utils/types.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstComponent,
    CalculatorComponent,
    SecondComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  // This hook runs when a component is initialised
  // Second to constructor
  ngOnInit(){ }

  // this hook runs after everything in the component is rendered
  ngAfterViewInit(){}


  title = 'Angular101';

  num1: number = 80;
  string1: string = 'Kofi';
  testbool: boolean = true;
  testArray: (string | number)[] = ['aa', 'bb', 'cc', 7, 6, 8];
  testArray2: any = ['kofi', 8, true, [true, 8, 'Yes']];

  Samuel:User = {
    nameOfSong: 'Heat Waves',
    artist: 'Glass Animals',
    rating: 5,
  }

  Sam:Movie ={
    title: "The Originals",
    genre: "Action",
    origin: "USA"
  }

arrayOfProducts: Product[] = [
  {
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality noise cancelling bluetooth headphones",
    category: "Electronics",
    image: "..."
},
{
    name: "Exercise Mat",
    price: 29.99,
    description: "Premium non-slip exercise mat",
    category: "Fitness",
    image: "....."
},
]


car(name: string, price: number):string {
  return "";
}
  
a: number = 10;
b: number = 20;
sum !: number;

sample_function():void{
  this.sum = this.a + this.b;
}


// constructor() {
//   this.sample_function();
// }

// Life Cycle Hooks
// On initiation - 
// Destroyed - 
// After Something changes - 
}
