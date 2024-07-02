import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantDetailsService {

  constructor(private httpClient:HttpClient ) { }


  getAppliedUserById(id:string):Observable<Iuser> {
    return this.httpClient.get<Iuser>(`https://deploying-backend-taupe.vercel.app/users/${id}`);
  }
}
