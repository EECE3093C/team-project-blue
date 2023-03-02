import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{ path: '', component: HomepageComponent }, {path: 'contact', component: ContactPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
