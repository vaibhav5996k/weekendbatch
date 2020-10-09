import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-comp',
  templateUrl: './left-comp.component.html',
  styleUrls: ['./left-comp.component.css'],
})
export class LeftCompComponent implements OnInit {
  clkvalue: string;
  outvalue: string;
  @Output('clickvalue')
  clickValue: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clk(btn: number) {
    if (btn == 1) {
      this.clkvalue = 'Dashboard';
    } else if (btn == 2) {
      this.clkvalue = 'Orders';
    } else if (btn == 3) {
      this.clkvalue = 'Products';
    } else if (btn == 4) {
      this.clkvalue = 'Customers';
    } else if (btn == 5) {
      this.clkvalue = 'Reports';
    } else {
      this.clkvalue = 'Integrations';
    }

    this.outvalue = this.clkvalue;
    console.log(this.outvalue);
    this.clickValue.emit(this.outvalue);
  }
}
