import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  expression: string = '';
  answer: any = 0;

  on_number_button_click(value: number | string) {
    this.expression += value.toString();
  }

  on_operator_button_click(value: string) {
    this.expression += value;
  }

  on_clear_button_click() {
    this.expression = '';
    this.answer = 0;
  }

  on_equal_button_click() {
    try {
      this.answer = eval(this.expression);
    } catch (error) {
      this.answer = 'Error';
    }
  }
}