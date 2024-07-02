import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class JobsApiService {
  constructor(private httpclient: HttpClient) {}

  getAllJobs(): Observable<any> {
    return this.httpclient.get<any>(`${environment.baseUrl}/jobs/get`);
  }
   getJobsByCompanyId(id:string): Observable<any>{
    return this.httpclient.get<any>(`${environment.baseUrl}/jobs/getJobsByCompanyId/${id}`)

   }
 
  deleteJob(id: string): Observable<any> {
    return this.httpclient.delete<any>(
      `${environment.baseUrl}/jobs/delete/${id}`
    );
  }

  postJob(job: any): Observable<any> {
    return this.httpclient.post<any>(`${environment.baseUrl}/jobs/create`, job);
  }
 // getJobsByCompanyName(companyName: string): Observable<any> {
  //   return this.httpclient.get<any>(
  //     `${environment.baseUrl}/jobs/getCompany?=${companyName}`
  //   );
  // }

  // getJobsByCompanyName(companyName: string): Observable<any> {
  //   return this.httpclient.get<any>(
  //     `${environment.baseUrl}/jobs/getCompany/${companyName}`
  //   );
  // }

  updateJob() {}
}
