import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'],
})
export class Cmp2Component implements OnInit {
  progress: number;

  @ViewChild('biodata')
  biodata: ElementRef<HTMLInputElement>;
  @ViewChild('demograpic')
  demograpic: ElementRef<HTMLInputElement>;
  @ViewChild('educational')
  educational: ElementRef<HTMLInputElement>;
  @ViewChild('joborbusiness')
  joborbusiness: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  checkChange() {
    this.calculateProgress();
  }

  private calculateProgress() {
    console.log(
      `Checked Biodata state - ${this.biodata.nativeElement.checked}`
    );
    console.log(
      `Checked Demograpic state - ${this.demograpic.nativeElement.checked}`
    );
    console.log(
      `Checked Educational state - ${this.educational.nativeElement.checked}`
    );
    console.log(
      `Checked Job or Business state - ${this.joborbusiness.nativeElement.checked}`
    );

    this.progress = 50;
  }
}
