import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-comp',
  templateUrl: './left-comp.component.html',
  styleUrls: ['./left-comp.component.css'],
})
export class LeftCompComponent implements OnInit {
  // clkvalue: string;
  // outvalue: string;
  @Output('clickvalue')
  clickValue: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clk(btn: number) {
    if (btn == 1) {
      this.clickValue.emit('dasbooard');
    } else if (btn == 2) {
      this.clickValue.emit('Orders');
    } else if (btn == 3) {
      this.clickValue.emit('Products');
    } else if (btn == 4) {
      this.clickValue.emit('Customers');
    } else if (btn == 5) {
      this.clickValue.emit('Reports');
    } else {
      this.clickValue.emit('Integrations');
    }
  }
}
