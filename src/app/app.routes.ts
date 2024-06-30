import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisterTwoComponent } from './components/register-two/register-two.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { PasswordComponent } from './components/password/password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  // { path: '', redirectTo: '/register', pathMatch: 'full' } , 
  { path: 'two', component: RegisterTwoComponent },
  { path: 'sign', component: SignInComponent },
  { path: 'pass', component: PasswordComponent },
  { path: 'rest', component: ResetPasswordComponent }

];
