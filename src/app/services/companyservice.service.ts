import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/envrionment.prd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private _httpClient: HttpClient) {}

  getCompanyDetails(id: string | null): Observable<any> {
    return this._httpClient.get<any>(`${environment.baseURL}/companies/${id}`);
  }
}
