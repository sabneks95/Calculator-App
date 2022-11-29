import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CalculatorApp';
  input1: number = 0;
  input2: number = 0;
  result: number = 0;

  add() {
    this.result = this.input1 + this.input2;
  }

  sub() {
    this.result = this.input1 - this.input2;
  }

  mul() {
    this.result = this.input1 * this.input2;
  }

  divide() {
    this.result = this.input1 / this.input2;
  }
}
