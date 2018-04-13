import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDirectionsComponent } from './exercise-directions.component';

describe('ExerciseDirectionsComponent', () => {
  let component: ExerciseDirectionsComponent;
  let fixture: ComponentFixture<ExerciseDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
