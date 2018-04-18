import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module.';
import { WorkoutModule } from './workout/workout.module';
import { SignInModule } from './signin/signin.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {environment } from './../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    BrowserModule,
    SharedModule,
    SignInModule,
    WorkoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const http = httpLink.create({ uri: environment.graphQL });
    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers: new HttpHeaders().set('Authorization', 'Bearer:' + localStorage.getItem('token') || null)
      });

      return forward(operation);
    });

    apollo.create({
      link: concat(authMiddleware, http),
      cache:  new InMemoryCache()
    });


  }
}
