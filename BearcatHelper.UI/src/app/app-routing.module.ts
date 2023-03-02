import { UserAuthContainerComponent } from './user-auth-container/user-auth-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

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
