import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseModule } from './exercise/exercise.module';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeIconDirective } from './font-awesome-icon/font-awesome-icon.directive';
import { FontAwesomeService } from './font-awesome-icon/font-awesome.service';


@NgModule({
  imports: [
    CommonModule,
    ExerciseModule
  ],
  providers: [FontAwesomeService],
  declarations: [HeaderComponent, FontAwesomeIconDirective],
  exports: [HeaderComponent, FontAwesomeIconDirective, ExerciseModule]
})
export class SharedModule { }
