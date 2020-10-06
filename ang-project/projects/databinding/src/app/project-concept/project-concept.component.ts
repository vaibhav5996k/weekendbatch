import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-concept',
  templateUrl: './project-concept.component.html',
  styleUrls: ['./project-concept.component.css'],
})
export class ProjectConceptComponent implements OnInit {
  bkcl: string;
  constructor() {}

  ngOnInit(): void {}
  sayColor(ev: KeyboardEvent) {
    console.log(ev.target['value']);
    this.bkcl = ev.target['value'];
  }
}
