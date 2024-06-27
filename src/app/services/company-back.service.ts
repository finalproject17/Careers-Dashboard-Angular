import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CompanyBackService {

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }


  signup(formData: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/companies/signup`, formData);
  }
  // login(email: string, password: string): Observable<any> {
  //   return this.httpClient.post<any>(`${environment.baseUrl}/login`, { email, password });
  // }
  login(companyEmail: string, companyPassword: string) {
    return this.httpClient.post<any>(`${environment.baseUrl}/companies/login`, { companyEmail, companyPassword }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.cookieService.get('token')}`
      })
    });
  }

  setTokenInCookie(token: string) {
    this.cookieService.set('token', token);
  }

  removeTokenFromCookie() {
    this.cookieService.delete('token');
  }

  
}
