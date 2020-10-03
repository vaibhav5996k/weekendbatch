import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databinding';
  brd = '1px solid yellow';
  fntwt = '500';
  counter = 0;

  clk(btn: number) {
    if (btn == 1) {
      this.fntwt += 250;
    } else {
      this.fntwt += 250;
    }
  }

  dblclick() {
    return this.counter++;
  }

  drag() {
    return this.counter++;
  }

  dragover() {
    return this.counter++;
  }

  mousedown() {
    return this.counter++;
  }

  mouseup() {
    return this.counter++;
  }

  mouseenter() {
    return this.counter++;
  }

  mouseleave() {
    return this.counter++;
  }

  mouseover() {
    return this.counter++;
  }
}
