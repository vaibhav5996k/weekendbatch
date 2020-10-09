import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboardhw';
  clickvalue: string;

  onClick(clickval: string) {
    console.log(`click value called`);
    this.clickvalue = clickval;
  }
}
