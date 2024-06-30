import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CompanyBackService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  signup(formData: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/companies/signup`, formData);
  }

  login(companyEmail: string, companyPassword: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/companies/login`, { companyEmail, companyPassword }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.cookieService.get('token')}`
      })
    });
  }

  sendMail(companyEmail: string): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/companies/sendMail`, { companyEmail }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  resetPassword(token: string, newPassword: string, confirmPassword: string): Observable<any> {
    const url = `${environment.baseUrl}/companies/resetPassword?token=${token}`;
    return this.httpClient.post(url, { newPassword, confirmPassword }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError((error) => this.handleError(error))
    );
  }
  
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `An error occurred: ${error.message}`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
    return throwError(error);
  }
  

  setTokenInCookie(token: string) {
    this.cookieService.set('token', token);
  }

  removeTokenFromCookie() {
    this.cookieService.delete('token');
  }
}
