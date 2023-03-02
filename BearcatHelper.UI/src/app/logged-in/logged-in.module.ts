import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppLoginComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LoggedInModule { }
