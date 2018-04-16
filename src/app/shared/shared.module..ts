import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseModule } from './exercise/exercise.module';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeIconDirective } from './font-awesom-icon/font-awesome-icon.directive';


@NgModule({
  imports: [
    CommonModule,
    ExerciseModule
  ],
  declarations: [HeaderComponent, FontAwesomeIconDirective],
  exports: [HeaderComponent, FontAwesomeIconDirective, ExerciseModule]
})
export class SharedModule { }
