import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadAnswerComponent } from './dialog-load-answer.component';

describe('DialogLoadAnswerComponent', () => {
  let component: DialogLoadAnswerComponent;
  let fixture: ComponentFixture<DialogLoadAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLoadAnswerComponent]
    });
    fixture = TestBed.createComponent(DialogLoadAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
