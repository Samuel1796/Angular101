import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  
  
  // Properties for the browser calculator
  // ! tells typescript that i will assign a value to the variable later
  num1!: number ;
  num2!: number;
  result!: number;

  // Method 1: Calculate age from birth year
  calculateAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

  // Method 2: Convert temperature from Celsius to Fahrenheit
  celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }

  // Method 3: Calculate BMI
  calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
  }

   // Method 4: Calculate square of a number
   calculateSquare(num: number): number {
    return num * num;
  }


   // Calculator methods
   addNumbers(): void {
    this.result = this.num1 + this.num2;
  }

  subtractNumbers(): void {
    this.result = this.num1 - this.num2;
  }

  multiplyNumbers(): void {
    this.result = this.num1 * this.num2;
  }

  divideNumbers(): void {
    if (this.num2 === 0) {
      alert('Cannot divide by zero!');
      return;
    }
    this.result = this.num1 / this.num2;
  }
}