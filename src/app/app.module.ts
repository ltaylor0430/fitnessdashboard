import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module.';
import { WorkoutModule } from './workout/workout.module';
import { SignInModule } from './signin/signin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SignInModule,
    WorkoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
