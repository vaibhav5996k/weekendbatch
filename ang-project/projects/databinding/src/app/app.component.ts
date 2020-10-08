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

  calcprog: number = 0;

  //   clk(btn: number) {
  //     if (btn == 1) {
  //       this.fntwt += 250;
  //     } else {
  //       this.fntwt += 250;
  //     }
  //     console.log(` Button Clicked `);
  //   }
  //   counter = 0;
  //   dblclick() {
  //     return this.counter++;
  //   }
  //   counter1 = 0;
  //   drag() {
  //     return this.counter++;
  //   }
  //   counter2 = 0;
  //   dragover() {
  //     return this.counter++;
  //   }
  //   counter3 = 0;
  //   mousedown() {
  //     return this.counter++;
  //   }
  //   counter4 = 0;
  //   mouseup() {
  //     return this.counter++;
  //   }
  //   counter5 = 0;
  //   mouseenter() {
  //     return this.counter++;
  //   }
  //   counter6 = 0;
  //   mouseleave() {
  //     return this.counter++;
  //   }
  //   counter7 = 0;
  //   mouseover() {
  //     return this.counter++;
  //   }

  onProgress(calPrg: number) {
    console.log(`app cmp -profile progress called`);
    this.calcprog = calPrg;
  }
}
