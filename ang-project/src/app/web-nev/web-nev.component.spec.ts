import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNevComponent } from './web-nev.component';

describe('WebNevComponent', () => {
  let component: WebNevComponent;
  let fixture: ComponentFixture<WebNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebNevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
