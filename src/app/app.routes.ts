import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/pages/home/home.component';
import { SearchComponent } from './Feature/pages/search/search.component';
import { LoginComponent } from './Feature/pages/login/login.component';
import { SignupComponent } from './Feature/pages/signup/signup.component';
import { LoginPhoneComponent } from './Feature/pages/login-phone/login-phone.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-phone', component: LoginPhoneComponent },
];
