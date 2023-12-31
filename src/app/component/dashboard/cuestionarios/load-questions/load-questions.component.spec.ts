import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuestionsComponent } from './load-questions.component';

describe('LoadQuestionsComponent', () => {
  let component: LoadQuestionsComponent;
  let fixture: ComponentFixture<LoadQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadQuestionsComponent]
    });
    fixture = TestBed.createComponent(LoadQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
