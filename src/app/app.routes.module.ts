import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { NewRoutineComponent } from './workout/new-routine/new-routine.component';
import { EditRoutineComponent } from './workout/edit-routine/edit-routine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  { path: 'workout', component: NewRoutineComponent },
  { path: 'workout/:id', component: EditRoutineComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
