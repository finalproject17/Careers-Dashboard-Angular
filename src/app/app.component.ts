import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisterTwoComponent } from './components/register-two/register-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './components/password/password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterComponent,RegisterTwoComponent,RouterOutlet, ReactiveFormsModule,CommonModule,SignInComponent, HttpClientModule,PasswordComponent,ResetPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Careers-Angular-Dashboard';
}
