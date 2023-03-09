import { UserAuthContainerComponent } from './user-auth-container/user-auth-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { AppLoginComponent } from './logged-in/app-login/app-login.component';
import { MenuComponent } from './logged-in/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'BearcatHelper',
  },
  {
    path: 'auth',
    component: UserAuthContainerComponent,
    title: 'Auth | BearcatHelper',
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'About | BearcatHelper',
  },
  {
    path: 'menu',
    component: AppLoginComponent,
    children:[
      {path: '', component: MenuComponent, title: 'Menu | BearcatHelper',}
    ]
  },
  { path: 'about', component: AboutPageComponent, title: 'About | BearcatHelper'},
  // This is the 404 error page and should always remain as the last entry.
  {
    path: '**',
    component: ErrorNotFoundComponent,
    title: '404 | BearcatHelper',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
