import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCompComponent } from './left-comp.component';

describe('LeftCompComponent', () => {
  let component: LeftCompComponent;
  let fixture: ComponentFixture<LeftCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
