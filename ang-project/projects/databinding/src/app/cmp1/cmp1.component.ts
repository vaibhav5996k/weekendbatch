import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css'],
})
export class Cmp1Component implements OnInit {
  @Input()
  progress: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
