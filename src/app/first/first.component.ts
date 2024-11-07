import { Component, Input, input, signal } from '@angular/core';
type productFormat = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
};


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
    // @Input serves as a signal that the variable is ready to accept values to this component -- a listener
    @Input() products!: productFormat;
    

    


  myName: string = 'Josh';
  isJoshABoy: boolean = true;

  constructor() {
    this.addTwoNumbers();
  }
  




  
  ShowMyName() {
    console.log(this.myName);
  }

  // A function to store two numbers
  fNumber: number = 1;
  sNumber: number = 88;
  addTwoNumbers() {
    let sum: number = this.fNumber + this.sNumber
     return sum;
  }

  multiplyTwoNumbers(num1: number, num2: number){
    return (num1 * num2)

  }
}

// Five methods that will receive inputs and should do anything you want
//  for the last method (add two numbers but should be added on the browser. take inputs from browser and display the value too on the browser)

// assignment
/// Design the card on figma and replicate it usimg figma