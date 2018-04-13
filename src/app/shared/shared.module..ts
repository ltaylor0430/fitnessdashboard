import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseModule } from './exercise/exercise.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    ExerciseModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent, ExerciseModule]
})
export class SharedModule { }
