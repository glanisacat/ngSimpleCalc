import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mycalculator';
  toShow = '0';
  currentValue = '';

  writeToInput(value: string) {
    this.currentValue = this.currentValue + value;
    this.toShow = this.currentValue;
  }

  equals() {
    this.toShow = eval(this.currentValue);
    this.currentValue = this.toShow;
  }

  clear() {
    this.currentValue = '';
    this.toShow = this.currentValue;
  }

  back() {
    this.currentValue = this.currentValue.slice(0, -1);
    this.toShow = this.currentValue;
    if (this.toShow == '') {
      this.toShow = '0';
    }
  }

  calcValue(solve: any) {
    if (solve.charAt(0) == '0') {
      solve = solve.slice(1);
    }
    this.currentValue = this.toShow;
    this.toShow = eval(solve);
  }
}
