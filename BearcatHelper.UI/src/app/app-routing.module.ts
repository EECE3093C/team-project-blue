import { UserAuthContainerComponent } from './user-auth-container/user-auth-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'BearcatHelper',
  },
  {
    path: 'login',
    component: UserAuthContainerComponent,
    title: 'Login | BearcatHelper',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
