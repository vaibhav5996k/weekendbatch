import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'],
})
export class Cmp2Component implements OnInit {
  progress: number;
  ccheck: number;

  @Output('profileprogress')
  profileProgress: EventEmitter<number> = new EventEmitter();

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

    if (this.biodata.nativeElement.checked == true) {
      if (this.demograpic.nativeElement.checked == true) {
        if (this.educational.nativeElement.checked == true) {
          if (this.joborbusiness.nativeElement.checked == true) {
            this.ccheck = 100;
          } else {
            this.ccheck = 75;
          }
        } else if (this.joborbusiness.nativeElement.checked == true) {
          this.ccheck = 75;
        } else {
          this.ccheck = 50;
        }
      } else if (this.educational.nativeElement.checked == true) {
        if (this.joborbusiness.nativeElement.checked == true) {
          this.ccheck = 75;
        } else {
          this.ccheck = 50;
        }
      } else if (this.joborbusiness.nativeElement.checked == true) {
        this.ccheck = 50;
      } else {
        this.ccheck = 25;
      }
    } else if (this.demograpic.nativeElement.checked == true) {
      if (this.educational.nativeElement.checked == true) {
        if (this.joborbusiness.nativeElement.checked == true) {
          this.ccheck = 75;
        } else {
          this.ccheck = 50;
        }
      } else if (this.joborbusiness.nativeElement.checked == true) {
        this.ccheck = 50;
      } else {
        this.ccheck = 25;
      }
    } else if (this.educational.nativeElement.checked == true) {
      if (this.joborbusiness.nativeElement.checked == true) {
        this.ccheck = 50;
      } else {
        this.ccheck = 25;
      }
    } else if (this.joborbusiness.nativeElement.checked == true) {
      this.ccheck = 25;
    } else {
      this.ccheck = 0;
    }

    this.progress = this.ccheck;
    console.log(this.progress);
    this.profileProgress.emit(this.progress);
  }
}
