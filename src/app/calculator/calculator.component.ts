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
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

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


  // Method 5: Add numbers from browser input
  addNumbers(): void {
    this.result = this.num1 + this.num2;
  }
}