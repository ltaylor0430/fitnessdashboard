import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from './shared/shared.module.';
import { WorkoutModule } from './workout/workout.module';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WorkoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
