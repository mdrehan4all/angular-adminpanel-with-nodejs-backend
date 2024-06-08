import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', canActivate:[authGuard], component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', canActivate:[authGuard], component: ContactComponent},
  {path: 'about', canActivate:[authGuard], component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'  // Scroll to top on every navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
