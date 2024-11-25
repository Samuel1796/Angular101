import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalcComponent,
    FormsComponent,
    ReactiveFormsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

//   // This hook runs when a component is initialised
//   // Second to constructor
//   ngOnInit(){
//     this.display_name("Net", "Ninja");
//    }

//   // this hook runs after everything in the component is rendered
//   ngAfterViewInit(){}

//   title = 'Angular101';

//   num1: number = 80;
//   string1: string = 'Kofi';
//   testbool: boolean = true;
//   testArray: (string | number)[] = ['aa', 'bb', 'cc', 7, 6, 8];
//   testArray2: any = ['kofi', 8, true, [true, 8, 'Yes']];

//   Samuel:User = {
//     nameOfSong: 'Heat Waves',
//     artist: 'Glass Animals',
//     rating: 5,
//   }

//   Sam:Movie ={
//     title: "The Originals",
//     genre: "Action",
//     origin: "USA"
//   }

// arrayOfProducts: Product[] = [
//   {
//     name: "Wireless Headphones",
//     price: 199.99,
//     description: "High-quality noise cancelling bluetooth headphones",
//     category: "Electronics",
//     image: "..."
// },
// {
//     name: "Exercise Mat",
//     price: 29.99,
//     description: "Premium non-slip exercise mat",
//     category: "Fitness",
//     image: "....."
// },
// ]


// car(name: string, price: number):string {
//   return "";
// }
  
// a: number = 10;
// b: number = 20;
// sum !: number;

// // sample_function():void{
// //   this.sum = this.a + this.b;
// // }

// add_two_numbers(num1: string, num2: string){

//   this.sum = Number(num1) + Number(num2);
// }

// display_name(first_name: string, second_name: string,) {
//   console.log(first_name + " " + second_name);
// }
}
