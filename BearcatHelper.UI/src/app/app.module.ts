import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserAuthContainerComponent } from './user-auth-container/user-auth-container.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomepageComponent, LoginFormComponent, SignupFormComponent, UserAuthContainerComponent, ErrorNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
