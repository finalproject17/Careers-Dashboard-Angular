import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyBackService } from '../../services/company-back.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'] // Corrected property name
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private companyBackService: CompanyBackService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  navigateToSignIn() {
    this.router.navigate(['/pass']);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { companyEmail, companyPassword } = this.registerForm.value;
      console.log({ companyEmail, companyPassword });

      this.companyBackService.login(companyEmail, companyPassword).subscribe({
        next: (response) => {
          if (response.token) {
            Swal.fire({
              title: 'Success',
              text: 'Login successful',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/dashboard']); 
            });
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          let errorMessage = 'An unexpected error occurred';
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          } else if (error.status === 401) {
            errorMessage = 'Invalid email or password';
          }
          Swal.fire({
            title: 'Error',
            text: 'Login failed: ' + errorMessage,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    }
  }
}
