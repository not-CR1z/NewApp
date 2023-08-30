import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnswersComponent } from './update-answers.component';

describe('UpdateAnswersComponent', () => {
  let component: UpdateAnswersComponent;
  let fixture: ComponentFixture<UpdateAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAnswersComponent]
    });
    fixture = TestBed.createComponent(UpdateAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
