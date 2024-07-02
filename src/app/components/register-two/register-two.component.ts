import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CompanyBackService } from '../../services/company-back.service';
import { RegistrationDataServiceService } from '../../services/registration-data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class RegisterTwoComponent implements OnInit {
  registerForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private companyBackService: CompanyBackService,
    private registrationDataService: RegistrationDataServiceService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      companyIndustry: ['', Validators.required],
      companySize: [''],
      foundedYear: ['', Validators.required],
      companyName: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const firstStepData = this.registrationDataService.getFirstStepData(); 
    if (firstStepData) {
     
      this.registerForm.patchValue(firstStepData);
    }
  }

  validateForm() {
    for (const key in this.registerForm.controls) {
      if (this.registerForm.controls.hasOwnProperty(key)) {
        const control = this.registerForm.controls[key];
        console.log(`Field ${key} is valid: ${control.valid}`);
        if (!control.valid) {
          console.log(`Field ${key} errors:`, control.errors);
        }
      }
    }
  }
  navigateToSignIn() {
    this.router.navigate(['/sign']);
  }

  createAccount() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const combinedData = { ...this.registrationDataService.getFirstStepData(), ...this.registerForm.value };
      console.log('Form Data:', combinedData);

      this.companyBackService.signup(combinedData).subscribe(
        response => {
          console.log('Response:', response);
          Swal.fire({
            icon: 'success',
            title: 'Account Created!',
            text: 'Your account has been successfully created.',
            confirmButtonText: 'OK'
          });

          this.registrationDataService.resetData(); 
          this.registerForm.reset();
        },
        error => {
          console.error('Error creating account:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error.message || 'There was an error creating the account.'
          });
        }
      );
    } else {
      this.validateForm();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields.'
      });
    }
  }
  // markFormGroupTouched(formGroup: FormGroup) {
  //   Object.values(formGroup.controls).forEach(control => {
  //     control.markAsTouched();

  //     if (control instanceof FormGroup) {
  //       this.markFormGroupTouched(control);
  //     }
  //   });
  // }
}
