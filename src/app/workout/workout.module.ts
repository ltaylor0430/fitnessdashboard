import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoutineComponent } from './new-routine/new-routine.component';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewRoutineComponent, EditRoutineComponent]
})
export class WorkoutModule { }
