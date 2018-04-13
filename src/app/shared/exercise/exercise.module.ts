import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseImageComponent } from './exercise-image/exercise-image.component';
import { ExerciseDirectionsComponent } from './exercise-directions/exercise-directions.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExerciseListComponent,  ExerciseImageComponent, ExerciseDirectionsComponent],
  exports: [ExerciseListComponent,  ExerciseImageComponent, ExerciseDirectionsComponent]
})
export class ExerciseModule { }
